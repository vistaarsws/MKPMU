import pmModi from "../assets/images/pmModi.png";
import mohanYadav from "../assets/images/mohanYadav.png";
import { MinisterSlider } from "../components/ui/Slider/MinisterSlider/MinisterSlider";
import { TestimonialSlider } from "../components/ui/Slider/TestimonialSlider/TestimonialSlider";
import team_1 from "../assets/images/Vikas_Rajoria.png";
import team_2 from "../assets/images/Jaswinder_Pal_Singh.png";
import team_3 from "../assets/images/Nilesh_Kuralkar.png";
import team_4 from "../assets/images/Ashwini_K_Upmanyu.png";
import banner from "../assets/images/banner.png";
import dam1 from "../assets/images/dam_front_view.png";
import dam2 from "../assets/images/dam_side_view.png";
import HeroSlider from "../components/ui/Slider/HeroSlider/HeroSlider";
import projectHighlight_icon1 from "../assets/images/totalIrrigatedArea.svg";
import projectHighlight_icon2 from "../assets/images/systemEfficiency.svg";
import projectHighlight_icon3 from "../assets/images/energyEfficiency.svg";
import projectHighlight_icon4 from "../assets/images/villageBenefitted.svg";
import projectHighlight_icon5 from "../assets/images/totalPipelineLayed.svg";
import projectHighlight_icon6 from "../assets/images/enabledFullyAutomated.svg";
import projectHighlight_icon7 from "../assets/images/moreEfficientwaterUse.svg";

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

const testimonialSlides = [
  {
    authorQuote:
      "What better revolution than irrigating wheat  field without having to work as a labour",
    authorName: "Arjun",
    authorPlace: "Junapani, Rajgarh",
  },
  {
    authorQuote:
      "What better revolution than irrigating wheat  field without having to work as a labour",
    authorName: "Arjun",
    authorPlace: "Junapani, Rajgarh",
  },
  {
    authorQuote:
      "What better revolution than irrigating wheat  field without having to work as a labour",
    authorName: "Arjun",
    authorPlace: "Junapani, Rajgarh",
  },
];

const testimonialSlides_array = testimonialSlides.map((e, index) => (
  <TestimonialSlider
    key={index}
    authorQuote={e.authorQuote}
    authorName={e.authorName}
    authorPlace={e.authorPlace}
  />
));

// ---------------------------------------------------------------------- MKPMU TEAM -------------------------------------------------------------------------------------
const mkpmuTeam = [
  {
    fullName: "Vikas Rajoria",
    designation: "CE Mohanpura Kundaliya Projects, Bhopal",
    picture: team_1,
  },
  {
    fullName: "Jaswinder Pal Singh",
    designation: "CE Mohanpura Kundaliya Projects, Bhopal",
    picture: team_2,
  },
  {
    fullName: "Nilesh Kuralkar",
    designation: "CE Mohanpura Kundaliya Projects, Bhopal",
    picture: team_3,
  },
  {
    fullName: "Ashwini K Upmanyu",
    designation: "CE Mohanpura Kundaliya Projects, Bhopal",
    picture: team_4,
  },
];
// ----------------------------------------------------------------------HERO SLIDER--------------------------------------------------------------------------------
const heroBanners = [
  {
    banner: banner,
    title: "World’s Largest Contiguous Irrigated Area With PIN",
    description:
      "India’s First Pressurised Piped Irrigation Project, enhancing the lives of lakhs while making agriculture more efficient and sustainable for brighter future.",
  },
  { banner: banner, title: "", description: "" },
  { banner: banner, title: "", description: "" },
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
        title: "Irrigates 1,45,000 ha of land",
        description:
          "Country’s First project that irrigates field using underground canal with the longest pressure pipe is to irrigate 1 lakh 35 thousand hectares of land.",
      },
      {
        title: "Irrigates 1,45,000 ha of land",
        description:
          "Country’s First project that irrigates field using underground canal with the longest pressure pipe is to irrigate 1 lakh 35 thousand hectares of land.",
      },
      {
        title: "Irrigates 1,45,000 ha of land",
        description:
          "Country’s First project that irrigates field using underground canal with the longest pressure pipe is to irrigate 1 lakh 35 thousand hectares of land.",
      },
    ],
  },
  {
    projectName: "Mohanpura Irrigation Project",

    projectDescription:
      "The Water Resources Department, state government of Madhya Pradesh envisages to develop Mohanpura dam, near vilage Banskhedi in district Rajgarh. The dam is proposed constructed across river Newaj at an estimated investment of 3,866-crore. The proposed Mohanpura dam proposes to provide water for irrigation, domestic and industrial uses.",
    projectImage: dam2,
    keyPoints: [
      {
        title: "Irrigates 1,45,000 ha of land",
        description:
          "Country’s First project that irrigates field using underground canal with the longest pressure pipe is to irrigate 1 lakh 35 thousand hectares of land.",
      },
      {
        title: "Irrigates 1,45,000 ha of land",
        description:
          "Country’s First project that irrigates field using underground canal with the longest pressure pipe is to irrigate 1 lakh 35 thousand hectares of land.",
      },
      {
        title: "Irrigates 1,45,000 ha of land",
        description:
          "Country’s First project that irrigates field using underground canal with the longest pressure pipe is to irrigate 1 lakh 35 thousand hectares of land.",
      },
    ],
  },
];

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export {
  ministerQuoteSlides_array,
  testimonialSlides_array,
  projectHighlightCards_array,
  HeroBanner_array,
  irrigationProjectDetails,
  mkpmuTeam,
};
