export interface ProjectItem {
  id: string;
  number: string;
  badge: string;
  title: string;
  tagline: string;
  company: string;
  role: string;
  timeline: string;
  problem: string;
  whatIDid: string;
  productThinking: string;
  outcome: string;
  impactMetrics: { value: string; label: string }[];
  toolsTech: string[];
}

export interface CareerMilestone {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  progressionNote?: string;
  bullets: string[];
  subTracks?: {
    trackName: string;
    roleName: string;
    bullets: string[];
  }[];
}

export interface AchievementItem {
  id: string;
  award: string;
  organization: string;
  year: string;
  badge: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Muskan Sharma",
    corePositioning: "PRODUCT CONSULTANT",
    role: "Product Consultant",
    subhead: "AI • PRODUCT STRATEGY • ENTERPRISE SOLUTIONS",
    subheadline:
      "Product Consultant with ~4 years of experience combining a software engineering background with enterprise product strategy to translate customer needs into AI-powered products.",
    supportingStatement:
      "Product Consultant with ~4 years of experience combining a software engineering background with enterprise product strategy to translate customer needs into AI-powered products.",
    status: "Product Consultant • Enterprise AI",
    location: "Gurgaon / Delhi NCR, India",
    email: "muskan.sharma2712@gmail.com",
    phone: "+91 8373944571",
    calendlyUrl: "https://cal.com/muskan-sharma/15min",
    linkedinUrl: "https://www.linkedin.com/in/muskan-sharma-273128193/",
  },

  // Verified Metrics strictly from CV & enterprise delivery
  impactMetrics: [
    { value: "1L+", label: "Users Served", sub: "Across Production Deployments" },
    { value: "5+", label: "Enterprise Clients", sub: "Automotive & Enterprise Sector" },
    { value: "10+", label: "Product Roadmaps", sub: "Enterprise Solution PRDs" },
    { value: "15+", label: "Implementations", sub: "Live Production Systems" },
    { value: "25%+", label: "Query Automation", sub: "Multilingual Voice & Chat AI" },
    { value: "~10%", label: "Accuracy Gain", sub: "Chatbot Intent Tuning & UAT" },
    { value: "~8%", label: "Higher Conversions", sub: "Conversational Automotive Journeys" },
    { value: "~12%", label: "Revenue Contribution", sub: "Enterprise Paid POCs at DaveAI" },
    { value: "~22-25%", label: "Adoption Growth", sub: "Invest India NSWS Platform at TCS" },
  ],

  // 3 Enterprise AI Product Initiatives (CV Source of Truth)
  selectedWork: [
    {
      id: "genai-chatbot",
      number: "01",
      badge: "ENTERPRISE AI · AUTOMOTIVE",
      title: "GenAI Chatbot",
      tagline:
        "Launched one of the first GenAI-powered conversational chatbot experiences in the automotive sector.",
      company: "DaveAI",
      role: "AI Consultant / Product Delivery",
      timeline: "2024 — 2026",
      problem:
        "Automotive dealerships and enterprise clients faced fragmented customer communication, delayed lead responses, and heavy customer service bottlenecks that hurt pre-purchase conversions.",
      whatIDid:
        "Led product delivery from client requirement discovery to production deployment. Defined conversational workflows, WhatsApp automation flows, and prompt guardrails. Coordinated cross-functionally across engineering, cloud, and enterprise client stakeholders.",
      productThinking:
        "Structured a hybrid routing architecture: high-frequency transactional questions resolve through deterministic flows, while complex and open-ended queries leverage LLM context with strict boundary guardrails to eliminate hallucinations and protect customer data.",
      outcome:
        "Automated 25%+ of routine customer inquiries, improved intent accuracy by ~10% through iterative UAT, and deployed across enterprise dealer networks serving high-volume buyer traffic.",
      impactMetrics: [
        { value: "25%+", label: "Query Automation" },
        { value: "~10%", label: "Accuracy Gain" },
        { value: "1st in Auto", label: "Sector GenAI Launch" },
      ],
      toolsTech: ["Generative AI", "Conversational UX", "Prompt Engineering", "WhatsApp Automation", "REST APIs"],
    },
    {
      id: "voice-ai-assistant",
      number: "02",
      badge: "MULTILINGUAL · VOICE AUTOMATION",
      title: "Voice AI Assistant",
      tagline:
        "Multilingual voice AI experience automating routine telephone inquiries across diverse regional enterprise user bases.",
      company: "DaveAI",
      role: "AI Consultant / Product Delivery",
      timeline: "2024 — 2026",
      problem:
        "Traditional IVR phone systems experienced severe caller abandonment and high operational support costs due to rigid menu trees and lack of regional language comprehension.",
      whatIDid:
        "Managed voice bot requirements, speech-to-intent mapping, and turn-taking latency targets. Collaborated with engineering to integrate CRM webhooks for real-time customer identity and inquiry lookups.",
      productThinking:
        "Optimized for conversational turn-taking and low-latency speech pipelines, ensuring the voice agent gracefully handles interruptions, pauses, and regional accents without frustrating the caller.",
      outcome:
        "Successfully launched voice AI experiences across enterprise use cases, automating 25%+ of customer queries with zero agent wait time.",
      impactMetrics: [
        { value: "25%+", label: "Automated Calls" },
        { value: "Sub-Second", label: "Speech Pipeline" },
        { value: "Multilingual", label: "Dialect Support" },
      ],
      toolsTech: ["Speech-to-Text (STT)", "Text-to-Speech (TTS)", "Voice UX", "CRM Integrations", "Agile PRD"],
    },
    {
      id: "autosphere",
      number: "03",
      badge: "CONVERSATIONAL JOURNEYS · LEAD CONVERSION",
      title: "AutoSphere",
      tagline:
        "Personalized conversational AI journeys and interactive vehicle discovery suite improving campaign ROI and dealership lead conversion.",
      company: "DaveAI",
      role: "AI Consultant / Product Delivery",
      timeline: "2024 — 2026",
      problem:
        "Prospective automotive buyers were dropping off from static brochures and disconnected digital forms, leading to poor campaign ROI and lost showroom test-drive appointments.",
      whatIDid:
        "Designed conversational user journeys that translate buyer lifestyle preferences into personalized vehicle recommendations and direct dealership test-drive bookings.",
      productThinking:
        "Mapped user decision heuristics: buyers convert faster when inquiry forms are replaced with intuitive, scenario-based conversational discovery that qualifies intent before routing to local dealers.",
      outcome:
        "Drove ~8% higher lead conversion across automotive client campaigns and engaged 1L+ users with automated CRM handoff to local dealerships.",
      impactMetrics: [
        { value: "~8%", label: "Conversion Lift" },
        { value: "1L+", label: "Users Engaged" },
        { value: "High ROI", label: "Campaign Efficiency" },
      ],
      toolsTech: ["Conversational Funnels", "Product Strategy", "User Journey Design", "Tableau", "CRM Webhooks"],
    },
  ] as ProjectItem[],

  // Career Evolution: Technical Engineering -> BA -> Enterprise Product -> AI Consulting
  careerEvolution: [
    { step: "01", title: "SOFTWARE ENGINEERING", focus: "Java, Spring Boot, SQL, Systems Stability & Code Quality" },
    { step: "02", title: "BUSINESS ANALYSIS", focus: "Statutory Workflows, Requirement Gathering & Stakeholder Alignment" },
    { step: "03", title: "ENTERPRISE PRODUCT", focus: "PRDs, User Journeys, Cross-Functional Execution & Telemetry" },
    { step: "04", title: "AI PRODUCT CONSULTING", focus: "GenAI Chatbots, Voice AI Pipelines & Enterprise Solution Delivery" },
  ],

  // Experience: Strictly from CV
  experience: [
    {
      id: "daveai",
      company: "DaveAI",
      role: "AI Consultant / Product Delivery",
      period: "2024 – 2026",
      location: "Gurgaon, India",
      type: "Enterprise AI & Product Delivery",
      progressionNote: "Promoted to leading enterprise client discovery and multi-stakeholder delivery for production AI solutions.",
      bullets: [
        "Led delivery of enterprise AI and digital transformation solutions across automotive and enterprise clients, serving 1L+ users.",
        "Managed conversational AI, GenAI chatbot, WhatsApp automation, and voice bot initiatives from requirement discovery to production.",
        "Contributed ~12% of business revenue by converting enterprise opportunities into paid POCs through solution consulting.",
        "Gathered business requirements and translated them into 10+ enterprise product roadmaps and 15+ solution workflows.",
        "Coordinated with product, engineering, cloud, and client stakeholders for end-to-end execution across 15+ implementations.",
        "Automated 25%+ of customer queries through multilingual Voice AI and improved chatbot accuracy by ~10% through UAT tuning.",
        "Drove ~8% higher lead conversions via personalized conversational AI journeys for automotive clients.",
      ],
    },
    {
      id: "tcs",
      company: "Tata Consultancy Services (TCS)",
      role: "Assistant System Engineer",
      period: "2022 – 2024",
      location: "Delhi, India",
      type: "GovTech & Enterprise Systems",
      progressionNote: "Combined systems engineering rigor with national-scale business analysis across central government ministries.",
      subTracks: [
        {
          trackName: "Invest India — National Single Window System (NSWS)",
          roleName: "Business Analyst & Solution Delivery",
          bullets: [
            "Worked on the Invest India NSWS flagship digital transformation project to harmonize statutory clearance workflows.",
            "Participated in requirement discussions, gathered stakeholder needs, and validated workflows for timely solution delivery.",
            "Contributed to platform enhancements driving ~22–25% quarterly growth in website adoption.",
            "Received the Best Team Award at TCS for delivery excellence on the NSWS project.",
          ],
        },
        {
          trackName: "Enterprise Applications & Digital Commerce",
          roleName: "Assistant System Engineer",
          bullets: [
            "Supported backend application development using Java and Spring Boot for enterprise applications.",
            "Assisted in database optimization, SQL schema maintenance, and production support activities.",
            "Contributed to system enhancements in the enterprise inventory revamp portal with zero critical production defects.",
          ],
        },
      ],
      bullets: [],
    },
    {
      id: "consultadd",
      company: "ConsultAdd Services",
      role: "Management Trainee Engineer",
      period: "2021 – 2022",
      location: "Pune, India",
      type: "Technical Talent Acquisition & Operations",
      progressionNote: "Earned Pre-Placement Offer (PPO) within 6 months through rigorous technical screening and stakeholder coordination.",
      bullets: [
        "Managed end-to-end IT recruitment for technical hiring requirements across enterprise client accounts.",
        "Handled candidate sourcing, technical screening, interview coordination, and offer closure processes.",
        "Built talent pipelines for niche engineering roles, working closely with clients to ensure timely delivery.",
        "Earned Pre-Placement Offer (PPO) and recognized as a Top Intern Performer; twice awarded Star Performer of the Month (2022).",
      ],
    },
    {
      id: "edumaster",
      company: "EDUMaster ERP",
      role: "Java Development Intern",
      period: "May 2021 – Jun 2021",
      location: "Jaipur, India",
      type: "Software Engineering Internship",
      progressionNote: "Hands-on software development foundation in Java enterprise application architecture.",
      bullets: [
        "Worked with the development team on the EDUMaster ERP Tool supporting Java-based application development.",
        "Gained hands-on experience in enterprise software workflows, database queries, and backend application modules.",
      ],
    },
  ] as CareerMilestone[],

  // Capabilities: Strictly from CV Skills & Tooling
  capabilities: {
    product: [
      { name: "Product Strategy & Discovery", desc: "Translating ambiguous client needs into prioritized PRDs, feature backlogs, and roadmaps." },
      { name: "Business Analysis", desc: "Requirement gathering, process mapping, statutory workflow modeling, and functional specifications." },
      { name: "Solution Consulting", desc: "Scoping client operational friction, conducting technical feasibility, and driving paid POC conversions." },
      { name: "User Journey & Funnel Design", desc: "Mapping conversational flows, touchpoint handoffs, drop-off reduction, and conversion optimization." },
      { name: "Stakeholder Management", desc: "Aligning enterprise founders, engineering squads, cloud architects, and ministry executives." },
      { name: "Agile Delivery", desc: "Sprint grooming, epic breakdown, user acceptance testing (UAT), and post-launch optimization." },
    ],
    aiTech: [
      { name: "Enterprise AI Solutions", desc: "Architecting GenAI chatbots, conversational agent workflows, and automated resolution pipelines." },
      { name: "Multilingual Voice Bots", desc: "Low-latency speech-to-intent pipelines, dialect handling, and automated IVR deflection." },
      { name: "WhatsApp & Omnichannel Automation", desc: "High-volume conversational workflows integrated directly into enterprise CRM and ERP backends." },
      { name: "Prompt Engineering & Guardrails", desc: "LLM context tuning, deterministic fallbacks, PII protection, and hallucination reduction." },
      { name: "Java & Spring Boot", desc: "Enterprise backend architecture foundation, OOP design patterns, and microservices literacy." },
      { name: "SQL & Database Optimization", desc: "Relational schema design, query optimization, joins, and data validation across production databases." },
    ],
    tools: [
      { name: "Tableau", desc: "Executive dashboard creation, KPI reporting, funnel visualization, and adoption metrics." },
      { name: "Figma", desc: "Conversational wireframing, user journey visualization, interface prototyping, and developer handoff." },
      { name: "Postman & RESTful APIs", desc: "API contract testing, webhook validation, and backend service integration." },
      { name: "SQL (MySQL)", desc: "Complex querying, cohort performance analysis, and data integrity testing." },
      { name: "Advanced Excel", desc: "Quantitative model building, scenario analysis, and operational reporting." },
    ],
  },

  // Education: Strictly from CV
  education: [
    {
      institution: "Masters' Union",
      degree: "PGP in Technology & Business Management",
      field: "Product Management • Strategy • Entrepreneurship • Business Leadership",
      period: "2026 – Present",
      location: "Gurgaon, India",
      highlight: "Recipient of the prestigious Manoj Kohli Scholarship.",
    },
    {
      institution: "Arya Institute of Engineering & Technology (RTU)",
      degree: "B.Tech — Computer Science Engineering",
      field: "Computer Science & Engineering",
      period: "2018 – 2022",
      location: "Jaipur, Rajasthan",
      highlight: "Graduated with 9.11 / 10 CGPA. Awarded Student of the Year / Miss AIET.",
    },
  ],

  // Academic AI Research: From CV
  research: {
    title: "A New Approach for YouTube Video Transcript Summarizer Using Python",
    conference: "International Conference on Intelligent Application of Recent Innovation in Science & Technology (IARIST-057)",
    institution: "Arya Institute of Engineering & Technology",
    year: "2022",
    summary:
      "Built an AI-based transcript summarization solution using Python and NLP techniques to convert long video transcripts into concise, readable summaries. Selected and published in conference proceedings.",
  },

  // Achievements: Strictly from CV
  achievements: [
    {
      id: "daveai-top-performer",
      award: "Top Performer (2 Quarters)",
      organization: "DaveAI",
      year: "2025",
      badge: "ENTERPRISE EXCELLENCE",
      description: "Recognized among the top performers at DaveAI for driving enterprise AI solution delivery and contributing to business revenue growth.",
    },
    {
      id: "daveai-client-facing",
      award: "Client-Facing Excellence Recognition",
      organization: "DaveAI",
      year: "2025",
      badge: "STAKEHOLDER LEADERSHIP",
      description: "Recognized as one of the strongest client-facing team members at DaveAI for stakeholder management and client engagement.",
    },
    {
      id: "tcs-best-team",
      award: "Best Team Award (Delivery Excellence)",
      organization: "Tata Consultancy Services (TCS)",
      year: "2024",
      badge: "NATIONAL SCALE",
      description: "Received the Best Team Award at TCS for delivery excellence and client-recognized execution on Invest India's National Single Window System (NSWS).",
    },
    {
      id: "consultadd-star",
      award: "Star Performer of the Month (2x)",
      organization: "ConsultAdd Services",
      year: "2022",
      badge: "OPERATIONAL IMPACT",
      description: "Recognized twice as Star Performer of the Month for consistent high performance in technical hiring and earned Pre-Placement Offer (PPO).",
    },
    {
      id: "student-of-the-year",
      award: "Student of the Year (Miss AIET)",
      organization: "Arya Institute of Engineering & Technology",
      year: "2022",
      badge: "ALL-ROUND MERIT",
      description: "Awarded Student of the Year for all-round excellence across 9.11 CGPA academic performance, leadership, and extracurricular initiatives.",
    },
  ] as AchievementItem[],

  // Leadership & Extra-Curricular: Strictly from CV
  leadershipAndActivities: [
    {
      role: "Head – College Toastmasters Club",
      period: "2019 – 2021",
      detail: "Headed the college Toastmasters Club, hosting public speaking sessions and promoting structured communication development.",
    },
    {
      role: "Head of Anchoring & Stage Management",
      period: "2019 – 2021",
      detail: "Handled anchoring and stage management for major institutional events, ensuring smooth flow and audience engagement.",
    },
    {
      role: "Head Coordinator – College Events",
      period: "2019",
      detail: "Managed end-to-end planning and execution of major college cultural and technical events, coordinating across student committees.",
    },
    {
      role: "Startup Hub Pitch Competition Finalist",
      period: "2020",
      detail: "Participated in university-level innovation and startup pitch challenges (Convergence India Expo / RTU Innovation Challenge).",
    },
  ],
};
