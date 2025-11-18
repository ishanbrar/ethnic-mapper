# How to Embed the Mapper in Your Website

## Option 1: Simple Iframe Embed (Recommended)

### Step 1: Deploy Your Next.js App

Choose one of these platforms:

**Vercel (Easiest for Next.js):**
1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Add your `NEXT_PUBLIC_MAPBOX_TOKEN` in environment variables
5. Deploy - you'll get a URL like `https://your-app.vercel.app`

**Netlify:**
1. Push your code to GitHub
2. Go to https://netlify.com
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Add `NEXT_PUBLIC_MAPBOX_TOKEN` in environment variables
7. Deploy

**Other options:** Railway, Render, AWS Amplify, etc.

### Step 2: Update Your mapper.html

Replace the content of your `mapper.html` with the example in `mapper-embed-example.html`, but change:

```html
<iframe 
  src="YOUR_DEPLOYED_URL" 
  class="mapper-container"
  frameborder="0"
  allowfullscreen>
</iframe>
```

Replace `YOUR_DEPLOYED_URL` with your actual deployment URL (e.g., `https://your-app.vercel.app/mapper-embed`)

### Step 3: Test

Open `mapper.html` in your browser and the mapper should load in an iframe.

---

## Option 2: Full Integration (More Complex)

If you want to fully integrate the mapper into your existing site without an iframe:

1. Convert your HTML site to Next.js
2. Copy your existing HTML structure into Next.js pages
3. Import the MapContainer component directly
4. This requires more setup but gives better integration

---

## Quick Start Commands

```bash
# Build for production
npm run build

# Test production build locally
npm run start

# Deploy to Vercel (if using Vercel CLI)
vercel
```

---

## Important Notes

- Make sure your `NEXT_PUBLIC_MAPBOX_TOKEN` is set in your deployment platform's environment variables
- The `/mapper-embed` route removes the header for cleaner embedding
- For iframe embedding, you may need to configure CORS headers (most platforms handle this automatically)

