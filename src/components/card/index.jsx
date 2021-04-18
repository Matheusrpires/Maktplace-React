import { useState } from "react";

import Button from "../button/index";

import * as S from "./style";
import product from "../images/estrada.png";

const Card = (item) => {
  const [data, SetData] = useState({
    price: {
      to: {
        integers: 99,
        decimals: 99,
      },
      // from: null,
      // from: {
      //   integers: 299,
      //   decimals: 99,
      // },
    },
  });

  return (
    <S.Wrapper>
      <S.ImgWrapper>
        <S.AlertTop offer={data.price.from === undefined ? false : true}>
          Exclusividade
        </S.AlertTop>
        <img
          src={product}
          alt="Produto estrada. Grade de plástico na cor preta"
        />
        <S.AlertBotton offer={data.price.from === undefined ? false : true}>
          <span>Oferta</span> <span>-10%</span>
        </S.AlertBotton>
      </S.ImgWrapper>
      { //no to e no from estava dando erro no console quando coloquei só a plavra, testar dps como fica 
      }
      <S.Title>Fita adesiva para demarcação 30 metros - Nove54</S.Title>
      <Button type="green">Adicionar ao carrinho</Button>
      <S.PriceWrapper offer={data.price.from === undefined ? false : true}>
        {data.price.from === undefined ? (
          <S.PriceTag type="price" to="true" from="true">
            <a>R$ 169,90</a> cada
          </S.PriceTag>
        ) : (
          <S.PriceTag type="from" to="true" from="true">
            <a>R$ 169,90</a> cada
          </S.PriceTag>
        )}
        {data.price.from !== undefined && (
          <S.PriceTag type="to" to="true" from="true">
            <a>R$ 169,90</a>
          </S.PriceTag>
        )}
        <S.Parcel>
          <a>10x</a> de <a>R$14,99</a> S/ juros
        </S.Parcel>
      </S.PriceWrapper>
    </S.Wrapper>
  );
};

export default Card;
