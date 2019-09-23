// width:60px; height:60px; baclground-color: #FFFFFF; border-radius: 10px;padding:14px; color: #547FB3; box-shadow:#000000, 16% flexbox:center

// active: color and background-clor inverted

import React from "react";
import styled from "styled-components";
// walk impeir

const Button = styled.button`
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 10px;
  padding: 14px;
  fill: #547fb3;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
`;

export default function IconButton({ children }) {
  return <Button>{children}</Button>;
}
