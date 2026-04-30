# Citation System - Integration Examples

Quick examples showing how to use the citation system in real components.

## Example 1: Simple Inline Citation

Display a fact with a single citation:

```typescript
import CitationBadge from '@/components/atoms/CitationBadge';
import { getGlobalCitationManager } from '../../lib/citations';

export function FactSection() {
  const manager = getGlobalCitationManager();

  // Get or create citation
  const citation = manager.getCitation('cit-1') || manager.addCitation({
    text: 'Silencing disproportionately affects marginalized voices',
    source: 'Smith, J. & Lee, M. (2023). Voices in Silence: A Study of Suppression.',
    url: 'https://example.com/study',
    date: '2023-06-15',
    type: 'study'
  });

  return (
    <section>
      <p>
        Silencing disproportionately affects marginalized voices.
        <CitationBadge citation={citation} number={1} />
      </p>
    </section>
  );
}
```

## Example 2: Multiple Citations with Hook

Track multiple claims within a component:

```typescript
import { useSourceTracking } from '../../hooks';
import CitationBadge from '@/components/atoms/CitationBadge';

export function ThesisIntroduction() {
  const { addCitation, trackClaim, validateSources } = useSourceTracking({
    componentName: 'ThesisIntroduction',
    strict: true,
    onValidationError: (errors) => {
      console.warn('Missing sources:', errors);
    }
  });

  // Add multiple citations
  const studyCitation = addCitation({
    text: 'Research shows suppression increases over time',
    source: 'Johnson, R. et al. (2022). Temporal Patterns in Voice Suppression.',
    type: 'study',
    url: 'https://example.com/patterns',
    date: '2022-03-10'
  });

  const legalCitation = addCitation({
    text: 'International law protects freedom of expression',
    source: 'Universal Declaration of Human Rights, Article 19',
    type: 'legal',
    url: 'https://www.un.org/en/about-us/universal-declaration-of-human-rights',
    date: '1948-12-10'
  });

  // Track claims
  trackClaim({
    text: 'Research shows suppression increases over time',
    citationId: studyCitation.id
  });

  trackClaim({
    text: 'International law protects freedom of expression',
    citationId: legalCitation.id
  });

  // Validate before render
  if (!validateSources()) {
    console.error('Not all claims are properly sourced');
  }

  return (
    <section>
      <h2>Our Thesis</h2>
      <p>
        Research shows suppression increases over time.
        <CitationBadge citation={studyCitation} number={1} />
      </p>
      <p>
        International law protects freedom of expression.
        <CitationBadge citation={legalCitation} number={2} />
      </p>
    </section>
  );
}
```

## Example 3: Government Source with Notes

Citation with additional context:

```typescript
import { getGlobalCitationManager } from '../../lib/citations';
import CitationBadge from '@/components/atoms/CitationBadge';

export function GovernmentDataSection() {
  const manager = getGlobalCitationManager();

  const govCitation = manager.addCitation({
    text: 'Official government transparency statistics',
    source: 'Office of Information Policy. (2024). Annual Transparency Report.',
    type: 'government',
    url: 'https://example.gov/transparency-report',
    date: '2024-03-01',
    notes: 'Based on FOIA request data from fiscal year 2023'
  });

  return (
    <article>
      <h3>Government Transparency Data</h3>
      <p>
        According to official government transparency statistics,
        <CitationBadge citation={govCitation} number={1} />
        the number of FOIA requests has increased by 15% year-over-year.
      </p>
    </article>
  );
}
```

## Example 4: Search and Reuse Citations

Look up existing citations before creating new ones:

```typescript
import { getGlobalCitationManager } from '../../lib/citations';
import CitationBadge from '@/components/atoms/CitationBadge';

export function ReusableCitationExample() {
  const manager = getGlobalCitationManager();

  // Search for existing citations
  const silence = manager.searchCitations('silence');
  let silenceCitation = silence.length > 0 ? silence[0] : null;

  // Create if doesn't exist
  if (!silenceCitation) {
    silenceCitation = manager.addCitation({
      text: 'Silence as a form of control',
      source: 'Brown, L. (2023). The Power of Silence.',
      type: 'article',
      url: 'https://example.com/silence'
    });
  }

  return (
    <div>
      <p>
        Silence is often used as a mechanism of control.
        <CitationBadge citation={silenceCitation} number={1} />
      </p>
    </div>
  );
}
```

