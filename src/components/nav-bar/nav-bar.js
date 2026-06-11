import ko from 'knockout';
import { currentPath, navigate } from '../../router/router';

function NavBarViewModel() {
  this.currentPath = currentPath;
  this.navigate = navigate;
  
  this.menuItems = [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'contact', label: 'Contact' }
  ];
  
  // Add this method for safer binding
  this.isActive = (path) => currentPath() === path;
}

export { NavBarViewModel };
