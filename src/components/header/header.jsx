import React from 'react';
import { HeaderWrapper } from './header.styled';
import { Navigation } from './navigation/navigation';

export const Header = () => {
    return(
        <>
      
        <HeaderWrapper>
            <Navigation/>
        </HeaderWrapper>
    
        </>
    )
}