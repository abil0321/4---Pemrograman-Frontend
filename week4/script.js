function Hello(props) {
  // const name = 'Muhammad Salsabil';
  return (
    <div>
      <h2>Hello Guys</h2>
      <p>Saya {props.nama} dan saya seorang {props.jurusan} ya gesyaa</p>
    </div>
  );
}

function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function Main() {
  return (
    <main>
      <Hello nama="Abil" jurusan="SE"/>
      <Hello nama="Nasrul" jurusan="DG"/>
      <Hello nama="Efendi" jurusan="PSJ"/>
      <Hello nama="Aziz" jurusan="CS"/>
      <Hello nama="Amirul" jurusan="PSJ"/>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <h2>Copyright @MuhammadSalsabil45</h2>
      <p>Created by React.js</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
 