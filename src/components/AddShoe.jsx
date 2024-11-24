import { useContext, useState } from 'react';
import { ShoesContext } from '../Context/ShoesContext';
import { useNavigate } from 'react-router';

export function AddShoe() {
  const { addShoe } = useContext(ShoesContext);
  const [shoeName, setShoeName] = useState([]);
  const [shoeBrand, setShoeBrand] = useState([]);
  const [shoePrice, setShoePrice] = useState([]);
  const [shoeDescription, setShoeDescription] = useState([]);
  const [shoeOnSale, setShoeOnSale] = useState(false);
  const [shoeImage, setShoeImage] = useState([]);
  const navigate = useNavigate();

  async function submitForm(ev) {
    ev.preventDefault();
    const newShoe = {
      name: shoeName,
      brand: shoeBrand,
      price: shoePrice,
      description: shoeDescription,
      onSale: shoeOnSale,
      img: shoeImage,
    };
    console.log(newShoe);
    setShoeName('');
    setShoeBrand('');
    setShoePrice('');
    setShoeDescription('');
    setShoeOnSale(false);
    setShoeImage('');
    addShoe(newShoe);
    navigate('/shoes');
  }
  return (
    <form action="submit" className="form-container">
      <h1>Add New shoe to the store </h1>
      <div className="input-container">
        <label htmlFor="name ">Name</label>
        <input
          type="text"
          placeholder="name"
          title="add name of the shoe"
          onChange={(ev) => setShoeName(ev.target.value)}
          value={shoeName}
        />
      </div>
      <div className="input-container">
        <label htmlFor="brand ">Brand</label>
        <input
          type="text"
          placeholder="brand"
          title="add brand of the shoe"
          onChange={(ev) => setShoeBrand(ev.target.value)}
          value={shoeBrand}
        />
      </div>
      <div className="input-container">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          placeholder="Price"
          title="Add price (only numbers)"
          onChange={(ev) => setShoePrice(ev.target.value)}
          value={shoePrice}
        />
      </div>
      <div className="input-container">
        <label htmlFor="name ">Description</label>
        <textarea
          type="text"
          placeholder="Description"
          title="add description"
          onChange={(ev) => setShoeDescription(ev.target.value)}
          value={shoeDescription}
        />
      </div>
      <div className="input-container">
        <label htmlFor="On Sale"> on sale ? </label>
        <input
          type="checkbox"
          onChange={(ev) => setShoeOnSale(ev.target.checked)}
          checked={shoeOnSale}
        />
      </div>
      <div className="input-container">
        <label htmlFor="img"> shoe img </label>
        <input
          type="url"
          title="add url"
          onChange={(ev) => setShoeImage(ev.target.value)}
          value={shoeImage}
        />
      </div>
      <button type="submit" onClick={submitForm} className="add-shoe-btn">
        Add shoe to the shop
      </button>
    </form>
  );
}
