# Plan: Migrate Knockout Portfolio to Modular SPA with Webpack

## TL;DR
Convert flat structure to a modular single-page app using Knockout.js with:
- Custom observable-based router
- Organized page components (home, about, contact, not-found)
- Shared nav-bar component
- Webpack bundling with CSS, HTML loaders, and dev server
- Modern npm-based build pipeline

## Steps

### Phase 1: Project Configuration & Setup
1. Create `package.json` with dependencies: `knockout`, `webpack`, `webpack-cli`, `webpack-dev-server`, and loaders (`style-loader`, `css-loader`, `html-loader`, `copy-webpack-plugin`)
2. Create `webpack.config.js` with:
   - Entry: `src/app.js`
   - Output: `dist/` with bundle.js and main.css
   - HTML loader for `.html` template files (as strings for component templates)
   - CSS loaders for bundling styles
   - Dev server config (port 8080, hot reload)
   - Copy plugin for assets folder to dist
3. Create `src/` directory structure as specified
4. Update `.gitignore` to exclude `node_modules/`, `dist/`, and local files

### Phase 2: Router & Application Core
1. Create `src/router/router.js`:
   - Export `routes` array (mapping path → component name)
   - Export `currentRoute` observable (tracks active route)
   - Export `navigate(path)` function to change route
   - Simple hash-based or path-based routing detection
2. Create `src/app.js`:
   - Import router, Knockout, and all page components
   - Register all components with `ko.components.register()`
   - Set up router initialization
   - Export root ViewModel with `currentRoute` for shell binding
   - Call `ko.applyBindings()` on root ViewModel

### Phase 3: Pages & Components (Can run in parallel with Phase 2)
1. **Create page components** (each with `.js` ViewModel + `.html` template):
   - `src/pages/home/` — home.js, home.html
   - `src/pages/about/` — about.js, about.html
   - `src/pages/contact/` — contact.js, contact.html
   - `src/pages/not-found/` — not-found.js, not-found.html
2. **Create shared component**:
   - `src/components/nav-bar/` — nav-bar.js, nav-bar.html
3. Migrate existing portfolio data (name, tagline) into home page ViewModel

### Phase 4: Styles & Assets
1. Move `css/styles.css` → `src/styles/main.css` and import in `src/app.js`
2. Create `assets/` folder structure with `images/` and `fonts/` subdirectories
3. Update main.css with component-specific styles (nav-bar, pages, etc.)

### Phase 5: HTML Shell & Build Integration
1. Update `index.html`:
   - Replace inline scripts with single `<script src="dist/bundle.js"></script>`
   - Add `<router-outlet></router-outlet>` or component binding for current page
   - Include nav-bar component at top
   - Remove old script tags and CSS link (bundled by webpack)
2. Create npm scripts in package.json:
   - `npm run build` → webpack production build
   - `npm start` → webpack dev server
   - `npm run watch` → webpack watch mode

## Relevant Files
- `package.json` — All npm dependencies and build scripts
- `webpack.config.js` — Bundling, loaders, dev server configuration
- `src/app.js` — Entry point: register components, init router, apply bindings
- `src/router/router.js` — Custom observable-based routing logic
- `src/pages/*/` — Page components (home, about, contact, not-found)
- `src/components/nav-bar/` — Shared navbar component
- `src/styles/main.css` — Centralized stylesheet (bundled)
- `index.html` — Single shell with `<router-outlet>` binding

## Verification
1. **Structure verification**: Confirm all files/folders created as specified
2. **Build test**: Run `npm install && npm run build` — should generate `dist/bundle.js` and `dist/main.css`
3. **Dev server test**: Run `npm start` — webpack dev server should start on http://localhost:8080
4. **Page routing**: Navigate between pages in browser — currentRoute observable should update, correct page component should render
5. **Styles applied**: Verify CSS is bundled and page styling is applied (background color, layout)
6. **Assets accessible**: Confirm images/fonts load from `dist/assets/` (if any exist)

## Decisions
- **Routing**: Custom Knockout observable-based router (no external router library)
- **Module loading**: HTML loader treats `.html` files as text strings (imported into JS components)
- **CSS handling**: CSS bundled into single `dist/main.css` by webpack
- **Dev server**: Enabled for local development with hot module replacement
- **Existing code**: Portfolio data (name, tagline) migrates to home page ViewModel

## Decisions (Finalized)
✅ **Component namespacing**: Dash-case (e.g., `home-page`, `nav-bar`)
✅ **Navbar highlighting**: Enabled — nav-bar subscribes to `currentRoute` for active link display
✅ **Default landing page**: `/home` on initial load