## Example 5: Citation Management Dashboard

Display all citations with statistics:

```typescript
import { getGlobalCitationManager } from '../../lib/citations';

export function CitationDashboard() {
  const manager = getGlobalCitationManager();
  const allCitations = manager.getAllCitations();
  const stats = manager.getStatistics();

  return (
    <div className="dashboard">
      <h2>Citation Statistics</h2>

      <div className="stats">
        <p>Total Citations: {stats.total}</p>
        <p>With URLs: {stats.hasUrls}</p>
        <p>With Dates: {stats.hasDates}</p>
      </div>

      <div className="breakdown">
        <h3>By Type</h3>
        <ul>
          <li>Articles: {stats.typeCount.article}</li>
          <li>Legal: {stats.typeCount.legal}</li>
          <li>Studies: {stats.typeCount.study}</li>
          <li>Government: {stats.typeCount.government}</li>
          <li>Other: {stats.typeCount.other}</li>
        </ul>
      </div>

      <div className="all-citations">
        <h3>All Citations</h3>
        <ul>
          {allCitations.map((cit) => (
            <li key={cit.id}>
              <strong>{cit.type}:</strong> {cit.source}
              {cit.url && <a href={cit.url}>View</a>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

## Example 6: Form to Add Citations

Component for adding new citations:

```typescript
import { useState } from 'react';
import { useSourceTracking } from '../../hooks';
import type { Citation } from '../../lib/citations';

