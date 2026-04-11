# Deployment Guide

## Overview

This guide covers deploying Swords2Silenced to Vercel with Cloudflare DNS configuration.

## Prerequisites

- Vercel account
- Cloudflare account (for DNS management)
- Domain: swordstosilenced.com
- Admin access to domain registrar (GoDaddy)

## Deployment Architecture

```
Domain (swordstosilenced.com)
    ↓ (Cloudflare DNS)
    ↓
Vercel CDN
    ↓ (Routes traffic)
    ↓
Web App (Next.js)
```

## Step 1: Configure Vercel Project

### Create Vercel Project

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel

# Select project settings:
# - Framework: Next.js / Other as appropriate
# - Root directory: ./apps/web
# - Build command: npm run build
# - Output directory: .next
```

### Set Environment Variables

```bash
vercel env add DATABASE_URL
vercel env add API_KEY
# Add other secrets as needed
```

### Get Vercel Deployment URL

After deployment, note your Vercel URL:

```
https://swords2silenced.vercel.app
```

## Step 2: Configure Cloudflare DNS

### Add Custom Domain to Vercel

1. Go to Vercel Dashboard → Project Settings → Domains
2. Add custom domain: `swordstosilenced.com`
3. Vercel will show DNS records to add

### Required DNS Records

When adding domain to Vercel, you'll need:

**Option 1: CNAME (Recommended for subdomains)**

```
Name: www
Type: CNAME
Value: cname.vercel-dns.com
TTL: Auto
```

**Option 2: A Records (Root domain)**

```
A Records:
76.76.19.132
76.76.19.133
76.76.19.134
76.76.19.135
```

## Step 3: Update GoDaddy Nameservers to Cloudflare

### In Cloudflare:

1. Add site to Cloudflare (if not already added)
2. Note Cloudflare nameservers:
   - `ns1.cloudflare.com`
   - `ns2.cloudflare.com`

### In GoDaddy:

1. Log in to GoDaddy account
2. Go to Domains → swordstosilenced.com
3. Find DNS settings
4. Change nameservers to Cloudflare:
   ```
   ns1.cloudflare.com
   ns2.cloudflare.com
   ```
5. Save changes (can take up to 48 hours to propagate)

### Verify Propagation

```bash
# Check nameserver propagation
nslookup -type=NS swordstosilenced.com

# Should show Cloudflare nameservers
# Test resolution
nslookup swordstosilenced.com
nslookup www.swordstosilenced.com
```

## Step 4: Configure Cloudflare Settings

### In Cloudflare Dashboard:

1. **SSL/TLS**: Set to "Full" or "Full (strict)"
2. **Caching**: Set to "Cache Everything"
3. **Page Rules**: Create rules for optimal performance
4. **Workers**: Optional - for advanced routing

### Page Rules Example

```
Pattern: swordstosilenced.com/*
- Cache Level: Cache Everything
- Browser Cache TTL: 4 hours
```

## Step 5: Deploy Application

### Build and Deploy

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Deploy to Vercel
vercel deploy --prod
```

### Verify Deployment

```bash
# Test website accessibility
curl https://swordstosilenced.com

# Check SSL certificate
openssl s_client -connect swordstosilenced.com:443

# DNS propagation check
dig swordstosilenced.com
```

## Monitoring & Maintenance

### Health Probe Endpoint

- Probe URL: `https://<your-domain>/status`
- Rewrite target: `/api/status` (configured in `apps/web/next.config.js`)
- Expected status codes:
  - `200` for GET requests (healthy or degraded payload state)
  - `405` for non-GET requests with `Allow: GET`

### Vercel Dashboard

- View deployment logs
- Monitor performance
- Check error rates
- Review analytics

### Cloudflare Dashboard

- Monitor DNS performance
- View security analytics
- Check cache hit ratio
- Review traffic patterns

### Health Checks

```bash
# Regular health monitoring
watch 'curl -s https://swordstosilenced.com/status | jq .'

# Monitor DNS resolution
watch 'dig swordstosilenced.com'
```

## Rollback Procedure

If deployment fails:

```bash
# Revert to previous Vercel deployment
vercel rollback

# Or manually select previous deployment:
vercel deployments
vercel promote <deployment-id>
```

## Troubleshooting

**Issue**: Domain shows Vercel default page

- Verify DNS records in Cloudflare
- Wait for propagation (up to 48 hours)
- Check Vercel domain settings

**Issue**: SSL certificate errors

- Verify Cloudflare SSL setting
- Wait for certificate provisioning (usually 10 min)
- Force Cloudflare to reissue certificate

**Issue**: Slow performance

- Check Cloudflare cache settings
- Review Vercel performance metrics
- Optimize image loading in app
- Enable Cloudflare Argo Smart Routing

## Performance Optimization

1. **Enable Cloudflare Caching**
2. **Use Vercel Edge Functions** for dynamic content
3. **Optimize images** with next/image
4. **Enable HTTP/2 Push**
5. **Minify and compress** assets

## Security

1. **Keep SSL enabled** at all times
2. **Use Cloudflare WAF** for DDoS protection
3. **Enable rate limiting** on API routes
4. **Regular security audits**
5. **Monitor for vulnerabilities**

## Support

For deployment issues:

- Check Vercel docs: https://vercel.com/docs
- Check Cloudflare docs: https://developers.cloudflare.com
- Open issue in repository
