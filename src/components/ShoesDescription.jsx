import { useContext } from 'react';
import { useParams } from 'react-router';
import { ShoesContext } from '../Context/ShoesContext';

export function ShoesDescription() {
  const { shoes } = useContext(ShoesContext);
  const { shoeId } = useParams();

  const shoe = shoes.find((shoe) => shoe.id === parseInt(shoeId));

  function goBack() {
    window.history.back();
  }

  if (!shoe) {
    return <p>Shoe not found.</p>;
  }

  return (
    <>
      <button className="go-back" onClick={goBack}>
        Go back
      </button>

      <div className="container">
        <div className="images">
          <img
            className="shoe-img-description"
            src={shoe.img}
            alt="{shoe.name}"
          />
        </div>

        <div className="product">
          <p className="shoe-p">{shoe.brand}</p>
          <h1 className="shoe-name-description">{shoe.name}</h1>
          <h2 className="shoe-price-description">{shoe.price}</h2>
          <p className="shoe-p desc">{shoe.description}</p>
          <div className="buttons">
            <button className="add button">Add to Cart</button>
            <button className="like button">
              <span>♥</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
