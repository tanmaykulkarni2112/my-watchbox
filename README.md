# 🎬 Tanmay's Watchbox

A personal watchbox website to track movies, series, and songs you've watched. Built with React and Vite for easy deployment on GitHub Pages.

## Features

- 📺 Track movies, series, and songs
- ⭐ Rate your watches (1-10)
- 🏷️ Tag content (productive, new, series, movie, new_song)
- 📱 Responsive design
- 🚀 Easy GitHub Pages deployment

## Local Development

### Prerequisites

- Node.js 20.19+
- npm or similar package manager

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Data Format

The watchbox data is stored in a CSV file (`public/watchbox.csv`). Format:

```csv
title,rating,type,tags
The Crown,8,series,productive
Interstellar,9,movie,new
Blinding Lights (Song),8.5,new_song,productive
```

Supported types:

- `series`
- `movie`
- `new_song`

Supported tags (comma-separated):

- `productive`
- `series`
- `movie`
- `new_song`

## Deploying to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "20"

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Push to your repository and it will automatically deploy!

### Option 2: Manual Deployment

```bash
# Build the project
npm run build

# Deploy the dist folder to GitHub Pages
```

### Update vite.config.js for Custom Domain

If deploying to a repo with a different name:

```javascript
// vite.config.js
export default defineConfig({
  base: "/repo-name/", // replace with your repo name
  // ... rest of config
});
```

For GitHub Pages user/org site, use `/`.

## Project Structure

```
my-watchbox/
├── public/
│   └── watchbox.csv              # Your watchbox data
├── src/
│   ├── components/
│   │   ├── WatchboxTable.jsx     # Main table component
│   │   └── WatchboxTable.css     # Component styles
│   ├── App.jsx                   # Main app component
│   ├── App.css                   # App styles
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── index.html                    # HTML template
├── vite.config.js                # Vite configuration
└── package.json                  # Dependencies
```

## Adding More Data

Simply edit `public/watchbox.csv` and add new rows. The component will automatically detect changes.

Example:

```csv
title,rating,type,tags
The Last of Us,9,series,productive;new
Avatar: The Way of Water,8,movie,new
Dynamite (Song),7,new_song,productive
```

## Customization

### Change Colors

Edit `src/components/WatchboxTable.css` to customize the color scheme and styling.

### Add More Tags or Types

1. Add new entries to your CSV file
2. Update the `getTypeIcon()` and `getTagColor()` functions in `src/components/WatchboxTable.jsx` to support them

## Tech Stack

- **React 18** - UI library
- **Vite 5** - Build tool and dev server
- **CSS3** - Styling with gradients and animations

## License

MIT - Feel free to use and customize for your needs!
