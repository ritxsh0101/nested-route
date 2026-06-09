import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';

import Dashboard from './component/Dashboard';
import Settings from './component/Settings';
import Profile from './component/Profile';
import Contact from './component/Contact';
import Products from './component/Products';
import ProductDetail from './component/ProductDetail';

import laptop from './assets/laptop.png';
import keyboard from './assets/keyboard.png';
import mouse from './assets/mouse.png';

import "./NavLinkTest.css";

// Product data
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    image: laptop,
    description: "High performance laptop"
  },
  {
    id: 2,
    name: "Keyboard",
    price: 100,
    image: keyboard,
    description: "Mechanical keyboard"
  },
  {
    id: 3,
    name: "Mouse",
    price: 200,
    image: mouse,
    description: "Wireless mouse"
  }
];

// Simple components
const Home = () => <h2>Welcome to my Home</h2>;

function About() {
  return <h2>This is About Page</h2>;
}

function App() {
  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <nav>
        <NavLink to="/">Home</NavLink>{" "}
        <NavLink to="/about">About</NavLink>{" "}
        <NavLink to="/contact">Contact</NavLink>{" "}
        <NavLink to="/productlist">Product List</NavLink>{" "}
        <NavLink to="/dashboard">Dashboard</NavLink>{" "}
        <NavLink to="/profile">Profile</NavLink>{" "}
        <NavLink to="/settings">Settings</NavLink>
      </nav>

      {/* ROUTES */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Products */}
        <Route
          path="/productlist"
          element={<Products list={products} />}
        />

        <Route
          path="/productlist/:id"
          element={<ProductDetail list={products} />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard list={products} />}
        />

        {/* Other pages */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;