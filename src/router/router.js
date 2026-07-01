import ko from 'knockout';

// route configuration - maps paths to component names
const routes = [
  { path: 'home', component: 'home-page' },
  { path: 'about', component: 'about-page' },
  { path: 'apps', component: 'apps-page' },
  { path: 'contact', component: 'contact-page' },
];

// observable to track current route
const currentRoute = ko.observable('home-page');
const currentPath = ko.observable('home');

// map route path to component name
function getComponentFromPath(path) {
  // remove leading slash if present
  const cleanPath = path.replace(/^\//, '');
  
  // find route by path
  const route = routes.find(r => r.path === cleanPath);
  
  // return component name or 'not-found-page' if no match
  return route ? route.component : 'not-found-page';
}

// navigate to a path
function navigate(path) {
  const cleanPath = path.replace(/^\//, '');
  const component = getComponentFromPath(cleanPath);
  
  currentPath(cleanPath);
  currentRoute(component);
  
  // update URL
  window.location.hash = `#/${cleanPath}`;
}

// initialize router - listen for hash changes
function initializeRouter() {
  // initial page load
  const initialHash = window.location.hash.slice(1); // Remove #
  if (initialHash) {
    navigate(initialHash);
  } else {
    // default to home
    navigate('/home');
  }
  
  // listen for hash changes (back button, direct hash navigation)
  window.addEventListener('hashchange', () => {
    const path = window.location.hash.slice(1); // Remove #
    if (path) {
      const cleanPath = path.replace(/^\//, '');
      const component = getComponentFromPath(cleanPath);
      currentPath(cleanPath);
      currentRoute(component);
    }
  });
}

export { routes, currentRoute, currentPath, navigate, initializeRouter };
