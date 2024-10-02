import pmModi from "../assets/images/pmModi.png";
import mohanYadav from "../assets/images/mohanYadav.png";

import { MinisterSlider } from "../components/ui/Slider/MinisterSlider/MinisterSlider";
import { TestimonialSlider } from "../components/ui/Slider/TestimonialSlider/TestimonialSlider";
import HeroSlider from "../components/ui/Slider/HeroSlider/HeroSlider";

import banner1 from "../assets/images/banner1.png";
import dam1 from "../assets/images/mohanpuraDam_1.png";
import dam2 from "../assets/images/kindaliyaDam_1.png";
import actualTestimonials from "../assets/images/actualTestimonials.png";

import profilePicture_1 from "../assets/images/VikasRajoria.png";
import profilePicture_2 from "../assets/images/Sandeep_Sir.png";
import profilePicture_3 from "../assets/images/VipinSir.png";
import profilePicture_4 from "../assets/images/SilawatSir.png";
import profilePicture_5 from "../assets/images/ShubhankarSir.png";

import projectHighlight_icon1 from "../assets/images/totalIrrigatedArea.svg";
import projectHighlight_icon2 from "../assets/images/systemEfficiency.svg";
import projectHighlight_icon3 from "../assets/images/energyEfficiency.svg";
import projectHighlight_icon4 from "../assets/images/villageBenefitted.svg";
import projectHighlight_icon5 from "../assets/images/totalPipelineLayed.svg";
import projectHighlight_icon6 from "../assets/images/enabledFullyAutomated.svg";
import projectHighlight_icon7 from "../assets/images/moreEfficientwaterUse.svg";

import projectOutreact_1 from "../assets/images/PO_image.png";
import newUpdate_1 from "../assets/images/newsUpdate.png";
import researchImg_1 from "../assets/images/researchIcon.png";

import awards_1 from "../assets/images/awards-1.png";
import awards_2 from "../assets/images/awards-2.png";
import awards_3 from "../assets/images/awards-3.png";
import awards_4 from "../assets/images/awards-4.png";
import awards_5 from "../assets/images/awards-5.png";
import awards_6 from "../assets/images/awards-6.png";
import awards_7 from "../assets/images/awards-7.png";
import awards_8 from "../assets/images/awards-8.png";

// ------------------------------------------------------Words of misinster SLIDER---------------------------------------------------------------------------------------

const ministerQuoteSlides = [
  {
    ministerImg: pmModi,
    ministerQuote: [
      " मैंने प्रोजेक्ट लॉन्च करने के लिए केवल एक बटन दबाने की औपचारिकता पूरी की है। लेकिन असली काम अधिकारियों और मजदू‌रों ने किया है, जो दिन-रात पसीना बहाते हुए औजारों और मशीनों से मेहनत करते थे।",
      "3,866 करोड़ रुपये की मोहनपटा सिंचाई परियोजना से 700 से अधिक गांवों को सीधे लाभ होगा। इससे 1.25 लाख हेक्टेयर जमीन की सिंचाई होगी और 400 से ज्यादा गांवों को पीने का पानी भी मिलेगा।",
      "यह हमारीउन महिलाओं के लिए एक महान सेवा है, जिन्हें लंबी दूरी से पानी लाने में काफी कठिनाइयों का सामना करना पड़ता है।",
    ],
    minsiterName: "प्रधानमंत्री नरेंद्र मोदी",
    ministerQuote_date: "3 जून 2018",
  },
  {
    ministerImg: mohanYadav,
    ministerQuote: [
      "मोहनपुरा परियोजना के जरिये पूरे क्षेत्र की एक-एक इंच जमीन को सिंचित कर देंगे। राजगढ़ को लोग पत्थर गढ़ कहते थे, अब यहां हरियाली ही हरियाली मिलेगी। यहां बिजली और पानी उद्योग भी संचालित हो सकेंगे।",
    ],
    minsiterName: "सीएम मोहन यादव",
    ministerQuote_date: "3 जून 2018",
  },
];

const ministerQuoteSlides_array = ministerQuoteSlides.map((e, index) => (
  <MinisterSlider
    key={index}
    picture={e.ministerImg}
    quote={e.ministerQuote}
    fullName={e.minsiterName}
    date={e.ministerQuote_date}
  />
));

// ------------------------------------------------------------------TESTIMONIAL SLIDER-----------------------------------------------------------------------------------

const testimonialHeader = {
  title: "Testimonials",
  description:
    "Read reflections from those  who have witnessed the project’s transformative impact firsthand. Explore their thoughts on our progress and the future of sustainable development.",
};

const testimonialSlides = [
  {
    authorQuote:
      "What better revolution than irrigating wheat  field without having to work as a labour",
    authorName: "Arjun",
    authorPlace: "Junapani, Rajgarh",
    cardBgColor: "#FEFFBA",
  },
  {
    authorQuote:
      "What better revolution than irrigating wheat  field without having to work as a labour",
    authorName: "Arjun",
    authorPlace: "Junapani, Rajgarh",
    cardBgColor: "#BCFFF7",
  },
  {
    authorQuote:
      "What better revolution than irrigating wheat  field without having to work as a labour",
    authorName: "Arjun",
    authorPlace: "Junapani, Rajgarh",
    cardBgColor: "#E8DFFF",
  },
];

const testimonialSlides_array = testimonialSlides.map((e, index) => (
  <TestimonialSlider
    key={index}
    authorQuote={e.authorQuote}
    authorName={e.authorName}
    authorPlace={e.authorPlace}
    cardBgColor={e.cardBgColor}
  />
));

