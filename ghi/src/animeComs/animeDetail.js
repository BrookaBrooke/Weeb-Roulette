import React from "react";
import { useParams } from "react-router-dom";

export default function animeDetail() {
  const { id } = useParams();
  return <div>animeDetail</div>;
}
