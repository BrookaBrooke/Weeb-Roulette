import React, { useState } from "react";
import { useGetAnimeQuery } from '/app/src/store/animeApi'
import { useGetListsQuery } from "../store/myList";
import { Link } from "react-router-dom";

const MyAnimeList = (item) => {
    const { data: myListData } = useGetListsQuery ();
    const { data, isLoading } = useGetAnimeQuery ();



    function Card(props){
    return(
      <div className="card">
        <div className="card_body">
          <Link to={`/detail`}>
            <img src={props.img} alt=""/>
          </Link>
          <h2 className="card_title">{props.title}</h2>
          <p className="card_description">{props.description}</p>
        </div>
        <button className="card_button">Remove from List</button>
      </div>
    )
  }

    if (isLoading) {
        return null;
    } else {
        return (
            <div className="containter">
                <h1 className="header-title">My Anime Lists</h1>
                <div className="extra container">

                </div>
            </div>
        )
    }

};
export default MyAnimeList;
