import React, { useState } from 'react';
import '../components/Products.css';
import ProductModal from '../components/ProductModal';

// Crates
import GrooveCrateImg from '../assets/images/crates/GrooveCrateBox.png';
import MunchMatesImg from '../assets/images/crates/MunchMatesCrate.png';
import CheeseBoxImg from '../assets/images/crates/CheeseBoxCrate.png';
import DinDImg from '../assets/images/crates/D-in-DCrate.png';
import DinerDashImg from '../assets/images/crates/DinerDashCrate.png';

// Snacks
import AlmondImg from '../assets/images/snacks/CC-AlmondTM.png';
import ChipsImg from '../assets/images/snacks/CC-Chips.png';
import HoneyImg from '../assets/images/snacks/CC-HoneyTM.png';
import PretzCheddarImg from '../assets/images/snacks/CC-PretzCheddar.png';
import PretzParm from '../assets/images/snacks/CC-PretzParm.png';

// Sips
import BreezySipsImg from '../assets/images/sips/BreezySipsCan.png';
import BiniCherryImg from '../assets/images/sips/BiniCherryCan.png';
import ChillVibesImg from '../assets/images/sips/ChillVibesCan.png';
import FizzPopImg from '../assets/images/sips/FizzPopCan.png';
import ZestyZingImg from '../assets/images/sips/ZestyZing.png';

// Wines
import AshenNoirImg from '../assets/images/wines/AshenNoir.png';
import DriftwoodChardonnayImg from '../assets/images/wines/DriftwoodChardonnay.png';
import MidnightOrchardImg from '../assets/images/wines/MidnightOrchard.png';
import MoonlitRoseImg from '../assets/images/wines/MoonlitRose.png';
import VelvetVineImg from '../assets/images/wines/VelvetVine.png';

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const sections = [
    {
    title: 'Crates',
    products: [
        { name: 'Groove Crate', image: GrooveCrateImg, description: "Your all-access pass to the rockin’ 50s! Loaded with retro snacks and fizzy drinks that'll have you twistin' all night.", price: 799 },
        { name: 'Munch Mates', image: MunchMatesImg, description: "For couples who crave the classics — share sweet treats, savory bites, and vintage vibes for two.", price: 749 },
        { name: 'Cheese Box', image: CheeseBoxImg, description: "Say cheese, daddy-o! A smooth and crunchy mix of golden, cheesy delights straight from the diner counter.", price: 599 },
        { name: 'D-in-D Crate', image: DinDImg, description: "Dinner and drinks, 50s-style! A combo that brings the jukebox energy right to your table.", price: 999 },
        { name: 'Diner Dash Crate', image: DinerDashImg, description: "Fast, flavorful, and fresh off the griddle — the perfect bite for anyone cruisin’ through snack time.", price: 849 },
    ],
    },

    {
    title: 'Snacks',
    products: [
        { name: 'Almond Trail Mix', image: AlmondImg, description: "Go nuts for this crunchy, classic mix — your ideal companion for midnight drives and jukebox jams.", price: 179 },
        { name: 'Classic Chips', image: ChipsImg, description: "Crispy, salty, and oh-so-satisfying — a true 50s favorite that never goes out of style.", price: 149 },
        { name: 'Honey Trail Mix', image: HoneyImg, description: "Sweet as soda pop, smooth as swing — a golden snack made for snack lovers with soul.", price: 169 },
        { name: 'Pretz Cheddar', image: PretzCheddarImg, description: "A twist of cheddar cheese with a snappy beat — once you pop, you can’t stop the bop!", price: 159 },
        { name: 'Pretz Parmesan', image: PretzParm, description: "A smooth, buttery classic with a bold kick — perfect for the cool cats and snack lovers alike.", price: 159 },
    ],
    },

    {
    title: 'Sips',
    products: [
        { name: 'Breezy Sips', image: BreezySipsImg, description: "Apple soda with a crisp groove — cool, sparkling, and ready to refresh your rhythm.", price: 99 },
        { name: 'Bini Cherry', image: BiniCherryImg, description: "A sweet cherry pop that’ll have you snapping your fingers and swingin’ to the beat.", price: 89 },
        { name: 'Chill Vibes', image: ChillVibesImg, description: "Smooth cola with a mellow mood — the perfect sip for laid-back drive-ins and starlit nights.", price: 95 },
        { name: 'Fizz Pop', image: FizzPopImg, description: "Bright, bubbly, and bursting with joy — your retro refreshment for any sock hop.", price: 89 },
        { name: 'Zesty Zing', image: ZestyZingImg, description: "Citrus soda with a poppin’ punch — tangy, lively, and pure 50s fun in a can!", price: 99 },
    ],
    },

    {
    title: 'Wines',
    products: [
        { name: 'Ashen Noir', image: AshenNoirImg, description: "A smoky, mysterious red with deep vintage charm — perfect for the smooth-talking romantic.", price: 1249 },
        { name: 'Driftwood Chardonnay', image: DriftwoodChardonnayImg, description: "Soft, buttery, and smooth as a vinyl groove — aged to perfection for classy cool cats.", price: 1199 },
        { name: 'Midnight Orchard', image: MidnightOrchardImg, description: "A dark fruit medley that dances on your taste buds like a late-night slow song.", price: 1299 },
        { name: 'Moonlit Rosé', image: MoonlitRoseImg, description: "Light, dreamy, and blushing with charm — sip it under neon lights and moonlit skies.", price: 1149 },
        { name: 'Velvet Vine', image: VelvetVineImg, description: "Rich, velvety, and timeless — a wine so smooth, even the jukebox would swoon.", price: 1349 },
    ],
    },
];


 return (
    <div className="products-page">
      <div className="menu-wrapper">
        <div className="menu-header">
          <h1>The Groove Diner Menu</h1>
          <p>Serving up the best Crates, Snacks, Sips & Wines from the golden age!</p>
        </div>
        <div className="menu-divider"></div>

        {sections.map((section, sIndex) => (
          <div key={sIndex} className="product-section">
            <h2 className="products-title">{section.title}</h2>

            <div className="products-grid">
              {section.products.slice(0, 3).map((product, index) => (
                <div
                  className="product-card"
                  key={index}
                  onClick={() => setSelectedProduct(product)}
                >
                  <img src={product.image} alt={product.name} />
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <p className="product-price">₱{product.price}</p>
                  <button className="order-btn">₱ Order Now!</button>
                </div>
              ))}
            </div>

            <div className="products-grid last-row">
              {section.products.slice(3, 5).map((product, index) => (
                <div
                  className="product-card special"
                  key={index + 3}
                  onClick={() => setSelectedProduct(product)}
                >
                  <img src={product.image} alt={product.name} />
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <p className="product-price">₱{product.price}</p>
                  <button className="order-btn">₱ Order Now!</button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      </div>
    </div>
  );
}

export default Products;
