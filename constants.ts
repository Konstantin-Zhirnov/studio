export const offers = [
  {
    title: 'Website Development',
    text: 'Our company offers a full range of services for developing websites of any complexity. We you need a corporate website, an online store, a blog, or a portfolio, our team of experienced developers and designers will bring your ideas to life. We provide:',
    src: '/images/web.svg',
    ul: [
      {
        span: 'Custom Design:',
        text: 'Development of exclusive designs that highlight the uniqueness of your brand.',
      },
      {
        span: 'Responsiveness:',
        text: 'Optimization of websites for proper display on all devices.',
      },
      {
        span: 'SEO Optimization:',
        text: 'Implementation of advanced methods to improve site visibility in search engines.',
      },
      {
        span: 'Security:',
        text: 'Data protection and ensuring safe operation of the site.',
      },
    ],
  },

  {
    title: 'Web Application Development',
    text: 'We specialize in creating powerful and efficient web applications that help automate and optimize business processes. Our solutions are tailored to the specific requirements of the client and include:',
    src: '/images/development.svg',
    ul: [
      {
        span: 'CRM Systems:',
        text: 'Management of client data and improvement of customer interactions.',
      },
      {
        span: 'ERP Systems:',
        text: 'Automation of internal processes and enhancement of resource management efficiency.',
      },
      {
        span: 'Online Booking Systems:',
        text: 'Convenient and reliable solutions for booking services.',
      },
      {
        span: 'Interactive Dashboards and Panels:',
        text: 'Data visualization and analytics for informed decision-making.',
      },
    ],
  },
  {
    title: 'Mobile Application Development',
    text: 'We create high-quality mobile applications for iOS and Android that feature intuitive interfaces and high performance. Our services include:',
    src: '/images/mobile.svg',
    ul: [
      {
        span: 'Native Development:',
        text: 'Creating applications that fully comply with the standards and guidelines of iOS and Android platforms.',
      },
      {
        span: 'Cross-Platform Development:',
        text: 'Developing applications using technologies that support multiple platforms simultaneously.',
      },
      {
        span: 'UI/UX Design:',
        text: 'Designing user-friendly and attractive interfaces that ensure excellent user interaction.',
      },
      {
        span: 'Support and Updates:',
        text: 'Regular updates to maintain the relevance and security of the applications.',
      },
    ],
  },
]

export type OfferType = {
  title: string
  text: string
  src: string
  ul: {
    span: string
    text: string
  }[]
}

export const animation = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: custom || 0.6 },
  }),
}
