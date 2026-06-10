function PortfolioViewModel() {
  this.name = ko.observable("Taylor Poe");
  this.tagline = ko.observable("Full-Stack Software Developer and Tech Lead");
}

ko.applyBindings(new PortfolioViewModel());