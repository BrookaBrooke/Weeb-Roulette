import React from "react";


const AnimeList = (props) => {
const [animes, setAnime] = useState({
    canonicalTitle: 'Loading...',
  });

  const fetchAnimes = async () => {
    const url = "https://kitsu.io/api/edge/anime/"
    const result = await fetch(url);
    const data = await result.json();
    setAnime(data)
  }

  useEffect(() => {
    fetchAnimes()
  }, []) // componentDidMount


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
                    {this.state.animes.map(anime => {
                        return(
                            <tr key={anime.id}>
                                <td className="model-text">{ anime.canonicalTitle }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default AnimeList;