const actual_testimonials = [
  actualTestimonials,
  actualTestimonials,
  actualTestimonials,
];

const actual_testimonials_array = actual_testimonials.map((e, index) => (
  <TestimonialSlider key={index} picture={e} />
));
// ---------------------------------------------------------------------- MKPMU TEAM -------------------------------------------------------------------------------------

const teamMemberDetails_array = [
  {
    fullName: "Vikas Rajoria",
    profilePicture: profilePicture_1,
    designation: "CE Mohanpura Kundaliya Projects, Bhopal",
    linkedinUrl: "https://in.linkedin.com/",
    profile_description: [
      "Steering the world's largest contiguous pressurized irrigation network, my tenure at the Water Resources Department of Madhya Pradesh has been marked by groundbreaking enhancements in water use efficiency. The Mohanpura and Kundalia projects stand as testaments to our team's ability to double efficiency gains compared to traditional canal networks, directly impacting 290,000 hectares of agricultural land.",
      "With over 18 years dedicated to water resource management, I've honed skills in hydraulic modeling, agribusiness management, and water security, ensuring sustainable water practices. The Water Resources Department benefits from my ability to integrate complex project management with technical design, fostering improvements in water governance and policy alongside key stakeholders.",
    ],
    experience: [
      {
        position: "Superintending Engineer & Project Administrator",
        department: "Government Of Madhya Pradesh, Water resources Department",
        duration: "Jun 2024 - Present · 3 mos",
      },
      {
        position: "Executive Engineer",
        department: "Water Resources Department, Madhya Pradesh",
        duration: "Jan 2018 - Jun 2024 · 6 yrs 6 mos",
      },
      {
        position: "Assistant Engineer",
        department: "Madhya Pradesh Water Resources Department",
        duration: "Jan 2006 - Dec 2017 · 12 yrs",
      },
    ],
  },
  {
    fullName: "Sandeep Sir",
    profilePicture: profilePicture_2,
    designation: "CE Mohanpura Kundaliya Projects, Bhopal",
    linkedinUrl: "https://in.linkedin.com/",
    profile_description: [
      "Steering the world's largest contiguous pressurized irrigation network, my tenure at the Water Resources Department of Madhya Pradesh has been marked by groundbreaking enhancements in water use efficiency. The Mohanpura and Kundalia projects stand as testaments to our team's ability to double efficiency gains compared to traditional canal networks, directly impacting 290,000 hectares of agricultural land.",
      "With over 18 years dedicated to water resource management, I've honed skills in hydraulic modeling, agribusiness management, and water security, ensuring sustainable water practices. The Water Resources Department benefits from my ability to integrate complex project management with technical design, fostering improvements in water governance and policy alongside key stakeholders.",
    ],
    experience: [
      {
        position: "Superintending Engineer & Project Administrator",
        department: "Government Of Madhya Pradesh, Water resources Department",
        duration: "Jun 2024 - Present · 3 mos",
      },
      {
        position: "Executive Engineer",
        department: "Water Resources Department, Madhya Pradesh",
        duration: "Jan 2018 - Jun 2024 · 6 yrs 6 mos",
      },
      {
        position: "Assistant Engineer",
        department: "Madhya Pradesh Water Resources Department",
        duration: "Jan 2006 - Dec 2017 · 12 yrs",
      },
    ],
  },
  {
    fullName: "Vipin Sir",
    profilePicture: profilePicture_3,
    designation: "CE Mohanpura Kundaliya Projects, Bhopal",
    linkedinUrl: "https://in.linkedin.com/",
    profile_description: [
      "Steering the world's largest contiguous pressurized irrigation network, my tenure at the Water Resources Department of Madhya Pradesh has been marked by groundbreaking enhancements in water use efficiency. The Mohanpura and Kundalia projects stand as testaments to our team's ability to double efficiency gains compared to traditional canal networks, directly impacting 290,000 hectares of agricultural land.",
      "With over 18 years dedicated to water resource management, I've honed skills in hydraulic modeling, agribusiness management, and water security, ensuring sustainable water practices. The Water Resources Department benefits from my ability to integrate complex project management with technical design, fostering improvements in water governance and policy alongside key stakeholders.",
    ],
    experience: [
      {
        position: "Superintending Engineer & Project Administrator",
        department: "Government Of Madhya Pradesh, Water resources Department",
        duration: "Jun 2024 - Present · 3 mos",
      },
      {
        position: "Executive Engineer",
        department: "Water Resources Department, Madhya Pradesh",
        duration: "Jan 2018 - Jun 2024 · 6 yrs 6 mos",
      },
      {
        position: "Assistant Engineer",
        department: "Madhya Pradesh Water Resources Department",
        duration: "Jan 2006 - Dec 2017 · 12 yrs",
      },
    ],
  },
  {
    fullName: "Silawat Sir",
    profilePicture: profilePicture_4,
    linkedinUrl: "/",
    designation: "CE Mohanpura Kundaliya Projects, Bhopal",

    profile_description: [
      "Steering the world's largest contiguous pressurized irrigation network, my tenure at the Water Resources Department of Madhya Pradesh has been marked by groundbreaking enhancements in water use efficiency. The Mohanpura and Kundalia projects stand as testaments to our team's ability to double efficiency gains compared to traditional canal networks, directly impacting 290,000 hectares of agricultural land.",
      "With over 18 years dedicated to water resource management, I've honed skills in hydraulic modeling, agribusiness management, and water security, ensuring sustainable water practices. The Water Resources Department benefits from my ability to integrate complex project management with technical design, fostering improvements in water governance and policy alongside key stakeholders.",
    ],
    experience: [
      {
        position: "Superintending Engineer & Project Administrator",
        department: "Government Of Madhya Pradesh, Water resources Department",
        duration: "Jun 2024 - Present · 3 mos",
      },
      {
        position: "Executive Engineer",
        department: "Water Resources Department, Madhya Pradesh",
        duration: "Jan 2018 - Jun 2024 · 6 yrs 6 mos",
      },
      {
        position: "Assistant Engineer",
        department: "Madhya Pradesh Water Resources Department",
        duration: "Jan 2006 - Dec 2017 · 12 yrs",
      },
    ],
  },
  {
    fullName: "Shubhankar Sir",
    profilePicture: profilePicture_5,
    designation: "CE Mohanpura Kundaliya Projects, Bhopal",
    linkedinUrl: "https://in.linkedin.com/",
    profile_description: [
      "Steering the world's largest contiguous pressurized irrigation network, my tenure at the Water Resources Department of Madhya Pradesh has been marked by groundbreaking enhancements in water use efficiency. The Mohanpura and Kundalia projects stand as testaments to our team's ability to double efficiency gains compared to traditional canal networks, directly impacting 290,000 hectares of agricultural land.",
      "With over 18 years dedicated to water resource management, I've honed skills in hydraulic modeling, agribusiness management, and water security, ensuring sustainable water practices. The Water Resources Department benefits from my ability to integrate complex project management with technical design, fostering improvements in water governance and policy alongside key stakeholders.",
    ],
    experience: [
      {
        position: "Superintending Engineer & Project Administrator",
        department: "Government Of Madhya Pradesh, Water resources Department",
        duration: "Jun 2024 - Present · 3 mos",
      },
      {
        position: "Executive Engineer",
        department: "Water Resources Department, Madhya Pradesh",
        duration: "Jan 2018 - Jun 2024 · 6 yrs 6 mos",
      },
      {
        position: "Assistant Engineer",
        department: "Madhya Pradesh Water Resources Department",
        duration: "Jan 2006 - Dec 2017 · 12 yrs",
      },
    ],
  },
];

