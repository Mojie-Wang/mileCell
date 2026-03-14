export const homePage = {
  navItems: [
    { label: "PRODUCT", href: "#products" },
    { label: "RESOURCE HUB", href: "#resources" },
    { label: "SUPPORT", href: "#support" },
    { label: "ABOUT", href: "#about" },
  ],
  searchPlaceholder: "Enter protein/keyword/catalog#/etc...",
  hero: {
    title: "Tailor-made holistic solutions enabled by primary cells",
    description:
      "Empowering Global Biomedical Innovation and Accelerating the Translation of Cutting-edge Research",
    ctaLabel: "Explore",
    currentSlide: "01",
    totalSlides: "03",
  },
  products: {
    title: "Recommended Products",
    description:
      "Explore our most requested biospecimen products. MileCell's comprehensive product range.",
    ctaLabel: "Explore Products",
    items: [
      {
        name: "CD14 MicroBeads,Human",
        image: "/home/product-cd14.png",
        buttonVariant: "solid",
      },
      {
        name: "Hepatocytes Maintenance",
        image: "/home/product-hepatocytes.png",
        buttonVariant: "surface",
      },
      {
        name: "Cell Freezing Media - CGT",
        image: "/home/product-freezing.png",
        buttonVariant: "surface",
      },
      {
        name: "Subcellular Fractions",
        image: "/home/product-fractions.png",
        buttonVariant: "surface",
      },
    ],
  },
  about: {
    title: "Who we are",
    description:
      "Explore our integrated approach to delivering high-quality primary cells and reliable research solutions.",
    ctaLabel: "Explore MileCell",
    image: "/home/about-lab.png",
    overlayTitle: "Elevating Cell Science Research",
    overlayDescription:
      "At MileCell Bio, we are dedicated to advancing life science research through innovative, dependable, and biologically relevant tools.",
    overlayCtaLabel: "Explore More",
    features: [
      {
        title: "Premium Primary Cells",
        image: "/home/icon-primary-cells.png",
      },
      {
        title: "Advanced Culture Media",
        image: "/home/icon-culture-media.png",
      },
      {
        title: "Subcellular Fractions",
        image: "/home/icon-subcellular.png",
      },
      {
        title: "Immune Cell Isolation Magnetic Bead",
        image: "/home/icon-immune-isolation.png",
      },
    ],
  },
  advantages: {
    title: "MileCell Advantages",
    description: "Elevate Your Research with MileCell Advantages",
    items: [
      { value: "2000+", label: "Global Clients (Growing)" },
      { value: "<3%", label: "Batch-to-Batch Variation" },
      { value: "ISO", label: "Compliant with ISO Quality" },
      { value: "5+ yrs", label: "Extended Cell Viability" },
      { value: "100+ types", label: "Wide Range of Species" },
      { value: ">95% Purity", label: "Superior Cell Sorting" },
    ],
  },
  resources: {
    title: "Your hub for research, data, and discovery",
    description:
      "Browse our scientific publications, webinars, posters, and more — resources created to support you throughout your research journey.",
    ctaLabel: "Browse all educational content",
    items: [
      { title: "COA", image: "/home/resource-coa.png" },
      { title: "Product Brochure", image: "/home/resource-brochure.png" },
      {
        title: "Newsletter Registration",
        image: "/home/resource-newsletter.png",
      },
      { title: "Blog / Publication", image: "/home/resource-blog.png" },
      { title: "Application Note", image: "/home/resource-note.png" },
    ],
  },
  event: {
    kicker: "Upcoming Events",
    title: "2026 AACR",
    description:
      "Meet the MileCell team to review donor sourcing, primary-cell handling, and custom project design for oncology and translational programs.",
    ctaLabel: "Book a meeting",
    meta: [
      { label: "Date", value: "Apr 24-29, 2026" },
      { label: "Location", value: "San Diego, CA" },
      { label: "Focus", value: "Primary cells and assay support" },
    ],
  },
  news: {
    title: "News & Updates",
    ctaLabel: "View all news",
    items: [
      {
        image: "/home/news-korea.png",
        date: "Oct 28, 2025",
        title:
          "Milecell Bio Shines at 2025 BIOPLUS Korea in Seoul: A Milestone in Global Biomedical Innovation",
      },
      {
        image: "/home/news-retreat.png",
        date: "Oct 28, 2025",
        title:
          "MileCell Bio's Annual Retreat: A Green Gateway for Global Growth",
      },
      {
        image: "/home/news-boston.png",
        date: "Oct 28, 2025",
        title: "Milecell Bio Shines at BIO International Convention 2025 in Boston",
      },
    ],
  },
  footer: {
    columns: [
      {
        title: "PRODUCT",
        links: [
          "Human Primary Cells",
          "Animal Primary Cells",
          "Subcellular Fractions",
          "Transporter Product",
          "Biological Matrices",
          "Media / Reagents / Kits",
        ],
      },
      {
        title: "RESOURCE HUB",
        links: [
          "COA",
          "Product Brochure",
          "Newsletter Registration",
          "Blog / Publication",
          "Application Note",
        ],
      },
      {
        title: "SUPPORT",
        links: [
          "Ordering Guide",
          "FAQs",
          "Shipping & Storage",
          "Cell Production Calendar",
        ],
      },
      {
        title: "ABOUT",
        links: [
          "About MileCell",
          "Careers",
          "Quality Assurance",
          "News & Updates",
          "Contact Information",
          "Sites",
        ],
      },
    ],
    regions: [
      {
        name: "North America",
        phone: "+1(351)-215-8296",
        email: "Info@milecell-bio.com",
        address: "One Innovation Drive Suite 420, Worcester, MA 01605, U.S.",
      },
      {
        name: "EU&APAC",
        phone: "400-821-7320",
        email: "Info@milecell-bio.com",
        address:
          "Building A, No.158, Guen Road, Pudong New Area, Shanghai, China.",
      },
    ],
    newsletter: {
      title: "Sign up for our newsletter!",
      description:
        "We'll send you periodic updates about new products and services.",
      placeholder: "Email Address",
      legal:
        "MileCell will use the information you have provided above to service your request or inquiry. In addition, our sales and marketing team would like to use your contact information to connect you with specific MileCell products and services that we think might be of interest to you.",
    },
    legal:
      "Privacy and Cookie Policy | Terms & Conditions | MILECELL BIOTECHNOLOGY INC. By: Kinglink",
  },
};
