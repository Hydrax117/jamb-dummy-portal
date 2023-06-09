import React, { useContext } from "react";
import ThemeContext from "../../infrastructure/themeContex/themeContext";
export const Home = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div>
        <h1 style={{ fontSize: theme.fontSizes.h2 }}>this is the kHome</h1>
      </div>
    </>
  );
};
