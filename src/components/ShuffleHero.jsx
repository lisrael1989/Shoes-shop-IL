import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

export function ShuffleHero() {
  const navigate = useNavigate();
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const squareData = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1325&q=80',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1520256788229-d4640c632e4b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 7,
      src: 'https://plus.unsplash.com/premium_photo-1661780784016-84df03d7d8a8?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1560072810-1cffb09faf0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1541597455068-49e3562bdfa4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 10,
      src: 'https://plus.unsplash.com/premium_photo-1661780784016-84df03d7d8a8?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1715001750243-7b8d552d4778?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1580977251946-c5f692a4db0d?q=80&w=2111&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
      <motion.div
        key={sq.id}
        layout
        transition={{ duration: 1.5, type: 'spring' }}
        className="shuffle-grid-item"
        style={{
          backgroundImage: `url(${sq.src})`,
        }}
      ></motion.div>
    ));
  };

  const [squares, setSquares] = useState(generateSquares());
  const timeoutRef = useRef(null);

  useEffect(() => {
    const shuffleSquares = () => {
      setSquares(generateSquares());
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  function goShopping() {
    navigate('/shoes');
  }

  return (
    <section className="shuffle-hero-container">
      <div>
        <span className="shuffle-hero-badge">Step Into Style</span>
        <h3 className="shuffle-hero-title">Your Perfect Pair Awaits</h3>
        <p className="shuffle-hero-description">
          Discover the latest trends and timeless classics in footwear. <br />{' '}
          Whether you&apos;re stepping into a meeting, hitting the gym, or
          heading out for a casual stroll.
          <br />{' '}
          <strong>we&apos;ve got the perfect pair for every occasion. </strong>
        </p>
        <button onClick={goShopping} className="shuffle-hero-button">
          Shop Now
        </button>
      </div>
      <div className="shuffle-grid-container">{squares.map((sq) => sq)}</div>
    </section>
  );
}
