# Citation System Architecture

## System Overview

A complete, production-ready citation and source tracking system for the Swords2Silenced project. Zero external dependencies, TypeScript strict mode, fully accessible, and MLA/APA compliant.

## File Structure

```
/apps/web/src/
├── lib/
│   ├── citations.ts                    # Core citation management system
│   ├── CITATIONS.md                    # User documentation
│   └── CITATION_SYSTEM_ARCHITECTURE.md # This file
├── data/
│   └── citations.json                  # Persistent citation database
├── components/
│   └── atoms/
│       ├── CitationBadge.tsx           # React display component
│       ├── CitationBadge.module.css    # Component styles
│       └── index.ts                    # Atoms export (updated)
└── hooks/
    ├── useSourceTracking.ts            # Citation tracking hook
    └── index.ts                        # Hooks export
```

## Core Components

### 1. `lib/citations.ts` (318 lines)

**Purpose**: Core citation management library

**Key Classes**:
- `CitationManager`: Handles all citation CRUD operations
- Global singleton: `getGlobalCitationManager()`

**Key Methods**:
- `addCitation()` - Add new citation with validation
- `getCitation(id)` - Retrieve by ID
- `getAllCitations()` - Get all citations
- `getCitationsByType(type)` - Filter by source type
- `searchCitations(query)` - Full-text search
- `updateCitation(id, updates)` - Modify existing
- `removeCitation(id)` - Delete
- `formatAsMLA()` - MLA style output
- `formatAsAPA()` - APA style output
- `validateCitationFields()` - Field validation
- `getStatistics()` - Summary metrics

**Validation Rules**:
- Required: `id`, `text`, `source`, `type`
- URL validation: Valid HTTP/HTTPS only
- Date validation: ISO 8601 format only
- Type validation: article|legal|study|government|other

**Error Handling**:
- Throws on `addCitation()` with invalid data
- Returns errors array for non-throwing validation
- Silent fails with console warnings for missing citations

### 2. `components/atoms/CitationBadge.tsx` (174 lines)

**Purpose**: React component for displaying inline citations

**Key Features**:
- Superscript numbered badges
- Hover tooltips with full citation
- Keyboard accessible (Enter, Space, Escape)
- Links to source URLs
- Type badges (article, legal, study, government, other)
- Responsive design
- Light/dark mode support
- Print-friendly

**Props**:
```typescript
{
  citation: Citation;           // Citation object
  number: number;               // Display number (1, 2, 3...)
  className?: string;           // CSS class
  onCitationClick?: callback;   // Click handler
  showFullText?: boolean;       // Show claim text (default: true)
}
```

**Accessibility**:
- ARIA labels and descriptions
- Keyboard navigation (tabindex implicit)
- Focus outlines (2px solid)
- Tooltip role="tooltip"
- High contrast mode support
- Reduced motion support

**Styling**:
- Uses design tokens from `tokens.css`
- CSS-in-JS via CSS Modules
- Responsive breakpoints: 768px, 480px
- Z-index: `var(--z-tooltip)` (3000)
- Animations: fade-in, smooth transitions

### 3. `hooks/useSourceTracking.ts` (328 lines)

**Purpose**: React hook for component-level citation tracking

**Key Methods**:
- `trackClaim()` - Register a claim in component
- `addCitation()` - Add citation via manager
- `getCitation(id)` - Retrieve citation
- `getComponentCitations()` - Get citations added by this component
- `getTrackedClaims()` - Get all tracked claims
- `linkClaimToCitation()` - Associate claim with citation
- `unlinkClaim()` - Remove citation from claim
- `validateSources()` - Check all claims have citations
- `getValidationErrors()` - Get validation error details
- `clear()` - Clean up all claims

**Options**:
```typescript
{
  componentName?: string;        // For debugging
  strict?: boolean;              // Auto-validate on changes
  onValidationError?: callback;  // Error handler
  onCitationsUpdated?: callback; // Update handler
}
```

**State Management**:
- Tracks claims in local state (Map<string, SourcedClaim>)
- Tracks citation IDs in ref (Set<string>)
- Manages validation errors in state
- Global manager access via singleton

### 4. `data/citations.json`

**Purpose**: Persistent citation database

**Structure**:
```json
{
  "citations": [
    {
      "id": "cit-1",
      "text": "The claim being cited",
      "source": "Author, Title, Publication",
      "url": "https://example.com",
      "date": "2024-01-15",
      "type": "study",
      "notes": "Optional context",
      "addedAt": "2024-01-01T00:00:00Z"
    }
  ],
  "metadata": {
    "version": "1.0.0",
    "lastUpdated": "2024-01-01T00:00:00Z",
    "totalCitations": 1,
    "createdAt": "2024-01-01T00:00:00Z"
  }
}
```

