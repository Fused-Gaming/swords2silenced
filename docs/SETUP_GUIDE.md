# Setup Guide for Swords2Silenced

## Quick Start

### 1. Prerequisites
- Node.js 18+
- npm 9+
- Vercel account
- Cloudflare account
- GoDaddy domain account

### 2. Local Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev --workspace=apps/web

# Open http://localhost:3000 in your browser
```

### 3. Environment Configuration

```bash
# Copy example env file
cp .env.example .env.local

# Update with your values
# NEXT_PUBLIC_SITE_URL=https://swordstosilenced.com
# NEXT_PUBLIC_API_URL=https://api.swordstosilenced.com
```

## Deployment Steps

### Step 1: Prepare for Deployment

```bash
# Build all packages
npm run build

# Test build
npm run test

# Run linting
npm run lint
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from root
vercel

# Select project settings:
# - Framework: Next.js
# - Root directory: ./apps/web
# - Build command: npm run build
# - Install command: npm install
# - Output directory: .next
```

#### Option B: Using GitHub Integration

1. Push to main branch
2. GitHub Actions will automatically deploy via Vercel

### Step 3: Configure Custom Domain

```bash
# In Vercel Dashboard:
# 1. Go to Project Settings → Domains
# 2. Add custom domain: swordstosilenced.com
# 3. Note the DNS records (CNAME or A records)
```

### Step 4: Update GoDaddy Nameservers

```
1. Log in to GoDaddy
2. Go to Domains → swordstosilenced.com
3. Find DNS/Nameservers settings
4. Change to Cloudflare nameservers:
   - ns1.cloudflare.com
   - ns2.cloudflare.com
5. Save changes (wait 24-48 hours for propagation)
```

### Step 5: Configure Cloudflare DNS

```
In Cloudflare Dashboard:
1. Add site swordstosilenced.com
2. Configure DNS records for Vercel:
   - Type: CNAME
   - Name: www
   - Target: cname.vercel-dns.com
   
3. Or use A records (root domain):
   - 76.76.19.132
   - 76.76.19.133
   - 76.76.19.134
   - 76.76.19.135

4. Set SSL/TLS to "Full (strict)"
5. Enable "Always HTTPS"
```

### Step 6: Verify Deployment

```bash
# Check nameserver propagation
nslookup swordstosilenced.com

# Should resolve to Vercel's IP

# Test HTTPS
curl -I https://swordstosilenced.com

# Should return 200 OK with valid SSL
```

## Troubleshooting

### DNS Not Resolving

```bash
# Check DNS propagation
dig swordstosilenced.com

# Check nameservers
nslookup -type=NS swordstosilenced.com

# Should show Cloudflare nameservers
```

### SSL Certificate Issues

1. Ensure Cloudflare SSL is set to "Full (strict)"
2. Check Vercel's SSL certificate status
3. Wait 10+ minutes for certificate provisioning
4. Force certificate reissue in Cloudflare

### Build Failures

```bash
# Clear cache and rebuild
npm run clean
npm install
npm run build

# Check build logs
vercel logs --tail
```

## Managing Environments

### Production (main branch)
- Deployment: Automatic via GitHub Actions
- Domain: swordstosilenced.com

### Staging (develop branch)
- Manual deployment
- Domain: staging.swordstosilenced.com (optional)

### Development (feature branches)
- Local development with `npm run dev`
- Preview deployments on each PR

## Adding Environment Variables

### In Vercel Dashboard:
```
1. Go to Project Settings → Environment Variables
2. Add new variables:
   - NEXT_PUBLIC_*: Frontend variables
   - *: Backend-only variables
3. Redeploy for changes to take effect
```

### In .env.local (local only):
```
NEXT_PUBLIC_SITE_URL=https://swordstosilenced.com
NEXT_PUBLIC_API_URL=https://api.swordstosilenced.com
```

## Performance Optimization

### Cloudflare Configuration
1. Enable "Cache Everything" page rule
2. Set appropriate cache TTLs
3. Enable Argo Smart Routing
4. Enable Automatic HTTPS Rewrites

### Vercel Configuration
1. Enable Image Optimization
2. Enable Edge Functions
3. Configure cache headers in _headers

### Application Level
1. Use Next.js Image component
2. Implement code splitting
3. Add rel=preconnect for external resources
4. Optimize bundle size

## Monitoring

### Key Metrics to Track
- Page load time (target: < 2s)
- Lighthouse score (target: > 90)
- Error rate (target: < 0.1%)
- Uptime (target: 99.9%)

### Tools
- Vercel Analytics Dashboard
- Cloudflare Analytics
- Google PageSpeed Insights
- WebPageTest

## Security Checklist

- [ ] SSL/TLS enabled and valid
- [ ] Security headers configured (_headers file)
- [ ] HTTPS redirect enabled
- [ ] Rate limiting configured
- [ ] DDoS protection enabled (Cloudflare)
- [ ] Regular security audits
- [ ] Keep dependencies updated

## Maintenance

```bash
# Weekly
npm audit
npm outdated

# Monthly
npm update

# As needed
# - Update TypeScript
# - Update Next.js
# - Security patches
```

## Support & Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Cloudflare Documentation](https://developers.cloudflare.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Repository Issues](https://github.com/fused-gaming/swords2silenced/issues)
