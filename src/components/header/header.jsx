import { useState } from "react";
import Cart from "../cart/index";

import Title from "../title/title";
import Button from "../button/index";
import CartPng from "../images/shopping-cart.png";

import HeaderS from "./style";

const Header = ({ children, display }) => {
  const [open, setOpen] = useState(false);

  const changeStatus = () => {
    setOpen(!open);
  };

  return (
    <HeaderS>
      <Title>Os melhores produtos</Title>
      <Button
        func={changeStatus}
        img={CartPng}
        type="logoLarge"
        logo
        text
        items="1"
        alt="Desenho de carrinho de compras ou supermercado para indicar o seu carrinho de items"
      >
        Carrinho
      </Button>
      <Cart status={open} display={changeStatus}/>
    </HeaderS>
  );
};

export default Header;