// ----------------------------------------------------------------------HERO SLIDER--------------------------------------------------------------------------------
const heroBanners = [
  {
    banner: banner1,
    title: "World’s Largest Contiguous Irrigated Area With PIN",
    description:
      "India’s First Pressurised Piped Irrigation Project, enhancing the lives of lakhs while making agriculture more efficient and sustainable for brighter future.",
  },
];
const HeroBanner_array = heroBanners.map((e, index) => (
  <HeroSlider
    key={index}
    banner={e.banner}
    title={e.title}
    description={e.description}
  />
));
// -----------------------------------------------------------------------ProjectHighlightsCard--------------------------------------------------------------------------\

const projectHighlightCards_array = [
  {
    icon: projectHighlight_icon1,
    value: "2,90,000 ha",
    label: "Total Irrigated Area",
    bgColor: "#9BFFAB",
  },
  {
    icon: projectHighlight_icon2,
    value: "80%",
    label: "System Efficiency",
    bgColor: "#E0FF89",
  },
  {
    icon: projectHighlight_icon3,
    value: "~ 50%",
    label: "Energy Efficiency",
    bgColor: "#FFF597",
  },
  {
    icon: projectHighlight_icon4,
    value: "1254+",
    label: "Villages Benefitted",
    bgColor: "#A3FFDE",
  },
  {
    icon: projectHighlight_icon5,
    value: "25,000+ km",
    label: "Total Pipelines Laid",
    bgColor: "#FFF498",
  },
  {
    icon: projectHighlight_icon6,
    value: "SCADA",
    label: "Enabled  & Fully Automated",
    bgColor: "#FFD3DB",
  },
  {
    icon: projectHighlight_icon7,
    value: "2X",
    label: "More efficient water use",
    bgColor: "#C3F6FD",
  },
];

// ------------------------------------------------------------------------Irrigation Project Details ------------------------------------------------------------------------------------------------

const irrigationProjectDetails = [
  {
    projectName: "Mohanpura Irrigation Project",
    projectDescription:
      "The Water Resources Department, state government of Madhya Pradesh envisages to develop Mohanpura dam, near vilage Banskhedi in district Rajgarh. The dam is proposed constructed across river Newaj at an estimated investment of 3,866-crore. The proposed Mohanpura dam proposes to provide water for irrigation, domestic and industrial uses.",
    projectImage: dam1,
    keyPoints: [
      {
        title: "Irrigates 1,51,495 ha of land",
        description:
          "Country’s First project that irrigates field using underground canal with the longest pressure pipe is to irrigate 1 lakh 51 thousand hectares of land.",
      },
      {
        title: "Benefits 792+ villages in the state",
        description:
          "22 Major & 33 Medium  Pressurised Pipe Irrigation (PIN)  projects are built on the Newaj River, 8 km from Rajgarh, ",
      },
      {
        title: "3726 sq. km of Catchment Area",
        description:
          "1361 m long earthen dam on left flank and 875 m long on right flank. The GCA of the Mohanpura project is 92860 ha in Rajgarh and Khilichipur tehsils of Rajgarh district.",
      },
    ],
  },
  {
    projectName: "Kundalia Irrigation Project ",

    projectDescription:
      "Kundalia Irrigation Project (KIP) is a part of Madhya Pradesh Irrigation Efficiency Improvement Project (MPIEIP), aimed to achieve high irrigation efficiency and improve water productivity in Madhya Pradesh, India. The project aims to develop a new highly efficient pressurized irrigation network and productive command area under the Kundalia irrigation Project (KIP) in Rajgarh and Agar Malwa Districts.",
    projectImage: dam2,
    keyPoints: [
      {
        title: "Irrigates 1,39,000 ha of land",
        description:
          "KMMP comprises of 44.5-meter (m) high composite earth and concrete Kundalia Dam across the Kalisindh River which was started in May 2015 and completed in December 2018",
      },
      {
        title: "Benefits 411+ villages in the state",
        description:
          "The Kundalia greenfield irrigation project developed on the Kalisindh river  is designed to provide 2 kg/cm2 pressure at every 1 ha farm outlet that is micro-irrigation-ready (drip and micro-sprinklers).",
      },
      {
        title: "4900 sq. km of Catchment Area",
        description:
          "Earthen dam for 2355 m and subsidiary saddle dam of 2130 m and central gated spillway of 236 m length.The GCA of the Kundalia project is 82625 ha in Rajgarh and Khilichipur tehsils of Rajgarh district.",
      },
    ],
  },
];

