import { createContext, useState, useEffect } from 'react';
import { fetchShoes, addShoes } from '../service/api.js';

export const ShoesContext = createContext();

export function ShoesProvider({ children }) {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    async function getShoes() {
      try {
        const data = await fetchShoes();
        setShoes(data);
      } catch (error) {
        console.error('Error fetching shoes:', error.message);
      }
    }
    getShoes();
  }, []);

  async function addShoe(newShoe) {
    try {
      const savedShoe = await addShoes(newShoe);
      setShoes((prevShoe) => [...prevShoe, savedShoe]);
    } catch (error) {
      console.error('Error adding shoe:', error.message);
    }
  }

  // Context value
  const value = {
    shoes,
    addShoe,
  };

  return (
    <ShoesContext.Provider value={value}>{children}</ShoesContext.Provider>
  );
}
