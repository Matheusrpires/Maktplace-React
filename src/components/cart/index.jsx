import { useState } from "react";
import Button from "../button/index";
import CartCard from "../cartCard/index";

import * as S from "./style";
import Close from "../images/cancel.png";

const Cart = ({ status, display }) => {
  if (status) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  // #child{
  //     width: 100%;
  //     height: 100%;
  //     overflow-y: scroll;
  //     padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
  //     box-sizing: content-box; /* So the width will be 100% + 17px */
  // }

  return (
    <S.CardContainer display={status}>
      <S.Wrapper>
        <S.Container>
          <S.Header>
            <Button img={Close} logo type="logoSmall" func={display}></Button>
            <S.Title>Produtos no Carrinho</S.Title>
            <S.Break></S.Break>
            <S.Input type="search" name="cep" placeholder="Calcular CEP" />
          </S.Header>
          <S.LineSolid type="solid"></S.LineSolid>
          <CartCard></CartCard>
          <S.LineSolid type="solid"></S.LineSolid>
          <CartCard></CartCard>
          <S.LineSolid type="dashed"></S.LineSolid>
          <S.FinalPrice>
            <span>Frete:</span>
            <span>-</span>
          </S.FinalPrice>
          <S.FinalPrice>
            <span>Subtotal:</span>
            <span>R$ 3.081,70</span>
          </S.FinalPrice>
          <Button type="greenLarge">Ir para o Carrinho</Button>
        </S.Container>
      </S.Wrapper>
    </S.CardContainer>
  );
};

export default Cart;
