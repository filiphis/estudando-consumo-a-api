import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  padding: 1rem;
  width: 1024px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ffffffab;
`;

const Title = styled.h1`
  color: #ffffffff;
`;

const Subtitle = styled.span`
  color: #ffffffff;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6rem;
`;

const Button = styled.button`
  display: block;
  width: 20rem;
  background-color: #5b1fa5;
  margin: 0 auto;
  line-height: 6.5rem;
  margin-top: 4.8rem;
  color: #ffffff;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  transition: filter 0.3s;
  font-weight: bold;

  &:hover {
    filter: brightness(0.8);
  }
`;

const Loader = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #040011;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, Header, Title, Subtitle, List, Button, Loader };
