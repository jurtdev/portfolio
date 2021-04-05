/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: false, // set to false to use static SVG
};

const greeting = {
  username: 'Christian Jurt',
  title: "Hi, I'm Christian",
  subTitle: emoji(
    "I'm an enthusiastic Frontend Developer 🚀 Enjoying my experience in designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    'https://drive.google.com/file/d/1ZSFj5aEorGu6F0KQuNVeR6ukTVfbmHVC/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/jurtdev',
  linkedin: 'https://www.linkedin.com/in/christianjurt',
  gmail: 'jurt.dev@gmail.com',
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: 'https://medium.com/@davidrakosi',
  // stackoverflow: 'https://stackoverflow.com/users/13263979/drakosi',
  tiktok: 'https://www.tiktok.com/@jurtdev',
  instagram: 'https://www.instagram.com/jurtdev/',
  twitter: 'https://twitter.com/jurtdev',
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle:
    'VERY CREATIVE FRONTEND DEVELOPER WHO WANTS EXPLORE THE CREATION OF INVOVATIVE APPS',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
    ),
    emoji('⚡ Build projects from the ground up'),
    emoji('⚡ Integration of third party services such as Firebase'),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'fab fa-sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    // {
    //   skillName: 'swift',
    //   fontAwesomeClassname: 'fab fa-swift',
    // },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Algonquin College',
      logo: require('./assets/images/ac_logo.jpeg'),
      subHeader: 'Mobile Application Design & Development',
      duration: 'September 2016 - April 2018',
      desc: 'Project Lead for development of Algonquin Times Mobile App',
      descBullets: [
        'Elected Class Rep',
        'Graduated with honors',
        'Mentored fellow students',
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend / Design',
      progressPercentage: '90%',
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '90%',
    },
  ],
  displayCodersrank: false,
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Frontend Developer',
      company: 'The SQ App',
      companylogo: require('./assets/images/jurtdev_logo.jpg'),
      date: 'December 2020 – Present',
      desc: 'Changing lives of developers one line of code at a time.',
      descBullets: [
        'Custom building a web app from concept to app store',
        'Consulting',
        'Wirframes & Mockup Design',
        'JavaScript & React',
        'Leading Zoom Meetings',
      ],
    },
    {
      role: 'Web Developer',
      company: 'The Meus Productions',
      companylogo: require('./assets/images/meus.png'),
      date: 'June 2018 – Dec 2020',
      desc: 'Creating communication based software for internal company use.',
    },
    {
      role: 'Courseware Software Developer',
      company: 'Federal Gov. of Canada',
      companylogo: require('./assets/images/canada.png'),
      date: 'June 2017 – June 2018',
      desc:
        'Design and development of inhouse course creating web based software.',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'jurtdev', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Projects',
  subtitle: "Some personal and/or freelance projects I've enjoyed working on.",
  projects: [
    {
      image: require('./assets/images/ww_logo.png'),
      projectName: 'World Watcher',
      projectDesc:
        'A web app I created that lets users watch over 150 live web cams from around the world',
      footerLink: [
        {
          name: 'Visit Website',
          url: 'http://worldwatcher.herokuapp.com',
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require('./assets/images/slack.png'),
      projectName: 'Slack Clone',
      projectDesc:
        'I made a clone of the slack app. Users can login, create channels and chat with eachother. Data is stored on Firebase. ',
      footerLink: [
        {
          name: 'Visit Website',
          url: 'https://slack-clone-88bf2.firebaseapp.com/',
        },
      ],
    },
    {
      image: require('./assets/images/actress.png'),
      projectName: 'Actress Portfolio Website',
      projectDesc:
        "Here is a freelance project I completed. It is a single page website tailored for an actress that showcases her reels, headshots and current projects. Vistors can download her resume and find her agent's contact info.",
      footerLink: [
        {
          name: 'Visit Website',
          url: 'http://www.carlyfawcett.com',
        },
      ],
    },
    {
      image: require('./assets/images/at_app.png'),
      projectName: 'Algonquin Times App',
      projectDesc:
        'I was the project lead, in charge of building mobile app for the Algonquin Times. I led a team of 7 developers and designers. I took the project from the clients imagination and was able to develop a successful product that landed on the app store.',
      footerLink: [
        {
          name: 'Visit Article',
          url:
            'https://algonquintimes.com/innovations/become-a-reporter-with-the-algonquin-times-app/',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: require('./assets/images/codeInLogo.webp'),
      footerLink: [
        {
          name: 'Certification',
          url: '',
        },
        {
          name: 'Award Letter',
          url: '',
        },
        {
          name: 'Google Code-in Blog',
          url: '',
        },
      ],
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: require('./assets/images/googleAssistantLogo.webp'),
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url: '',
        },
      ],
    },

    {
      title: 'PWA Web App Developer',
      subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
        { name: 'Certification', url: '' },
        {
          name: 'Final Project',
          url: '',
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(''),

  talks: [
    {
      title: '',
      subtitle: '',
      slides_url: '',
      event_url: '',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [''],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Wanna talk about an exciting project or opportunity? My door is always open.',
  number: '(613) 850-8529',
  email_address: 'jurt.dev@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'jurtdev', //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
