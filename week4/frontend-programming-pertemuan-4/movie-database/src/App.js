import "./App.css";
// import render from 'react-dom';
/**
 * Import Component Hello
 */
import Hello from "./components/Hello";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <h2>This is Create React App</h2>
      {/*
        Memanggil Component Hello.
        Mengirim props name. 
      */}
       <Header />
       <Main />
      <Hello name="Aufa" major="FrontEnd Engineer"/>
      <Footer />
    </div>
  );
}

// const rootElement = document.getElementById("root");

// const root = ReactDOM.createRoot(rootElement);

// root.render(<App />);

export default App;
