import Header from "./components/header";
import "./App.css";
import Hero from "./components/startseite/hero";
import TrustBar from "./components/startseite/trustbar";
import Categories from "./components/startseite/categories";
import Vacancy from "./components/startseite/vacancy";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <Categories />
      <Vacancy />
      <Footer />
    </>
  );
}

export default App;
