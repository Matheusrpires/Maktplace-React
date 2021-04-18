import Logo from "../logo/index";

import * as S from "./style";
import logo from "../images/logo.svg";

const Title = ({ children, color }) => {
  return (
    <S.Container>
      <Logo size="normal" hideOnMobile="true" />
      <S.Wrapper color={color}>{children}</S.Wrapper>
    </S.Container>
  );
};

export default Title;
