import styled, { css } from "styled-components";
import media from "styled-media-query";

const WrapperModifier = {
  green: () => css`
    background: #78be20;
    border-radius: 25px;
    width: 95%;
    margin: 25px auto 15px auto;
    font-size: 14px;
    padding: 0.4rem 0;
    text-align: center;
    & > p {
      padding-right: 0;
    }
  `,

  greenLarge: () => css`
    background: #78be20;
    border-radius: 25px;
    width: 95%;
    margin: 35px auto 15px auto;
    font-size: 14px;
    padding: .8rem 0;
    text-align: center;
    & > p {
      padding-right: 0;
    }
  `,

  transparent: () => css`
    background: transparent;
  `,

  large: () => css`
    padding: 0.8rem 0;
  `,
};

const imgModifier = {
  logoLarge: () => css`
    width: 2.5rem;
    filter: brightness(0) invert(1);
    ${media.lessThan("medium")`
      width: 2rem;
    `}
  `,
  logoSmall: () => css`
    width: 1.5rem;
    ${media.lessThan("medium")`
      width: 1rem;
    `}
  `,
};

/* width: 8rem; */
/* ${!!text &&
    media.lessThan("medium")`
    width: 4rem;
    `} */

export const Wrapper = styled.button`
  ${({ type }) => css`
    position: relative;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;

    background: transparent;

    ${!!type && WrapperModifier[type]}
  `}
`;

export const PWrapper = styled.p`
  ${({ text }) => css`
    color: white;
    font-size: ${text ? "1.3" : "0.9"}rem;
    padding-right: 20px;
    ${!!text &&
    media.lessThan("medium")`
    display: none;
    `}
  `}
`;

export const ImageWrapper = styled.img`
  ${({ logo, type }) => css`
    display: ${logo ? "block" : "none"};
    ${!!type && imgModifier[type]}
  `}
`;

export const CartItems = styled.span`
  ${({ cart }) => css`
    display: ${cart ? "block" : "none"};
    position: absolute;
    z-index: 1;
    right: 0;
    top: 6px;
    background: red;
    color: white;
    padding: 5px 5px;
    border-radius: 50%;
    font-size: 13px;
    width: 25px;
    height: 25px;
    ${media.lessThan("medium")`
      width: 20px;
      height: 20px;
      padding: 2.5px 2.5px;
      font-size: 12px;
    `}
  `}
`;
