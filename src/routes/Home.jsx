import { useState } from "react";
import StarRating from "../components/cards/StarRating";
import CounterHOC from "../components/cards/CounterHOC";
import TempConverter from "../components/cards/TempConverter";

const products = [
  { id: 1, name: "iPhone 15", category: "Mobile", price: 80000 },
  { id: 2, name: "Samsung Galaxy S23", category: "Mobile", price: 70000 },
  { id: 3, name: "OnePlus Nord", category: "Mobile", price: 30000 },
  { id: 4, name: "MacBook Air", category: "Laptop", price: 120000 },
  { id: 5, name: "Dell Inspiron", category: "Laptop", price: 65000 },
  { id: 6, name: "HP Pavilion", category: "Laptop", price: 58000 },
  { id: 7, name: "Boat Headphones", category: "Accessories", price: 2500 },
  { id: 8, name: "Sony Headphones", category: "Accessories", price: 12000 },
];

export default function Home() {
  const [rating, setRating] = useState(3);

  return (
    <>
      <StarRating max={5} value={rating} onChange={setRating} />
      <CounterHOC />

      <TempConverter />
    </>
  );
}
