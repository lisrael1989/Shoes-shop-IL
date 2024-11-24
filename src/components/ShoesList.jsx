import { useContext } from 'react';
import { ShoePreview } from './ShoePreview';
import { ShoesContext } from '../Context/ShoesContext';
import { useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

export function ShoesList() {
  const { shoes } = useContext(ShoesContext);
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const { removeShoe } = useContext(ShoesContext);

  function handleAddShoe() {
    navigate('/add-shoes');
  }

  function handleShoeClick(shoeId) {
    navigate(`/shoes/${shoeId}`);
    console.log(shoeId);
  }

  if (shoes.length === 0) return <p>Loading...</p>;
  return (
    <>
      {isAdmin && (
        <button
          type="button"
          onClick={handleAddShoe}
          className="add-new-shoes-btn"
        >
          Add New Shoes
        </button>
      )}

      <ul className="shoes-list">
        {shoes.map((shoe) => (
          <li key={shoe.id}>
            <div
              onClick={() => handleShoeClick(shoe.id)}
              style={{ cursor: 'pointer' }}
            >
              <ShoePreview shoe={shoe} />
            </div>
            {shoe.onSale && <p className="shoe-sale">sale</p>}
            {isAdmin && (
              <button
                className="remove-shoe-btn"
                onClick={() => removeShoe(shoe.id)}
              >
                X
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
