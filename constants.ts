export const offers = [
  {
    title: 'Create a Website',
    text: "Create websites that stand out with our expert team of designers and developers. Whether you're launching your first site or upgrading an existing one, we build responsive, visually compelling websites tailored to your goals. From sleek portfolios to powerful e-commerce platforms, every project is optimized for performance, user experience, and search engines.",
    secondText:
      'Our company offers a full range of web development services — from corporate websites and blogs to online stores and personal portfolios. Whether you need to create website solutions from scratch or improve an existing platform, we’re here to help at every step.',
    thirdText: 'Here’s what we deliver:',
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
    title: 'Create a Web Application',
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
    title: 'Create a Mobile Application',
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
  reverse?: boolean
  secondText?: string
  src: string
  text: string
  thirdText?: string
  title: string
  ul: {
    span: string
    text: string
  }[]
}

export const animation = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      delay: custom || 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}
