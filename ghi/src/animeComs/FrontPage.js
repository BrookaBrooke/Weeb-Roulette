import React, { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";

const FrontPage = () => {
  const [animes, setAnimes] = useState([]);

  const fetchAnimes = async () => {
    const url = "http://localhost:8000/anime_list/1";
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
      {animes.map((i, idx) => {
        console.log("hello", i);
        return (
          <>
            <div>
              <AnimeCard
                title={i.attributes.canonicalTitle}
                description={i.attributes.description}
                image={i.attributes.coverImage?.tiny}
              />
            </div>
            {/* <h1>{idx}</h1> */}
            {/* <h1>{i.attributes.canonicalTitle}</h1>
            <img src={i.attributes.coverImage?.tiny} />
            <h1>{i.attributes.description}</h1> */}
          </>
        );
      })}
    </div>
  );
};
export default FrontPage;
