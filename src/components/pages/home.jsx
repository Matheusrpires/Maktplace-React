import { useState } from "react";

import Header from "../header/header";
import Card from "../card/index";
import Cart from "../cart/index";
import ListItems from "../listProducts/index"

import StripeMsg from "../StripeMsg/indes";

import * as S from "./style";

const Home = () => {
  // const [open, setOpen] = useState(false);

  // const changeStatus = () => {
  //   setOpen(!open)
  // }

  return (
    <>
      {/* <Cart status={open} display={changeStatus}/> */}
      {/* <Header display={changeStatus}/> */}
      <Header />
      <StripeMsg>Produto adicionado ao carrinho com sucesso!</StripeMsg>
      <S.Div>
        <ListItems />
      </S.Div>
    </>
  );
};

export default Home;