// ------------------------------------------------------------ABOUT US PAGE-----------------------------------------------------------------------------------------
const aboutUs_card_details = [
  {
    bgColor: "#FFD3DB",
    title: "OUR MISSION",
    titleColor: "#DD687D",
    subTitle: "Revolutionizing Agriculture, Enhancing Lives",
    description:
      "Our mission is to revolutionize agriculture through innovative irrigation solutions, ensuring sustainable water management and improving the livelihoods of thousands of farmers across the region.",
  },
  {
    bgColor: "#C3F6FD",
    title: "OUR VALUES",
    titleColor: "#31AEBF",
    subTitle: "Sustainability, Efficiency, Community",
    description:
      "We are committed to fostering a sustainable environment, maximizing efficiency in water usage, and building strong, resilient communities through collaborative efforts and technological advancements.",
  },
  {
    bgColor: "#FDFF9A",
    title: "OUR VISION",
    titleColor: "#9EC828",
    subTitle: "A Future of Sustainable Growth",
    description:
      "We envision a future where efficient water management practices lead to thriving agricultural communities, increased food security, and a balanced ecosystem that supports both human and environmental health.",
  },
];

// --------------------------------------------------------------GENERIC TEMPLATE------------------------------------------------------------------------------------
const projectOutreach_page = {
  title: "Project Outreach",
  description:
    "Discover how our initiatives are reaching communities far and wide. From partnerships to on-ground efforts, explore how we're expanding our impact and fostering connections for lasting change.",
  cards: [
    {
      picture: projectOutreact_1,
      title:
        "24th International Congress of Irrigation and Drainage, Australia",
      date: "Oct 2022",
    },
    {
      picture: projectOutreact_1,
      title:
        "24th International Congress of Irrigation and Drainage, Australia",
      date: "Oct 2022",
    },
    {
      picture: projectOutreact_1,
      title:
        "24th International Congress of Irrigation and Drainage, Australia",
      date: "Oct 2022",
    },
    {
      picture: projectOutreact_1,
      title:
        "24th International Congress of Irrigation and Drainage, Australia",
      date: "Oct 2022",
    },
    {
      picture: projectOutreact_1,
      title:
        "24th International Congress of Irrigation and Drainage, Australia",
      date: "Oct 2022",
    },
    {
      picture: projectOutreact_1,
      title:
        "24th International Congress of Irrigation and Drainage, Australia",
      date: "Oct 2022",
    },
  ],
};

const newsUpdate_page = {
  title: "News & Updates",
  description:
    "Stay informed with the latest developments, milestones, and stories from our ongoing journey. Discover how we’re making an impact and what’s next for our projects and community.​",
  cards: [
    {
      picture: newUpdate_1,
      title:
        "Hon. Minister Govt of India, Social Justice and Empowerment Ministry, Shri Virendra Kumar Khatik",
      date: "12 April 2023",
    },
    {
      picture: newUpdate_1,
      title:
        "Hon. Minister Govt of India, Social Justice and Empowerment Ministry, Shri Virendra Kumar Khatik",
      date: "12 April 2023",
    },
    {
      picture: newUpdate_1,
      title:
        "Hon. Minister Govt of India, Social Justice and Empowerment Ministry, Shri Virendra Kumar Khatik",
      date: "12 April 2023",
    },
    {
      picture: newUpdate_1,
      title:
        "Hon. Minister Govt of India, Social Justice and Empowerment Ministry, Shri Virendra Kumar Khatik",
      date: "12 April 2023",
    },
    {
      picture: newUpdate_1,
      title:
        "Hon. Minister Govt of India, Social Justice and Empowerment Ministry, Shri Virendra Kumar Khatik",
      date: "12 April 2023",
    },
    {
      picture: newUpdate_1,
      title:
        "Hon. Minister Govt of India, Social Justice and Empowerment Ministry, Shri Virendra Kumar Khatik",
      date: "12 April 2023",
    },
  ],
};
// ----------------------------------------------------RESEARCH AND PUBLICATIONS------------------------------------------------------------------------------------
const researchPublicationHeader = {
  title: "Research & Publication",
  description:
    "Explore in-depth research, reports, and publications that highlight our innovative practices, impact studies, and the future of sustainable development in the region. Stay updated with the knowledge shaping our work.",
};

