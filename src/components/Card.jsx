/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
function Card( {activity}) {
  return (
    <>
      <h2>{activity.name}</h2>
      <img src={activity.image}/>
      <p>{activity.hashtag}</p> <p>{activity.city}</p>
      <p>{activity.desc}</p>
      <a href={activity.link} target="_blank"><button>CLIQUE</button></a>
    </>
  );
}
export default Card;
