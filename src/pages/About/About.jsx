import Card from "../../components/ui/Cards/Card/Card";
import { aboutUs_card_details } from "../../utils/Constant";
// import bg_1 from "../../assets/images/indiaLifestyleIllustration.png";
import "./About.css";
import Team_section from "../../components/layout/TeamSection/TeamSection";
import Banner from "../../components/ui/Header/Banner/Banner";
import aboutBanner from "../../assets/images/aboutBanner.jpg";

export default function About() {
  const bannerText = {
    title: "Empowering Farmers, Enriching Lives",
    picture: aboutBanner,
    description:
      "The Mohanpura and Kundalia Irrigation Projects are groundbreaking initiatives in Madhya Pradesh, India, revolutionizing agricultural practices and transforming rural lives. Launched in 2018, these projects feature innovative underground pipeline systems and pressurized pipe irrigation technologies, setting new standards in water management. ",
  };

  return (
    <section className="aboutUs_container">
      <article>
        <Banner
          title={bannerText.title}
          description={bannerText.description}
          backgroundPicture={bannerText.picture}
        />

        <div>
          <h2>India&apos;s Pressurised Irrigation Revolution</h2>
          <p>
            The Mohanpura Project, built on the Nevaj River, and the Kundalia
            Project, on the Kalisindh River, collectively benefit over 1,000
            villages across multiple districts. With a combined investment
            exceeding Rs 7,300 crores, they aim to irrigate more than 260,000
            hectares of land.
            <br />
            <br />
            These projects not only enhance agricultural efficiency but also
            promote sustainable water use, marking a significant milestone in
            India&apos;s irrigation infrastructure and rural development
            efforts.
          </p>
        </div>
      </article>
      <article>
        <div className="aboutUs_cardContainer">
          {aboutUs_card_details.map((card, index) => {
            return (
              <Card
                key={index}
                card={{
                  image: { src: card.icon },
                  color: {
                    bgColor: card.bgColor,
                    textColor: [card.titleColor, "", ""],
                  },
                  text: {
                    content: [card.title, card.subTitle, card.description],
                    justify: ["left", "left", "left"],
                    size: [],
                  },
                  // dimensions: { maxHeight: "26rem", maxWidth: "36rem" },
                  padding: "2.4rem",
                }}
              />
            );
          })}
        </div>
      </article>
      <article>
        <div>
          <h1>Empowering Farmers, Cultivating Success</h1>
          <p>
            Our project empowers farmers with advanced pressurized irrigation
            systems, boosting productivity and reducing water waste. By
            enhancing crop yields and promoting sustainable farming practices,
            we help farmers achieve economic stability and long-term soil
            health. Through continuous technical support and training, we ensure
            they thrive in a sustainable agricultural landscape.
          </p>
        </div>
        <div>
          <h1>Preserving Resources, Protecting Ecosystems</h1>
          <p>
            Our project emphasizes minimal environmental disruption, maintaining
            ecological balance, and promoting the sustainable use of water
            resources to support agriculture and natural habitats.
          </p>
        </div>
        <div>
          <h1>Safety & Flood Damage</h1>
          <p>
            We prioritize safety and flood risk management by incorporating
            robust design principles that minimize submergence and protect both
            human settlements and the natural environment from potential flood
            damage.
          </p>
        </div>
      </article>
      <Team_section />
      <iframe
        className="h-[40vw] w-full"
        src="https://www.youtube.com/embed/ZZnAAckMRI4?si=pprR29m1o9xXCe-H"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  );
}
