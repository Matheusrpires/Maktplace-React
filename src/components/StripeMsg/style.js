import styled, { css } from "styled-components";
import media from "styled-media-query";

const WrapperModifier = {
  in: () => css`
    opacity: 1;
    transform: translateY(0);
  `,
};

export const Wrapper = styled.div`
  ${({ active }) => css`
    width: 100%;
    display: flex;
    position: absolute;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    background-color: #158110;
    color: white;
    opacity: 0;
    transition: all 0.5s;
    transform: translateY(-50px);
    z-index: 1;
    ${!!active && WrapperModifier.in}

    & > button {
      border: none;
      background-color: transparent;
      color: white;
      cursor: pointer;
      font-size: 15px;
    }

    ${media.lessThan("medium")`
      font-size: 15px;
      /* padding: 5px 2px; */
      /* justify-content: space-around; */
      margin-bottom: 5%;
    `}
  `}
`;

// .mfp-move-from-top {

//   .mfp-content {
//    vertical-align:top;
//   }

//   /* start state */
//   .mfp-with-anim {
//     opacity: 0;
//     transition: all 0.2s;

//     transform: translateY(-100px);
//   }

//   &.mfp-bg {
//     opacity: 0;
// 	  transition: all 0.2s;
//   }

//   /* animate in */
//   &.mfp-ready {
//     .mfp-with-anim {
//       opacity: 1;
//       transform: translateY(0);
//     }
//     &.mfp-bg {
//       opacity: 0.8;
//     }
//   }

//   /* animate out */
//   &.mfp-removing {

//     .mfp-with-anim {
//       transform: translateY(-50px);
//       opacity: 0;
//     }
//     &.mfp-bg {
//       opacity: 0;
//     }

//   }

// }
