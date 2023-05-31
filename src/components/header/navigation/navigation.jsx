import React from 'react';
import { Links, NavigateList, Unlim } from './navigation.styled';
import unlimLogo from '../../../images/unlinLogo.png'
export const Navigation = () => {
  return (
    <>
    <nav>
      <NavigateList>
        <li>
          <Links to="/" target="_blank">
          
          <Unlim src={unlimLogo}  alt="Logo unlim" /> 
          </Links>
        </li>
        <li>
          <Links to="/">Unlim</Links>
        </li>
        <li>
          <Links to="/">Exhaust</Links>
        </li>
        <li>
          <Links to="/">Content</Links>
        </li>
        <li>
          <Links to="/">Contact</Links>
        </li>
      </NavigateList>
      </nav>
    </>
  );
};
