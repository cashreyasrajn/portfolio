export interface Service {
  icon: string;
  title: string;
  tagline: string;
  slug: string;
  description: string;
  points: string[];
  href: string;
}

export const services: Service[] = [
  {
    icon: "apartment",
    title: "Corporate Compliance",
    tagline: "ROC & MCA Filings",
    slug: "corporate-compliance",
    description:
      "Comprehensive corporate compliance services to ensure adherence to regulatory requirements and maintain proper governance practices for a company. This includes routine filings with the Registrar of Companies (ROC), timely submission of compliance reports and fulfilling mandatory legal obligations. Regular reviews and updates and end-to-end maintenance of your company's legal standing.",
    points: [
      "ROC & MCA filings",
      "Compliance reports & returns",
      "Statutory registers & records",
      "Governance & legal maintenance",
    ],
    href: "/services/corporate-compliance",
  },
  {
    icon: "fact_check",
    title: "Assurance Services",
    tagline: "Statutory, Internal & Tax Audit",
    slug: "audit-assurance",
    description:
      "Our assurance services offer an independent evaluation of financial statements, internal controls, and business operations. This includes statutory audits, internal audits, and tax audits to ensure accuracy and reliability in financial reporting. These services along with our independent and unbiased opinions enhance investor confidence, safeguard assets, and help organizations identify operational inefficiencies.",
    points: [
      "Statutory audit",
      "Internal audit",
      "Tax audit",
      "Financial reporting review",
    ],
    href: "/services/audit-assurance",
  },
  {
    icon: "rocket_launch",
    title: "Business Setup & Incorporation",
    tagline: "Start to Scale",
    slug: "business-setup",
    description:
      "Complete solutions for setting up businesses, including selecting the right legal structure, registering with the relevant authorities, and obtaining necessary licenses. Our services cover everything from documentation preparation to compliance with local, state, and central regulations. Our expertise is being a one stop solution enabling businesses to start on the right foot.",
    points: [
      "Business structure advisory",
      "Company & LLP incorporation",
      "Registrations & licenses",
      "Documentation support",
    ],
    href: "/services/business-setup",
  },
  {
    icon: "insights",
    title: "Management Consultancy",
    tagline: "Strategy & Operations",
    slug: "management-consultancy",
    description:
      "Strategic advice aimed at improving business performance, driving growth, and enhancing operational efficiency. Services include business diagnostics, change management, and process optimization tailored to meet specific organizational goals. This consultancy service helps streamline operations, improve profitability, and navigate business challenges at both levels of transactional & structural.",
    points: [
      "Business diagnostics",
      "Change management",
      "Process optimization",
      "Growth strategy",
    ],
    href: "/services/management-consultancy",
  },
  {
    icon: "account_balance",
    title: "Virtual CFO Services",
    tagline: "Financial Leadership, On Demand",
    slug: "virtual-cfo",
    description:
      "A star service offering of Shreyas Raj & Co for your businesses, which includes but not limited to book-keeping, compliance management, MIS reporting, financial analysis, and strategic decision-making, without the need for a full-time CFO. These services offer high-level financial expertise for small to mid-sized businesses, enabling better cash flow management and financial strategy.",
    points: [
      "Book-keeping",
      "MIS & financial reporting",
      "Cash flow management",
      "Financial strategy",
    ],
    href: "/services/virtual-cfo",
  },
  {
    icon: "account_tree",
    title: "Business Process Reengineering",
    tagline: "Workflow Optimization",
    slug: "business-process-reengineering",
    description:
      "Revamping/Restructuring business processes to increase efficiency or reduce redundancies. Developing SOPs for your processes. This involves analyzing existing workflows, identifying bottlenecks, and re-engineering processes for optimal performance. By leveraging modern tools and methodologies, we ensure your business processes are agile, cost-effective, and aligned with business goals.",
    points: [
      "Workflow analysis",
      "SOP development",
      "Process redesign",
      "Efficiency improvement",
    ],
    href: "/services/business-process-reengineering",
  },
  {
    icon: "request_quote",
    title: "Taxation Consultancy",
    tagline: "Direct & Indirect Tax",
    slug: "taxation-consultancy",
    description:
      "Expert guidance on tax planning, compliance, and strategic tax solutions to ensure regulatory adherence. Services include assistance with direct and indirect tax filings, tax audits, and representation before tax authorities. We also help clients make use of available incentives to optimize their tax position.",
    points: [
      "Tax planning",
      "Direct & indirect tax filings",
      "Tax audit",
      "Representation before authorities",
    ],
    href: "/services/taxation-consultancy",
  },
  {
    icon: "payments",
    title: "Payroll Processing & Compliance",
    tagline: "Salaries & Statutory Compliance",
    slug: "payroll-processing",
    description:
      "End-to-end payroll services, ensuring accurate and timely payment of salaries, deductions, and compliance with statutory requirements. Our services also include preparing and filing payroll-related tax returns, managing employee benefits, and handling any regulatory updates. This helps businesses stay compliant while reducing administrative burdens and improving employee satisfaction.",
    points: [
      "Salary processing",
      "Statutory compliance",
      "Payroll tax returns",
      "Employee benefits management",
    ],
    href: "/services/payroll-processing",
  },
  {
    icon: "pie_chart",
    title: "AIF Compliance & Structuring",
    tagline: "AI Funds & SEBI Compliance",
    slug: "aif-compliance-structuring",
    description:
      "We provide end-to-end Alternative Investment Fund (AIF) compliance and structuring services, supporting fund managers and investors through fund setup, regulatory structuring, documentation, and ongoing compliance requirements. Our services encompass fund structure evaluation, SEBI regulatory compliance, contribution and investment documentation, investor reporting, tax and accounting considerations, and coordination with legal and regulatory stakeholders. By combining regulatory expertise with commercial and operational insights, we help fund managers establish robust governance frameworks, maintain compliance, and efficiently manage the evolving requirements of their investment vehicles.",
    points: [
      "Fund structuring & setup",
      "SEBI regulatory compliance",
      "Fund & investor documentation",
      "Investor reporting & governance",
    ],
    href: "/services/aif-compliance-structuring",
  },
  {
    icon: "terminal",
    title: "Technology & Innovation Services",
    tagline: "ERP Selection & Implementation",
    slug: "technology-innovation",
    description:
      "We provide end-to-end ERP selection and implementation services, guiding organizations through platform evaluation, system configuration, and seamless deployment across Finance, HRMS, CRM, Supply Chain, and Workforce Management. Our services encompass process mapping, custom system integration, statutory compliance alignment, and ongoing change management to accelerate user adoption. By bridging technical deployment with operational workflows, we help businesses eliminate data silos, reduce administrative overhead, and drive scalable efficiency across every department.",
    points: [
      "ERP selection & evaluation",
      "Implementation & configuration",
      "System integration",
      "Change management",
    ],
    href: "/services/technology-innovation",
  },
];

export const servicesHero = {
  headline: "Chartered accountancy services",
  subheadline:
    "Shreyas Raj & Co. is a Bengaluru-based chartered accountancy practice offering assurance, taxation, corporate compliance, business setup, and advisory services for individuals, professionals, and businesses.",
};
