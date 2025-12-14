# Vercel Deployment Guide

## Project Information
- **Vercel Project ID**: vktomardev-5533
- **Email**: vk.tomar.dev@gmail.com
- **Desired URL**: vikas-tomar-portfolio (or similar)

## Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Login to Vercel:**
   ```bash
   vercel login
   ```

2. **Navigate to project directory:**
   ```bash
   cd portfolio
   ```

3. **Deploy to production:**
   ```bash
   vercel --prod
   ```

4. **During deployment, you'll be asked:**
   - Link to existing project? **Yes**
   - Project ID: `vktomardev-5533`
   - Project name: **vikas-tomar-portfolio** (this will create URL like `vikas-tomar-portfolio.vercel.app`)

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Login with: vk.tomar.dev@gmail.com
3. Click "Add New" → "Project"
4. Import your Git repository OR
5. Click "Import Project" and select the `portfolio` folder
6. **Project Settings:**
   - **Project Name**: `vikas-tomar-portfolio` (or `vikas-tomar-portfolio-vktomardev-5533`)
   - **Framework Preset**: Vite
   - **Root Directory**: `./portfolio` (if importing from parent folder) or `.` (if importing portfolio folder directly)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
7. Click "Deploy"

### Option 3: Connect Git Repository (Automatic Deployments)

1. Push your code to GitHub/GitLab/Bitbucket
2. In Vercel Dashboard:
   - Click "Add New" → "Project"
   - Import your Git repository
   - **Project Name**: `vikas-tomar-portfolio`
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

## Vercel Configuration

The project includes `vercel.json` with:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- SPA routing rewrites (for React Router)

## Custom Domain (Optional)

After deployment:
1. Go to Project Settings → Domains
2. Add your custom domain (if you have one)
3. Update DNS records as instructed

## Build Configuration

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x or higher (Vercel auto-detects)

## Notes

- The URL will be: `vikas-tomar-portfolio-{team-name}.vercel.app` or `vikas-tomar-portfolio.vercel.app`
- Production deployments happen automatically on every push to main/master branch (if Git is connected)
- Preview deployments are created for every branch and PR

## Troubleshooting

If build fails:
1. Check Node.js version (should be 18+)
2. Ensure all dependencies are in `package.json`
3. Check build logs in Vercel Dashboard
4. Verify `vercel.json` configuration

