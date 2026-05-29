import { Doctor, ServiceDetail, Testimonial, OfficeHour } from './types';
import drSayaniImg from './assets/images/dr_nurin_sayani_1780065876023.png';

export const doctors: Doctor[] = [
  {
    id: 'dr-acosta',
    name: 'Dr. Brenda Acosta',
    title: 'Lead Cosmetic & Family Dentist',
    shortBio: 'Dedicated to artistic smile design and comprehensive family dental wellness with a gentle, compassionate approach.',
    longBio: 'Dr. Brenda Acosta has been transforming smiles and elevating patient confidence at Dental Center of Texas. Specializing in advanced cosmetic restorations and complete family care, she combines a keen artistic eye with advanced dental science. Dr. Acosta believes that visiting the dentist should be a comfortable and peaceful experience, and she takes the time to construct personalized health strategies for each individual.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=500',
    specialties: ['Porcelain Veneers', 'Cosmetic Smile Makeovers', 'Lumineers', 'Full-Mouth Rehabilitation'],
    education: ['Doctor of Dental Surgery (DDS) - University of Texas Health Science Center', 'Post-Graduate Program in Aesthetic Dentistry - Las Vegas Institute (LVI)'],
    credentials: ['American Academy of Cosmetic Dentistry (AACD)', 'Texas Dental Association (TDA)']
  },
  {
    id: 'dr-nguyen',
    name: 'Dr. Vien Nguyen',
    title: 'Restorative & Implant Specialist',
    shortBio: 'Specialist in biocompatible materials, advanced implant placement, and preserving dynamic oral structures.',
    longBio: 'Dr. Vien Nguyen is a highly skilled dental implantologist and biomimetic dentist. He is passionate about restoring lost function and aesthetics using durable, biologically-friendly materials. Known for his technical precision and calm bedside manner, Dr. Nguyen integrates digital dentistry to perform state-of-the-art guided implant surgeries that accelerate healing and elevate treatment durability.',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=500',
    specialties: ['Dental Implants', 'Bone Grafting & Sinus Lifts', '3D Guided Surgery', 'All-on-4® Solutions'],
    education: ['Doctor of Dental Surgery (DDS) - Baylor College of Dentistry', 'Fellowship - International Congress of Oral Implantologists (ICOI)'],
    credentials: ['International Congress of Oral Implantologists (ICOI)', 'Academy of General Dentistry (AGD)']
  },
  {
    id: 'dr-sayani',
    name: 'Dr. Nurin Sayani',
    title: 'Preferred Invisalign & Orthodontic Provider',
    shortBio: 'Pioneering clear aligner therapies and digital orthofunction to align smiles comfortably and beautifully.',
    longBio: 'Dr. Nurin Sayani is our primary expert in conservative clear aligner therapy and interceptive orthodontics. With extensive training in digital occlusion and facial aesthetics, Dr. Sayani creates clear and efficient tooth movement paths for adults and teenagers alike. She leverages 3D iTero scanners to give patients a live simulation of their future smiles before aligner fabrication even begins.',
    imageUrl: drSayaniImg,
    specialties: ['Invisalign® Clear Aligners', 'Pediatric Orthodontic Assessment', 'Phase I Orthodontics', 'TMJ & Splint Therapy'],
    education: ['Doctor of Dental Medicine (DMD) - Boston University Henry M. Goldman School of Dental Medicine', 'Invisalign Gold Master Class Certification'],
    credentials: ['American Dental Association (ADA)', 'American Association of Orthodontists (AAO)']
  },
  {
    id: 'dr-suhail',
    name: 'Dr. Huma Suhail',
    title: 'Pediatric & Preventive Dentist',
    shortBio: 'Creating safe, delightful, and educational dental encounters for infants, kids, and anxious patients.',
    longBio: 'Dr. Huma Suhail dedicates her practice to setting children and high-anxiety patients on a path to lifetime dental success. With positive reinforcement and interactive child-themed techniques, she makes every dental appointment an adventure. Her patient advocacy spans nutritional analysis, early development assessments, and advanced non-invasive decay therapies.',
    imageUrl: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=500',
    specialties: ['Pediatric Preventive Care', 'Comfort-Focused Pediatric Dentistry', 'Frenectomies & Laser Dentistry', 'Sedation Dentistry'],
    education: ['Doctor of Dental Surgery (DDS) - UT Health San Antonio School of Dentistry', 'Pediatric Residency Training - Childrens Hospital of San Antonio'],
    credentials: ['American Academy of Pediatric Dentistry (AAPD)', 'Katy Regional Dental Study Club']
  }
];

