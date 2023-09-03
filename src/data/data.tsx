import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  DevicePhoneMobileIcon, 
  EnvelopeIcon, 
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-10.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Anton Dragan',
  description: "Website build to showcase my professional profile",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'references',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Anton Dragan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Stockholm based <strong className="text-stone-100">Test Automation and DevOps Engineer</strong> freelance consultant. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I specialize in platform development, with a focus on frameworks, tools, pipelines and infrastructure.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm currently living in Stockholm, Sweden and working as a freelance consultant with a focus on DevOps and Test Automation. I am engaged in various parts of software development, learning new languages and very interested in trying out emerging technologies and solutions. I believe that to be successful in life one needs to be obsessive with their dreams and keep working towards them.`,
  aboutItems: [
    {label: 'Location', text: 'Stockholm, Sweden', Icon: MapIcon},
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Romanian', Icon: FlagIcon},
    {label: 'Interests', text: 'Snowboarding & home improvement', Icon: SparklesIcon},
    {label: 'Study', text: `Master's in Cybersecurity`, Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Self-employed at DraganWorks AB', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Romanian',
        level: 10,
      },
      {
        name: 'French',
        level: 7,
      },
      {
        name: 'German',
        level: 6,
      },
      {
        name: 'Swedish',
        level: 6,
      },
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'JavaScript',
        level: 0,
      },
      {
        name: 'Typescript',
        level: 0,
      },
      {
        name: 'Bash',
        level: 0,
      },
      {
        name: 'YAML',
        level: 0,
      },
      {
        name: 'Groovy',
        level: 0,
      },
      {
        name: 'Python',
        level: 0,
      },
    ],
  },
  {
    name: 'Test Automation Frameworks',
    skills: [
      {
        name: 'Cypress',
        level: 0,
      },
      {
        name: 'WebDriverIO',
        level: 0,
      },
      {
        name: 'Playwright',
        level: 0,
      },
      {
        name: 'Appium',
        level: 0,
      },
      {
        name: 'jMeter',
        level: 0,
      },
    ],
  },
  {
    name: 'Pipelines',
    skills: [
      {
        name: 'Azure DevOps',
        level: 0,
      },
      {
        name: 'Jenkins',
        level: 0,
      },
      {
        name: 'GitHub Actions',
        level: 0,
      },
      {
        name: 'Bamboo',
        level: 0,
      },
      {
        name: 'GitLab',
        level: 0,
      },
    ],
  },
    {
    name: 'Cloud infrastructure',
    skills: [
      {
        name: 'Microsoft Azure',
        level: 0,
      },
      {
        name: 'Google Cloud Platform',
        level: 0,
      },
      {
        name: 'Amazon Web Services',
        level: 0,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Volvo Cars WebdriverIO framework',
    description: 'Complete WebdriverIO test automation framework example.',
    url: 'https://github.com/dragancla/volvo-webdriverio',
    image: porfolioImage1,
  },
  {
    title: 'Backend application & CI',
    description: 'Node.js app with Express, MySql and Sequelize and Azure DevOps build pipelines.',
    url: 'https://github.com/dragancla/regent-tech-demo',
    image: porfolioImage2,
  },
  {
    title: 'This website',
    description: 'Written with TypeScript, Next.js & TailwindCss.',
    url: 'https://github.com/dragancla/draganworks',
    image: porfolioImage3,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2014 - July 2016',
    location: 'Titu Maiorescu University',
    title: `Master's in Cybersecurity`,
    content: <p>Computer and Information Systems Security/Information Assurance.</p>,
  },
  {
    date: 'September 2011 - July 2014',
    location: 'Romanian-American University',
    title: `Bachelor's in Business Information Systems`,
    content: <p>Cybernetics, Statistics and Business Informatics.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2022 - July 2023',
    location: 'Hallon AB',
    title: 'Test Automation & DevOps Consultant',
    content: (
      <div>
        <p><b>Development:</b></p>
        <li>JavaScript, TypeScript, Bash, Python, YAML, Cypress, Jest, Azure DevOps CI, GitHub, Kubernetes, Microsoft Azure</li>
        <p><b>My focus:</b></p>
              <li>Build the test automation framework with Cypress</li>
              <li>Dockerizing the test automation framework and creating test pipelines in Azure DevOps</li>
              <li>Create reporters that post results via webhooks to Slack and build status checks</li>
              <li>Create and deploy testing tools and dashboards via Azure Container Apps</li>
              <li>Infrastructure support for testing locally and in build pipeline</li>
              <li>Set up Azure Container Apps infrastructure</li>
              <li>Optimizations and mainteinance of web build and deploy pipelines</li>
              <li>Creation of build and release pipelines for Apple Testflight and Google Console</li>
              <li>Maintenence and upgrade of Kubernetes cluster and associated node pools</li>
              <li>Upgrading and deploying services to Kubernetes</li>
              <li>Set up monitoring and alerts with Prometheus, Grafana and Application Insight</li>
      </div>
    ),
  },
  {
    date: 'May 2022 - August 2022',
    location: 'CurbFood AB',
    title: 'Test Automation & DevOps Consultant',
    content: (
      <div>
        <p><b>Development:</b></p>
        <li>Javascript, TypeScript, YAML, Playwright, GitHub, Kubernetes, GCP</li>
        <p><b>My focus:</b></p>
        <li>Build the test automation framework with Playwright</li>
        <li>Build and deploy test infrastructure with Cloud Build and Cloud Run</li>
        <li>Dockerizing the test automation framework and creating test pipelines in GCP</li>
        <li>Create reporters that post results via webhooks to Slack and build status checks</li>
      </div>
    ),
  },
  {
    date: 'September 2021 - May 2022',
    location: 'Sinch AB',
    title: 'Test Automation & DevOps Consultant',
    content: (
      <div>
        <p><b>Development:</b></p>
        <li>Python, jMeter, GitLab CI, Kubernetes, Flux</li>
        <p><b>My focus:</b></p>
        <li>SMS and SMTP protocol testing</li>
        <li>Setting up best practices test automation processes</li>
        <li>Upgrading and expanding the automated test frameworks</li>
        <li>Automating load testing & reporting</li>
        <li>Maintaining test automation processes through CI/CD</li>
      </div>
    ),
  },
  {
    date: 'March 2021 - September 2021',
    location: 'Klarna AB',
    title: 'Test Automation & DevOps Consultant',
    content: (
      <div>
        <p><b>Development:</b></p>
        <li>Javascript, Groovy, Bash, Cypress, WebdriverIO, Appium, BrowserStack, Jenkins CI, Bitbucket, Kubernetes, AWS</li>
        <p><b>My focus:</b></p>
        <li>React component testing and native app testing</li>
        <li>Tooling support for testing isolated features/packages</li>
        <li>Adaptive testing support, only run tests related to specific code changes</li>
        <li>Upgrading and expanding the automated test frameworks</li>
        <li>Jenkins pipeline features and maintenence</li>
      </div>
    ),
  },
  {
    date: 'March 2021 - October 2023',
    location: 'Regent AB',
    title: 'Test Automation & DevOps Engineer',
    content: (
      <p>
        I was employed as a consultant at Regent AB where I had 4 clients, listed above.
      </p>
    ),
  },
  {
    date: 'September 2018 - March 2021',
    location: 'LeoVegas AB',
    title: 'Test Automation & DevOps Engineer',
    content: (
      <div>
        <p><b>Development:</b></p>
        <li>Javascript, Groovy, Bash, Java, YAML, WebdriverIO, Appium, Artillery, SuperAgent, Pact, Jenkins CI, GitHub, Kubernetes, GCP</li>
        <p><b>My focus:</b></p>
        <li>Setting up best practices and newest technologies in test automation</li>
        <li>Upgrading and expanding the automated test frameworks</li>
        <li>Automating load testing & reporting</li>
        <li>Maintaining test automation processes through CI/CD</li>
        <li>Verifying that build and deploy pipelines are running and evaluating tests correctly</li>
        <li>Teaching test automation procedures and best practices within the company</li>
        <li>Ensuring that different kinds of tests cover the most important and relevant aspects of company services and applications</li>
      </div>
    ),
  },
  {
    date: 'March 2016 - September 2018',
    location: 'Bitdefender SRL',
    title: 'Test Automation Engineer',
    content: (
      <div>
        <p><b>Development:</b></p>
        <li>Proprietary Python framework, Bamboo CI, BitBucket</li>
        <p><b>My focus:</b></p>
        <li>Reviewing and commenting on product specifications and designs</li>
        <li>Creating test plans and test cases</li>
        <li>Performing tests against builds and test procedures</li>
        <li>Designing and implementing automated test suites in Python</li>
        <li>Analyzing various problems which can occur with our products in various market scenarios and identifying the root cause</li>
        <li>Ensuring the product fulfills all target requirements before each release</li>
        <li>Maintaining test automation procedures and best practices in Confluence</li>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Mihai Bubulac',
      text: 'I have never met a more analytical person than Anton when it comes to problem solving. He is always looking for ways to improve himself and in a short period, he was promoted from the support department to product testing. Keep up the good work!',
      image: 'https://media.licdn.com/dms/image/C4D03AQGKTKygj4YXKg/profile-displayphoto-shrink_800_800/0/1520082621366?e=1698883200&v=beta&t=LNlJEkaks32Tilfxz1kVso83Tb4SVaZeksdy1b-HQPE',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: `Contact`,
  description: `Phone, e-mail or LinkedIn, don't hesitate to get in touch!`,
  items: [
    {
      type: ContactType.Email,
      text: 'anton@dragan.works',
      href: 'mailto:anton@dragan.works',
    },
    {
      type: ContactType.Phone,
      text: '+46 70 146 90 74',
      href: 'tel:+46 70 146 90 74',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Anton Dragan',
      href: 'https://www.linkedin.com/in/claudiu-dragan',
    }
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/dragancla'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/claudiu-dragan'},
  {label: 'E-mail', Icon: EnvelopeIcon, href: 'mailto:anton@dragan.works'},
  {label: 'Phone', Icon: DevicePhoneMobileIcon, href: 'tel:+46 70 146 90 74'},
];
