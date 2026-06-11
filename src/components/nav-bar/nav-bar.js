import ko from 'knockout';
import { currentPath, navigate } from '../../router/router';

function NavBarViewModel() {
  this.currentPath = currentPath;
  this.navigate = navigate;
  
  // Menu items
  this.menuItems = [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'contact', label: 'Contact' }
  ];
  
  // Computed to check if a route is active
  this.isActive = function(path) {
    return ko.computed(() => currentPath() === path);
  };
}

export { NavBarViewModel };
