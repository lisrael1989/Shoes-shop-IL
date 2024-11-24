import { useContext } from 'react';
import { ShoePreview } from './ShoePreview';
import { ShoesContext } from '../Context/ShoesContext';
import { useNavigate } from 'react-router';

export function ShoesList() {
  const { shoes } = useContext(ShoesContext);
  const navigate = useNavigate();

  function AddShoesPage() {
    navigate('/add-shoes');
  }

  if (shoes.length === 0) return <p>Loading...</p>;
  return (
    <>
      <button
        type="button"
        onClick={AddShoesPage}
        className="add-new-shoes-btn"
      >
        Add New Shoes
      </button>
      <ul className="shoes-list">
        {shoes.map((shoe) => (
          <li key={shoe.id}>
            <ShoePreview shoe={shoe} />
            {shoe.onSale && <p className="shoe-sale">sale</p>}
          </li>
        ))}
      </ul>
    </>
  );
}