export const services: ServiceDetail[] = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    category: 'general',
    shortDesc: 'Comprehensive care for your family’s ongoing oral health. From root canals to precise tooth extractions.',
    longDesc: 'Our General Dentistry coordinates regular tooth care, complex restorative therapies, and vital emergency care to safeguard you and your family. We utilize top-tier digital diagnostics and minimally invasive protocols to handle oral concerns before they evolve, keeping your natural teeth functional and disease-free for years.',
    benefits: ['Early detection of oral pathologies', 'Minimally-invasive composite restorations', 'Full-spectrum family diagnostic plans', 'Relaxed and gentle procedural environment'],
    faqs: [
      { question: 'How often should my family visit for checkups?', answer: 'We suggest clinical checkups and professional cleanings every six months to keep enamel clean and identify underlying patterns early.' },
      { question: 'Do you offer emergency dental slots?', answer: 'Yes, we reserve same-day urgent care availability for severe tooth pain, broken teeth, or accidental trauma.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'preventive-dentistry',
    title: 'Preventive Dentistry',
    category: 'preventive',
    shortDesc: 'Safeguarding your teeth from enamel decay with personalized cleanings, fluoride, and state-of-the-art sealants.',
    longDesc: 'Preventive care is the cornerstone of lifelong dental vitality. Our hygienists execute ultrasonic cleanings to scour calcified tartar, apply professional fluoride treatments to restabilize trace minerals, and seal deep crevices with clear resin sealants to prevent bacterial cavities.',
    benefits: ['Blocks dental disease before it starts', 'Fresh breath and sparkling tooth surfaces', 'Saves long-term restorative expenses', 'Custom patient oral hygiene coaching'],
    faqs: [
      { question: 'What is deep cleaning versus regular cleaning?', answer: 'A regular cleaning polishes tooth structures above the gumline, whereas deep cleaning (scaling and root planing) cleans plaque below the gumline to cure periodontal disease.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    category: 'cosmetic',
    shortDesc: 'Dazzling smile transformations utilizing customizable aesthetic options to build pristine symmetry.',
    longDesc: 'Cosmetic dentistry bridges clinical medicine with artistic flair. Whether you want to fix chipped front teeth, correct color discoloration, or hide uneven edges, our customized cosmetic plans use fine biomimetic porcelain to achieve natural symmetry and deep inner radiance.',
    benefits: ['Inspires high personal confidence', 'Removes long-term organic enamel stains', 'Restructure teeth with absolute natural translucency', 'Tailored computer-enhanced mockups before starting'],
    faqs: [
      { question: 'Will my cosmetic treatments look natural?', answer: 'Absolutely. We partner with elite boutique laboratories to match porcelain with your existing enamel translucency, facial structure, and coloring.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1473081556163-2a17de81fc97?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'teeth-whitening',
    title: 'Professional Teeth Whitening',
    category: 'cosmetic',
    shortDesc: 'Brighten your smile up to eight shades brighter using fast in-office Zoom laser whitening or Custom take-home trays.',
    longDesc: 'Over-the-counter packages often cause gum irritation and uneven color. Our clinical strength professional formulas penetrate stain particles deep inside the enamel rods safely. We utilize customized barriers to protect sensitive oral tissues while producing instant, consistent whitening results.',
    benefits: ['Up to 8 shades lighter in 1 hour', 'Engineered to avoid enamel dehydration and sensitivity', 'Custom take-home trays for lifetime touchups', 'Safe clinical monitoring during curing'],
    faqs: [
      { question: 'How long do professional whitening results last?', answer: 'With proper brushing and standard hygiene, your bright smile will remain glowing for 1 to 2 years before needing simple routine touchups.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'porcelain-veneers',
    title: 'Porcelain Veneers',
    category: 'cosmetic',
    shortDesc: 'Ultra-thin, handmade ceramic facings that instantly perfect tooth color, shape, alignment, and spacing.',
    longDesc: 'Porcelain veneers offer the ultimate cosmetic makeover. Crafted from exquisite, light-reflective medical porcelain, these wafer-thin shells bond permanently to the dynamic front-facing aspects of your teeth to correct gaps, crooked teeth, or chemical stains that whitening cannot fix.',
    benefits: ['Resilient to organic staining from coffee or wine', 'Flawlessly replicates natural enamel contours', 'Long lifespan of up to 15+ years with simple maintenance', 'Orthodontic correction without structural braces'],
    faqs: [
      { question: 'Is the porcelain veneers procedure painful?', answer: 'We ensure comfort with specialized local numbing. Most patients experience minor sensitivity for a couple of days during temporary phase adjustments.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'invisalign',
    title: 'Invisalign® Clear Aligners',
    category: 'cosmetic',
    shortDesc: 'Sleek, transparent, and removable alignment trays that arrange your teeth comfortably without metal braces.',
    longDesc: 'Invisalign has revolutionized modern teeth straightening. By wearing dynamic, clear thermoplastic smart-track trays customized to your anatomy, your teeth migrate steadily into correct occlusion. Since the trays are removable, you can enjoy all your favorite foods and maintain easy dental flossing routines.',
    benefits: ['Virtually invisible during professional interactions', 'Fully removable for eating, brushing, and flossing', 'Reduced office checkups and zero metal wire discomfort', 'Accelerates alignment with highly predictable digital planning'],
    faqs: [
      { question: 'How many hours a day must I wear the aligners?', answer: 'For therapeutic results, aligners should be worn 20 to 22 hours daily, removing them only for meals and dental hygiene.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    category: 'restorative',
    shortDesc: 'The modern gold standard for missing teeth. Restores both biting power and jawbone health permanently.',
    longDesc: 'For patients dealing with single or multiple missing teeth, dental implants replace the root structure with medical-grade titanium. The anchor merges directly with the bone (osseointegration) to prevent bone collapse, before receiving a premium custom-milled porcelain crown that feels and functions look a natural tooth.',
    benefits: ['Preserves vital facial contours and bone density', 'Biting force matches natural teeth up to 99%', 'Wont slide, slip, or decay like traditional structures', 'Standalone anchor doesn’t put load on neighboring teeth'],
    faqs: [
      { question: 'Am I a candidate for dental implants?', answer: 'If you have good general path-health and adequate jawbone thickness, you are likely an ideal candidate. We can also perform site bone grafting if bone structure is thin.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'crowns-bridges',
    title: 'Porcelain Crowns & Bridges',
    category: 'restorative',
    shortDesc: 'Durable, high-strength full restorations that mend damaged or missing teeth with seamless, elegant fit.',
    longDesc: 'Our premium dental crowns encase a decayed or root-canal-treated tooth completely to reinforce structural strength. Bridges utilize these customized crowns as anchors on neighboring healthy teeth to span and close empty spaces with brilliant ceramic teeth.',
    benefits: ['Fully restores masticatory biting forces', 'Perfectly matches neighboring tooth color profile', 'Protects fractured, cracked structures from splitting', 'Secures long-term vertical facial dimensions'],
    faqs: [
      { question: 'How long do custom crowns and bridges last?', answer: 'Typically between 10 to 15 years depending on personal stress, nighttime grinding, and standard clinical hygiene.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'smile-makeover',
    title: 'Smile Makeovers',
    category: 'cosmetic',
    shortDesc: 'A comprehensive visual and clinical rejuvenation plan designed collaboratively to reveal your perfect smile.',
    longDesc: 'A Smile Makeover is a bespoke aesthetic program designed for you. Dr. Acosta explores your facial frame, dental line, lip configuration, and gum levels, then maps a combined program of tooth bonding, porcelain veneers, clear aligners, and laser gum contouring to achieve spectacular clinical symmetry.',
    benefits: ['Creates a magnificent, photo-ready youthfulness', 'Harmonizes with facial features and proportions', 'Resolves minor speech or chewing structural errors', 'Complete 3D diagnostic previews with computerized mapping'],
    faqs: [
      { question: 'What is the duration of a full Smile Makeover?', answer: 'Depending on the combined procedures, it can take anywhere from two clinical sessions to several months if tooth alignment is incorporated.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'restorative-dentistry',
    title: 'Restorative Dentistry',
    category: 'restorative',
    shortDesc: 'Reclaim full oral function. Modern solutions for mercury-free composite fillings, root canals, and modern dentures.',
    longDesc: 'Restorations rebuild your smile from physical deterioration or tooth decay. We are a mercury-free practice, utilizing premium biocompatible composite resins to fill cavities, safe and quick electronic root canals to save interior pulp, and modern lightweight partial and complete dentures that grip comfortably.',
    benefits: ['Safe, modern, mercury-free composite fillings', 'Rescues natural teeth from extraction through root canals', 'Restores comfort and correct pronunciation', 'Reinforces deep structural joint alignment'],
    faqs: [
      { question: 'Why choose tooth-colored composite over silver amalgam?', answer: 'Composite resin bonds directly to enamel, leaving more natural tooth intact, while blending invisibly to maintain aesthetics.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    author: 'Sarah Jenkins',
    role: 'Katy, TX Patient',
    rating: 5,
    text: 'I had the most incredible veneer transformation with Dr. Acosta! She explained the entire smile design flow step-by-step. The team is unbelievably gentle and professional. The new office feels more like a luxury spa than a dental clinic. Thank you Dental Center of Texas!',
    date: 'April 2026',
    isCosmetic: true
  },
  {
    id: 't2',
    author: 'Marcus Vance',
    role: 'Cinco Ranch Resident',
    rating: 5,
    text: 'Dr. Nguyen did two implants for me. I was extremely nervous, but the digital planning and pain-free execution were stellar. I felt absolutely zero discomfort. They are incredibly transparent with scheduling and insurance estimates.',
    date: 'May 2026',
    isCosmetic: false
  },
  {
    id: 't3',
    author: 'Emily Rodriguez',
    role: 'Katy School Teacher',
    rating: 5,
    text: 'The best family dentistry by far. My three kids actually highlight their calendar for dentist cleanings because Dr. Huma Suhail is incredibly patient and turns everything into a fun game. Our dental health has never been in better hands!',
    date: 'March 2026',
    isCosmetic: false
  },
  {
    id: 't4',
    author: 'David K. Johnston',
    role: 'Fulshear Business Owner',
    rating: 5,
    text: 'Completed my Invisalign course with Dr. Nurin Sayani. The interactive 3D scan at our first appointment predicted the final smile with perfect accuracy. Clear aligners saved my chewing mechanics and gave me back my public speaking confidence!',
    date: 'February 2026',
    isCosmetic: true
  }
];

export const officeHours: OfficeHour[] = [
  { day: 'Monday', hours: '8:00 AM – 5:00 PM' },
  { day: 'Tuesday', hours: '8:00 AM – 5:00 PM' },
  { day: 'Wednesday', hours: '8:00 AM – 5:00 PM' },
  { day: 'Thursday', hours: '8:00 AM – 5:00 PM' },
  { day: 'Friday', hours: '8:00 AM – 2:00 PM' },
  { day: 'Saturday', hours: 'By Appointment' },
  { day: 'Sunday', hours: 'Closed (Emergency Line Open)' }
];

export const patientResources = {
  firstVisit: {
    expectation: 'Your first visit is structured as an comprehensive discovery. We dedicate a full hour to understanding your teeth condition and systemic goals.',
    steps: [
      { title: 'Personalized Welcome', desc: 'Step into our calm state-of-the-art office and grab a complimentary premium beverage.' },
      { title: 'Digital Diagnostics', desc: 'We take ultra-low-dose digital X-rays and full 3D scans of your oral arches.' },
      { title: 'Comprehensive Exam', desc: 'Meet your assigned doctor for cleanings, gum evaluations, and high-resolution oral photography.' },
      { title: 'Personal Treatment Strategy', desc: 'We visually display our findings on modern high-def monitors and discuss any custom solutions.' }
    ]
  },
  insuranceInfo: {
    headline: 'Maximizing Your Insurance Coverage & Dynamic Payment Options',
    description: 'We believe premium cosmetic and restorative family care should be within clear economic reach. Our expert finance coordinators file claims directly with your insurance provider to maximize your annual dental benefits.',
    acceptedPlans: [
      'Delta Dental PPO / Premier',
      'Cigna PPO',
      'Aetna Dental',
      'MetLife PDP',
      'Blue Cross Blue Shield',
      'Guardian Life PPO',
      'UnitedHealthcare Dental',
      'Humana Dental'
    ],
    financingSolutions: [
      { name: 'CareCredit® Financing', desc: 'Incorporate 12-to-24 month interest-free monthly installment strategies easily.' },
      { name: 'LendingClub® Patient Solutions', desc: 'Flexible dental cosmetic financing solutions with simple online approvals.' },
      { name: 'In-House Dental Center Access Plan', desc: 'No insurance? Our annual plan covers cleanings, diagnostics, and grants 15% off all procedures.' }
    ]
  },
  onlineForms: {
    description: 'Accelerate your onboarding by filling out your dental forms prior to your initial visit. All submissions use secure, HIPAA-compliant encryption.',
    links: [
      { name: 'New Patient Health Intake Form', duration: 'Takes approx 8 mins' },
      { name: 'Dental Records Release Form', duration: 'Takes approx 3 mins' },
      { name: 'HIPAA Consent & Financial Agreement Form', duration: 'Takes approx 4 mins' }
    ]
  }
};