const researchPublication = [
  {
    picture: researchImg_1,
    title:
      "Hon. Minister Govt of India, Social Justice and Empowerment Ministry, Shri Virendra Kumar Khatik",
    subtitle:
      "Leveraged expertise from IHE Delft, Netherlands (tailored training program",
    date: "12 April 2023",
  },
  {
    picture: researchImg_1,
    title:
      "Hon. Minister Govt of India, Social Justice and Empowerment Ministry, Shri Virendra Kumar Khatik",
    subtitle:
      "Leveraged expertise from IHE Delft, Netherlands (tailored training program",
    date: "12 April 2023",
  },
  {
    picture: researchImg_1,
    title:
      "Hon. Minister Govt of India, Social Justice and Empowerment Ministry, Shri Virendra Kumar Khatik",
    subtitle:
      "Leveraged expertise from IHE Delft, Netherlands (tailored training program",
    date: "12 April 2023",
  },
  {
    picture: researchImg_1,
    title:
      "Hon. Minister Govt of India, Social Justice and Empowerment Ministry, Shri Virendra Kumar Khatik",
    subtitle:
      "Leveraged expertise from IHE Delft, Netherlands (tailored training program",
    date: "12 April 2023",
  },
];
// ---------------------------------------------------------------------AWARDS AND ACKNOWLEDGEMENT-------------------------------------------------------------------

const awardsAndAcknowledgementHeader = {
  title: "Awards & Acknowledgement",
  description:
    "Explore the accolades and honors that acknowledge our commitment to innovation, sustainability, and transformative impact.",
};

const awardsAndAcknowledgement = [
  {
    title: "Central Bureau of Irrigation & Power Awards, 2022",
    subTitle: "",
    awards: [
      {
        title: "",
        pictures: [
          { picture: awards_1, description: "" },
          { picture: awards_2, description: "" },
        ],
      },
    ],
  },
  {
    title: "Central Bureau of Irrigation & Power Awards, 2022",
    subTitle: "For Optimum Utilisation of Water Resources",
    awards: [
      {
        title: "",
        pictures: [{ picture: awards_3, description: "" }],
      },
    ],
  },
  {
    title: "Excellence Awards Ceremony By Water Resources Department ",
    subTitle: "",
    awards: [
      {
        title: "State Level Awards",
        pictures: [
          {
            picture: awards_4,
            description:
              "Mr. Vikas Rajoria, Superintendent Engineer and Project Administrator @ MKPMU",
          },
          {
            picture: awards_5,
            description:
              "Mr. Vikas Rajoria, Superintendent Engineer and Project Administrator @ MKPMU",
          },
        ],
      },
      {
        title: "Basin Level Awards",
        pictures: [
          {
            picture: awards_6,
            description: "Mr. Sandeep Dubey, Project Manager",
          },
          {
            picture: awards_7,
            description: "Mr. Sandeep Dubey, Project Manager",
          },
          {
            picture: awards_8,
            description: "Mr. Sandeep Dubey, Project Manager",
          },
        ],
      },
    ],
  },
];

