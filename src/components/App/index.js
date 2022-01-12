import { useEffect, useState } from "react";
import "./App.css";
// use effect allows us to perform side effects on a fucntional component
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  // on every render
  useEffect(() => {
    console.log("I re-rendered");
    // window.addEventListener("resize", updateWindowWidth);
  });

  // on first render/Mount only! - componentDidMount alt
  useEffect(() => {
    console.log("The component mounted");
  }, []);

  // on first render + whenever dependancy changes! - compdidupdate alt
  useEffect(() => {
    console.log(`The name changed ${name}`);
  }, [name]);

  // Follows same rules, except this handles the unmounting on a component - compWill unmount alt

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      // when component unmounts, this clean up code runs...
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div className="App">
      <center>
        <h1>The useEffect Hook</h1>
        <h2>The window width is: {windowWidth}</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a name"
        />
      </center>
    </div>
  );
}

export default App;
