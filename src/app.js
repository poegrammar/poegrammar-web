import ko from 'knockout';
import { currentRoute, navigate, initializeRouter } from './router/router';

// Import styles
import './styles/main.css';

// Import page ViewModels
import { HomePageViewModel } from './pages/home/home';
import { AboutPageViewModel } from './pages/about/about';
import { ContactPageViewModel } from './pages/contact/contact';
import { NotFoundPageViewModel } from './pages/not-found/not-found';

// Import page templates
import homeTemplate from './pages/home/home.html';
import aboutTemplate from './pages/about/about.html';
import contactTemplate from './pages/contact/contact.html';
import notFoundTemplate from './pages/not-found/not-found.html';

// Import shared components
import { NavBarViewModel } from './components/nav-bar/nav-bar';
import navBarTemplate from './components/nav-bar/nav-bar.html';

// Root ViewModel
function AppViewModel() {
  this.currentRoute = currentRoute;
  this.navigate = navigate;
}

// Register all components
// Pages
ko.components.register('home-page', {
  viewModel: HomePageViewModel,
  template: homeTemplate,
});

ko.components.register('about-page', {
  viewModel: AboutPageViewModel,
  template: aboutTemplate,
});

ko.components.register('contact-page', {
  viewModel: ContactPageViewModel,
  template: contactTemplate,
});

ko.components.register('not-found-page', {
  viewModel: NotFoundPageViewModel,
  template: notFoundTemplate,
});

// Shared components
ko.components.register('nav-bar', {
  viewModel: NavBarViewModel,
  template: navBarTemplate,
});

// Initialize and apply bindings
initializeRouter();
const app = new AppViewModel();
ko.applyBindings(app, document.getElementById('app'));