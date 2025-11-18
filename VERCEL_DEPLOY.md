# Deploy to Vercel - Step by Step Guide

## Prerequisites
- A GitHub account
- A Vercel account (free at https://vercel.com)
- Your Mapbox token ready

## Step 1: Push Your Code to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a GitHub repository**:
   - Go to https://github.com/new
   - Name it (e.g., "ethnic-mapper")
   - Don't initialize with README (you already have files)
   - Click "Create repository"

3. **Push your code**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

1. **Go to Vercel**:
   - Visit https://vercel.com
   - Sign up/Login (you can use GitHub to sign in)

2. **Import Your Project**:
   - Click "Add New..." → "Project"
   - Find your GitHub repository
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Add Environment Variable**:
   - Click "Environment Variables"
   - Add:
     - **Name**: `NEXT_PUBLIC_MAPBOX_TOKEN`
     - **Value**: Your Mapbox token (get it from https://account.mapbox.com/access-tokens/)
   - Click "Save"

5. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - You'll get a URL like: `https://your-project-name.vercel.app`

## Step 3: Update Your mapper.html

Once deployed, update your `mapper.html` file:

```html
<iframe 
  src="https://your-project-name.vercel.app/mapper-embed" 
  class="mapper-container"
  frameborder="0"
  allowfullscreen>
</iframe>
```

Replace `your-project-name` with your actual Vercel project name.

## Step 4: Test

- Visit your Vercel URL to test the mapper
- Visit `/mapper-embed` route for the embeddable version (no header)
- Test the iframe in your `mapper.html`

## Troubleshooting

**Build fails?**
- Check that all dependencies are in `package.json`
- Make sure `NEXT_PUBLIC_MAPBOX_TOKEN` is set correctly
- Check build logs in Vercel dashboard

**Map doesn't load?**
- Verify your Mapbox token is correct
- Check browser console for errors
- Make sure token has proper permissions

**Need to update?**
- Just push to GitHub - Vercel auto-deploys on every push!

