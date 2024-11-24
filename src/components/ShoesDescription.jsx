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
      <div className="shoes-description">
        <h2>{shoe.name}</h2>
        <p>Brand: {shoe.brand}</p>
        <p>Price: ${shoe.price}</p>
        <p>{shoe.description}</p>
        {shoe.onSale && <p style={{ color: 'red' }}>On Sale!</p>}
        <img
          src={shoe.img}
          alt={shoe.name}
          style={{ maxWidth: '300px', marginTop: '20px' }}
        />
      </div>
    </>
  );
}
