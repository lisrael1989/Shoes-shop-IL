import { useContext } from 'react';
import { ShoePreview } from './ShoePreview';
import { ShoesContext } from '../Context/ShoesContext';

export function ShoesList() {
  const { shoes } = useContext(ShoesContext);
  return (
    <ul className="shoes-list">
      {shoes.map((shoe) => (
        <li key={shoe.id}>
          <ShoePreview shoe={shoe} />
          {shoe.onSale && <p className="shoe-sale">sale</p>}
        </li>
      ))}
    </ul>
  );
}
