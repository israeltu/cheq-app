import React from "react";
import { Link } from "react-router-dom";

const KeywordList = props => {
  return (
    <tr>
      <td>{props.keywordlist.id}</td>
      <td>{props.keywordlist.user_id}</td>
      <td>{props.keywordlist.name}</td>
      <td>{props.keywordlist.description}</td>
      <td>{Array.prototype.join.call(props.keywordlist.keywords, ", ")}</td>
      <td>{props.keywordlist.number_of_keywords}</td>
      <td>{props.keywordlist.language}</td>
      <td>
        <input type="checkbox" checked={props.keywordlist.is_private}></input>
      </td>
      <td>{props.keywordlist.last_modified}</td>
      <td>
        {Array.prototype.join.call(props.keywordlist.origin_keywords, ", ")}
      </td>
      <td>{props.keywordlist.version}</td>
      <td>{props.keywordlist.origin_version}</td>

      <td>
        <Link to={"/editKeywordList/" + props.keywordlist.id}>edit</Link>|
        <a
          href="#"
          onClick={() => {
            props.onDelete(props.keywordlist.id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
};

export default KeywordList;
