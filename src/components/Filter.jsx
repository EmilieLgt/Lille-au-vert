/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./filter.css"
import { useContext } from "react";
import { ActivitiesContext } from "../assets/Context/ActivitiesContext";
import "./Filter.css";

function Filter({ data }) {
  const { handleChangeFilter } = useContext(ActivitiesContext);

  const uniqueHashtags = [];
  data.forEach((option) => {
    if (!uniqueHashtags.includes(option.hashtag)) {
      uniqueHashtags.push(option.hashtag);
    }
  });

  return (
    <form className="center">
      <label htmlFor="hashtag-select" className="select label-filter">
        Filtrer par catégories
        <select
          id="hashtag-select"
          className="hashtag-select"
          onChange={(event) => handleChangeFilter(event)}
          className="filter-select"
        >
          <option value="">---</option>
          {uniqueHashtags.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </label>
    </form>
  );
}

export default Filter;
