import React from "react";
import { Link } from "react-router-dom";

const VastList = props => {
  return (
    <tr>
      <td>{props.vast.id}</td>
      <td>{props.vast.name}</td>
      <td>{props.vast.date_created}</td>
      <td>{props.vast.description}</td>
      <td>
        <input type="checkbox" checked={props.vast.active}></input>
      </td>
      <td>
        <input type="checkbox" checked={props.vast.continue_on_click}></input>
      </td>
      <td>{props.vast.language}</td>
      <td>
        <input type="checkbox" checked={props.vast.hide_timer}></input>
      </td>
      <td>{props.vast.timer_location}</td>
      <td>{props.vast.skip_button_location}</td>
      <td>
        <input type="checkbox" checked={props.vast.hide_all_ui}></input>
      </td>
      <td>
        <input type="checkbox" checked={props.vast.hide_play_button}></input>
      </td>
      <td>
        <input type="checkbox" checked={props.vast.hide_skip_button}></input>
      </td>
      <td>
        <input type="checkbox" checked={props.vast.fraud}></input>
      </td>
      <td>
        <input type="checkbox" checked={props.vast.brand_safety}></input>
      </td>
      <td>{props.vast.network_id}</td>
      <td>{props.vast.ad_tag_url}</td>
      <td>{props.vast.width}</td>
      <td>{props.vast.height}</td>
      <td>{props.vast.duration}</td>
      <td>{props.vast.whitelist_keywords}</td>
      <td>
        <input
          type="checkbox"
          checked={props.vast.serve_on_unmeasurable}
        ></input>
      </td>
      <td>
        <input type="checkbox" checked={props.vast.is_branded}></input>
      </td>
      <td>
        <input
          type="checkbox"
          checked={props.vast.private_brand_safety}
        ></input>
      </td>
      <td>
        {}
        <Link to={"/editVast/" + props.vast.id}>edit</Link>|
        <a
          href="#"
          onClick={() => {
            props.onDelete(props.vast.id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
};

export default VastList;
