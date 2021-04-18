import styled, { css, keyframes } from "styled-components";
import media from "styled-media-query";

export const CardContainer = styled.div`
  ${({ display }) => css`
    display: ${display ? "block" : "none"};
    background: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 5;
    margin-top: 55rem;
  `}
`;

const slidein = keyframes`
  from {
    right: -400px;
    opacity: 0;
  }
  to {
    right: 0;
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  display: block;
  overflow-y: auto;
  height: 100vh;
  width: 40vw;
  background-color: white;
  position: absolute;
  z-index: 5;
  right: 0;
  position: fixed;
  animation: ${slidein} 0.4s;
  ${media.lessThan("950px")`
      width: 50vw;
    `}
  ${media.lessThan("medium")`
      width: 100vw;
    `}
`;

export const Container = styled.div`
  max-width: 95%;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 4.5em;
  height: 6em;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Title = styled.h1`
  color: #333333;
  font-size: 20px;
  line-height: 24px;
  margin-left: 1em;
`;

export const Input = styled.input`
  flex-grow: 1;
  height: 39px;
  border: 1px solid #e5e5e5;
  border-radius: 30px;
  color: #a6a6a6;
  font-size: 14px;
  padding-left: 1em;
  ::placeholder {
    color: #a6a6a6;
    opacity: 1;
  }
  ::-ms-input-placeholder {
    color: #a6a6a6;
  }
`;

export const LineSolid = styled.hr`
  ${({ type }) => css`
    border: 0;
    border-top: ${type === "dashed"
      ? "1.5px dashed #D3D3D3"
      : "0.5px solid #e5e5e5"};
    margin: 1.5em 0;
  `}
`;

export const FinalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 1rem 0 1rem;
  font-size: 19px;
  font-weight: 500;
  line-height: 22px;
  color: #3c3738;
`;
