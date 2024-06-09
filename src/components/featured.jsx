import React from 'react';
import ProductCard from './productCard';

const contentBlocks = [
  {
    title: "The Classic Aviator",
    description: "Embrace the timeless look with our Classic Aviator sunglasses. Designed with a sleek metal frame and UV-protected lenses, they are perfect for any outdoor adventure.",
    image: require('../assets/images/922000b5-860c-484e-8109-3729e743d0c2-removebg-preview.png'),
    price: 149.99,
    sku: "CA001",
    inStock: true,
    rating: 4.5,
    reviewCount: 120,
    colors: ["Black", "Gold", "Silver"],
    brand: "Ray Inc.",
    category: "Men's",
    tags: ["aviator", "classic", "UV protection"]
  },
  {
    title: "Retro Round Sunglasses",
    description: "Step back in time with our Retro Round Sunglasses. These shades feature a distinct round frame that stands out from the crowd, offering 100% UV protection and a dash of vintage charm.",
    image: require('../assets/images/52957e77-a630-4156-b810-c7d4ad220fb1-removebg-preview.png'),
    price: 129.99,
    sku: "RR001",
    inStock: true,
    rating: 4.3,
    reviewCount: 85,
    colors: ["Black", "Brown", "Silver"],
    brand: "Ray Inc.",
    category: "Women's",
    tags: ["retro", "round", "UV protection"]
  },
  {
    title: "Chic Cat Eye Sunglasses",
    description: "Unleash your inner diva with our Chic Cat Eye Sunglasses. With their exaggerated frame and dark tinted lenses, these sunglasses offer both full sun protection and a stylish edge.",
    image: require('../assets/images/a28cf456-176c-4200-8913-c9a8f78bd213-removebg-preview.png'),
    price: 139.99,
    sku: "CE001",
    inStock: false,
    rating: 4.7,
    reviewCount: 92,
    colors: ["Black", "Red", "White"],
    brand: "Ray Inc.",
    category: "Women's",
    tags: ["cat eye", "chic", "UV protection"]
  },
  {
    title: "Sporty Wrap Sunglasses",
    description: "Stay active with our Sporty Wrap Sunglasses. Designed for those with an active lifestyle, these sunglasses offer a snug fit and wide lenses for maximum eye protection.",
    image: require('../assets/images/21b4348f-aa3c-4ef8-a2c6-b18063f6989f-removebg-preview.png'),
    price: 119.99,
    sku: "SW001",
    inStock: true,
    rating: 4.2,
    reviewCount: 78,
    colors: ["Black", "Blue", "Red"],
    brand: "Ray Inc.",
    category: "Unisex",
    tags: ["sporty", "wrap", "UV protection"]
  },
  {
    title: "Trendy Square Sunglasses",
    description: "Keep up with the latest trends with our Trendy Square Sunglasses. Featuring a bold square frame and a variety of lens colors, these sunglasses are a must-have fashion accessory.",
    image: require('../assets/images/ccd9fdee-53e3-4c05-9296-72ad9c3d4db2-removebg-preview.png'),
    price: 129.99,
    sku: "TS001",
    inStock: true,
    rating: 4.6,
    reviewCount: 105,
    colors: ["Black", "Brown", "White"],
    brand: "Ray Inc.",
    category: "Men's",
    tags: ["trendy", "square", "UV protection"]
  },
  {
    title: "Elegant Oversized Sunglasses",
    description: "Make a statement with our Elegant Oversized Sunglasses. With their large frames and wide lenses, these sunglasses not only provide ample sun protection but also add a touch of glamour to any outfit.",
    image: require('../assets/images/1a020da3-a2d4-40bb-8754-a5a2dce04fa6-removebg-preview.png'),
    price: 159.99,
    sku: "EO001",
    inStock: false,
    rating: 4.8,
    reviewCount: 112,
    colors: ["Black", "Gold", "Silver"],
    brand: "Ray Inc.",
    category: "Women's",
    tags: ["elegant", "oversized", "UV protection"]
  }
];

const Featured = () => {
  return (
    <section id="featured-section">
      <h2>Featured Sunlight Packages</h2>
      <div className="container">
        {contentBlocks.map((block, index) => (
          <ProductCard key={index} item={block} />
        ))}
      </div>
    </section>
  );
};

export default Featured;