type Route = {
  title: string;
  titleFr?: string;
  path: string;
};

type FooterCol = {
  id: number;
  title: string;
  titlefr?: string;
  links: {
    name: string;
    nameFr?: string;
    link?: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
};

export const routes: Route[] = [
  {
    title: 'Home',
    titleFr: 'Accueil',
    path: '/',
  },
  {
    title: 'Projects',
    titleFr: 'Projets',
    path: '/projects',
  },
];

export const footer: Footer = {
  columns: [
    {
      id: 1,
      title: 'Pages',
      titlefr: 'Pages',
      links: [
        {
          name: 'Home',
          nameFr: 'Accueil',
          link: '/',
          leavesWebsite: false,
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: 'Projects',
          nameFr: 'Projets',
          link: '/projects',
          leavesWebsite: false,
        },
      ],
    },
    {
      id: 2,
      title: 'Social',
      titlefr: 'Social',
      links: [
        {
          name: 'GitHub',
          link: 'https://github.com/xulaq',
          icon: '/static/icons/github-f.svg',
          leavesWebsite: true,
        },
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/xulaq/',
          icon: '/static/icons/linkedin-f.svg',
          leavesWebsite: true,
        },
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/xulaq',
          icon: '/static/icons/facebook.svg',
          leavesWebsite: true,
        },
        // {
        //   name: 'Email',
        //   link: 'mailto:achikh200@gmail.com',
        //   icon: '/static/icons/mail-f.svg',
        //   leavesWebsite: true,
        // },
      ],
    },
    {
      id: 3,
      title: 'Where to find me  : ',
      titlefr: 'Où me trouver  :',
      links: [],
    },
  ],
};
