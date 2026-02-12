import "./App.css";
import debounceFunc from "./utils/debounce";

function App() {
  (function () {
    const debounced = debounceFunc(() => {
      console.log("this is working");
    }, 3000);

    debounced();
  })();

  return (
    <>
      <h1>Vite + React</h1>
      <h1 className="text-3xl font-bold underline">Hello worlds!</h1>
    </>
  );
}

export default App;
