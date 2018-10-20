import React from "react";

export const List = props => (
  <div className="list-overflow-container articleList">
    <ul className="list-group articleList">
      {props.children}
    </ul>
  </div>
);