// --------------------------------------------------------------------Kundaliya Details-----------------------------------------------------------------------------
const kundaliyaDetails = {
  introduction: [
    "Kundalia project is a major multipurpose project, which is proposed, in lower Chambal basin in lower zone-I. The project is proposed on river Kalisindh which is one of the major three river constituting this zone of lower Chambal sub basin. Under the scope of proposed project a barrier is proposed to be constructed on river Kalisindh near village Balaheda of Zirapur tehsil of district Rajgarh.The proposed dam site can be located at latitude230-55’-41’’ and longitude 76018'15''on Topo sheet no 54D/4.The site is approachable from Km 42 of Zirapur - Pachor road by a 10.0km long road.",
    "The project is second major dam which is proposed on the main river. The first dam is Ranjit Sagar dam which is proposed in the initial reach of the river in district Shajapur basically as a irrigation project whereas the project under reference is to be designed as a irrigation cum diversion structure under the topographical limitation of the river and sub basin and in particular the gross surplus availability of water taking into consideration.",
    "The project in its proposed form will provide irrigation on d/s of proposed Kundalia dam on left and right flank of Kalisindh River. The irrigation will be provided by pressurized irrigation system nearly serving 125000ha in the districts of Rajgarh and Shajapur.",
    "The planned use of pressurized pipeline supplying sprinkler and micro irrigation system in the Kundalia major project offers the opportunity for high efficiency irrigation, meaning that more cultivable land can be brought under production. This is the basis upon which the planned CCA of kundalia mojar project was increased from 58040ha to 125000ha.",
  ],
  mainComponents: [
    "Construction of dam for 2655 m. This will consist of left earthen dam in 2335 m length and right earthen dam in 320 m length, and subsidiary bund in a saddle of 2 km.",
    "Construction of a central gated spillway in 345m length which will consist of 11 no’s of 17x12m size radial gates and 10 piers of 3.5m thickness each.",
    "Construction of right and left NOF in 120m length wherein5 blocks of 20m each will be provided in left flank and1 blocks of 20m each will provide in right flank.",
    "One no of head sluice on left flank and one no. of head sluice on right flank from dam to provide irrigation on d/s of dam to approx. 125000ha of CCA.",
    "One no of under sluice in pier number 9 to provide drinking water facility and release of water for d/s .for maintaining ecological requirements.",
    "350m long 7.50 m wide T-beam Type double lane Bridge over the spillway.",
    "10m long key wall on left earthen dam site at junction between earth dam and spillway.",
    "11 no's of radial service gates of size 17x12m (10+1stand by) with electromechanical rope drum hoisting arrangement. Alternatively this can be provided with hydraulic hoist.",
    "1 no's of emergency gate consisting of 8 multiple units of 17x 1.35m each and 1 top unit of 17x1.2m with gantry crane type of hoisting arrangement.",
    "D/S energy dissipation arrangement in the form of slotted roller bucket of 15m radius.",
    "Construction of d/s training wall, guide wall and returned wall.",
    "Construction of diversion barrage and channel from Lakhundar river.",
    "Construction of complete left bank & right bank pressurized irrigation system including rising main, pump house, transmission line including construction of all the pressurized structure required therein.",
  ],
  salientFeatures: [
    {
      title: "LOCATION",
      features: [
        ["State", "Madhya Pradesh"],
        ["Tehsil/District", "Zirapur / Rajgarh"],
        ["Village", "Balaheda"],
        ["Longitude", "76018’15’’"],
        ["Latitude", "23055’41’’"],
      ],
    },
    {
      title: "HYDROLOGY",
      features: [
        ["Total Catchment Area", "4925 sq.km"],
        ["Catchment area from Kalisindh", "3850 sq.km"],
        ["Diverted catchment from Lakhundar", "1075 sq.km"],
        ["Longitude", "76018’15’’"],
        ["Latitude", "23055’41’’"],
      ],
    },
    {
      title: "RESERVOIR DATA",
      features: [
        ["Gross storage capacity", "582.75 Mcum"],
        ["Dead storage capacity", "30.00Mcum"],
        ["Live storage capacity", "552.75Mcum"],
      ],
    },
    {
      title: "DAM",
      features: [
        ["Type", "Zonal dam"],
        ["Max. height of earthen dam", "32.001m"],
        ["Max. height of concrete dam from N.B.L.", "44.50 m"],
        ["Total length of dam", "3100 m"],
        ["Top width", "7.50 m"],
        ["Length of spillway", "345 m"],
        ["Length of earthen dam", "2755m (2487m+268m)"],
        ["Length of earthen dam", "120m (60m+60m)"],
        ["Length of NOF", "552.75Mcum"],
      ],
    },
    {
      title: "SPILLWAY",
      features: [
        ["Type", "Gate controlled ogee spillway"],
        ["Crest level", "388.00m"],
        ["Type of gate", "Radial gate (17x12 m)."],
        ["No. of gate", "11"],
        ["Design discharge moderated", "20747.50cumec"],
        ["Length", "225m between abutment"],
      ],
    },
    {
      title: "IRRIGATION",
      features: [
        ["Gross command area (GCA)", "200000 ha"],
        ["Culturable command area (CCA)", "125000 ha"],
        ["Annual irrigation", "163000 ha"],
        ["Crop pattern proposed", "Double cropped (Rabi &Kharif)"],
        ["No. of village to be befitted", "Approximately 411 villages"],
      ],
    },
    {
      title: "COST OF PROJECT",
      features: [
        ["Unit I head work", "1400.03crore"],
        ["Unit II canal", "2047.97 crore"],
        ["Total cost", "3448.00 crore"],
        ["Benefit Cost Ratio", "1.85"],
      ],
    },
  ],
};
const mohanpuraDetails = {
  introduction: [
    "Mohanpura project is a major multipurpose project, which is proposed, in lower Chambal basin in lower zone-I. The project is proposed on river Kalisindh which is one of the major three river constituting this zone of lower Chambal sub basin. Under the scope of proposed project a barrier is proposed to be constructed on river Kalisindh near village Balaheda of Zirapur tehsil of district Rajgarh",
    "The proposed dam site can be located at latitude230-55’-41’’ and longitude 76018'15''on Topo sheet no 54D/4.The site is approachable from Km 42 of Zirapur - Pachor road by a 10.0km long road. The site is 26km from Zirapur town. The approach up to dam site from right flank is a PMGSY road which ends up to the right bank of the river.",
    "The project is second major dam which is proposed on the main river. The first dam is Ranjit Sagar dam which is proposed in the initial reach of the river in district Shajapur basically as a irrigation project whereas the project under reference is to be designed as a irrigation cum diversion structure under the topographical limitation of the river and sub basin and in particular the gross surplus availability of water taking into consideration.",
    "The project in its proposed form will provide irrigation on d/s of proposed Mohanpura dam on left and right flank of Kalisindh River. The irrigation will be provided by pressurized irrigation system nearly serving 125000ha in the districts of Rajgarh and Shajapur.",
    "The planned use of pressurized pipeline supplying sprinkler and micro irrigation system in the Mohanpura major project offers the opportunity for high efficiency irrigation, meaning that more cultivable land can be brought under production. This is the basis upon which the planned CCA of Mohanpura mojar project was increased from 58040ha to 125000ha.",
  ],
  mainComponents: [
    "Construction of dam for 2655 m. This will consist of left earthen dam in 2335 m length and right earthen dam in 320 m length, and subsidiary bund in a saddle of 2 km.",
    "Construction of a central gated spillway in 345m length which will consist of 11 no’s of 17x12m size radial gates and 10 piers of 3.5m thickness each.",
    "Construction of right and left NOF in 120m length wherein5 blocks of 20m each will be provided in left flank and1 blocks of 20m each will provide in right flank.",
    "One no of head sluice on left flank and one no. of head sluice on right flank from dam to provide irrigation on d/s of dam to approx. 125000ha of CCA.",
    "One no of under sluice in pier number 9 to provide drinking water facility and release of water for d/s .for maintaining ecological requirements.",
    "350m long 7.50 m wide T-beam Type double lane Bridge over the spillway.",
    "10m long key wall on left earthen dam site at junction between earth dam and spillway.",
    "11 no's of radial service gates of size 17x12m (10+1stand by) with electromechanical rope drum hoisting arrangement. Alternatively this can be provided with hydraulic hoist.",
    "1 no's of emergency gate consisting of 8 multiple units of 17x 1.35m each and 1 top unit of 17x1.2m with gantry crane type of hoisting arrangement.",
    "D/S energy dissipation arrangement in the form of slotted roller bucket of 15m radius.",
    "Construction of d/s training wall, guide wall and returned wall.",
    "Construction of diversion barrage and channel from Lakhundar river.",
    "Construction of complete left bank & right bank pressurized irrigation system including rising main, pump house, transmission line including construction of all the pressurized structure required therein.",
  ],
  salientFeatures: [
    {
      title: "LOCATION",
      features: [
        ["State", "Madhya Pradesh"],
        ["Tehsil/District", "Zirapur / Rajgarh"],
        ["Village", "Balaheda"],
        ["Longitude", "76018’15’’"],
        ["Latitude", "23055’41’’"],
      ],
    },
    {
      title: "HYDROLOGY",
      features: [
        ["Total Catchment Area", "4925 sq.km"],
        ["Catchment area from Kalisindh", "3850 sq.km"],
        ["Diverted catchment from Lakhundar", "1075 sq.km"],
        ["Longitude", "76018’15’’"],
        ["Latitude", "23055’41’’"],
      ],
    },
    {
      title: "RESERVOIR DATA",
      features: [
        ["Gross storage capacity", "582.75 Mcum"],
        ["Dead storage capacity", "30.00Mcum"],
        ["Live storage capacity", "552.75Mcum"],
      ],
    },
    {
      title: "DAM",
      features: [
        ["Type", "Zonal dam"],
        ["Max. height of earthen dam", "32.001m"],
        ["Max. height of concrete dam from N.B.L.", "44.50 m"],
        ["Total length of dam", "3100 m"],
        ["Top width", "7.50 m"],
        ["Length of spillway", "345 m"],
        ["Length of earthen dam", "2755m (2487m+268m)"],
        ["Length of earthen dam", "120m (60m+60m)"],
        ["Length of NOF", "552.75Mcum"],
      ],
    },
    {
      title: "SPILLWAY",
      features: [
        ["Type", "Gate controlled ogee spillway"],
        ["Crest level", "388.00m"],
        ["Type of gate", "Radial gate (17x12 m)."],
        ["No. of gate", "11"],
        ["Design discharge moderated", "20747.50cumec"],
        ["Length", "225m between abutment"],
      ],
    },
    {
      title: "IRRIGATION",
      features: [
        ["Gross command area (GCA)", "200000 ha"],
        ["Culturable command area (CCA)", "125000 ha"],
        ["Annual irrigation", "163000 ha"],
        ["Crop pattern proposed", "Double cropped (Rabi &Kharif)"],
        ["No. of village to be befitted", "Approximately 411 villages"],
      ],
    },
    {
      title: "COST OF PROJECT",
      features: [
        ["Unit I head work", "1400.03crore"],
        ["Unit II canal", "2047.97 crore"],
        ["Total cost", "3448.00 crore"],
        ["Benefit Cost Ratio", "1.85"],
      ],
    },
  ],
};

