import Footer from "./components/Footer";
import Header from "./components/Header";
import CategoryNav from "./components/CategoryNav";
import TrendingCategories from "./components/TrendingCategories";
import Home from "./components/Home";
import AllRoute from "./routes/AllRoute";

function App() {
  return (
    <div className="fragment" >
      <Header />
      <CategoryNav />
      <AllRoute />  
      <TrendingCategories />
      <Footer />
    </div>
  );
}

export default App;