// import "./ModalWithForm.css";
// export default function ModalWithForm({
//   isOpen,
//   title,
//   buttonText,
//   children,
//   onClose,
//   onSubmit,
// }) {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (onSubmit) onSubmit();
//   };
//   return (
//     <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
//       <div className="modal__container modal__container_type_form">
//         <button
//           type="button"
//           className="modal__close-btn modal__close-btn_type_form"
//           onClick={onClose}
//         >
//           ✕
//         </button>
//         <form className="modal__form" onSubmit={handleSubmit}>
//           <h2 className="modal__title">{title}</h2>
//           {/* children = inputs or any form contents */}
//           {children}
//           <button type="submit" className="modal__submit-btn">
//             {buttonText}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// import "./ModalWithForm.css";

// export default function ModalWithForm({
//   isOpen,
//   title,
//   buttonText,
//   name,
//   children,
//   onClose,
//   onSubmit,
// }) {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (onSubmit) {
//       onSubmit();
//     }
//   };

//   return (
//     <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
//       <div className="modal__container modal__container_type_form">
//         <button
//           type="button"
//           className="modal__close-btn modal__close-btn_type_form"
//           onClick={onClose}
//         >
//           ✕
//         </button>

//         <form className="modal__form" name={name} onSubmit={handleSubmit}>
//           <h2 className="modal__title">{title}</h2>

//           {children}

//           <button type="submit" className="modal__submit-btn">
//             {buttonText}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import "./ModalWithForm.css";

export default function ModalWithForm({
  isOpen,
  title,
  buttonText,
  name,
  children,
  onClose,
  onSubmit,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit();
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container modal__container_type_form">
        <button
          type="button"
          className="modal__close-btn modal__close-btn_type_form"
          onClick={onClose}
        >
          ✕
        </button>

        <form className="modal__form" name={name} onSubmit={handleSubmit}>
          <h2 className="modal__title">{title}</h2>

          {children}

          <button type="submit" className="modal__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
