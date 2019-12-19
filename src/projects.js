const projects = [
  {
    name: 'ToneLab',
    description:
      'A full-stack web-app where users can create and playback short musical sequences. Made with tone.js. ',
    liveSite: 'https://tonelab.quasar.now.sh/',
    repoClient: 'https://github.com/quasarwei/ToneLab',
    repoServer: 'https://github.com/quasarwei/sequencer-server',
    techStack: ['Tone.js', 'React', 'Node', 'Express', 'PostgreSQL'],
    images: [require('./assets/tonelab/editor-screenshot.webp')],
  },
  {
    name: 'Groop',
    description: 'An online task manager for groups and organizations',
    liveSite: 'https://grooplist.com',
    repoClient: 'https://github.com/joeyjr95/groop-client/',
    repoServer: 'https://github.com/quasarwei/groop-api/',
    techStack: [
      'React',
      'Node',
      'Express',
      'PostgreSQL',
      'Knex',
      'Mocha',
      'Chai',
    ],
    images: [
      require('./assets/groop/groop_agenda_all_rs.jpg'),
      require('./assets/groop/groop_sidebar_group_rs.jpg'),
      require('./assets/groop/groop_account_settings_rs.jpg'),
      // require('./assets/groop/groop_edit_task_rs.jpg'),
    ],
  },
  {
    name: 'Learn Morse Code',
    description:
      'A full-stack web-app that utilizes spaced repetition to help people learn morse code. ',
    liveSite: 'https://m-o-r-s-e.now.sh/',
    repoClient:
      'https://github.com/thinkful-ei-gecko/quasar-nandana-spaced-repetition-client',
    repoServer:
      'https://github.com/thinkful-ei-gecko/quasar-nandana-spaced-repetition-server',
    techStack: ['React', 'Node', 'Express', 'PostgreSQL'],
    images: [
      // require('./assets/morse/morse-signup-m_rs.jpg'),
      require('./assets/morse/morse-dash-m_rs.jpg'),
      require('./assets/morse/morse-learn-m_rs.jpg'),
      require('./assets/morse/morse-answer-m_rs.jpg'),
    ],
  },
  {
    name: 'Bookmarks App',
    description:
      'A web application utilizing a RESTful API to add, view, and edit bookmarks for websites ',
    liveSite: 'https://thinkful-ei-gecko.github.io/quasar-bookmarks-app/',
    repoClient: 'https://github.com/thinkful-ei-gecko/quasar-bookmarks-app',
    repoServer: '',
    techStack: ['HTML', 'CSS', 'jQuery'],
    images: [
      require('./assets/bookmarks-app/desktop/bookmarks-desktop-rs.jpg'),
    ],
  },
];
module.exports = projects;
