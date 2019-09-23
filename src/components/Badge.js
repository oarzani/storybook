import React from "react";
import styled from "styled-components";

const BadgeButton = styled.button`
  border-radius: 5px;
  background-color: #547fb3;
  color: #fff;
  font-size: 16px;
  height: 24px;
  border: none;
`;

export default function Badge({ children }) {
  return <BadgeButton>{children}</BadgeButton>;
}
