import "./Project.css";
import { kundaliyaDetails, mohanpuraDetails } from "../../utils/Constant";
import useUrlToGetPage from "../../hooks/useUrlToGetPage";
import Banner from "../../components/ui/Header/Banner/Banner";

import damImg_1 from "../../assets/images/kundaliyaDam_2.png";
import img_1 from "../../assets/images/1.png";
import img_2 from "../../assets/images/2.png";
import img_3 from "../../assets/images/3.png";
import img_4 from "../../assets/images/4.png";

import damImg_2 from "../../assets/images/mohanpuraDam_2.png";
import img_5 from "../../assets/images/5_.png";
import img_6 from "../../assets/images/6_.png";

export default function Project() {
  const pageUrl = useUrlToGetPage();

  const kundaliyaBanner = {
    title: "Kundalia Irrigation Project",
    picture: { banner: damImg_1, images: [img_1, img_2, img_3, img_4] },
    description:
      "Kundalia Irrigation Project (KIP) is a part of Madhya Pradesh Irrigation Efficiency Improvement Project (MPIEIP), aimed to achieve high irrigation efficiency and improve water productivity in Madhya Pradesh, India. The project aims to develop a new highly efficient pressurized irrigation network and productive command area under the Kundalia irrigation Project (KIP) in Rajgarh and Agar Malwa Districts.",
  };
  const mohanpuraBanner = {
    title: "Mohanpura Irrigation Project",
    picture: { banner: damImg_2, images: [img_5, img_6] },
    description:
      "The Water Resources Department, state government of Madhya Pradesh envisages to develop Mohanpura dam, near vilage Banskhedi in district Rajgarh. The dam is proposed constructed across river Newaj at an estimated investment of 3,866-crore. The proposed Mohanpura dam proposes to provide water for irrigation, domestic and industrial uses.",
  };

  const currentPage =
    pageUrl == "kundaliya"
      ? { banner: kundaliyaBanner, details: kundaliyaDetails }
      : { banner: mohanpuraBanner, details: mohanpuraDetails };

  return (
    <div className="project_container">
      <Banner
        title={currentPage.banner.title}
        description={currentPage.banner.description}
        backgroundPicture={currentPage.banner.picture.banner}
      />
      <article>
        <h2>Introduction</h2>
        <div>
          {currentPage.details.introduction.map((intro, index) => {
            return (
              <>
                <p key={index}>{intro}</p>
                <br />
              </>
            );
          })}
        </div>
      </article>
      <article>
        <h2>Main Components</h2>
        <section>
          {currentPage.details.mainComponents.map((card, index) => {
            return (
              <div key={index}>
                <span>{index + 1}.</span>
                {card}
              </div>
            );
          })}
        </section>
      </article>
      <article className="salientFeatures_container">
        <h2>Salient Features</h2>
        <section>
          {currentPage.details.salientFeatures.map((card, index) => {
            return (
              <div key={index} className="salientFeature_block">
                <h3>{card.title}</h3>
                <ul>
                  {card.features.map((feature, index) => {
                    return (
                      <li key={index}>
                        <div>{feature[0]}</div>
                        <span>-</span>
                        <div>{feature[1]}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </section>
      </article>
      <article>
        <h2>Schematic drawings of Kundalia Project</h2>
        {currentPage.banner.picture.images.map((img, index) => {
          return (
            <div key={index}>
              <img src={img} alt="Schematic Drawing" />
              <br />
            </div>
          );
        })}
      </article>
    </div>
  );
}
