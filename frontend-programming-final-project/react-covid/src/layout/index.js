import Container from "../components/Container";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Index";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
