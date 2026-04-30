/**
 * useSourceTracking Hook
 *
 * Provides component-level source/citation tracking with:
 * - Automatic citation registration
 * - Claim validation
 * - Citation state management
 * - Error handling for missing sources
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Citation, CitationType } from '../lib/citations';
import { getGlobalCitationManager } from '../lib/citations';

/**
 * Source tracking options
 */
interface TrackingOptions {
  /** Component name for debugging */
  componentName?: string;

  /** Whether to validate all claims have sources (strict mode) */
  strict?: boolean;

  /** Callback when validation errors occur */
  onValidationError?: (errors: SourceValidationError[]) => void;

  /** Callback when citations are updated */
  onCitationsUpdated?: (citations: Citation[]) => void;
}

/**
 * Represents a claim to be cited
 */
export interface SourcedClaim {
  /** Unique identifier for this claim within the component */
  claimId: string;

  /** The actual claim/text being made */
  text: string;

  /** Citation ID if this claim has a source */
  citationId?: string;
}

/**
 * Validation error for a claim without source
 */
export interface SourceValidationError {
  claimId: string;
  text: string;
  message: string;
}

/**
 * Hook return type
 */
export interface UseSourceTrackingReturn {
  /** Register a new claim and optionally link to citation */
  trackClaim: (claim: Omit<SourcedClaim, 'claimId'> & { claimId?: string }) => SourcedClaim;

  /** Add a citation to the global manager */
  addCitation: (
    citation: Omit<Citation, 'id' | 'addedAt'> & { id?: string }
  ) => Citation;

  /** Get a citation by ID */
  getCitation: (id: string) => Citation | undefined;

  /** Get all citations in component */
  getComponentCitations: () => Citation[];

  /** Get all tracked claims */
  getTrackedClaims: () => SourcedClaim[];

  /** Link a claim to a citation */
  linkClaimToCitation: (claimId: string, citationId: string) => void;

  /** Unlink a claim from its citation */
  unlinkClaim: (claimId: string) => void;

  /** Validate all claims have sources */
  validateSources: () => boolean;

  /** Get validation errors */
  getValidationErrors: () => SourceValidationError[];

  /** Clear all tracked claims (useful for cleanup) */
  clear: () => void;
}

/**
 * useSourceTracking Hook
 *
 * Tracks claims and citations within a component.
 * Integrates with the global CitationManager for consistency.
 *
 * @example
 * ```tsx
 * const { trackClaim, addCitation } = useSourceTracking({ componentName: 'ThesisSection' });
 *
 * const citationId = addCitation({
 *   text: 'Some claim',
 *   source: 'Author (2024)',
 *   type: 'study',
 *   url: 'https://example.com'
 * }).id;
 *
 * const claim = trackClaim({
 *   text: 'This is my claim',
 *   citationId
 * });
 *
 * validateSources(); // Ensure all claims are cited
 * ```
 */
