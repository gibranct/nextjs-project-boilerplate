import * as S from './styles';

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, React, Nextjs and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="React Avançado" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </S.Wrapper>
);

export default Main;
