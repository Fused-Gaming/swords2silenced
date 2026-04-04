# GoDaddy to Cloudflare DNS Migration & Vercel Deployment

## Overview

This guide walks through migrating your domain from GoDaddy's default nameservers to Cloudflare, then configuring DNS to point to your Vercel deployment.

### Architecture Flow
```
GoDaddy Account
    ↓
    Nameservers: ns1.cloudflare.com, ns2.cloudflare.com
    ↓
Cloudflare
    ↓
    DNS Records → Vercel
    SSL/TLS → Always HTTPS
    ↓
Vercel Deployment
    ↓
https://swordstosilenced.com
```

## Prerequisites

- ✅ Vercel project created (deployment URL obtained)
- ✅ Cloudflare account (free tier is fine)
- ✅ GoDaddy account with admin access
- ✅ Domain: swordstosilenced.com

## Phase 1: Set Up Cloudflare

### Step 1: Add Domain to Cloudflare

1. Log in to Cloudflare (https://dash.cloudflare.com)
2. Click "Add a site"
3. Enter domain: `swordstosilenced.com`
4. Select plan: **Free** (sufficient for this project)
5. Click "Continue"

### Step 2: Note Cloudflare Nameservers

Cloudflare will provide two nameservers:
```
Primary:   ns1.cloudflare.com
Secondary: ns2.cloudflare.com
```

**IMPORTANT**: Save these - you'll need them in Phase 2.

**Note**: You may also see additional nameservers (ns3, ns4, etc.) - you only need the first two, but you can use all provided.

### Step 3: Configure Initial DNS Records

Before migrating nameservers, pre-configure your DNS records in Cloudflare:

#### Option A: For www subdomain (recommended for simplicity)

1. Go to DNS section in Cloudflare
2. Click "Add record"
3. Configure CNAME record:
   ```
   Type:     CNAME
   Name:     www
   Target:   cname.vercel-dns.com
   TTL:      Auto
   Proxy:    DNS Only (not Proxied)
   ```
4. Click "Save"

#### Option B: For root domain (requires A records)

**Note**: Cloudflare doesn't allow CNAME for root domain. Use A records instead:

1. Go to DNS section
2. Add multiple A records (in order):
   ```
   Type:     A
   Name:     @ (root)
   Value:    76.76.19.132
   TTL:      Auto
   Proxy:    DNS Only
   ```
3. Repeat for each IP:
   - 76.76.19.133
   - 76.76.19.134
   - 76.76.19.135

### Step 4: Configure Cloudflare SSL/TLS

1. Go to SSL/TLS section in Cloudflare
2. Overview → Select "Full (strict)"
   ```
   Full (strict) = Vercel will provide valid SSL certificate
   ```
3. Scroll down and enable:
   - ✅ "Always HTTPS"
   - ✅ "Automatic HTTPS Rewrites"

### Step 5: Configure Additional Cloudflare Features

1. **Caching**: Scroll to Cache section
   - Cache Level: "Cache Everything"
   - Browser Cache TTL: 4 hours

2. **Page Rules** (optional but recommended):
   - Pattern: `swordstosilenced.com/*`
   - Cache Level: Cache Everything
   - Browser Cache TTL: 4 hours

## Phase 2: Update GoDaddy Nameservers

### Step 1: Access GoDaddy Domain Settings

1. Log in to GoDaddy (https://www.godaddy.com)
2. Click "My Products"
3. Find "swordstosilenced.com"
4. Click "Manage" or "Manage DNS"

### Step 2: Replace Nameservers

**Before:** GoDaddy default nameservers
```
ns1.godaddy.com
ns2.godaddy.com
```

**After:** Cloudflare nameservers
```
ns1.cloudflare.com
ns2.cloudflare.com
```

### Steps to Update:

1. Look for "Nameservers" section
2. Click "Change Nameservers" or similar option
3. Select "I'll use custom nameservers"
4. Delete existing GoDaddy nameservers
5. Enter Cloudflare nameservers:
   - `ns1.cloudflare.com`
   - `ns2.cloudflare.com`
6. Click "Save"

**Timeframe**: Changes propagate in 24-48 hours (usually faster)

### Step 3: Verify Nameserver Change

```bash
# Check if nameservers have updated
nslookup -type=NS swordstosilenced.com

# Should eventually show:
# swordstosilenced.com nameserver = ns1.cloudflare.com
# swordstosilenced.com nameserver = ns2.cloudflare.com
```

**Wait** until nameservers show Cloudflare before proceeding to Phase 3.

## Phase 3: Verify DNS Resolution

### Check DNS Propagation

```bash
# Check nameserver propagation
dig NS swordstosilenced.com

# Check A record resolution
dig A swordstosilenced.com
dig A www.swordstosilenced.com

# Check CNAME record (if using www)
dig CNAME www.swordstosilenced.com
```

**Expected Results:**
```
; swordstosilenced.com             IN      NS
swordstosilenced.com      900     IN      NS      ns1.cloudflare.com.
swordstosilenced.com      900     IN      NS      ns2.cloudflare.com.

; www.swordstosilenced.com        IN      CNAME
www.swordstosilenced.com. 300     IN      CNAME   cname.vercel-dns.com.
```

### Test HTTPS Resolution

```bash
# Test domain accessibility
curl -I https://swordstosilenced.com

# Should return 200 OK with valid SSL

# Test SSL certificate
openssl s_client -connect swordstosilenced.com:443

# Should show Vercel's SSL certificate
```

## Phase 4: Add Domain to Vercel

### In Vercel Dashboard:

1. Log in to Vercel (https://vercel.com)
2. Go to Project → Settings → Domains
3. Add custom domain: `swordstosilenced.com`
4. Vercel will verify ownership (usually automatic now)
5. If using www: also add `www.swordstosilenced.com`

### Vercel will:
- ✅ Detect Cloudflare as DNS provider
- ✅ Verify DNS configuration
- ✅ Issue SSL certificate (via Cloudflare)
- ✅ Configure routing

## Troubleshooting

### Issue: "DNS Not Resolving"

```bash
# Check nameserver propagation
nslookup -type=NS swordstosilenced.com

# If still showing GoDaddy nameservers:
# 1. Wait another 24 hours
# 2. Clear local DNS cache:
#    - macOS: sudo dscacheutil -flushcache
#    - Windows: ipconfig /flushdns
#    - Linux: sudo systemctl restart systemd-resolved
```

### Issue: "SSL Certificate Not Valid"

```bash
# Check certificate status
openssl s_client -connect swordstosilenced.com:443

# If certificate is missing:
# 1. Verify Cloudflare SSL is set to "Full (strict)"
# 2. Wait 10+ minutes for Vercel to issue certificate
# 3. Force Cloudflare to re-check: Go to SSL/TLS → Overview → "Re-validate"
```

### Issue: "Site Shows Vercel Default 404"

1. Verify DNS records are correct:
   ```bash
   dig swordstosilenced.com
   dig www.swordstosilenced.com
   ```

2. Check Vercel domain is verified in dashboard

3. Ensure Cloudflare DNS is pointing to Vercel:
   - For CNAME: Should point to `cname.vercel-dns.com`
   - For A records: Should point to Vercel's IPs

### Issue: "Cloudflare Returns Error 522 - Connection Timed Out"

1. Check Vercel deployment is running:
   ```bash
   curl -I https://swords2silenced.vercel.app
   ```

2. Verify A records (if using root domain) are correct

3. Try temporarily disabling Cloudflare proxy (DNS Only mode)

### Issue: "Too Many Redirects"

This usually means both Cloudflare and Vercel are redirecting HTTPS:

1. In Cloudflare: Disable "Automatic HTTPS Rewrites"
2. Keep "Always HTTPS" enabled
3. Vercel will handle the rest

## Verification Checklist

Use this checklist after setup:

```bash
# 1. Nameserver check
nslookup -type=NS swordstosilenced.com
# Should show: ns1.cloudflare.com, ns2.cloudflare.com

# 2. DNS resolution
nslookup swordstosilenced.com
# Should resolve to Vercel's IP

# 3. HTTPS check
curl -I https://swordstosilenced.com
# Should return 200 with valid SSL

# 4. Certificate validity
openssl s_client -connect swordstosilenced.com:443 | grep -A5 "Issuer"
# Should show Vercel's certificate authority

# 5. Website content
curl https://swordstosilenced.com | head -20
# Should return HTML content

# 6. Health endpoint
curl https://swordstosilenced.com/api/health
# Should return: {"status":"ok","timestamp":"...","version":"0.1.0"}
```

## DNS Record Reference

### CNAME Record (www subdomain)
```
Zone:   swordstosilenced.com
Type:   CNAME
Name:   www
Target: cname.vercel-dns.com
TTL:    Auto (default)
```

### A Records (root domain)
```
Zone:  swordstosilenced.com
Type:  A
Name:  @ (root)
Value: 76.76.19.132
Value: 76.76.19.133
Value: 76.76.19.134
Value: 76.76.19.135
TTL:   Auto (default)
```

### MX Records (optional - for email)
```
If you add email later, configure in Cloudflare:
Type: MX
Priority: 10
Value: mx.google.com (or your email provider)
```

## Next Steps

1. ✅ Add domain to Cloudflare
2. ✅ Configure DNS records
3. ✅ Update GoDaddy nameservers
4. ✅ Wait for propagation (24-48 hours)
5. ✅ Verify DNS resolution
6. ✅ Add domain to Vercel
7. ✅ Test HTTPS and SSL
8. ✅ Deploy to production

## Additional Resources

- [Cloudflare DNS Documentation](https://developers.cloudflare.com/dns/)
- [Vercel Custom Domains](https://vercel.com/docs/project-configuration/domains)
- [GoDaddy Nameserver Help](https://www.godaddy.com/help)
- [DNS Propagation Checker](https://www.whatsmydns.net/)

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review Cloudflare's DNS logs
3. Check Vercel's deployment logs
4. Visit the repository issues page
