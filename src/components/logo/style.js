import styled, { css } from "styled-components";
import media from "styled-media-query";

const wrapperModifiers = {
  small: () => css`
    width: 4rem;
  `,
  normal: () => css`
    width: 7rem;
  `,
  hideOnMobile: () => css`
    ${media.lessThan("medium")`
    display: none;
    `}
  `,
};

export const Wrapper = styled.div`
  ${({ size, hideOnMobile }) => css`
    padding: 0 10px;

    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile};
  `}
`;
