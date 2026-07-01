function StackItem(label, value) {
  this.label = label;
  this.value = value;
}

function AppEntry(name, tagline, description, stack, url) {
  this.name = name;
  this.tagline = tagline;
  this.description = description;
  this.stack = stack.map((s) => new StackItem(s.label, s.value));
  this.url = url || null;
}

function AppsPageViewModel() {
  this.title = 'Apps';
  this.intro = 'A few projects I\'ve been motivated to build for myself and others. Feel free to explore them.';

  this.apps = [
    new AppEntry(
      'poegrammar.com',
      'This Portfolio Website',
      'The site you\'re looking at right now — a single-page app built with Knockout.js, using hash-based routing for the nav, and a custom Outrun/Synthwave theme.',
      [
        { label: 'Client', value: 'Knockout.js, Webpack' },
        { label: 'Server', value: 'Static (no backend)' },
        { label: 'Database', value: 'N/A' },
        { label: 'Hosting', value: 'GitHub Pages (prod: poegrammar.com), Netlify (test: test.poegrammar.com)' },
      ]
    ),
    new AppEntry(
      'fit.poegrammar.com',
      'Fitness Tracking Web App',
      'A workout tracker for logging sessions, exercises, sets/reps/weights, and visualizing progress over time — including quick-reference recent activity, per-exercise analytics charts, and days-since tracking.',
      [
        { label: 'Client', value: 'React' },
        { label: 'Server', value: '.NET Core 10 Web API (C#)' },
        { label: 'Database', value: 'PostgreSQL' },
        { label: 'Hosting', value: 'Self-hosted (Docker, Nginx, ngrok on Ubuntu Server)' },
      ],
      'https://fit.poegrammar.com'
    ),
    new AppEntry(
      'Project Beta',
      'Personal finance dashboard',
      'A dashboard for tracking spending, budgets, and savings goals with automated insights.',
      [
        { label: 'Client', value: 'Vue, Tailwind CSS' },
        { label: 'Server', value: 'Python, FastAPI' },
        { label: 'Database', value: 'MongoDB' },
        { label: 'Hosting', value: 'Netlify + Render' },
      ],
      'https://example.com/project-beta'
    ),
  ];
}

export { AppsPageViewModel };
