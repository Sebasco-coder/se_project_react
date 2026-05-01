// import "./ItemModal.css";

// function ItemModal({ card, isOpen, onClose }) {
//   return (
//     <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
//       <div className="modal__container modal__container_type_image">
//         <button type="button" className="modal__close-btn" onClick={onClose}>
//           ✕
//         </button>

//         <img src={card.link} alt={card.name} className="modal__image" />

//         <div className="modal__footer">
//           <h2 className="modal__text">{card.name}</h2>
//           <p className="modal__text">{card.weather}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ItemModal;

// import "./ItemModal.css";

// function ItemModal({ card, isOpen, onClose }) {
//   return (
//     <div className={`modal_type_item ${isOpen ? "modal_opened" : ""}`}>
//       <div className="modal__container">
//         <button className="modal__close-btn" onClick={onClose}>
//           ✕
//         </button>

//         <img src={card.imageUrl} alt={card.name} className="modal__image" />

//         <div className="modal__footer">
//           <h2 className="modal__title">{card.name}</h2>
//           <p className="modal__weather">Weather: {card.weather}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ItemModal;

// import "./ItemModal.css";

// function ItemModal({ card, isOpen, onClose }) {
//   return (
//     <div className={`modal_type_item ${isOpen ? "modal_opened" : ""}`}>
//       <div className="modal__container">
//         <button className="modal__close-btn" onClick={onClose}>
//           ✕
//         </button>

//         <img src={card.link} alt={card.name} className="modal__image" />

//         <div className="modal__footer">
//           <h2 className="modal__title">{card.name}</h2>
//           <p className="modal__weather">Weather: {card.weather}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ItemModal;

import "./ItemModal.css";

function ItemModal({ card, isOpen, onClose }) {
  return (
    <div className={`item-modal ${isOpen ? "item-modal_opened" : ""}`}>
      <div className="item-modal__container">
        <button className="item-modal__close" onClick={onClose}>
          ×
        </button>

        <img src={card?.link} alt={card?.name} className="item-modal__image" />

        <div className="item-modal__footer">
          <h2 className="item-modal__title">{card?.name}</h2>
          <p className="item-modal__weather">Weather: {card?.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
