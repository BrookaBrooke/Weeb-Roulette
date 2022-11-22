import React from "react";
import "./App.css";
import DetailsThumb from "./animeComs/Details.Thumbs";

class App extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Brookes Anime List",
        src: [
          "https://cdn.myanimelist.net/images/anime/10/81382.jpg",
          "https://cdn.myanimelist.net/images/anime/1589/95329.jpg",
          "https://cdn.myanimelist.net/images/anime/1818/126435.jpg",
          "https://cdn.myanimelist.net/images/anime/1780/121555.jpg",
        ],
        description: "Prometheus' Crime",
        content:
          "Feeling sorry for man's weak and naked state, Prometheus raided the workshop of Hephaistos and Athena on Mt. Olympus and stole fire, and by hiding it in a hollow fennel-stalk, he gave the valuable gift to man which would help him in life's struggle. The Titan also taught man how to use their gift and so the skill of metalwork began; he also came to be associated with science and culture.",
        count: 1,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className="app">
        {products.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.src[index]} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                {/* <span>${item.price}</span> */}
              </div>

              <p>{item.description}</p>
              <p>{item.content}</p>

              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              />
              <button className="cart">Add to your list</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function animeDetail() {
//   const { id } = useParams();
//   const [details, setDetails] = useState();

//   useEffect(() => {
//     console.log("useEffect");
//     const url = "https://kitsu.io/api/edge/anime/" + id;
//     // wait for the correct URL ^
//     fetch(url)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setDetails(data.details);
//       });
//   }, []);

//   return (
//     <>
//       {details ? (
//         <div>
//           <p>{details.id}</p>
//           <p>{details.titles}</p>
//           <p>{details.startDate}</p>
//           <p>{details.endDate}</p>
//         </div>
//       ) : null}
//       {/* <Link to='/homepage or another page'>"PAGE"</Link> */}
//     </>
//   );
// }
