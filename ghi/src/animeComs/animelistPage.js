import React from "react";

class AnimeList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            animes: [],
        };
    }

    async componentDidMount() {
        const url = 'https://kitsu.io/api/edge/anime'

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({animes: data.animes})
        }
    }

    render() {
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
                                    <td className="model-text">{ anime.name }</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AnimeList;
