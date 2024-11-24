import { createContext, useState, useEffect } from 'react';
import {
  fetchShoes,
  addShoes,
  removeShoe as removeShoeAPI,
} from '../service/api.js';

// eslint-disable-next-line react-refresh/only-export-components
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

  async function removeShoe(shoeId) {
    try {
      const success = await removeShoeAPI(shoeId);
      if (success) {
        setShoes((prevShoes) => prevShoes.filter((shoe) => shoe.id !== shoeId));
      }
    } catch (error) {
      console.error('Error removing shoe:', error.message);
    }
  }

  // Context value
  const value = {
    shoes,
    addShoe,
    removeShoe,
  };

  return (
    <ShoesContext.Provider value={value}>{children}</ShoesContext.Provider>
  );
}
