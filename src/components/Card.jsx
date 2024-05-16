/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import "./card.css";

function Card({ activity }) {
  return (
    <div className="single-card">
      <img className="card-image" src={activity.image} />
        <div className="card-text">
      <div className="info-over-image">
        <h2 className="card-title">{activity.name}</h2>
        <div className="card-infos">
          <p className="card-hashtag">{activity.hashtag}</p>{" "}
          <p>{activity.city}</p>
        </div>
      </div>
      <p className="card-description">{activity.desc}</p>
     
      <a href={activity.link} target="_blank">
        <button className="card-button">Découvrir</button>
      </a>
      
      </div>
    </div>
  );
}
export default Card;
