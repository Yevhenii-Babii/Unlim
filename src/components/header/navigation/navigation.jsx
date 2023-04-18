import React from 'react';
import { Links, NavigateList } from './navigation.styled';
export const Navigation = () => {
  return (
    <>
    <nav>
      <NavigateList>
        <li>
            <Links to="/"> Logo </Links>
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
