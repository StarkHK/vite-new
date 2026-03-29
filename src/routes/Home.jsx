import { useState, Fragment } from "react";
import StarRating from "../components/cards/StarRating";
import CounterHOC from "../components/cards/CounterHOC";
import TempConverter from "../components/cards/TempConverter";
import Tabs from "../components/Tabs/tabs.component";
import Accordian from "../components/Accordian/Accordian.component";
import useMap from "../components/hooks/useMap";
import textSearch from "../utils/textSearch";

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

const tabItems = [
  {
    value: "html",
    label: "HTML",
    content: "Some HTML Content",
  },
  {
    value: "css",
    label: "CSS",
    content: "Some CSS Content",
  },
  {
    value: "js",
    label: "js",
    content: "Some JS Content",
  },
  {
    value: "react",
    label: "React",
    content: "Some React Content",
  },
];

const accordianData = [
  {
    value: "html",
    title: "HTML",
    contents:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    value: "css",
    title: "CSS",
    contents:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    value: "javascript",
    title: "JavaScript",
    contents:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

export default function Home() {
  const [rating, setRating] = useState(3);
  const { map, set, setAll, reset, remove } = useMap([["key", "🆕"]]);

  return (
    <>
      <StarRating max={5} value={rating} onChange={setRating} />

      <p>{textSearch("the quick brown fox jumped", "quick")}</p>
      <button onClick={() => set(String(Date.now()), "📦")}>Add</button>
      <button
        onClick={() =>
          setAll([
            ["hello", "👋"],
            ["data", "📦"],
          ])
        }
      >
        Set new data
      </button>
      <button onClick={reset}>Reset</button>
      <button onClick={remove("hello")} disabled={!map.get("hello")}>
        Remove "hello"
      </button>
      <pre>
        Map (
        {Array.from(map.entries()).map(([key, value]) => (
          <Fragment key={key}>{`\n  ${key}: ${value}`}</Fragment>
        ))}
        <br />)
      </pre>

      {/* <CounterHOC /> */}
      {/* 
      <TempConverter />

      <Tabs items={tabItems} />

      <Accordian accordianData={accordianData} /> */}
    </>
  );
}
