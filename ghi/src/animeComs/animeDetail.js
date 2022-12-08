import { Container, Row, Col, Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";

import { useGetAnimeQuery } from "../store/animeApi";

function AnimeDetail() {
  const { data, error, isLoading } = useGetAnimeQuery();

  if (isLoading) {
    return <progress>"progrss is primary" max="100" </progress>;
  }

  return (
    <div className="container">
      <h1 className="header-title">Detail</h1>
      <table className="table">
        {data.data.map((anime) => {
          return (
            <tr key={anime.id}>
              <td className="model-text"></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default AnimeDetail;
