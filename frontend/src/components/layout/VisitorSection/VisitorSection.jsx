import { visitorData } from "../../../utils/Constant";
import { useState } from "react";
import Card from "../../ui/Cards/Card/Card";
import PropTypes from "prop-types";
import "./VisitorSection.css";
import { EmblaSlider } from "../../ui/Slider/EmblaSlider";

export default function VisitorSection({ visitToShow }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVisitor, setSelectedVisitor] = useState(null);

  const handleCardClick = (visitor) => {
    setSelectedVisitor(visitor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVisitor(null);
  };

  const itemsToShow = visitToShow
    ? visitorData.slice(0, visitToShow)
    : visitorData;

  const modalSlides = selectedVisitor?.visitPictures?.map((img_url, index) => (
    <img key={index} src={img_url} alt="Visitor" />
  ));

  return (
    <div className="VisitorCardContainer">
      {itemsToShow.map((visitor, index) => {
        return (
          <div
            key={index}
            className="VisitorCard"
            onClick={() => handleCardClick(visitor)}
          >
            <Card
              card={{
                image: { src: visitor.visitorPicture },

                text: {
                  size: ["", "2rem", "1.4rem"],
                  content: [
                    "",
                    visitor.visitorName,
                    visitor.visitorDesignation,
                  ],
                  justify: ["", "center", "center"],
                },
                dimensions: { maxHeight: "", maxWidth: "28rem" },
                padding: "1rem",
              }}
              //   imgHeight={"42rem"}
              //   imgWidth={"42rem"}
            />
          </div>
        );
      })}
      {/* Modal */}
      {isModalOpen && (
        <div className="ModalBackdrop" onClick={closeModal}>
          <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
            <button className="CloseButton" onClick={closeModal}>
              ✖
            </button>
            <div className="modalImgSlider_container">
              <EmblaSlider
                slides={modalSlides}
                no_of_slides={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
                autoScroll={false}
                navigationDots={true}
                navigationArrow={true}
                backdrop={false}
              />
            </div>
            {/* <img
              src={selectedVisitor.visitorPicture}
              alt={selectedVisitor.visitorName}
              style={{ width: "100%", borderRadius: "8px" }}
            /> */}
            <div>
              <h3>{selectedVisitor.visitorName} -</h3>
              <p>{selectedVisitor.visitorDesignation}</p>
            </div>
            <p>
              {selectedVisitor.visitDescription ||
                "This is a placeholder description."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

VisitorSection.propTypes = {
  visitToShow: PropTypes.number,
};
