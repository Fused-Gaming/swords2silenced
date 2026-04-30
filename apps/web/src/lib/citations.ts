/**
 * Citation and Source Tracking System
 *
 * Provides type-safe citation management with MLA/APA compliance.
 * Lightweight, zero-dependency implementation for tracking claims and sources.
 */

/**
 * Citation type for classification
 */
export type CitationType = 'article' | 'legal' | 'study' | 'government' | 'other';

/**
 * Citation interface matching MLA/APA basic requirements
 */
export interface Citation {
  /** Unique identifier for the citation */
  id: string;

  /** The claim or text being cited */
  text: string;

  /** Complete source reference (author, title, publication, etc.) */
  source: string;

  /** Optional URL to the source material */
  url?: string;

  /** Optional date of publication or access (ISO 8601 format) */
  date?: string;

  /** Type of source for categorization */
  type: CitationType;

  /** Optional additional notes or context */
  notes?: string;

  /** Internal timestamp of when citation was added */
  addedAt?: string;
}

/**
 * Citation validation errors
 */
export interface ValidationError {
  field: keyof Citation;
  message: string;
}

/**
 * CitationManager - Handles CRUD operations for citations
 * Ensures data integrity and validates all entries
 */
export class CitationManager {
  private citations: Map<string, Citation>;
  private nextId: number;

  constructor(initialCitations?: Citation[]) {
    this.citations = new Map();
    this.nextId = 1;

    if (initialCitations) {
      initialCitations.forEach((citation) => {
        this.validateCitation(citation);
        this.citations.set(citation.id, citation);
        const numId = parseInt(citation.id.replace('cit-', ''), 10);
        if (numId >= this.nextId) {
          this.nextId = numId + 1;
        }
      });
    }
  }

  /**
   * Validate a citation object
   * @throws Error if validation fails
   */
  private validateCitation(citation: Citation): void {
    const errors = this.validateCitationFields(citation);

    if (errors.length > 0) {
      const errorMessages = errors.map((e) => `${e.field}: ${e.message}`).join('; ');
      throw new Error(`Citation validation failed: ${errorMessages}`);
    }
  }

  /**
   * Check citation fields and return validation errors (non-throwing)
   */
  public validateCitationFields(citation: Citation): ValidationError[] {
    const errors: ValidationError[] = [];

    // Required fields
    if (!citation.id || citation.id.trim().length === 0) {
      errors.push({ field: 'id', message: 'ID is required' });
    }

    if (!citation.text || citation.text.trim().length === 0) {
      errors.push({ field: 'text', message: 'Citation text is required' });
    }

    if (!citation.source || citation.source.trim().length === 0) {
      errors.push({ field: 'source', message: 'Source is required' });
    }

    if (!citation.type || !['article', 'legal', 'study', 'government', 'other'].includes(citation.type)) {
      errors.push({ field: 'type', message: 'Valid type is required (article|legal|study|government|other)' });
    }

    // Validate URL if provided
    if (citation.url && citation.url.trim().length > 0) {
      if (!this.isValidUrl(citation.url)) {
        errors.push({ field: 'url', message: 'URL is not valid' });
      }
    }

    // Validate date if provided
    if (citation.date && citation.date.trim().length > 0) {
      if (!this.isValidIsoDate(citation.date)) {
        errors.push({ field: 'date', message: 'Date must be in ISO 8601 format (YYYY-MM-DD or YYYY-MM-DDTHH:MM:SSZ)' });
      }
    }

    return errors;
  }