// ---------------------------------------------------------------BLOGS PAGE---------------------------------------------------------------------------------------

const blogs_page = {
  title: "Blogs",
  description:
    "Dive into our latest blogs featuring expert opinions, project updates, and stories from the field. Stay informed and inspired by the ongoing journey of our initiatives.",
  cards: [
    {
      id: 1,
      title:
        "Hon. Minister Govt of India, Social Justice and Empowerment Ministry, Shri Virendra Kumar Khatik",
      picture: newUpdate_1,
      description:
        "The Water Resources Department, state government of Madhya Pradesh envisages to develop Mohanpura dam, near vilage Banskhedi in district Rajgarh. The dam is proposed constructed across river Newaj at an estimated investment of 3,866-crore. The proposed Mohanpura dam proposes to provide water for irrigation, domestic and industrial uses.",
      date: "2024-10-01",
      author: {
        name: "John Doe",
        profilePic: "https://example.com/profile.jpg",
      },
      content: [
        { type: "heading", level: 1, text: "Introduction" },
        {
          type: "paragraph",
          text: "Mohanpura project is a major multipurpose project, which is proposed, in lower Chambal basin in lower zone-I. The project is proposed on river Kalisindh which is one of the major three river constituting this zone of lower Chambal sub basin. Under the scope of proposed project a barrier is proposed to be constructed on river Kalisindh near village Balaheda of Zirapur tehsil of district Rajgarh",
        },
        {
          type: "paragraph",
          text: "Mohanpura project is a major multipurpose project, which is proposed, in lower Chambal basin in lower zone-I. The project is proposed on river Kalisindh which is one of the major three river constituting this zone of lower Chambal sub basin. Under the scope of proposed project a barrier is proposed to be constructed on river Kalisindh near village Balaheda of Zirapur tehsil of district Rajgarh",
        },
        { type: "subheading", level: 2, text: "Why Structure is Important" },
        {
          type: "paragraph",
          text: "The project in its proposed form will provide irrigation on d/s of proposed Mohanpura dam on left and right flank of Kalisindh River. The irrigation will be provided by pressurized irrigation system nearly serving 125000ha in the districts of Rajgarh and Shajapur.",
        },
        {
          type: "image",
          src: newUpdate_1,
          alt: "A blog image",
        },
        {
          type: "points",
          items: [
            "The irrigation will be provided by pressurized irrigation system nearly serving 125000ha in the districts of Rajgarh and Shajapur",
            "The irrigation will be provided by pressurized irrigation system nearly serving 125000ha in the districts of Rajgarh and Shajapur",
            "The irrigation will be provided by pressurized irrigation system nearly serving 125000ha in the districts of Rajgarh and Shajapur",
          ],
        },
        { type: "video", src: "/videos/blog-video.mp4", alt: "A blog video" },
        { type: "paragraph", text: "Let’s dive into each step." },
      ],
      hasItsPage: true,
      tags: ["Dam", "Hydro Electricity", "Power Generation"],
      comments: [
        {
          id: 101,
          user: "Jane Smith",
          comment: "Great explanation of useEffect!",
          date: "2024-10-01T08:30:00",
        },
        {
          id: 102,
          user: "Bob Johnson",
          comment: "I was confused before, but now it's clear.",
          date: "2024-10-01T09:15:00",
        },
      ],
    },
    {
      id: 2,
      title:
        "Hon. Minister Govt of India, Social Justice and Empowerment Ministry, Shri Virendra Kumar Khatik",
      picture: newUpdate_1,
      description:
        "The Water Resources Department, state government of Madhya Pradesh envisages to develop Mohanpura dam, near vilage Banskhedi in district Rajgarh. The dam is proposed constructed across river Newaj at an estimated investment of 3,866-crore. The proposed Mohanpura dam proposes to provide water for irrigation, domestic and industrial uses.",
      date: "2024-10-01",
      author: {
        name: "John Doe",
        profilePic: "https://example.com/profile.jpg",
      },
      content: [
        { type: "heading", level: 1, text: "Introduction" },
        {
          type: "paragraph",
          text: "In this blog, we will discuss how to implement a blog page with multiple elements.",
        },
        { type: "subheading", level: 2, text: "Why Structure is Important" },
        {
          type: "paragraph",
          text: "The project in its proposed form will provide irrigation on d/s of proposed Mohanpura dam on left and right flank of Kalisindh River. The irrigation will be provided by pressurized irrigation system nearly serving 125000ha in the districts of Rajgarh and Shajapur.",
        },
        { type: "image", src: "/images/blog-image.jpg", alt: "A blog image" },
        { type: "video", src: "/videos/blog-video.mp4", alt: "A blog video" },
        {
          type: "points",
          items: [
            "Structure your content",
            "Use components",
            "Ensure responsiveness",
          ],
        },
        { type: "paragraph", text: "Let’s dive into each step." },
      ],
      hasItsPage: true,
      tags: ["Dam", "Hydro Electricity", "Power Generation"],
      comments: [
        {
          id: 101,
          user: "Jane Smith",
          comment: "Great explanation of useEffect!",
          date: "2024-10-01T08:30:00",
        },
        {
          id: 102,
          user: "Bob Johnson",
          comment: "I was confused before, but now it's clear.",
          date: "2024-10-01T09:15:00",
        },
      ],
    },
    {
      id: 3,
      title:
        "Hon. Minister Govt of India, Social Justice and Empowerment Ministry, Shri Virendra Kumar Khatik",
      picture: newUpdate_1,
      description:
        "The Water Resources Department, state government of Madhya Pradesh envisages to develop Mohanpura dam, near vilage Banskhedi in district Rajgarh. The dam is proposed constructed across river Newaj at an estimated investment of 3,866-crore. The proposed Mohanpura dam proposes to provide water for irrigation, domestic and industrial uses.",
      date: "2024-10-01",
      author: {
        name: "John Doe",
        profilePic: "https://example.com/profile.jpg",
      },
      content: [
        { type: "heading", level: 1, text: "Introduction" },
        {
          type: "paragraph",
          text: "In this blog, we will discuss how to implement a blog page with multiple elements.",
        },
        { type: "subheading", level: 2, text: "Why Structure is Important" },
        {
          type: "paragraph",
          text: "Organizing content properly helps in building scalable and readable pages.",
        },
        { type: "image", src: "/images/blog-image.jpg", alt: "A blog image" },
        { type: "video", src: "/videos/blog-video.mp4", alt: "A blog video" },
        {
          type: "points",
          items: [
            "Structure your content",
            "Use components",
            "Ensure responsiveness",
          ],
        },
        { type: "paragraph", text: "Let’s dive into each step." },
      ],
      hasItsPage: true,
      tags: ["Dam", "Hydro Electricity", "Power Generation"],
      comments: [
        {
          id: 101,
          user: "Jane Smith",
          comment: "Great explanation of useEffect!",
          date: "2024-10-01T08:30:00",
        },
        {
          id: 102,
          user: "Bob Johnson",
          comment: "I was confused before, but now it's clear.",
          date: "2024-10-01T09:15:00",
        },
      ],
    },
  ],
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

export {
  ministerQuoteSlides_array,
  testimonialSlides_array,
  projectHighlightCards_array,
  aboutUs_card_details,
  HeroBanner_array,
  irrigationProjectDetails,
  teamMemberDetails_array,
  actual_testimonials_array,
  projectOutreach_page,
  newsUpdate_page,
  blogs_page,
  researchPublication,
  awardsAndAcknowledgement,
  testimonialHeader,
  researchPublicationHeader,
  awardsAndAcknowledgementHeader,
  kundaliyaDetails,
  mohanpuraDetails,
};
