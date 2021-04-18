import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  /* margin: 10px 2px; */
  /* width: 220px; */
  /* height: 23.5rem; */
  vertical-align: top;
  /* width: 11.25rem; */
  width: 170px;
  /* border: 0.5px solid #78be20; */
  border: 0.5px solid #e5e5e5;
  background: #ffffff;
`;
 
export const ImgWrapper = styled.div`
  position: relative;
`;

export const Title = styled.p`
  font-size: 15px;
  width: 80%;
  line-height: 18px;
  font-weight: 600;
  margin: 0.5rem 0.5rem;
`;

const PriceWrapperModifier = {
  offer: () => css`
    width: 101.5%;
    margin-left: -2px;
    margin-bottom: -1px;
  `,
};

export const PriceWrapper = styled.div`
  ${({ offer }) => css`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
    border-bottom: 5px solid ${offer ? "yellow" : "#78be20"};
    background-color: ${offer ? "yellow" : "white"};

    ${!!offer && PriceWrapperModifier.offer}
  `}
`;

const PriceTagModifier = {
  price: () => css`
    & > a {
      font-size: 20px;
    }
  `,
  to: () => css`
    font-size: 12px;
    color: #666666;
    text-decoration: line-through;
  `,
  from: () => css`
    color: #ed1c24;
    & > a {
      font-size: 18px;
    }
  `,
};

export const PriceTag = styled.span`
  ${({ type }) => css`
    font-size: 14px;
    font-weight: 600;
    ${!!type && PriceTagModifier[type]}
  `}
`;

export const Parcel = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: #666666;
  margin-top: -5px;
  & a {
    font-weight: 600;
  }
`;

export const AlertTop = styled.span`
  ${({ offer }) => css`
    position: absolute;
    right: -1px;
    top: 3px;
    background: #78be20;
    padding: 0 30px;
    color: white;
    display: ${offer ? "block" : "none"};
  `}
`;

export const AlertBotton = styled.div`
  ${({ offer }) => css`
    position: absolute;
    bottom: 10px;
    right: -1px;
    background: red;
    color: yellow;
    width: 101%;
    display: ${offer ? "flex" : "none"};
    justify-content: space-between;
    padding: 5px 10px;
    font-weight: 600;
    align-items: center;
    font-size: 15px;

    & :nth-child(2) {
      font-size: 18px;
    }
  `}
`;
