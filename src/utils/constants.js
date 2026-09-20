import hero from "../assets/images/roofing-aerial-hero.webp";
import heroMobile from "../assets/images/roofing-aerial-hero-mobile.webp";
import logo from "../assets/images/professional-roofers-logo.webp";
import membrane from "../assets/images/roof-membrane-installation.webp";
import commercial from "../assets/images/commercial-roof-project.webp";
import crew from "../assets/images/crew-lift-exterior.webp";
import planning from "../assets/images/team-project-planning.webp";
import deck from "../assets/images/roof-deck-work.webp";
import onsite from "../assets/images/roofing-crew-on-site.webp";
import underlayment from "../assets/images/roof-underlayment-detail.webp";
import progress from "../assets/images/shingle-project-in-progress.webp";
import shingle from "../assets/images/completed-shingle-roof.webp";

export const business = {
  name: "Professional Roofers and Contractors, LLC",
  tagline: "Strong roofs. Solid peace of mind.",
  contact: "Jerry Ortega",
  phone: "(915) 203-0359",
  phoneHref: "tel:+19152030359",
  office: "(915) 533-8609",
  officeHref: "tel:+19155338609",
  email: "professionalroofers43@yahoo.com",
  emailHref: "mailto:professionalroofers43@yahoo.com",
  estimateHref:
    "mailto:professionalroofers43@yahoo.com?subject=Roofing%20estimate%20request&body=Property%20location%3A%20%0ARoof%20type%3A%20%0AWork%20needed%3A%20%0APreferred%20callback%20number%3A%20",
  location: "Chaparral, New Mexico",
  streetAddress: null, // TODO: Supply the confirmed street address before publication.
  serviceArea: "El Paso & Las Cruces area",
  hours: "Monday–Friday, 8:00 am–5:00 pm",
  website: "https://professionalrooferssite.com/",
  facebookUrl: null, // TODO: Supply the confirmed Facebook page URL.
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Chaparral%2C%20New%20Mexico",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Chaparral%2C%20New%20Mexico&z=10&output=embed",
};
export const images = {
  hero,
  heroMobile,
  logo,
  membrane,
  commercial,
  crew,
  planning,
  deck,
  onsite,
  underlayment,
  progress,
  shingle,
};
export const navigationLinks = [
  { label: "Services", href: "#services" },
  { label: "Our work", href: "#gallery" },
  { label: "About us", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];
export const services = [
  {
    number: "01",
    title: "Commercial roofing",
    detail: "Roofing systems for your business, building, and next project.",
    icon: "building",
  },
  {
    number: "02",
    title: "Modified roofing",
    detail: "Explore modified roofing options for your property’s needs.",
    icon: "layers",
  },
  {
    number: "03",
    title: "TPO roofing",
    detail: "Discuss a TPO roofing system and how it fits your building.",
    icon: "roof",
  },
  {
    number: "04",
    title: "PVC roofing",
    detail: "Consider PVC as part of your commercial roofing plan.",
    icon: "grid",
  },
  {
    number: "05",
    title: "Shingle roofing",
    detail: "A familiar roofline. A finish that complements your property.",
    icon: "shingle",
  },
  {
    number: "06",
    title: "Metal roofing",
    detail: "A distinctive roofing option for a range of property styles.",
    icon: "metal",
  },
];
export const galleryItems = [
  {
    image: shingle,
    title: "A finished roofline",
    category: "Shingle roofing",
    alt: "Completed gray shingle roof with intersecting rooflines and dormers",
  },
  {
    image: commercial,
    title: "Commercial roof project",
    category: "Commercial roofing",
    alt: "Light-colored low-slope roof on a commercial construction project",
  },
  {
    image: membrane,
    title: "The work beneath the finish",
    category: "Roofing in progress",
    alt: "Roofing crew fitting a dark membrane beside a white exterior wall",
  },
  {
    image: underlayment,
    title: "Attention to every layer",
    category: "Roofing in progress",
    alt: "Roof underlayment and materials staged beside a roof dormer",
  },
  {
    image: deck,
    title: "From the deck up",
    category: "Roofing in progress",
    alt: "Crew working on the exposed roof decking of a single-story house",
  },
  {
    image: onsite,
    title: "On the roof. On the job.",
    category: "Our team at work",
    alt: "Roofing crew at work above a white building under a clear blue sky",
  },
  {
    image: progress,
    title: "A project taking shape",
    category: "Roofing in progress",
    alt: "Crew working along a roof with shingle bundles staged for installation",
  },
  {
    image: crew,
    title: "Reaching every detail",
    category: "Our team at work",
    alt: "Crew on a raised work platform beside a building exterior",
  },
  {
    image: planning,
    title: "Planning the next step",
    category: "Our team at work",
    alt: "Team member reviewing plans inside a building under construction",
  },
];
export const reviews = [
  {
    name: "Renslar Keagle",
    url: "https://www.google.com/maps/contrib/116989164708797099387/reviews?hl=en",
    text: "Very professional company went over with us in detail on the work that needed to be done and showed us detailed photos of the roof damage. Gave us an estimate and then added a nice discount which as seniors we appreciated. The work was accomplished in one day as promised. After the work was complete, we were given before and after pictures and many photos of the work being done. Very much appreciated - I've never seen or heard of that. Excellent job at a fair price.",
  },
  {
    name: "michael ortega",
    url: "https://www.google.com/maps/contrib/109409149137310815890/reviews?hl=en",
    text: "I had an excellent experience with this roofing company! The roof management was top-notch, ensuring everything went smoothly from start to finish. The owner, Jerry, was incredibly polite, professional, and easy to work with. His crew did an amazing job on my new roof, working efficiently while maintaining high-quality craftsmanship. I highly recommend them to anyone in need of a reliable and skilled roofing team!",
  },
  {
    name: "jonathan rettek",
    url: "https://www.google.com/maps/contrib/111996699567872298037/reviews?hl=en",
    text: "I needed a free roof inspection. I called on Friday and they showed up on Tuesday. Very easy to work with. Most importantly they didn’t try to sell me something I didn’t need. I highly recommend them.",
  },
  {
    name: "Vic Ortega",
    url: "https://www.google.com/maps/contrib/105829988765544804304/reviews?hl=en",
    text: "Professional Roofers did an excellent job of repairing my roof. I would highly recommend them if you have roof issues",
  },
  {
    name: "Jim Kingwell",
    url: "https://www.google.com/maps/contrib/117151526039478576552/reviews?hl=en",
    text: `I highly recommend Professional Contractors, LLC. They recently  completed a total re-decking and roofing within a week on over 2100 square feet. I was kept informed each step with photos, cleaned up each day, and on time each day with a complete skilled crew. Jerry Ortega worked with my insurance adjuster and the city building inspector (USAA requirement for redecking). Over the past 40+ years I have had two other roofs installed. The last one was only seven years ago by my insurance carrier's recommended "preferred" contractor. Rot, unmet roofing standards and shoddy workmanship was exposed. I am confident in the job Jerry's crew accomplished with further validation from the city inspector.`,
  },
];
export const faqs = [
  {
    question: "What types of roofing systems do you offer?",
    answer:
      "Professional Roofers and Contractors, LLC offers modified, TPO, PVC, shingle, and metal roofing systems. Contact us to discuss the options available for your property.",
  },
  {
    question: "Do you work on commercial roofs?",
    answer:
      "Yes! Commercial roofing systems are a key part of our services. Tell us about your building and roofing needs so we can discuss your project.",
  },
  {
    question: "How do I know which roofing system is right for my property?",
    answer:
      "The right choice depends on your roof’s design, its condition, your budget, and your goals. Contact us to discuss these details and explore suitable options.",
  },
  {
    question: "What information should I provide when requesting an estimate?",
    answer:
      "Please share your property’s location, the type of roof you have, and a brief description of the work you need. Photos of any visible issues can also help us understand your project.",
  },
  {
    question: "How can I contact Professional Roofers and Contractors, LLC?",
    answer:
      "Call our office at (915) 533-8609, contact Jerry Ortega at (915) 203-0359, or email professionalroofers43@yahoo.com to discuss your roofing needs and request an estimate.",
  },
];
