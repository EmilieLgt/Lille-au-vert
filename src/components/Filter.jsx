/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./Filter.css";
import { useContext } from "react";
import { ActivitiesContext } from "../assets/Context/ActivitiesContext";

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
      <label htmlFor="hashtag-select" className="label-filter">
        Filtrer par catégories
        <select
          id="hashtag-select"
          className="hashtag-select filter-select"
          onChange={(event) => handleChangeFilter(event)}
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
