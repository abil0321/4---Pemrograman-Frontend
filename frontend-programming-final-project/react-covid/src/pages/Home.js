import data from "../utils/constants/provinces";
import Footer from "../components/Footer";
import FormCovid from "../components/FormCovid";
// import Hello from "../components/Hello";
import Hero from "../components/Hero/Index";
import Navbar from "../components/Navbar";
import Provinsi from "../components/Provinsi";
import {useState} from 'react';
import Indonesia from "../components/Indonesia";

function Main() {

  const [dataProvinsi, setDataProvinsi] = useState(data);
  return (
    <main>
      <Hero />
      <Indonesia />
      <Provinsi dataProvinsi={dataProvinsi}/>
      <FormCovid dataProvinsi={dataProvinsi} setDataProvinsi={setDataProvinsi}/>
    </main>
  );

}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
