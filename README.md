# Penn Spark Website

## About

The Penn Spark website is a React + TypeScript application built with Vite, showcasing Spark's projects, community members, and initiatives. The site features interactive components, project portfolios organized by semester, and a community directory.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd spark-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Development

### Project Structure

- **`src/components/`** - Reusable React components
  - `banners/` - Hero banners used across pages
  - `ui-elements/` - Small UI components (buttons, boxes, etc.)
  - `about-components/`, `community-components/`, `cover-components/`, `join-components/`, `projects-components/` - Page-specific components

- **`src/pages/`** - Page components and layouts
  - `projects-pages/` - Individual project pages organized by semester (fall21, spring22, etc.)

- **`src/data/`** - Static data files
  - `allProjects.ts` - Project metadata
  - `allCommunity.ts` - Community member information
  - `resources.ts` - Join page resources
  - `contributors.ts` - Contributor information

- **`public/`** - Static assets
  - `project-images/` - Images organized by semester
  - `cover-images/`, `community-images/`, `icons/`, etc.

### Available Scripts

- **`npm run dev`** - Start development server (Vite)
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run deploy`** - Build and deploy to production
- **`npm run lint`** - Run ESLint

### Code Style

- TypeScript is used for type safety
- Components use functional components with hooks
- CSS modules or inline styles for styling (see existing components)
- Follow the naming conventions and patterns established in existing code

## Updating Content

### Adding/Updating Projects

1. Add project metadata to [src/data/allProjects.ts](src/data/allProjects.ts)
2. Add project images to `public/project-images/<semester>/`
3. Create a new project page in `src/pages/projects-pages/<semester>/` if needed
4. Update the project route in your page if adding a new semester

### Updating the Community Directory

1. Edit [src/data/allCommunity.ts](src/data/allCommunity.ts) to add or update community member information
2. Add headshots to `public/community-images/headshots/`
3. Organize community data by role/semester as shown in the file

### Updating Projects Pages

Project pages are located in [src/pages/projects-pages/](src/pages/projects-pages/) organized by semester. Each project follows the `ProjectLayout.tsx` template:

1. Create a new `.tsx` file in the appropriate semester folder
2. Define project details (title, description, team, images, etc.)
3. Export the component for routing
4. **Important**: Use `pageKey` as a universal identifier for file paths, unique IDs, and URLs. The `pageKey` should match the file name (without extension) and be used consistently for routing, imports, and data references.

To update the 'recent projects' carousel in the cover page, edit the semester name input in the Cover.tsx file's ProjectCarousel component

### Updating the Substack Feed

The Substack feed is fetched and cached:

1. Run the fetch script to update the feed:
```bash
node scripts/fetchSubstackFeed.mjs
```

2. This generates/updates [src/lib/substackFeed.ts](src/lib/substackFeed.ts) with the latest articles
3. The feed is displayed on the Cover page via `SubstackGrid.tsx`

## Deploying the Site

Deploy to production with:
```bash
npm run deploy
```

This command:
1. Builds the site for production
2. Deploys to the configured hosting (typically GitHub Pages or Vercel)

Ensure all changes are committed before deploying.

## Build Configuration

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type checking
- **ESLint** - Code linting

Configuration files:
- [tsconfig.json](tsconfig.json) - TypeScript configuration
- [vite.config.ts](vite.config.ts) - Vite configuration
- [eslint.config.js](eslint.config.js) - ESLint configuration

## Misc Developer Information

- The site is fully responsive and mobile-friendly
- Images should be optimized before adding to the project
- Use semantic HTML and accessible components
- Test locally with `npm run dev` before deploying
- Check console for TypeScript and ESLint warnings during development