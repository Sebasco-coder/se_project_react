// import { useState } from "react";
// import Header from "../Header/Header";
// import Main from "../Main/Main";
// import Footer from "../Footer/Footer";
// import ItemModal from "../ItemModal/ItemModal";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import { defaultClothingItems } from "../../utils/defaultClothingItems";
// import "./App.css";
// function App() {
//   const [clothingItems] = useState(defaultClothingItems);
//   const [activeModal, setActiveModal] = useState("");
//   const [selectedCard, setSelectedCard] = useState({});
//   function handleOpenItemModal(card) {
//     setSelectedCard(card);
//     setActiveModal("item-modal");
//   }
//   function handleOpenAddGarmentModal() {
//     setActiveModal("add-garment-modal");
//   }
//   function handleCloseModal() {
//     setActiveModal("");
//     setSelectedCard({});
//   }
//   return (
//     <div className="app">
//       {/* Pass the handler to Header */}
//       <Header onAddGarmentClick={handleOpenAddGarmentModal} />
//       <Main clothingItems={clothingItems} onCardClick={handleOpenItemModal} />
//       <Footer />
//       {/* Item modal */}
//       <ItemModal
//         isOpen={activeModal === "item-modal"}
//         card={selectedCard}
//         onClose={handleCloseModal}
//       />
//       {/* Form modal */}
//       <ModalWithForm
//         isOpen={activeModal === "add-garment-modal"}
//         title="New garment"
//         buttonText="Add garment"
//         onClose={handleCloseModal}
//       >
//         form
//       </ModalWithForm>
//     </div>
//   );
// }
// export default App;

// import { useState } from "react";

// import Header from "../Header/Header";
// import Main from "../Main/Main";
// import Footer from "../Footer/Footer";
// import ItemModal from "../ItemModal/ItemModal";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";

// import { defaultClothingItems } from "../../utils/defaultClothingItems";

// import "./App.css";

// function App() {
//   const [clothingItems] = useState(defaultClothingItems);
//   const [activeModal, setActiveModal] = useState("");
//   const [selectedCard, setSelectedCard] = useState({});

//   function handleOpenItemModal(card) {
//     setSelectedCard(card);
//     setActiveModal("item-modal");
//   }

//   function handleOpenAddGarmentModal() {
//     setActiveModal("add-garment-modal");
//   }

//   function handleCloseModal() {
//     setActiveModal("");
//   }

//   return (
//     <div className="app">
//       <Header onAddGarmentClick={handleOpenAddGarmentModal} />

//       <Main clothingItems={clothingItems} onCardClick={handleOpenItemModal} />

//       <Footer />

//       <ItemModal
//         card={selectedCard}
//         isOpen={activeModal === "item-modal"}
//         onClose={handleCloseModal}
//       />

//       <ModalWithForm
//         title="New garment"
//         buttonText="Add garment"
//         name="add-garment-form"
//         isOpen={activeModal === "add-garment-modal"}
//         onClose={handleCloseModal}
//       >
//         <fieldset className="modal__fieldset">
//           <label className="modal__label" htmlFor="garment-name">
//             Name
//           </label>
//           <input
//             id="garment-name"
//             type="text"
//             className="modal__input"
//             placeholder="Name"
//             required
//           />
//         </fieldset>

//         <fieldset className="modal__fieldset">
//           <label className="modal__label" htmlFor="garment-image">
//             Image
//           </label>
//           <input
//             id="garment-image"
//             type="url"
//             className="modal__input"
//             placeholder="Image URL"
//             required
//           />
//         </fieldset>

//         <fieldset className="modal__fieldset">
//           <legend className="modal__legend">Select weather type:</legend>

//           <label className="modal__label">
//             <input
//               type="radio"
//               name="weather"
//               value="hot"
//               className="modal__radio-input"
//             />
//             Hot
//           </label>

//           <label className="modal__label">
//             <input
//               type="radio"
//               name="weather"
//               value="warm"
//               className="modal__radio-input"
//             />
//             Warm
//           </label>

//           <label className="modal__label">
//             <input
//               type="radio"
//               name="weather"
//               value="cold"
//               className="modal__radio-input"
//             />
//             Cold
//           </label>
//         </fieldset>
//       </ModalWithForm>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import { defaultClothingItems } from "../../utils/defaultClothingItems";

import "./App.css";

function App() {
  const [clothingItems] = useState(defaultClothingItems);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  function handleOpenItemModal(card) {
    setSelectedCard(card);
    setActiveModal("item-modal");
  }

  function handleOpenAddGarmentModal() {
    setActiveModal("add-garment-modal");
  }

  function handleCloseModal() {
    setActiveModal("");
  }

  return (
    <div className="app">
      <Header onAddGarmentClick={handleOpenAddGarmentModal} />

      <Main clothingItems={clothingItems} onCardClick={handleOpenItemModal} />

      <Footer />

      <ItemModal
        card={selectedCard}
        isOpen={activeModal === "item-modal"}
        onClose={handleCloseModal}
      />

      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        name="add-garment-form"
        isOpen={activeModal === "add-garment-modal"}
        onClose={handleCloseModal}
      >
        <fieldset className="modal__fieldset">
          <label className="modal__label" htmlFor="garment-name">
            Name
          </label>
          <input
            id="garment-name"
            type="text"
            className="modal__input"
            placeholder="Name"
            required
          />
        </fieldset>

        <fieldset className="modal__fieldset">
          <label className="modal__label" htmlFor="garment-image">
            Image URL
          </label>
          <input
            id="garment-image"
            type="url"
            className="modal__input"
            placeholder="Image URL"
            required
          />
        </fieldset>

        <fieldset className="modal__fieldset">
          <legend className="modal__legend">Select weather type</legend>

          <label className="modal__label">
            <input type="radio" name="weather" value="hot" />
            Hot
          </label>

          <label className="modal__label">
            <input type="radio" name="weather" value="warm" />
            Warm
          </label>

          <label className="modal__label">
            <input type="radio" name="weather" value="cold" />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import Main from "./Main/Main";
// import ItemModal from "./ItemModal/ItemModal";

// function App() {
//   const [activeModal, setActiveModal] = useState("");
//   const [selectedCard, setSelectedCard] = useState({});

//   const handleOpenItemModal = (card) => {
//     setActiveModal("item-modal");
//     setSelectedCard(card);
//   };

//   const handleCloseModal = () => {
//     setActiveModal("");
//   };

//   return (
//     <div className="page">
//       <Main handleOpenItemModal={handleOpenItemModal} />

//       <ItemModal
//         card={selectedCard}
//         isOpen={activeModal === "item-modal"}
//         onClose={handleCloseModal}
//       />
//     </div>
//   );
// }

// export default App;