export function AddCitationForm() {
  const { addCitation } = useSourceTracking({
    componentName: 'AddCitationForm'
  });

  const [formData, setFormData] = useState({
    text: '',
    source: '',
    url: '',
    date: '',
    type: 'article' as const,
    notes: ''
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<Citation | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const citation = addCitation({
        text: formData.text,
        source: formData.source,
        url: formData.url || undefined,
        date: formData.date || undefined,
        type: formData.type,
        notes: formData.notes || undefined
      });

      setSuccess(citation);
      setFormData({
        text: '',
        source: '',
        url: '',
        date: '',
        type: 'article',
        notes: ''
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add citation');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Citation</h2>

      {error && <div className="error">{error}</div>}
      {success && (
        <div className="success">
          Citation added: {success.id}
        </div>
      )}

      <div>
        <label>
          Claim Text
          <input
            required
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
            placeholder="What is being claimed?"
          />
        </label>
      </div>

      <div>
        <label>
          Source
          <input
            required
            value={formData.source}
            onChange={(e) => setFormData({ ...formData, source: e.target.value })}
            placeholder="Author, Title, Publication"
          />
        </label>
      </div>

      <div>
        <label>
          URL
          <input
            type="url"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            placeholder="https://example.com"
          />
        </label>
      </div>

      <div>
        <label>
          Date
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </label>
      </div>

      <div>
        <label>
          Type
          <select
            value={formData.type}
            onChange={(e) =>
              setFormData({
                ...formData,
                type: e.target.value as any
              })
            }
          >
            <option value="article">Article</option>
            <option value="legal">Legal</option>
            <option value="study">Study</option>
            <option value="government">Government</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Notes
          <textarea
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Any additional context?"
          />
        </label>
      </div>

      <button type="submit">Add Citation</button>
    </form>
  );
}
```

## Example 7: Validation in Strict Mode

Ensure all claims are sourced:

```typescript
import { useEffect } from 'react';
import { useSourceTracking } from '../../hooks';
import type { SourceValidationError } from '../../hooks/useSourceTracking';

export function StrictSourceComponent() {
  const {
    trackClaim,
    addCitation,
    validateSources,
    getValidationErrors
  } = useSourceTracking({
    componentName: 'StrictSourceComponent',
    strict: true,
    onValidationError: (errors: SourceValidationError[]) => {
      console.error('Validation failed:', errors);
    }
  });

  useEffect(() => {
    // Add citations
    const citation = addCitation({
      text: 'Important fact',
      source: 'Reliable Source (2024)',
      type: 'study'
    });

    // Track claim
    const claim = trackClaim({
      text: 'This important fact needs a source',
      citationId: citation.id
    });

    // Validate
    const isValid = validateSources();
    console.log('All claims sourced?', isValid);

    if (!isValid) {
      const errors = getValidationErrors();
      console.error('Unsourced claims:', errors);
    }
  }, [trackClaim, addCitation, validateSources, getValidationErrors]);

  return <div>Content with strict source validation</div>;
}
```

## Example 8: Formatting for Output

Generate formatted citations for display:

```typescript
import { getGlobalCitationManager } from '../../lib/citations';

export function FormattedCitationOutput() {
  const manager = getGlobalCitationManager();
  const citations = manager.getAllCitations();

  return (
    <div>
      <h2>Works Cited</h2>

      <div className="mla">
        <h3>MLA Format</h3>
        <ul>
          {citations.map((cit) => (
            <li key={cit.id}>{manager.formatAsMLA(cit)}</li>
          ))}
        </ul>
      </div>

      <div className="apa">
        <h3>APA Format</h3>
        <ul>
          {citations.map((cit) => (
            <li key={cit.id}>{manager.formatAsAPA(cit)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

## Example 9: Filter Citations by Type

Show only specific types of sources:

```typescript
import { getGlobalCitationManager } from '../../lib/citations';
import CitationBadge from '@/components/atoms/CitationBadge';

export function LegalSourcesOnly() {
  const manager = getGlobalCitationManager();
  const legalCitations = manager.getCitationsByType('legal');

  return (
    <section>
      <h2>Legal References</h2>
      <p>
        This section is based on the following legal sources:
      </p>
      <ul>
        {legalCitations.map((cit, idx) => (
          <li key={cit.id}>
            {cit.source}
            <CitationBadge citation={cit} number={idx + 1} />
          </li>
        ))}
      </ul>
    </section>
  );
}
```

## Integration Patterns

### Pattern 1: Global Manager (Simple)

For simple use cases with read-only citations:

```typescript
const manager = getGlobalCitationManager();
const citation = manager.getCitation('cit-1');
```

### Pattern 2: Hook-Based (Complex)

For components that add citations:

```typescript
const { addCitation, trackClaim, validateSources } = useSourceTracking({
  componentName: 'MyComponent',
  strict: true
});
```

### Pattern 3: Search-Reuse (Deduplication)

To avoid duplicate citations:

```typescript
let citation = manager.searchCitations('existing').find(c => c.type === 'study');
if (!citation) {
  citation = manager.addCitation({...});
}
```

### Pattern 4: Export and Import

For citation portability:

```typescript
// Export
const citations = manager.toJSON();
localStorage.setItem('citations', JSON.stringify(citations));

// Import later
const saved = JSON.parse(localStorage.getItem('citations'));
const manager = new CitationManager(saved);
```

## Best Practices

1. **Use meaningful claim text**: Make tooltips informative
2. **Include URLs**: Always provide source links when available
3. **Add dates**: Timestamps help validate source freshness
4. **Choose correct type**: Categorization improves findability
5. **Validate before deploy**: Use strict mode in development
6. **Keep sources current**: Periodically check links work
7. **Dedup citations**: Reuse existing citations when possible
8. **Document context**: Use notes field for important context

## Performance Tips

- Use `getCitation()` for lookups (O(1))
- Batch add citations before rendering (reduces re-renders)
- Use hook for component-local state (isolates changes)
- Avoid searching in hot render paths (O(n) operation)
- Memoize citation lists if displaying many items

## Troubleshooting

**Citation not appearing?**
- Check citation ID matches between claim and citation
- Verify CitationBadge is imported correctly
- Look at browser console for errors

**Validation failing?**
- Ensure all required fields are provided
- Check URL is valid HTTP/HTTPS
- Verify date is ISO 8601 format
- Confirm type is in enum list

**Hook not working?**
- Must be called within React component
- Can't be used in conditional hooks
- Check dependencies array if using effects
