import "./App.css";

function App() {
  console.log(process.env.REACT_APP_PORT);
  console.log(process.env.REACT_APP_DEV_URL);
  return <div className="App">Hello world</div>;
}

export default App;
