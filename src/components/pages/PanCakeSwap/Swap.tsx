import { Outlet } from "react-router-dom";
import "./Swap.scss";
import { useState } from "react";
import Footer from "../HomePage/components/Footer";
import Header from "../../common/Header/Header";

const Swap = () => {
  console.log('Dex');
  // const [show, setShow] = useState(false);
  // const [data, setData] = useState({});
  const [active, setActive] = useState<boolean | any>(false);
  const handleActive = () =>
    document.body.clientWidth < 1199 && setActive(!active);

  return (
    <>
      <section className="swapPage bg-image ">
        <Header handleActive={handleActive} active={active} />
        <Outlet />
      </section>
        <Footer />
    </>
  );
};

export default Swap;