export function useSourceTracking(options: TrackingOptions = {}): UseSourceTrackingReturn {
  const { componentName = 'Unknown', strict = false, onValidationError, onCitationsUpdated } = options;

  // Track claims within this component
  const [claims, setClaims] = useState<Map<string, SourcedClaim>>(new Map());

  // Track citations added by this component
  const citationIdsRef = useRef<Set<string>>(new Set());

  // Track validation errors
  const [validationErrors, setValidationErrors] = useState<SourceValidationError[]>([]);

  // Internal counter for claim IDs
  const claimCounterRef = useRef(0);

  const citationManager = getGlobalCitationManager();

  /**
   * Generate unique claim ID
   */
  const generateClaimId = useCallback((): string => {
    claimCounterRef.current++;
    return `${componentName}-claim-${claimCounterRef.current}`;
  }, [componentName]);

  /**
   * Track a new claim
   */
  const trackClaim = useCallback(
    (input: Omit<SourcedClaim, 'claimId'> & { claimId?: string }): SourcedClaim => {
      const claimId = input.claimId || generateClaimId();

      const claim: SourcedClaim = {
        claimId,
        text: input.text,
        citationId: input.citationId,
      };

      setClaims((prev) => new Map(prev).set(claimId, claim));

      // Trigger validation if in strict mode
      if (strict) {
        setTimeout(() => validateSources(), 0);
      }

      return claim;
    },
    [strict, generateClaimId]
  );

  /**
   * Add a citation through the global manager
   */
  const addCitation = useCallback(
    (input: Omit<Citation, 'id' | 'addedAt'> & { id?: string }): Citation => {
      const citation = citationManager.addCitation(input);
      citationIdsRef.current.add(citation.id);

      // Notify of update
      onCitationsUpdated?.(getComponentCitations());

      return citation;
    },
    [citationManager, onCitationsUpdated]
  );

  /**
   * Get a citation by ID
   */
  const getCitation = useCallback(
    (id: string): Citation | undefined => {
      return citationManager.getCitation(id);
    },
    [citationManager]
  );

  /**
   * Get all citations added by this component
   */
  const getComponentCitations = useCallback((): Citation[] => {
    const result: Citation[] = [];
    citationIdsRef.current.forEach((id) => {
      const citation = citationManager.getCitation(id);
      if (citation) {
        result.push(citation);
      }
    });
    return result;
  }, [citationManager]);

  /**
   * Get all tracked claims
   */
  const getTrackedClaims = useCallback((): SourcedClaim[] => {
    return Array.from(claims.values());
  }, [claims]);

  /**
   * Link a claim to a citation
   */
  const linkClaimToCitation = useCallback((claimId: string, citationId: string): void => {
    // Verify citation exists
    if (!citationManager.getCitation(citationId)) {
      console.warn(`Citation "${citationId}" not found`);
      return;
    }

    setClaims((prev) => {
      const updated = new Map(prev);
      const claim = updated.get(claimId);
      if (claim) {
        updated.set(claimId, { ...claim, citationId });
      }
      return updated;
    });

    if (strict) {
      setTimeout(() => validateSources(), 0);
    }
  }, [citationManager, strict]);

  /**
   * Unlink a claim from its citation
   */
  const unlinkClaim = useCallback((claimId: string): void => {
    setClaims((prev) => {
      const updated = new Map(prev);
      const claim = updated.get(claimId);
      if (claim) {
        updated.set(claimId, { ...claim, citationId: undefined });
      }
      return updated;
    });

    if (strict) {
      setTimeout(() => validateSources(), 0);
    }
  }, [strict]);

  /**
   * Validate all claims have sources
   */
  const validateSources = useCallback((): boolean => {
    const errors: SourceValidationError[] = [];

    claims.forEach((claim) => {
      if (!claim.citationId) {
        errors.push({
          claimId: claim.claimId,
          text: claim.text,
          message: `Claim in ${componentName} is missing citation`,
        });
      } else {
        // Verify citation exists
        if (!citationManager.getCitation(claim.citationId)) {
          errors.push({
            claimId: claim.claimId,
            text: claim.text,
            message: `Citation "${claim.citationId}" not found for claim in ${componentName}`,
          });
        }
      }
    });

    setValidationErrors(errors);

    if (errors.length > 0) {
      onValidationError?.(errors);
    }

    return errors.length === 0;
  }, [claims, citationManager, componentName, onValidationError]);

  /**
   * Get validation errors
   */
  const getValidationErrors = useCallback((): SourceValidationError[] => {
    return validationErrors;
  }, [validationErrors]);

  /**
   * Clear all tracked claims (cleanup)
   */
  const clear = useCallback((): void => {
    setClaims(new Map());
    setValidationErrors([]);
  }, []);

  /**
   * Cleanup on unmount
   */
  useEffect(() => {
    return () => {
      // Optionally clear claims on unmount
      // This depends on whether you want to persist citations
      // For now, we keep them in the global manager
    };
  }, []);

  return {
    trackClaim,
    addCitation,
    getCitation,
    getComponentCitations,
    getTrackedClaims,
    linkClaimToCitation,
    unlinkClaim,
    validateSources,
    getValidationErrors,
    clear,
  };
}
