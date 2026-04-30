# Citation and Source Tracking System

A lightweight, TypeScript-based citation management system for tracking claims, sources, and references across the Swords2Silenced application.

## Overview

The citation system provides:

- **Type-safe citation tracking** with TypeScript interfaces
- **MLA/APA basic compliance** for citation formatting
- **Component-level integration** via React hooks
- **Automatic validation** of URLs, dates, and required fields
- **Global citation management** with singleton pattern
- **Zero external dependencies** for lightweight bundle

## Architecture

### Core Components

#### 1. `citations.ts` - Core Library

**CitationManager Class**
- Manages CRUD operations for citations
- Validates all entries for data integrity
- Provides formatting (MLA/APA)
- Supports search and filtering

**Global Citation Manager**
- Singleton instance accessible throughout the app
- Provides consistency across components
- Can be reset for testing

#### 2. `CitationBadge.tsx` - React Component

Displays citations inline with:
- Superscript numbered references
- Hover tooltips showing full citation details
- Keyboard accessibility
- Links to source URLs
- Responsive design
- Light/dark mode support

#### 3. `useSourceTracking.ts` - React Hook

Provides component-level source tracking:
- Track claims within components
- Register citations
- Validate sources
- Manage claim-to-citation links
- Generate validation errors

#### 4. `citations.json` - Data Store

JSON structure for persisting citations:
```json
{
  "citations": [...],
  "metadata": {
    "version": "1.0.0",
    "lastUpdated": "2024-01-01T00:00:00Z",
    "totalCitations": 0
  }
}
```

## Usage Guide

### Basic Citation Management

```typescript
import { CitationManager } from '@/lib/citations';

// Create a manager (or use global instance)
const manager = new CitationManager();

// Add a citation
const citation = manager.addCitation({
  text: 'The claim being made',
  source: 'Author, Title, Publication',
  url: 'https://example.com',
  date: '2024-01-15',
  type: 'study',
  notes: 'Optional notes about this source'
});

// Get citations
const all = manager.getAllCitations();
const byType = manager.getCitationsByType('study');
const search = manager.searchCitations('keyword');

// Format for display
const mla = manager.formatAsMLA(citation);
const apa = manager.formatAsAPA(citation);
```

### Using the Global Citation Manager

```typescript
import { getGlobalCitationManager } from '@/lib/citations';

// Get the global instance (creates if needed)
const manager = getGlobalCitationManager();

// Use like any CitationManager instance
manager.addCitation({...});
```

### Component Usage with Hook

```typescript
import { useSourceTracking } from '@/hooks';
import CitationBadge from '@/components/atoms/CitationBadge';

export function ThesisSection() {
  const { trackClaim, addCitation, linkClaimToCitation, validateSources } =
    useSourceTracking({ 
      componentName: 'ThesisSection',
      strict: true,
      onValidationError: (errors) => console.warn(errors)
    });

  // Add a citation
  const citation = addCitation({
    text: 'Some critical claim',
    source: 'Smith, J. (2023). The Impact of Silence.',
    url: 'https://example.com/paper',
    type: 'study',
    date: '2023-06-15'
  });

  // Track claims
  const claim = trackClaim({
    text: 'This is a factual statement',
    citationId: citation.id
  });

  // Validate all claims have sources
  const isValid = validateSources();

  return (
    <div>
      <p>
        This is a factual statement.
        <CitationBadge
          citation={citation}
          number={1}
          onCitationClick={(cit) => console.log('Clicked:', cit)}
        />
      </p>
    </div>
  );
}
```

### Citation Display

```typescript
import CitationBadge from '@/components/atoms/CitationBadge';
import type { Citation } from '@/lib/citations';

const citation: Citation = {
  id: 'cit-1',
  text: 'Transparency increases accountability',
  source: 'Jones, M. (2023). Open Government Today.',
  url: 'https://example.com',
  date: '2023-06-15',
  type: 'study'
};

export function MyComponent() {
  return (
    <p>
      Transparency increases accountability.
      <CitationBadge citation={citation} number={1} />
    </p>
  );
}
```

## Citation Types

```typescript
type CitationType = 'article' | 'legal' | 'study' | 'government' | 'other';
```

- **article**: News articles, blog posts, publications
- **legal**: Legal documents, statutes, court decisions
- **study**: Academic research, scientific papers
- **government**: Government reports, official statements
- **other**: Miscellaneous sources

## Citation Interface

```typescript
interface Citation {
  // Unique identifier (auto-generated or custom)
  id: string;

  // The claim or text being cited
  text: string;

  // Complete source reference (author, title, publication)
  source: string;

  // Optional URL to the source
  url?: string;

  // Optional publication date (ISO 8601: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SSZ)
  date?: string;

  // Classification of source type
  type: CitationType;

  // Optional additional notes
  notes?: string;

  // Timestamp when added (auto-generated)
  addedAt?: string;
}
```

## Validation

The system automatically validates:

