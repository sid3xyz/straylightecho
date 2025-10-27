# STRAYLIGHT Shared Assets

## CDN-Hosted Shared Components

This directory contains shared UI components for the STRAYLIGHT ecosystem, hosted on `straylightecho.com` and consumed by multiple websites.

## Current Assets

### STRAYLIGHT Control Bar v1.1.0
- **CSS**: `straylight-control-bar.css`
- **JS**: `straylight-control-bar.js` 
- **Purpose**: Unified retro-futuristic cyberpunk header across ecosystem
- **Consumers**: slirc.net, straylightecho.com

## Versioning Strategy

### CDN URLs
```html
<!-- Latest version (auto-updating) -->
<link rel="stylesheet" href="https://straylightecho.com/shared/straylight-control-bar.css">
<script src="https://straylightecho.com/shared/straylight-control-bar.js"></script>

<!-- Version-pinned (stable) -->
<link rel="stylesheet" href="https://straylightecho.com/shared/straylight-control-bar.css?v=1.1.0">
<script src="https://straylightecho.com/shared/straylight-control-bar.js?v=1.1.0"></script>
```

## Deployment Process

1. **Update Assets**: Modify files in this directory
2. **Version Bump**: Update version in this README
3. **Deploy Primary**: Push to straylightecho.com (CDN host)
4. **Verify**: Test on both straylightecho.com and slirc.net
5. **Optionally Pin**: Update consumer sites to specific version if needed

## Benefits

- ✅ **Zero Duplication**: Single source of truth
- ✅ **Instant Updates**: Changes propagate automatically  
- ✅ **Cache Optimization**: Browser caching across domains
- ✅ **Version Control**: Rollback capability via URL parameters
- ✅ **Performance**: CDN-style delivery

## Local Development

For local development, assets are served relatively from straylightecho.com:
```html
<link rel="stylesheet" href="shared/straylight-control-bar.css">
<script src="shared/straylight-control-bar.js"></script>
```

## Cross-Origin Policy

Assets are served with permissive CORS headers via Cloudflare Pages to enable cross-domain loading.