import "./Project.css";
import { kundaliyaDetails, mohanpuraDetails } from "../../utils/Constant";
import useUrlToGetPage from "../../hooks/useUrlToGetPage";
import Banner from "../../components/ui/Header/Banner/Banner";

import damImg_1 from "../../assets/images/kundaliyaDam_2.jpg";
import img_1 from "../../assets/images/1.png";
import img_2 from "../../assets/images/2.png";
import img_3 from "../../assets/images/3.webp";

import mohanpuraChamberImg from "../../assets/images/MIP-min.webp";

import damImg_2 from "../../assets/images/mohanpuraDam_2.jpg";
import img_5 from "../../assets/images/5_.png";
import img_6 from "../../assets/images/6_.png";

import downArrow from "../../assets/images/downArrow_orange.svg";

import { boldString } from "../../utils/HelperFunction/boldString";
import React from "react";

export default function Project() {
  const pageUrl = useUrlToGetPage();

  const kundaliyaBanner = {
    title: "Kundalia Irrigation Project",
    picture: { banner: damImg_1, images: [img_1, img_2, img_3] },
    description: "",
  };
  const mohanpuraBanner = {
    title: "Mohanpura Irrigation Project",
    picture: { banner: damImg_2, images: [img_5, img_6, mohanpuraChamberImg] },
    description: "",
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
      {/* ---------------------------------------------------------------------------------------------------------------- */}
      <article>
        <h2>Introduction</h2>
        <section>
          {currentPage.details.introduction.map((intro, index) => {
            switch (intro.type) {
              case "paragraph":
                return (
                  <p key={index}>
                    {boldString(intro.content)}
                    <br />
                    <br />
                  </p>
                );

              case "list":
              case "list_numb":
                const isNumberedList = intro.type === "list_numb";
                return (
                  <ul
                    key={index}
                    style={{ listStyle: isNumberedList ? "decimal" : "disc" }}
                  >
                    {intro.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {boldString(item)} <br /> <br />
                      </li>
                    ))}
                    <br />
                    <br />
                  </ul>
                );

              default:
                return null;
            }
          })}
        </section>
      </article>
      {currentPage.details?.operationPhilosophy && (
        <article className="operationPhilosophy_container">
          <h2>Operation Philosophy for Kundalia Project</h2>
          <section>
            {currentPage.details?.operationPhilosophy?.map((card, index) => {
              switch (card.type) {
                case "paragraph":
                  return (
                    <p key={index}>
                      {boldString(card.content)}
                      <br />
                      <br />
                    </p>
                  );

                case "list_numb":
                case "list":
                  const isNumberedList = card.type === "list_numb";

                  // Render items with appropriate list style (bullet for list, decimal for numbered list)
                  return (
                    <ul
                      key={index}
                      style={{
                        listStyle: isNumberedList ? "disc" : "",
                      }}
                    >
                      {card.items?.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          style={{ backgroundColor: `${item.bg}` }}
                        >
                          {boldString(item)}
                        </li>
                      ))}
                    </ul>
                  );

                default:
                  return null;
              }
            })}
          </section>
        </article>
      )}

      {/* ---------------------------------------------------------------------------------------------------------------- */}
      <article>
        {/* <h2>Main Components</h2> */}
        <section className="mainComponents">
          {currentPage.details?.mainComponents?.map((card, index) => {
            switch (card.type) {
              case "paragraph":
                return (
                  <p key={index}>
                    {boldString(card.content)}
                    <br />
                    <br />
                  </p>
                );

              case "list_numb":
              case "list":
                const isNumberedList = card.type === "list_numb";

                // Render items with appropriate list style (bullet for list, decimal for numbered list)
                return (
                  <ul
                    key={index}
                    style={{ listStyle: isNumberedList ? "disc" : "" }}
                  >
                    {card.items?.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        style={{ backgroundColor: `${item.bg}` }}
                      >
                        <figure>
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.5007 7.98735C13.0007 10.4874 11.1157 12.8414 8.47071 13.3674C7.1807 13.6243 5.84252 13.4676 4.64672 12.9197C3.45091 12.3719 2.45843 11.4607 1.81061 10.3159C1.16278 9.17119 0.892631 7.85124 1.03862 6.54402C1.18461 5.23681 1.7393 4.00898 2.62371 3.03535C4.43771 1.03735 7.50071 0.48735 10.0007 1.48735"
                              stroke={item.iconColor}
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.00098 6.98828L7.50098 9.48828L13.501 2.98828"
                              stroke={item.iconColor}
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </figure>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                );

              default:
                return null;
            }
          })}
        </section>
      </article>

      {/* ---------------------------------------------------------------------------------------------------------------- */}

      {currentPage.details.howItWorks && (
        <article className="howItWorks_container">
          <h2>How It Works</h2>
          <section>
            {currentPage.details.howItWorks?.map((item, index) => {
              switch (item.type) {
                case "paragraph":
                  return (
                    <React.Fragment key={index}>
                      <p key={index}>
                        {boldString(item.content)}
                        <br /> <br />
                      </p>
                      {index !== currentPage.details.howItWorks.length - 1 && (
                        <figure
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <img src={downArrow} alt="Down Arrow" />
                        </figure>
                      )}
                    </React.Fragment>
                  );

                case "list":
                case "list_numb":
                  const isNumberedList = item.type === "list_numb";
                  return (
                    <React.Fragment key={index}>
                      <ul
                        key={index}
                        style={{ listStyle: isNumberedList ? "decimal" : "" }}
                      >
                        {item.items.map((listItem, itemIndex) => (
                          <li key={itemIndex}>
                            {boldString(listItem)} <br /> <br />
                          </li>
                        ))}
                      </ul>
                      {index !== currentPage.details.howItWorks.length - 1 && (
                        <figure
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <img src={downArrow} alt="Down Arrow" />
                        </figure>
                      )}
                    </React.Fragment>
                  );

                default:
                  return null;
              }
            })}
          </section>
        </article>
      )}
      {/* ---------------------------------------------------------------------------------------------------------------- */}
      {/* <article className="salientFeatures_container">
        <h2>Salient Features</h2>
        <div>
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
        </div>
      </article> */}
      <article>
        <h2>{`Schematic Drawings of ${
          pageUrl == "kundaliya" ? "Kundalia" : "Mohanpura"
        } Project`}</h2>
        <section>
          {currentPage.banner.picture.images.map((img, index) => {
            return (
              <div key={index} style={{ marginTop: "2rem" }}>
                <img src={img} alt="Schematic Drawing" />
                <br />
                <br />
              </div>
            );
          })}
        </section>
      </article>
    </div>
  );
}
