import * as S from "./style";

const Button = ({ type, logo, text, children, items, img, alt, func}) => {
  return (
    <S.Wrapper type={type} onClick={func}>
      <S.CartItems cart={!!items && (items.length >= 1 ? true : false)}>{items}</S.CartItems>
      <S.PWrapper text={text}>{children}</S.PWrapper>
      <S.ImageWrapper
        logo={logo}
        src={img}
        alt={alt}
        type={type}
      />
    </S.Wrapper>
  );
};

export default Button;
