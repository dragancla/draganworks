import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  PhoneIcon,
  EnvelopeIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage2 from '../images/portfolio/crud.jpg';
import porfolioImage3 from '../images/portfolio/resume.jpg';
import porfolioImage1 from '../images/portfolio/volvo-webdriverio.jpg';
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
  title: 'Anton Dragan - DevOps and Test Automation consultant',
  description: 'Website built to showcase my professional profile',
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
        I'm a Stockholm-based <strong className="text-stone-100">DevOps and Test Automation Engineer </strong>
        with over 10 years IT experience.{' '}
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I specialize in platform development, with a focus on frameworks, tooling, pipelines and cloud infrastructure.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I believe that to be successful in life one needs to be obsessive with their dreams and keep working towards
        them.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'CV',
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
  description: `I'm an IT freelance consultant with over 10 years of experience, primarily focusing on DevOps and Test Automation. Eengaged in multiple parts of software development, continuously learning new languages and very interested in trying out emerging technologies and solutions. Some of my most recent clients are Klarna, Sinch, Hallon, Tink and Volvo.`,
  aboutItems: [
    { label: 'Location', text: 'Stockholm, Sweden', Icon: MapIcon },
    { label: 'Age', text: '34', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Romanian/Swedish', Icon: FlagIcon },
    { label: 'Interests', text: 'Snowboarding, gardening, AI', Icon: SparklesIcon },
    { label: 'Study', text: `Master's in Cybersecurity`, Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Self-employed at DraganWorks AB', Icon: BuildingOffice2Icon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'JavaScript',
        level: 0,
      },
      {
        name: 'Python',
        level: 0,
      },
      {
        name: 'Java',
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
    ],
  },
  {
    name: 'Test automation frameworks',
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
        name: 'Robot Framework',
        level: 0,
      },
      {
        name: 'Appium',
        level: 0,
      },
      {
        name: 'Pact',
        level: 0,
      },
    ],
  },
  {
    name: 'CI/CD platforms',
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
        name: 'BuildKite',
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
      {
        name: 'Kubernetes',
        level: 0,
      },
    ],
  },
  {
    name: 'Monitoring and logging',
    skills: [
      {
        name: 'Prometheus-Grafana',
        level: 0,
      },
      {
        name: 'Elasticsearch-Kibana',
        level: 0,
      },
      {
        name: 'Application Insights',
        level: 0,
      },
      {
        name: 'Datadog',
        level: 0,
      },
      {
        name: 'New Relic',
        level: 0,
      },
    ],
  },
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
        name: 'Swedish',
        level: 8,
      },
      {
        name: 'French',
        level: 7,
      },
      {
        name: 'German',
        level: 6,
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
    description: 'Reactive static web app with TypeScript, Next.js & TailwindCss.',
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
    date: 'April 2024 - Present',
    location: 'DraganWorks AB',
    title: 'Freelance consultant',
    content: (
      <div>
        <p className="text-left">
          In April 2024 I have started my company DraganWorks AB and have since been working as a freelance consultant.
          The following were some of my clients:
        </p>
      </div>
    ),
  },
  {
    date: 'April 2024 - Present',
    location: 'Volvo Cars AB',
    title: 'DevOps & Test Automation Engineer',
    content: (
      <div>
        <p>
          <b>DEVELOPMENT & TOOLING</b>
        </p>
        <p className="text-left my-1">
          Python, Bash, Robot Framework, Jenkins, GitHub Actions, Microsoft Azure
        </p>
        <b>FOCUS AND RESPONSABILITIES</b>
        <ul className="flex flex-col text-left list-square ml-5">
          <li>Overhaul the test automation framework with Robot Framework</li>
          <li>Migrate all the CI pipelines from Jenkins to GitHub Actions</li>
          <li>Create bash scripts to automate CI processes</li>
          <li>Implement unit tests, linters, code quality gates, best practices</li>
          <li>Develop reusable workflows for iOS and Android repositories</li>
          <li>Implement feature-centric testing (only run tests related to specific code changes)</li>
          <li>Create reporters that post results via webhooks to Slack</li>
          <li>Maintain physical in-house CI machines (Mac Minis) and device farms</li>
          <li>Implement Simulator and Emulator testing scripts and CI workflows</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'November 2023 - April 2024',
    location: 'Tink AB',
    title: 'DevOps & Test Automation Engineer',
    content: (
      <div>
        <p>
          <b>DEVELOPMENT & TOOLING</b>
        </p>
        <p className="text-left my-1">
          JavaScript, TypeScript, Java, Pact, Jest, Amazon AWS, GitHub Actions, Buildkite, Kubernetes
        </p>
        <b>FOCUS AND RESPONSABILITIES</b>
        <ul className="flex flex-col text-left list-square ml-5">
          <li>Assess and create a detailed report of Tink's testing practices and suggest improvements</li>
          <li>Build the contract testing framework for frontend and backend services (REST, gRPC and Kafka)</li>
          <li>Create testing pipelines in GitHub Actions and Buildkite</li>
          <li>Deploy and maintain contract testing infrastructure to Kubernetes via Helm charts</li>
          <li>Infrastructure support for testing locally and within the build pipelines</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'October 2022 - July 2023',
    location: 'Hallon AB',
    title: 'DevOps & Test Automation Engineer',
    content: (
      <div>
        <p>
          <b>DEVELOPMENT & TOOLING</b>
        </p>
        <p className="text-left my-1">
          JavaScript, TypeScript, Bash, Python, YAML, Cypress, Jest, Azure DevOps, GitHub, Kubernetes, Microsoft Azure
        </p>
        <b>FOCUS AND RESPONSABILITIES</b>
        <ul className="flex flex-col text-left list-square ml-5">
          <li>Build the test automation framework with Cypress</li>
          <li>Dockerize the test automation framework and create test pipelines in Azure DevOps</li>
          <li>Create reporters that post results via webhooks to Slack and build status checks</li>
          <li>Set up infrastructure and deploy testing tools and dashboards via Azure Container Apps</li>
          <li>Infrastructure support for testing locally and in the build pipelines</li>
          <li>CI/CD pipelines optimizations</li>
          <li>Create app release pipelines to Apple Testflight and Google Console</li>
          <li>Maintain and upgrade Kubernetes clusters and associated node pools</li>
          <li>Upgrade and deploy services to Kubernetes</li>
          <li>Set up monitoring and alerts with Prometheus, Grafana and Application Insights</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'May 2022 - August 2022',
    location: 'CurbFood AB',
    title: 'DevOps & Test Automation Engineer',
    content: (
      <div>
        <p>
          <b>DEVELOPMENT & TOOLING</b>
        </p>
        <p className="text-left my-1">JavaScript, TypeScript, YAML, Playwright, Jest, GitHub, Kubernetes, GCP</p>
        <p>
          <b>FOCUS AND RESPONSABILITIES</b>
        </p>
        <ul className="flex flex-col text-left list-square ml-5">
          <li>Build the test automation framework with Playwright</li>
          <li>API testing with Jest, SuperTest and Postman</li>
          <li>Build and deploy test infrastructure with Cloud Build and Cloud Run</li>
          <li>Dockerize the test automation framework and creating test pipelines in GCP</li>
          <li>Create reporters that post results via webhooks to Slack and build status checks</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'September 2021 - May 2022',
    location: 'Sinch AB',
    title: 'DevOps & Test Automation Engineer',
    content: (
      <div>
        <p>
          <b>DEVELOPMENT & TOOLING</b>
        </p>
        <p className="text-left my-1">Python, jMeter, GitLab CI, Kubernetes, Flux</p>
        <p>
          <b>FOCUS AND RESPONSABILITIES</b>
        </p>
        <ul className="flex flex-col text-left list-square ml-5">
          <li>SMS and SMTP protocol testing</li>
          <li>Setting up best practices test automation processes</li>
          <li>Upgrading and expanding the automated test frameworks</li>
          <li>Automating load testing & reporting</li>
          <li>Maintaining test automation processes through CI/CD</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'March 2021 - September 2021',
    location: 'Klarna AB',
    title: 'DevOps & Test Automation Engineer',
    content: (
      <div>
        <p>
          <b>DEVELOPMENT & TOOLING</b>
        </p>
        <p className="text-left my-1">
          JavaScript, Groovy, Bash, Cypress, WebdriverIO, Appium, BrowserStack, Jenkins, BitBucket, Kubernetes, AWS
        </p>
        <b>FOCUS AND RESPONSABILITIES</b>
        <ul className="flex flex-col text-left list-square ml-5">
          <li>Upgrading and expanding the automated test frameworks: WebdriverIO and Cypress</li>
          <li>Jenkins pipeline features and maintenence</li>
          <li>React component testing and native app testing</li>
          <li>Tooling support for testing isolated features/packages</li>
          <li>Implement adaptive testing (only run tests related to specific code changes)</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'March 2021',
    location: 'Regent AB',
    title: 'Test Automation & DevOps Engineer',
    content: (
      <p className="text-left my-1">
        I was employed as a consultant at Regent AB between March 2021 and February 2024 where I was outsourced to
        multiple clients.
      </p>
    ),
  },
  {
    date: 'September 2018 - March 2021',
    location: 'LeoVegas AB',
    title: 'Test Automation & DevOps Engineer',
    content: (
      <div>
        <p>
          <b>DEVELOPMENT & TOOLING</b>
        </p>
        <p className="text-left my-1">
          JavaScript, Groovy, Bash, Java, YAML, WebdriverIO, Appium, Artillery, SuperTest, Pact, Jenkins, GitHub,
          Kubernetes, GCP
        </p>
        <p>
          <b>FOCUS AND RESPONSABILITIES</b>
        </p>
        <ul className="flex flex-col text-left list-square ml-5">
          <li>Setting up best practices and newest technologies in test automation</li>
          <li>Upgrading and expanding the automated test frameworks: WebdriverIO, SuperTest and Pact</li>
          <li>Configuring and maintaining an on-site mixed-device farm</li>
          <li>Automating load testing & reporting with jMeter and Artillery</li>
          <li>Maintaining test automation tools and environments through CI/CD in Jenkins and Kubernetes</li>
          <li>Teaching test automation procedures and best practices within the company</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'March 2016 - September 2018',
    location: 'Bitdefender SRL',
    title: 'Test Automation Engineer',
    content: (
      <div>
        <p>
          <b>DEVELOPMENT & TOOLING</b>
        </p>
        <p className="text-left my-1">Proprietary Python framework, Bamboo, BitBucket</p>
        <p>
          <b>FOCUS AND RESPONSABILITIES</b>
        </p>
        <ul className="flex flex-col text-left list-square ml-5">
          <li>Reviewing and commenting on product specifications and designs</li>
          <li>Creating test plans and test cases</li>
          <li>Performing tests against builds and test procedures</li>
          <li>Designing and implementing automated test suites in Python</li>
          <li>Analyzing multi-market problems and scenarios and identifying the root cause</li>
          <li>Ensuring the product fulfills all target requirements before each release</li>
          <li>Maintaining test automation procedures and best practices in Confluence</li>
        </ul>
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
      image:
        'https://media.licdn.com/dms/image/v2/C4D03AQGKTKygj4YXKg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1520082623750?e=1748476800&v=beta&t=2a9Rc9z_EL6HNjNiFmU7oHOFNvho_WQBLeFlA6B_LmQ',
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
      href: 'https://www.linkedin.com/in/anton-dragan',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/anton-dragan' },
  { label: 'E-mail', Icon: EnvelopeIcon, href: 'mailto:anton@dragan.works' },
  { label: 'Phone', Icon: PhoneIcon, href: 'tel:+46 70 146 90 74' },
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/dragancla' },
];
