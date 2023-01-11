import styled from "styled-components";

const Card = styled.li`
  list-style: none;
  background-color: #151020;
  width: 100%;
  border-radius: 4px;
  padding: 2rem;
`;

const Image = styled.img`
  height: 24rem;
  border-radius: 4px;
  /* overflow: hidden; */
  object-fit: cover;
`;

const Name = styled.span`
  margin-top: 1rem;
  display: inline-block;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const Genre = styled.span`
  font-size: 1.2rem;
`;

const Specie = styled(Genre)``;

const Separator = styled.span`
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #ffffffc0;
  border-radius: 50%;
`;

export { Card, Image, Name, Genre, Specie, Separator, TextWrapper };
