import { useEffect } from "react";
import "./ImageModal.css";
import CLOSE_ICON from "../../../assets/images/closeIcon.svg";

const ImageModal = ({ isOpen, onClose, image, title, date }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    // <div className="modal-overlay" onClick={onClose}>
    //   <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    //     <button className="close-button" onClick={onClose}>
    //       ×
    //     </button>
    //     <div className="image-container">
    //       <img src={image} alt={title} />
    //     </div>
    //     <div className="modal-info">
    //       <h2>{title}</h2>
    //       {date && <p>{date}</p>}
    //     </div>
    //   </div>
    // </div>
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        {/* <button className="close-button" onClick={onClose}>
          ×
        </button> */}
        <img
          className="close-button"
          height={40}
          width={40}
          src={CLOSE_ICON}
          onClick={onClose}
        />
        <div className="modal-content">
          <div className="image-container">
            <img src={image} alt={title} />
          </div>
          <div className="modal-info">
            <h2>{title}</h2>
            {date && <p>{date}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageModal;
ImageModal.propTypes = {
  isOpen: Boolean,
  onClose: Boolean,
  image: String,
  title: String,
  date: String,
};
