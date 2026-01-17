# Cloudflare Configuration Guide

## Headers Configuration

Cloudflare Pages автоматично чете `_headers` файла за настройка на HTTP headers.

Ако използвате Cloudflare Workers или Transform Rules, можете да конфигурирате headers директно от Cloudflare Dashboard:

### Security Headers (приложи за всички страници):
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### Cache Headers:
- CSS/JS/Images: Cache-Control: public, max-age=31536000, immutable
- HTML: Cache-Control: public, max-age=0, must-revalidate

## Performance Optimizations

1. **Auto Minify** (Cloudflare Dashboard → Speed → Optimization):
   - ✅ Enable JavaScript minification
   - ✅ Enable CSS minification
   - ✅ Enable HTML minification

2. **Brotli Compression** (автоматично активирано)

3. **Caching**:
   - Browser Cache TTL: 4 hours (за HTML)
   - Edge Cache TTL: 1 month (за статични файлове)

4. **Image Optimization**:
   - Polish: Lossless или Lossy (според нуждите)
   - Mirage: Enable (за мобилни устройства)

## SSL/TLS Settings

- SSL/TLS encryption mode: Full (strict)
- Always Use HTTPS: ON
- Automatic HTTPS Rewrites: ON

## Page Rules (опционално)

Създайте Page Rules за по-добро кеширане:
1. `example.com/*.css` → Cache Level: Cache Everything, Edge Cache TTL: 1 month
2. `example.com/*.js` → Cache Level: Cache Everything, Edge Cache TTL: 1 month
3. `example.com/*.webp` → Cache Level: Cache Everything, Edge Cache TTL: 1 month