  /**
   * Validate URL format
   */
  private isValidUrl(urlString: string): boolean {
    try {
      new URL(urlString);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validate ISO 8601 date format
   */
  private isValidIsoDate(dateString: string): boolean {
    const isoRegex = /^(\d{4}-\d{2}-\d{2})(T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:\d{2}))?$/;
    if (!isoRegex.test(dateString)) {
      return false;
    }

    const date = new Date(dateString);
    return !Number.isNaN(date.getTime());
  }

  /**
   * Add a new citation
   * @returns The added citation with assigned ID if not provided
   */
  public addCitation(citation: Omit<Citation, 'id' | 'addedAt'> & { id?: string }): Citation {
    const id = citation.id || `cit-${this.nextId++}`;
    const now = new Date().toISOString();

    const fullCitation: Citation = {
      ...citation,
      id,
      addedAt: now,
    };

    this.validateCitation(fullCitation);
    this.citations.set(id, fullCitation);

    return fullCitation;
  }

  /**
   * Get citation by ID
   */
  public getCitation(id: string): Citation | undefined {
    return this.citations.get(id);
  }

  /**
   * Get all citations
   */
  public getAllCitations(): Citation[] {
    return Array.from(this.citations.values());
  }

  /**
   * Get citations by type
   */
  public getCitationsByType(type: CitationType): Citation[] {
    return Array.from(this.citations.values()).filter((cit) => cit.type === type);
  }

  /**
   * Search citations by text or source
   */
  public searchCitations(query: string): Citation[] {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.citations.values()).filter((cit) =>
      cit.text.toLowerCase().includes(lowerQuery) ||
      cit.source.toLowerCase().includes(lowerQuery)
    );
  }

  /**
   * Update an existing citation
   */
  public updateCitation(id: string, updates: Partial<Omit<Citation, 'id' | 'addedAt'>>): Citation {
    const existing = this.citations.get(id);
    if (!existing) {
      throw new Error(`Citation with id "${id}" not found`);
    }

    const updated: Citation = {
      ...existing,
      ...updates,
      id,
      addedAt: existing.addedAt,
    };

    this.validateCitation(updated);
    this.citations.set(id, updated);

    return updated;
  }

  /**
   * Remove a citation by ID
   */
  public removeCitation(id: string): boolean {
    return this.citations.delete(id);
  }

  /**
   * Get citation count
   */
  public getCount(): number {
    return this.citations.size;
  }

  /**
   * Format citation as MLA style (basic)
   * Format: Author. "Title." Source, Year.
   */
  public formatAsMLA(citation: Citation): string {
    const dateStr = citation.date
      ? new Date(citation.date).getFullYear().toString()
      : 'n.d.';

    return `${citation.source}, ${dateStr}.`;
  }

  /**
   * Format citation as APA style (basic)
   * Format: Author (Year). Source.
   */
  public formatAsAPA(citation: Citation): string {
    const dateStr = citation.date
      ? new Date(citation.date).getFullYear().toString()
      : 'n.d.';

    return `${citation.source} (${dateStr}).`;
  }

  /**
   * Export citations as JSON
   */
  public toJSON(): Citation[] {
    return this.getAllCitations();
  }

  /**
   * Get summary statistics
   */
  public getStatistics() {
    const citations = this.getAllCitations();
    const typeCount: Record<CitationType, number> = {
      article: 0,
      legal: 0,
      study: 0,
      government: 0,
      other: 0,
    };

    citations.forEach((cit) => {
      typeCount[cit.type]++;
    });

    return {
      total: citations.length,
      typeCount,
      hasUrls: citations.filter((c) => c.url).length,
      hasDates: citations.filter((c) => c.date).length,
    };
  }
}

/**
 * Global citation manager instance (singleton pattern)
 * Use this as the single source of truth for citations throughout the app
 */
let globalCitationManager: CitationManager | null = null;

/**
 * Get or create the global citation manager
 */
export function getGlobalCitationManager(initialCitations?: Citation[]): CitationManager {
  if (!globalCitationManager) {
    globalCitationManager = new CitationManager(initialCitations);
  }
  return globalCitationManager;
}

/**
 * Reset the global citation manager (useful for testing)
 */
export function resetGlobalCitationManager(): void {
  globalCitationManager = null;
}