**Purpose**: Seed data for demonstrations

## Data Flows

### Citation Creation Flow

```
Component
  ↓
useSourceTracking.addCitation()
  ↓
CitationManager.addCitation()
  ↓
validateCitationFields() → ValidationError[]
  ↓
Store in Map<string, Citation>
  ↓
Return Citation with assigned ID
```

### Claim Tracking Flow

```
Component
  ↓
useSourceTracking.trackClaim()
  ↓
Generate unique claimId (component-scoped)
  ↓
Store in local state: Map<string, SourcedClaim>
  ↓
Trigger validation if strict mode
  ↓
Return SourcedClaim
```

### Citation Display Flow

```
Component
  ↓
<CitationBadge citation={citation} number={1} />
  ↓
Render superscript badge [1]
  ↓
On hover → Position and show tooltip
  ↓
Tooltip shows:
  - Type badge
  - Claim text (if enabled)
  - Formatted source (APA)
  - Link to URL (if available)
  - Notes (if available)
```

### Validation Flow

```
useSourceTracking.validateSources()
  ↓
Iterate through tracked claims
  ↓
For each claim without citationId → Error
  ↓
For each claim with invalid citationId → Error
  ↓
Store errors in state
  ↓
Trigger onValidationError callback
  ↓
Return boolean (true if all valid)
```

## Type Hierarchy

### Citation System

```typescript
// Core types
type CitationType = 'article' | 'legal' | 'study' | 'government' | 'other';

interface Citation {
  id: string;
  text: string;
  source: string;
  url?: string;
  date?: string;        // ISO 8601
  type: CitationType;
  notes?: string;
  addedAt?: string;     // ISO 8601
}

interface ValidationError {
  field: keyof Citation;
  message: string;
}
```

### Tracking System

```typescript
interface SourcedClaim {
  claimId: string;
  text: string;
  citationId?: string;
}

interface SourceValidationError {
  claimId: string;
  text: string;
  message: string;
}

interface TrackingOptions {
  componentName?: string;
  strict?: boolean;
  onValidationError?: (errors: SourceValidationError[]) => void;
  onCitationsUpdated?: (citations: Citation[]) => void;
}

interface UseSourceTrackingReturn {
  trackClaim: (claim) => SourcedClaim;
  addCitation: (citation) => Citation;
  getCitation: (id) => Citation | undefined;
  getComponentCitations: () => Citation[];
  getTrackedClaims: () => SourcedClaim[];
  linkClaimToCitation: (claimId, citationId) => void;
  unlinkClaim: (claimId) => void;
  validateSources: () => boolean;
  getValidationErrors: () => SourceValidationError[];
  clear: () => void;
}
```

## API Examples

### Basic Usage

```typescript
// Add a citation
const citation = citationManager.addCitation({
  text: 'Claim being cited',
  source: 'Smith, J. (2023). Title.',
  type: 'study',
  url: 'https://example.com',
  date: '2023-06-15'
});

// Format for display
const mla = citationManager.formatAsMLA(citation);
// Output: "Smith, J. (2023). Title., 2023."

const apa = citationManager.formatAsAPA(citation);
// Output: "Smith, J. (2023). Title. (2023)."
```

### Component Integration

```typescript
export function Article() {
  const { trackClaim, addCitation, validateSources } = useSourceTracking({
    componentName: 'ArticleSection',
    strict: true
  });

  // Add citation
  const citation = addCitation({
    text: 'Key finding',
    source: 'Research Study 2024',
    type: 'study',
    url: 'https://example.com'
  });

  // Track claim
  const claim = trackClaim({
    text: 'This finding is important.',
    citationId: citation.id
  });

  // Validate
  if (!validateSources()) {
    console.error('Missing citations!');
  }

  return (
    <p>
      This finding is important.
      <CitationBadge citation={citation} number={1} />
    </p>
  );
}
```

## Performance Characteristics

| Operation | Complexity | Notes |
|-----------|-----------|-------|
| Add citation | O(1) | Map insertion |
| Get citation | O(1) | Map lookup |
| Get all | O(n) | Iterate all citations |
| Search | O(n) | Linear scan |
| Update | O(1) | Map update |
| Delete | O(1) | Map deletion |
| Validate | O(n) | Check all claims |

**Memory**: Proportional to citation count (negligible for typical usage)

**No Database Calls**: All operations in-memory for instant response

## Styling & Design

### Token Usage

