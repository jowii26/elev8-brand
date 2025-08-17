import React, { useState, useEffect, useMemo } from 'react';

// Generate 16 random shoes
const generateShoes = () => {
  const names = ["Flight Max", "Bounce Edge", "Swift Pro", "SkyJet", "Volt Boost", "Ignite Rise"];
  const tags = ["New", "Best Seller", "Limited", "Hot"];
  return Array.from({ length: 16 }, (_, i) => ({
    id: `shoe-${i + 1}`,
    name: names[Math.floor(Math.random() * names.length)],
    price: (Math.random() * 100 + 100).toFixed(2),
    sizes: [7, 8, 9, 10, 11],
    image: `/images/shoe${i + 1}.jpg`, // corresponds to public/images/shoe1.jpg, etc.
    tag: tags[Math.floor(Math.random() * tags.length)],
  }));
};

const fmt = (n) => `$${n}`;

function useCart() {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const totalQty = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);
  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.qty * parseFloat(i.price), 0).toFixed(2), [items]);

  const add = (product, { size }) => {
    const key = `${product.id}-${size}`;
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.key === key);
      if (idx >= 0) {
        const next = [...prev];
        next[idx].qty = Math.min(10, next[idx].qty + 1);
        return next;
      }
      return [...prev, { key, ...product, size, qty: 1 }];
    });
  };

  const clear = () => setItems([]);

  return { items, totalQty, subtotal, add, clear };
}

function NavBar({ cartCount }) {
  return (
    <nav className="bg-gray-200 shadow fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Elev8 Store</h1>
        <span className="text-sm font-medium">🛒 {cartCount} items</span>
      </div>
    </nav>
  );
}

function ProductCard({ product, onAdd }) {
  const [size, setSize] = useState(product.sizes[0]);
  return (
    <div className="bg-white text-gray rounded-lg shadow-lg hover:shadow-2xl transition p-4 flex flex-col">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded" />
      <span className="mt-2 text-xs bg-gray-200 inline-block px-2 py-1 rounded-full">{product.tag}</span>
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-700">{fmt(product.price)}</p>
      <div className="flex gap-1 mt-2">
        {product.sizes.map((sz) => (
          <button
            key={sz}
            onClick={() => setSize(sz)}
            className={`text-xs px-2 py-1 border rounded ${sz === size ? "bg-black text-white" : ""}`}
          >
            {sz}
          </button>
        ))}
      </div>
      <button
        onClick={() => onAdd(product, { size })}
        className="mt-auto bg-black text-white py-2 rounded hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

function CheckoutSummary({ subtotal, onCheckout }) {
  return (
    <div className="mt-12 text-center">
      <p className="text-xl font-semibold mb-4">Subtotal: {fmt(subtotal)}</p>
      <button
        onClick={onCheckout}
        className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3 rounded-full font-semibold transition"
      >
        Checkout
      </button>
    </div>
  );
}
export default function App() {
  const [catalog, setCatalog] = useState(generateShoes());
  const cart = useCart();

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setCatalog(data))
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);



    const handleCheckout = () => {
    alert("This is a demo. No real payment is processed.");
    cart.clear();
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-100 to-gray-300 text-black">
      <NavBar cartCount={cart.totalQty} />
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {catalog.map((product) => (
            <ProductCard key={product._id || product.id} product={product} onAdd={cart.add} />
          ))}
        </div>
        <CheckoutSummary subtotal={cart.subtotal} onCheckout={handleCheckout} />
      </div>
    </div>
  );
}
