import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site', {
  state: () => ({
    menuOpen: false,
    navItems: [
      { label: 'Home', href: '#top' },
      { label: 'Products', href: '#products' },
      { label: 'About', href: '#about' },
      { label: 'Resources', href: '#resources' },
      { label: 'News', href: '#news' },
    ],
    hero: {
      eyebrow: 'MileCell Biotechnology',
      title: 'Tailor-made holistic solution, enabled by primary cells',
      description:
        'From sourcing and isolation to assay support and delivery, MileCell helps research teams build dependable primary-cell workflows with less handoff and clearer quality signals.',
      ctaPrimary: {
        label: 'Explore products',
        href: '#products',
      },
      ctaSecondary: {
        label: 'Talk to the team',
        href: '#contact',
      },
    },
    heroPanels: [
      {
        label: 'Custom sourcing',
        title: 'Validated donor-to-assay pipeline',
        copy: 'Rapid handoff between cell acquisition, handling, and downstream evaluation.',
        tone: 'mint',
      },
      {
        label: 'Media systems',
        title: 'Culture conditions tuned for sensitivity',
        copy: 'Stability-focused reagents designed to protect viability across demanding studies.',
        tone: 'pearl',
      },
      {
        label: 'Research support',
        title: 'Scientific assets ready for launch',
        copy: 'Application notes, brochures, and technical content aligned to commercialization.',
        tone: 'ice',
      },
    ],
    heroStats: [
      { value: '2000+', label: 'Global clients served' },
      { value: '100+', label: 'Validated cell types' },
      { value: '<3%', label: 'Batch-to-batch variation' },
    ],
    products: [
      {
        category: 'Primary Cells',
        name: 'CD14 MicroBeads, Human',
        description: 'Enrichment-ready microbeads supporting consistent isolation in translational workflows.',
        tone: 'mint',
      },
      {
        category: 'Maintenance Media',
        name: 'Hepatocytes Maintenance',
        description: 'Balanced nutrient system tailored for long-window hepatocyte handling and recovery.',
        tone: 'coral',
      },
      {
        category: 'Freezing Media',
        name: 'Cell Freezing Media - CGT',
        description: 'Controlled cryopreservation blend aimed at preserving viability and assay readiness.',
        tone: 'ice',
      },
      {
        category: 'Fractions',
        name: 'Subcellular Fractions',
        description: 'Purified intracellular fractions prepared for downstream analytics and screening use.',
        tone: 'sand',
      },
    ],
    capabilities: [
      {
        marker: '01',
        title: 'Premium Primary Cells',
        description: 'Flexible donor sourcing and verified handling standards for sensitive cell programs.',
      },
      {
        marker: '02',
        title: 'Subcellular Fractions',
        description: 'Prepared fractions built for reproducibility in protein, pathway, and biomarker studies.',
      },
      {
        marker: '03',
        title: 'Advanced Culture Media',
        description: 'Targeted media systems that reduce protocol friction across diverse assay setups.',
      },
      {
        marker: '04',
        title: 'Immune Cell Isolation',
        description: 'Magnetic bead workflows designed for fast recovery and high-purity enrichment.',
      },
    ],
    advantages: [
      { value: '2000+', label: 'Global Clients (Growing)' },
      { value: '<3%', label: 'Batch-to-Batch Variation' },
      { value: 'ISO', label: 'Compliant with ISO Quality' },
      { value: '5+ yrs', label: 'Extended Cell Viability' },
      { value: '100+ types', label: 'Wide Range of Species' },
      { value: '>95% Purity', label: 'Superior Cell Sorting' },
    ],
    resources: [
      { title: 'COA', note: 'Quality records', href: '#contact' },
      { title: 'Product Brochure', note: 'Download PDF', href: '#contact' },
      { title: 'Newsletter Registration', note: 'Stay informed', href: '#contact' },
      { title: 'Blog / Publication', note: 'Research stories', href: '#contact' },
      { title: 'Application Note', note: 'Protocol support', href: '#contact' },
    ],
    eventInfo: {
      eyebrow: 'Upcoming Events',
      title: '2026 AACR',
      description:
        'Meet the MileCell team to review donor sourcing, primary-cell handling, and custom project design for oncology and translational programs.',
      cta: 'Book a meeting',
      meta: [
        { label: 'Date', value: 'Apr 24-29, 2026' },
        { label: 'Location', value: 'San Diego, CA' },
        { label: 'Focus', value: 'Primary cells and assay support' },
      ],
    },
    eventHighlights: [
      'One-on-one sourcing consultations',
      'Assay-fit media recommendations',
      'Custom isolation workflow review',
      'Launch and publication planning',
    ],
    newsItems: [
      {
        kicker: 'Event',
        date: 'March 2026',
        title: 'MileCell confirms AACR 2026 exhibition plans',
        summary: 'A preview of live demonstrations, consultation topics, and on-site technical sessions.',
        tone: 'navy',
      },
      {
        kicker: 'Insight',
        date: 'February 2026',
        title: 'Annual primary-cell sourcing trends report',
        summary: 'A compact briefing on quality metrics, lead times, and planning considerations for research teams.',
        tone: 'cyan',
      },
      {
        kicker: 'Webinar',
        date: 'January 2026',
        title: 'Precision cell sourcing for advanced assays',
        summary: 'A webinar recap focused on donor variability, purity thresholds, and experimental continuity.',
        tone: 'slate',
      },
    ],
    footerColumns: [
      {
        title: 'Products',
        links: [
          { label: 'Primary Cells', href: '#products' },
          { label: 'Culture Media', href: '#products' },
          { label: 'MicroBeads', href: '#products' },
          { label: 'Fractions', href: '#products' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'COA', href: '#resources' },
          { label: 'Application Notes', href: '#resources' },
          { label: 'Newsletter', href: '#resources' },
          { label: 'Blog / Publication', href: '#resources' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About MileCell', href: '#about' },
          { label: 'Events', href: '#news' },
          { label: 'Careers', href: '#contact' },
          { label: 'Contact', href: '#contact' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Technical Inquiry', href: '#contact' },
          { label: 'Custom Project', href: '#contact' },
          { label: 'Partnerships', href: '#contact' },
          { label: 'Privacy Policy', href: '#contact' },
        ],
      },
    ],
    footerContact: {
      address: 'Biomedical Innovation Park, Global Research District',
      email: 'info@milecell.example',
      phone: '+1 (800) 555-0148',
      phoneLink: '+18005550148',
    },
  }),
  actions: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    },
  },
})
