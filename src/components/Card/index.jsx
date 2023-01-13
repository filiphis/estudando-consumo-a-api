import * as S from "./styles";
export const Card = ({ imageUrl, name, genre, specie }) => (
  <S.Card>
    <S.Image src={imageUrl} />
    <S.Name>{name}</S.Name>
    <S.TextWrapper>
      <S.Genre>Gênero: {genre}</S.Genre>
      <S.Separator />
      <S.Specie>Espécie: {specie}</S.Specie>
    </S.TextWrapper>
  </S.Card>
);
