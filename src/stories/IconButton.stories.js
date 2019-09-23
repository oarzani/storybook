import React from "react";
import IconButton from "../components/IconButton";
import Walk from "../icons/Walk";
import Euro from "../icons/Euro";

export default {
  title: "IconButton"
};
export const Inactive = () => (
  <IconButton>
    <Walk />
  </IconButton>
);

export const EuroIcon = () => (
  <IconButton>
    <Euro />
  </IconButton>
);
