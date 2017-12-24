import React from "react";
import RaisedButton from "material-ui/RaisedButton";

const style = {
  margin: 12
};

export const IssueNavButton = props =>
(
  <div>
    <span>
      <RaisedButton
        onClick={props.firstPage}
        disabled={props.atFirst}
        style={style}
      >
        First
      </RaisedButton>
    </span>
    <span>
      <RaisedButton
        onClick={props.prevPage}
        disabled={props.atFirst}
        style={style}
      >
        Previous
      </RaisedButton>
    </span>
    <span>
      &nbsp;&nbsp;&nbsp;&nbsp;Page {props.page}&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
    <span>
      <RaisedButton
        onClick={props.nextPage}
        disabled={props.atLast}
        style={style}
      >
        Next
      </RaisedButton>
    </span>
    <span>
      <RaisedButton
        onClick={props.setLastPage}
        disabled={props.atLast}
        style={style}
      >
        Last
      </RaisedButton>
    </span>
  </div>
);
