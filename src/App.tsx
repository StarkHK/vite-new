import "./App.css";
import debounceFunc from "./utils/debounce";
import throttleFunc from "./utils/throttle";

function App() {
  (function () {
    const debounced = debounceFunc(() => {
      console.log("this is working");
    }, 3000);

    const throttle = throttleFunc(() => {
      console.log("this will now be throttled");
    }, 199999);

    debounced();
    throttle();
  })();

  return (
    <>
      <h1>Vite + React</h1>
      <h1 className="text-3xl font-bold underline">Hello worlds!</h1>
    </>
  );
}

export default App;
