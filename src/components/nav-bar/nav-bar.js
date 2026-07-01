import ko from 'knockout';
import { currentPath, navigate } from '../../router/router';

function MenuItem(path, label) {
  this.path = path;
  this.label = label;
  this.isActive = ko.computed(() => currentPath() === path);
}

function NavBarViewModel() {
  this.currentPath = currentPath;
  this.navigate = navigate;

  this.menuItems = [
    new MenuItem('home', 'Home'),
    new MenuItem('about', 'About'),
    new MenuItem('apps', 'Apps'),
    new MenuItem('contact', 'Contact'),
  ];
}

export { NavBarViewModel };