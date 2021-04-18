import { useState } from "react";

import * as S from "./style";
import product from "../images/estrada.png";
import minus from "../images/minus.png";
import plus from "../images/plus.png";

const CartCard = () => {
  const [quantity, setQuantity] = useState(1);

  const minusQuantity = () => {
    if (quantity !== 0) {
      setQuantity((prevCounter) => prevCounter - 1);
    }
  };

  const plusQuantity = () => {
    setQuantity((prevCounter) => prevCounter + 1);
  };

  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <img src={product} alt="imagem do produto" />
      </S.ImageWrapper>
      <S.ContentWrapper>
        <h3>Fita adesiva para demarcação 30 metros - Nove54</h3>
        <S.NumberContainer>
          <div>
            <span className="cod">Cod. 89009889</span>
            <S.ItemsQuantity>
              <button onClick={minusQuantity}>
                <img src={minus} alt="simbolo de menos" />
              </button>
              <span>{quantity}</span>
              <button onClick={plusQuantity}>
                <img src={plus} alt="simbolo de mais" />
              </button>
            </S.ItemsQuantity>
          </div>
          <div className="price">
            <S.Price state="old">1 un. R$ 69,90</S.Price>
            <S.Price state="old">1 un. R$ 599,90</S.Price>
            <S.Price state="new">1 un. R$ 599,90</S.Price>
          </div>
        </S.NumberContainer>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default CartCard;
