import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import HeroSec from "../components/HeroSec";
import Services from "../components/Services";
import TestimonialCard from "../components/Testimonials";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { storeProducts } from "../../store/productSlice";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        dispatch(storeProducts(res.data));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <HeroSec />
      <Services />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {loading ? (
          <div>loading.................</div>
        ) : (
          products?.map((pro) => <Cards key={pro.id} product={pro} />)
        )}
      </div>
      <TestimonialCard />
    </>
  );
};
export default Home;
