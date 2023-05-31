import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Links = styled(Link)`
  padding: 20px;
  font-size: 20px;
  font-family: 'Poppins';
  text-decoration: none;
  color: white;
  &.active {
    color: pink;
  }
`;

export const NavigateList = styled.ul`
list-style: none;
display: flex; 
gap: 50px;
justify-content: center;
align-items: center;
`
export const Unlim = styled.img`
height: 100px;
width: 100px;
padding-top: 10px;
`