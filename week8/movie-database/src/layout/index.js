import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Container>
        <main>{props.children}</main>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
