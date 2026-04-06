// import "./ItemCard.css";

// function ItemCard({ data, onCardClick }) {
//   function handleClick() {
//     onCardClick(data);
//   }

//   return (
//     <li className="card">
//       <img
//         className="card__image"
//         src={data.link}
//         alt={data.name}
//         onClick={handleClick}
//       />
//       <div className="card__info">
//         <p className="card__name">{data.name}</p>
//       </div>
//     </li>
//   );
// }

// export default ItemCard;

import "./ItemCard.css";

function ItemCard({ data, onCardClick }) {
  function handleClick() {
    onCardClick(data);
  }

  return (
    <li className="card">
      <p className="card__title">{data.name}</p>

      <img
        className="card__image"
        src={data.link}
        alt={data.name}
        onClick={handleClick}
      />
    </li>
  );
}

export default ItemCard;
