import styled from 'styled-components';

const Header = styled.header`
  background-color: #fff;
  padding: 1rem;
  max-width: 1200px;
  margin: 1rem;
  border-bottom: 1px solid #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.4rem;
  }

  img {
    width: 2rem;
    margin-right: 1rem
  }

  nav {
    color: #007bff;
  }

  div,
  div > *, span {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    margin-left: 2rem;
    gap: 0.6rem;
    font-size: 1.2rem;
    transition: 0.2s ease;
    padding: 10px;
    border-radius: 5px;

    &:hover {
      background: rgba(0,0,0,0.2)
    }
  }

  @media (min-width: 1000px) {
    margin: 2rem auto 0;
    font-size: 1.1rem;
  }
`;

export default Header;
