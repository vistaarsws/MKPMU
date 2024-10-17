import "./Impact.css";
import ComparisonSlider from "../../components/layout/ComparisonSlider/ComparisonSlider";
import droughtImg from "../../assets/images/droughtImg.png";
import greenLandImg from "../../assets/images/greenLandImg.png";
import Card from "../../components/ui/Cards/Card/Card";
import environmentalImpactIcon from "../../assets/images/earth.svg";
import otherImpactsIcon from "../../assets/images/infrastructure.svg";
import socialImpactIcon from "../../assets/images/community.svg";
import nationalImpactIcon from "../../assets/images/indiaMap.svg";

// import pict1 from "../../assets/images/1.jpg";
// import pict2 from "../../assets/images/2.jpg";
// import pict3 from "../../assets/images/3.jpg";
// import pict4 from "../../assets/images/4.jpg";
// import pict5 from "../../assets/images/5.jpg";
// import pict6 from "../../assets/images/6.jpg";

// import ScrollTriggerSlider from "../../components/ui/ScrollTriggerSlider/ScrollTriggerSlider";

// import { useEffect } from "react";

export default function Impact() {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
  //   checkScreenSize();
  //   window.addEventListener("resize", checkScreenSize);
  //   return () => window.removeEventListener("resize", checkScreenSize);
  // }, []);

  const irrigation_impacts = [
    {
      icon: socialImpactIcon,
      title: "Social Impact",
      description:
        "The Mohanpura and Kundalia irrigation projects have significantly improved the lives of local communities. By providing reliable water access, these projects have empowered farmers to cultivate more land and diversify their crops, leading to increased income and food security. The projects have also created job opportunities, boosting the local economy and improving the quality of life for thousands of families.",
      bgColor: "#DFF7FF",
    },
    {
      icon: environmentalImpactIcon,
      title: "Environmental Impact",
      description:
        "Our commitment to sustainable practices is evident in the minimal environmental disruption caused by the projects. The advanced irrigation systems conserve water, reduce soil erosion, and maintain the ecological balance in the region. By promoting efficient water use, the projects help preserve local water resources and support biodiversity.",
      bgColor: "#F5FFDF",
    },
    {
      icon: nationalImpactIcon,
      title: "National Impact",
      description:
        "On a broader scale, the Mohanpura and Kundalia projects contribute to national food security by increasing agricultural productivity. The efficient water management practices introduced by these projects serve as a model for other regions, showcasing the potential for sustainable agricultural development. The projects also support the government's initiatives towards water conservation and rural development, furthering India's progress towards sustainable growth.",
      bgColor: "#E8DFFF",
    },
    {
      icon: otherImpactsIcon,
      title: "Other Impacts",
      description:
        "The projects have also brought about significant infrastructural development in the region, including improved roads and connectivity. This infrastructure not only supports the agricultural sector but also facilitates access to markets, education, and healthcare, enhancing the overall standard of living in the area.",
      bgColor: "#FFDFE5",
    },
  ];

  return (
    <div className="impactPage_container">
      <article>
        <h1>From Drought To Green Revolution</h1>
        <p>
          A story of revolution that transformed thousands of lives and will
          impact millions more in the future.
        </p>
      </article>
      <ComparisonSlider />
      <section className="cleanWaterSection droughtLandSection">
        <article>
          <h2>
            <span>50000+ People</span> didn&apos;t had access to clean water
          </h2>
          <div>
            <h3>Life In A Thirsty Land</h3>
            <p>
              Before the irrigation projects in Mohanpura and Kundalia, the
              landscape was marked by parched fields and scarce water sources.
              Farmers relied on erratic monsoons, making agriculture a gamble
              with the constant threat of drought. Life was a daily struggle,
              with families journeying long distances to fetch water and limited
              means to cultivate more than basic crops. Economic opportunities
              were scarce, and many lived on the brink of hardship. Yet, amidst
              the harsh realities, the people held onto a deep connection with
              the land and a quiet resilience, hoping for a brighter future.
            </p>
          </div>
        </article>
        <figure>
          <img src={droughtImg} alt="Picture of Drought Land" />
        </figure>
      </section>
      <section className="cleanWaterSection greenLandSection">
        <figure>
          <img src={greenLandImg} alt="Picture of Green Land" />
        </figure>
        <article>
          <h2>
            <span>168+ Villages</span> are now getting clean water
          </h2>
          <div>
            <h3>Blossoming Prosperity</h3>
            <p>
              With the irrigation projects, Mohanpura and Kundalia have
              transformed into verdant landscapes, where once-parched fields now
              flourish with abundant crops. Farmers confidently cultivate a
              variety of produce, supported by a reliable water supply that has
              spurred economic growth and modern farming practices. The
              community buzzes with newfound energy, as families enjoy the
              benefits of surplus harvests and expanded markets. The region,
              once constrained by water scarcity, now thrives with hope and
              opportunity, symbolizing a new era of prosperity and pride for its
              people.
            </p>
          </div>
        </article>
      </section>
      <article className="impactOfIrrigation_section">
        <h2>Flourishing Futures: The Impact of Irrigation</h2>
        <p>
          The irrigation projects in Mohanpura and Kundalia have turned dry
          lands into thriving agricultural hubs. With abundant water, the
          community flourishes with newfound prosperity, hope, and opportunity.
        </p>
        <section>
          <div>
            {irrigation_impacts.map((card, index) => {
              return (
                <Card
                  key={index}
                  card={{
                    image: { src: card.icon },
                    color: { bgColor: card.bgColor },
                    text: {
                      content: ["", card.title, card.description],
                      justify: ["left", "left", "left"],
                    },
                    dimensions: { maxWidth: "74rem" },
                    padding: "4rem",
                  }}
                />
              );
            })}
          </div>
        </section>
      </article>
    </div>
  );
}
