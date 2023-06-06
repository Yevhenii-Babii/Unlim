import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperIconsList = styled.ul`
padding: 0px;
margin:0px;
display: flex;
justify-content:center;
align-items:center;
gap:20px;
list-style:none;

`
export const LinkIcon = styled(Link)`
 
 
`;

export const BackgroundItemIcon = styled.div`
background-color: rgb(35, 33, 34);;
width: 40px;
height: 40px;
border-radius:50%;
display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        background-color:white;
        transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    
`

