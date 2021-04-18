import { createRef } from "react";
import { useState } from "react";

import * as S from "./style";

const StripeMsg = ({ children }) => {
  let close = createRef();

  const [teste, setTeste] = useState(false);

  const closeAction = () => {
    setTeste(!teste);
    setTimeout(() => {
      setTeste(false)
    }, 2000);
  };

  return (
    <>
    <S.Wrapper active={teste} ref={close}>
      {children} <button onClick={() => closeAction()}>X</button>
    </S.Wrapper>
    {/* <button onClick={() => closeAction()}>X</button> */}
    </>
  );
};

export default StripeMsg;