- **Required fields**: id, text, source, type
- **URL format**: Valid HTTP/HTTPS URLs
- **Date format**: ISO 8601 dates
- **Citation types**: Valid category assignment

Validation errors are collected and returned without throwing:

```typescript
const errors = manager.validateCitationFields(citation);
if (errors.length > 0) {
  errors.forEach(err => {
    console.warn(`${err.field}: ${err.message}`);
  });
}
```

## Hook API

### `useSourceTracking(options?)`

```typescript
interface TrackingOptions {
  componentName?: string;      // For debugging (default: 'Unknown')
  strict?: boolean;            // Validate all claims have sources
  onValidationError?: (errors) => void;
  onCitationsUpdated?: (citations) => void;
}
```

**Returns:**

```typescript
{
  trackClaim(claim): SourcedClaim;
  addCitation(citation): Citation;
  getCitation(id): Citation | undefined;
  getComponentCitations(): Citation[];
  getTrackedClaims(): SourcedClaim[];
  linkClaimToCitation(claimId, citationId): void;
  unlinkClaim(claimId): void;
  validateSources(): boolean;
  getValidationErrors(): SourceValidationError[];
  clear(): void;
}
```

## CitationBadge Component Props

```typescript
interface CitationBadgeProps {
  // Citation object
  citation: Citation;

  // Display number (e.g., 1, 2, 3)
  number: number;

  // CSS class name
  className?: string;

  // Callback on click
  onCitationClick?: (citation: Citation) => void;

  // Show full citation text in tooltip (default: true)
  showFullText?: boolean;
}
```

## Styling and Design Tokens

The CitationBadge component uses design tokens from `tokens.css`:

- **Colors**: `--color-info`, `--color-red-alert`, type-specific colors
- **Typography**: `--type-body-small`, `--type-caption`
- **Spacing**: `--space-md`, `--space-sm`, etc.
- **Shadows**: `--shadow-lg` for tooltip depth
- **Transitions**: `--transition-normal` for smooth interactions
- **Z-index**: `--z-tooltip` for overlay layering

## Accessibility Features

- Keyboard navigation (Enter, Space, Escape)
- ARIA labels and descriptions
- Focus outlines
- Tooltips with role="tooltip"
- High contrast mode support
- Reduced motion support
- Semantic HTML

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support
- CSS Custom Properties (variables)
- ES2020+ JavaScript

## Best Practices

1. **Always use a citation for claims**: Don't make unverified statements
2. **Keep sources current**: Periodically verify URLs are still active
3. **Use appropriate types**: Choose the most specific source type
4. **Include dates**: When possible, include publication dates
5. **Validate before publish**: Use `validateSources()` in strict mode
6. **Test links**: Periodically check that URLs are accessible

## Formatting Guidelines

### MLA Style (Basic)
```
Source, Year.
```
Example: "Smith, J. (2023). The Impact of Silence, 2023."

### APA Style (Basic)
```
Source (Year).
```
Example: "Smith, J. (2023). The Impact of Silence (2023)."

## Testing

```typescript
import { CitationManager, resetGlobalCitationManager } from '@/lib/citations';

describe('CitationManager', () => {
  beforeEach(() => {
    resetGlobalCitationManager();
  });

  it('should add and retrieve citations', () => {
    const manager = new CitationManager();
    const citation = manager.addCitation({
      text: 'Test claim',
      source: 'Test Source',
      type: 'study'
    });

    expect(manager.getCitation(citation.id)).toBeDefined();
  });

  it('should validate citations', () => {
    const manager = new CitationManager();
    const errors = manager.validateCitationFields({
      id: 'test',
      text: '',
      source: 'Valid',
      type: 'study'
    });

    expect(errors.length).toBeGreaterThan(0);
  });
});
```

## Performance Considerations

- Citation lookups: O(1) using Map
- Search operations: O(n) linear scan
- Memory: Proportional to citation count
- No database queries (all in-memory)

## Future Enhancements

- [ ] Citation export (PDF, BibTeX)
- [ ] Integration with citation APIs (Crossref, DOI)
- [ ] Batch import/export
- [ ] Citation analytics
- [ ] Automatic formatting detection
- [ ] Duplicate detection
- [ ] Citation recommendations
- [ ] Multi-language support

## Troubleshooting

**Citations not appearing?**
- Check that citation IDs match between claims and citations
- Verify `CitationBadge` is properly imported
- Check browser console for validation errors

**Validation errors?**
- Ensure all required fields are provided
- Validate URL format (must be valid HTTP/HTTPS)
- Check date format (ISO 8601)
- Verify citation type is valid

**Hook not working?**
- Ensure hook is called within a React component
- Check that citations are added before linking
- Verify component name is unique for debugging

## Related Files

- `/data/citations.json` - Citation data store
- `/lib/citations.ts` - Core citation system
- `/components/atoms/CitationBadge.tsx` - Display component
- `/components/atoms/CitationBadge.module.css` - Styles
- `/hooks/useSourceTracking.ts` - React hook
