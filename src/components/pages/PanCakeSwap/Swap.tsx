import { Outlet } from "react-router-dom";
import HeadCard from "../../common/HeadCard/HeadCard";
import "./Swap.scss";
import { useState } from "react";
import TxnModal from "../../common/Modals/TxnModal/TxnModal";
import Footer from "../HomePage/components/Footer";
const Swap = () => {
  console.log('Dex');
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  return (
    <>
      <section className="swapPage">
        <Outlet />
      </section>
        <Footer />
    </>
  );
};

export default Swap;
