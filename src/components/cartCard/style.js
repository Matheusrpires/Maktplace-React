import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.div`
  width: 115px;
  img {
    max-width: 100%;
    border: 1px solid #e5e5e5;
    border-radius: 15px;
  }
`;

export const ContentWrapper = styled.div`
  margin-left: 1.3em;
  width: 80%;
  h3 {
    color: #78be20;
    font-size: 14px;
    line-height: 17px;
    width: 90%;
  }
`;

export const NumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  .cod {
    color: #a6a6a6;
    font-size: 12px;
    line-height: 14px;
  }

  .price {
    text-align: end;

    span {
      display: block;
    }
  }
`;

export const ItemsQuantity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 30px;
  width: 120px;
  padding: 7px 10px;

  button {
    background: none;
    border: none;
    border: 1px solid #78be20;
    border-radius: 50%;
    width: 25%;
    height: 25px;
  }
`;

const PriceWrapper = {
  old: () => css`
    font-size: 12px;
    color: #a6a6a6;
    line-height: 14px;
    text-decoration: line-through;
  `,
  new: () => css`
    font-size: 16px;
    color: #333333;
    line-height: 19px;
    font-weight: 800;
  `,
};

export const Price = styled.span`
  ${({ state }) => css`
    ${!!state && PriceWrapper[state]}
  `}
`;
