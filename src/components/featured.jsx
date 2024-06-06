import React from 'react';
import ProductCard from './productCard';
// import ProductCard from '../components/productCard';

const contentBlocks = [
  {
    title: "The Classic Aviator",
    description:
      "Embrace the timeless look with our Classic Aviator sunglasses. Designed with a sleek metal frame and UV-protected lenses, they are perfect for any outdoor adventure.",
    image: require('../assets/images/922000b5-860c-484e-8109-3729e743d0c2-removebg-preview.png'),
  },
  {
    title: "Retro Round Sunglasses",
    description:
      "Step back in time with our Retro Round Sunglasses. These shades feature a distinct round frame that stands out from the crowd, offering 100% UV protection and a dash of vintage charm.",
    image: require('../assets/images/52957e77-a630-4156-b810-c7d4ad220fb1-removebg-preview.png'),
  },
  {
    title: "Chic Cat Eye Sunglasses",
    description:
      "Unleash your inner diva with our Chic Cat Eye Sunglasses. With their exaggerated frame and dark tinted lenses, these sunglasses offer both full sun protection and a stylish edge.",
    image: require('../assets/images/a28cf456-176c-4200-8913-c9a8f78bd213-removebg-preview.png'),
  },
  {
    title: "Sporty Wrap Sunglasses",
    description: "Stay active with our Sporty Wrap Sunglasses. Designed for those with an active lifestyle, these sunglasses offer a snug fit and wide lenses for maximum eye protection.",
    image: require('../assets/images/21b4348f-aa3c-4ef8-a2c6-b18063f6989f-removebg-preview.png'),
  },
  {
    title: "Trendy Square Sunglasses",
    description: "Keep up with the latest trends with our Trendy Square Sunglasses. Featuring a bold square frame and a variety of lens colors, these sunglasses are a must-have fashion accessory.",
    image: require('../assets/images/ccd9fdee-53e3-4c05-9296-72ad9c3d4db2-removebg-preview.png'),
  },
  {
    title: "Elegant Oversized Sunglasses",
    description: "Make a statement with our Elegant Oversized Sunglasses. With their large frames and wide lenses, these sunglasses not only provide ample sun protection but also add a touch of glamour to any outfit.",
    image: require('../assets/images/1a020da3-a2d4-40bb-8754-a5a2dce04fa6-removebg-preview.png'),
  },
];

const Featured = () => {
  return (
    <section id="featured-section">
      <h2>Featured Sunlight Packages</h2>
      <div className="container">
        {contentBlocks.map((block, index) => (
          <ProductCard key={index} items={block} />
        ))}
      </div>
    </section>
  );
};

export default Featured;