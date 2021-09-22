import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="layout">
      <Header />
      <Menu />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
