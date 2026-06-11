import ko from 'knockout';
import { currentPath, navigate } from '../../router/router';

function NavBarViewModel() {
  this.currentPath = currentPath;
  this.navigate = navigate;
  
  // Menu items with active state computed
  this.menuItems = [
    { 
      path: 'home', 
      label: 'Home',
      isActive: ko.computed(() => currentPath() === 'home')
    },
    { 
      path: 'about', 
      label: 'About',
      isActive: ko.computed(() => currentPath() === 'about')
    },
    { 
      path: 'contact', 
      label: 'Contact',
      isActive: ko.computed(() => currentPath() === 'contact')
    }
  ];
}

export { NavBarViewModel };
