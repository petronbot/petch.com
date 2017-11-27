import Footer from "./../parts/footer";
import Header from "./../parts/header";

export default ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);
