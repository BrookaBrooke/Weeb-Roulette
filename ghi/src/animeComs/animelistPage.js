import React, { useState, useEffect } from "react";

const AnimeList = () => {
  const [animes, setAnimes] = useState([]);

  const fetchAnimes = async () => {
    const url = `http://localhost:8000/anime_list/${0}`;
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    setAnimes(data.data);
  };

  useEffect(() => {
    fetchAnimes();
  }, []); // componentDidMount

  return (
    <div className="container">
      <h1 className="header-title">List of Animes</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="table-head">Name</th>
          </tr>
        </thead>
        <tbody>
          {animes?.map((anime) => {
            return (
              <tr key={anime.id}>
                <td className="model-text">
                  {anime.attributes.canonicalTitle}
                </td>
                {/* Figure out on click redirect to detail page */}
                {/* assign id value to onclick function */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default AnimeList;
