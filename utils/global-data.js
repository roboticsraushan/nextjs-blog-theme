export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'nolon';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Building the Future of Physical AI';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '© 2024 nolon. All rights reserved.';
  const contactEmail = process.env.CONTACT_EMAIL || 'hello@nolon.ai';

  return {
    name,
    blogTitle,
    footerText,
    contactEmail,
  };
};

export const getTeamData = () => {
  return {
    founders: [
      {
        name: 'Raushan Kumar',
        role: 'Co-founder',
        linkedin: 'https://www.linkedin.com/in/raushankumar586/',
        image: '/images/raushan.jpeg'
      },
      {
        name: 'Sathya Narayanan R',
        role: 'Co-founder', 
        linkedin: 'https://www.linkedin.com/in/sathya-narayanan-r-3aa21479/',
        image: '/images/sathya.jpeg'
      },
      {
        name: 'Vijeth Rai',
        role: 'Co-founder',
        linkedin: 'https://www.linkedin.com/in/vijethrai-1987/',
        image: '/images/vijeth.jpeg'
      }
    ]
  };
};