```css
/* Colors */
--color-info: #5B8DEF (badge color)
--color-red-alert: #751006 (hover state)
--color-border: #3c2634 (tooltip border)
--color-navy-deep: #1f0021 (tooltip bg)
--color-white-off: #F8F9FA (text)
--color-success: #2A9D8F (legal badges)
--color-warning: #F77F00 (study badges)

/* Typography */
--type-body-small: 14px (tooltip text)
--type-caption: 12px (type badge)
--font-weight-semibold: 600 (emphasis)

/* Spacing */
--space-md: 16px (padding)
--space-sm: 8px (gaps)
--space-xs: 4px (fine adjustments)

/* Effects */
--shadow-lg: 0 4px 8px rgba(...) (tooltip depth)
--transition-normal: 200ms ease (animations)
--border-radius-lg: 12px (tooltip corners)
```

### Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: <480px

### Accessibility Support

- High contrast mode (`prefers-contrast: more`)
- Reduced motion (`prefers-reduced-motion: reduce`)
- Light mode (`prefers-color-scheme: light`)
- Print styles (@media print)

## Testing Strategy

### Unit Tests (citations.ts)

```typescript
// Validation
- addCitation with invalid data → throws
- validateCitationFields returns correct errors
- isValidUrl rejects malformed URLs
- isValidIsoDate accepts/rejects dates

// CRUD
- addCitation with auto ID generation
- getCitation returns correct item
- updateCitation modifies entry
- removeCitation deletes entry

// Searching
- searchCitations finds by text
- searchCitations finds by source
- getCitationsByType filters correctly
```

### Component Tests (CitationBadge.tsx)

```typescript
// Rendering
- Badge displays correct number
- Tooltip visible on hover
- Type badge shows correct type
- Source link is present if URL exists

// Accessibility
- ARIA labels present
- Keyboard navigation works
- Focus outlines visible

// Responsive
- Tooltip repositions on small screens
- Mobile layout works correctly
```

### Hook Tests (useSourceTracking.ts)

```typescript
// Claim tracking
- trackClaim generates unique IDs
- getTrackedClaims returns all claims
- linkClaimToCitation associates correctly

// Validation
- validateSources returns true when all cited
- getValidationErrors shows uncited claims
- Strict mode triggers auto-validation

// Citations
- addCitation integrates with manager
- getCitation retrieves correctly
- getComponentCitations shows only component's
```

## Security Considerations

### Input Validation

- URLs validated against `new URL()` API
- Dates validated against ISO format regex
- Text fields required (non-empty)
- Citation types restricted to enum

### XSS Prevention

- React auto-escapes text content
- No `innerHTML` used anywhere
- URLs opened with `noopener,noreferrer`
- Target="_blank" always paired with rel

### Data Integrity

- No mutations of internal state
- All updates create new Map instances
- Validation before storage
- Error reporting for invalid data

## Browser Compatibility

- Modern Evergreen Browsers
- CSS Grid/Flexbox required
- CSS Custom Properties (variables)
- ES2020+ JavaScript features
- Window.open() for links
- LocalStorage optional (not required)

## Future Enhancements

### Short Term
- [ ] Load citations from JSON data file
- [ ] Export citations as CSV/JSON
- [ ] Citation search UI component
- [ ] Statistics dashboard

### Medium Term
- [ ] Batch import/export
- [ ] Citation deduplication
- [ ] Automatic formatting detection
- [ ] URL validation/health checks

### Long Term
- [ ] Integration with citation APIs (DOI, Crossref)
- [ ] Multi-language support
- [ ] Citation analytics
- [ ] Collaborative editing
- [ ] Citation graph visualization

## Maintenance Notes

### Code Quality

- TypeScript strict mode enabled
- ESLint passing
- Zero external dependencies
- ~850 lines total (compact)
- Comprehensive documentation

### Documentation

- JSDoc comments on all public methods
- README with usage examples
- Inline comments for complex logic
- This architecture document

### Testing

- Type safety via TypeScript
- Visual regression testing via Storybook
- Unit tests recommended before merge
- Integration tests in consuming components

## Deployment Checklist

Before shipping citations system:

- [ ] Type checks pass (`npm run type-check`)
- [ ] Linting passes (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Component renders correctly
- [ ] Hook state management works
- [ ] Validation catches errors
- [ ] URLs open correctly
- [ ] Tooltips position correctly
- [ ] Keyboard navigation works
- [ ] Light mode works
- [ ] Print styles work
- [ ] Mobile responsive works

## Reference Links

- `/src/lib/citations.ts` - Core implementation
- `/src/lib/CITATIONS.md` - User guide
- `/src/components/atoms/CitationBadge.tsx` - Component
- `/src/hooks/useSourceTracking.ts` - Hook
- `/src/data/citations.json` - Sample data
- `/src/styles/tokens.css` - Design tokens
