type Skill = {
  title: string;
  icon: string;
  style?: object;
};
type Testimonial = {
  quote: string;
  name: string;
  job: string;
};
type Stats = {
  icon: string;
  number: number;
  title: string;
};

export const skills: Skill[] = [
  {
    title: 'C#',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  },
  {
    title: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    title: 'Php',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  },
  {
    title: 'MySQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  },
  {
    title: 'Javascript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },

  {
    title: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    title: 'Spring Boot',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  },
  {
    title: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    title: 'Matlab',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
  },
  {
    title: 'Laravel',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  },
  {
    title: 'Wordpress',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
  },
  {
    title: 'Vuejs',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      'The communication throughout the project was spot on and the genre of design was carried out well.',
    name: 'Wilson Bright',
    job: 'Co-Founder of BlockSurvey',
  },
  {
    quote:
      'The code was clean, easy to understand, and exactly what I was looking for.',
    name: 'Philip Imperato',
    job: 'CEO of VisualBonus',
  },
  {
    quote:
      'My vision was executed perfectly. The quality and speed of the work was excellent.',
    name: 'Zach Green',
    job: 'Founder of Hangxiety Shrink',
  },
];

// export const stats: Stats[] = [
//   {
//     icon: ,
//     number: 15,
//     title: "projects completed",
//   },
//   {
//     icon: "",
//     number: 5,
//     title: "happy clients",
//   },
//   {
//     icon: "",
//     number: 1,
//     title: "awards received",
//   },
//   {
//     icon: "",
//     number: 7,
//     title: "crazy ideas",
//   },
//   {
//     icon: "",
//     number: 350,
//     title: "coffee cups",
//   },
//   {
//     icon: "",
//     number: 7200,
//     title: "hours",
//   },
// ];
