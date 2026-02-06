# Spark Website :-)

## About

Built with React/Typescript/Tailwind/Vite. The website showcases Spark's latest projects, community members, and initiatives, serving as a digital hub for our club! Featuring interactive components and banners, project portfolios, and a community directory.

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PennSpark/pennspark.github.io.git
cd spark-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server for local testing:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Development

### Project Structure

- **`src/components/`** - Reusable React components
  - `banners/` - Hero banners used across pages
  - `ui-elements/` - Small custom UI components (buttons, boxes, etc.)
  - `about-components/`, `community-components/`, `cover-components/`, `join-components/`, `projects-components/` - Page-specific components

- **`src/pages/`** - Base layouts for each page (router is in App.tsx)
  - `projects-pages/` - Individual project pages organized by semester (fall21, spring22, etc.)

- **`src/data/`** - Static data files
  - `allProjects.ts` - Project metadata
  - `allCommunity.ts` - Community member information
  - `resources.ts` - Join page resources
  - `contributors.ts` - Contributor information

- **`public/`** - Static assets (try to keep images in .webp format for efficiency!)
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
- CSS classes for reusable styling, inline Tailwind for one-time styles (see existing components)
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

To help manage unreliable api connection, the Substack feed is fetched automatically upon build/deploy and stored as a static file in [public/substack.xml] + updated dyamically on runtime via [src/lib/substackFeed.ts]. No real need to update this, but if any bugs arise, those files are the places to look.

## Deploying the Site

Deploy to production with:
```bash
npm run deploy
```

This command:
1. Builds the site for production
2. Deploys to Github Pages

Ensure all changes are committed before deploying.

**Important**: After deploymnt, visit the online Github repository's settings; at the bottom of the Pages tab, check the remote repository URL. It should be pennspark.org, but the configuration often resets when the website is redeployed... please check and update so the domain works correctly.

## Build Configuration

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type checking
- **ESLint** - Code linting

Configuration files:
- [tsconfig.json](tsconfig.json) - TypeScript configuration
- [vite.config.ts](vite.config.ts) - Vite configuration
- [eslint.config.js](eslint.config.js) - ESLint configuration