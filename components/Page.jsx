import Header from "../components/static/Header";
import Footer from "./static/Footer";

export default function Page({ children }) {
  return (
    <div className="page-wrapper-main">
      <Header />
      <script type="text/javascript" src="//cdn.calltrk.com/companies/958996440/8187eefc46fc8f040832/12/swap.js"></script>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
