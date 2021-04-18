import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.h1`
  ${({ color }) => css`
    color: ${color ? color : "white"};
    font-size: 26px;
    ${media.lessThan("medium")`
      font-size: 24px;
    `}
  `}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
