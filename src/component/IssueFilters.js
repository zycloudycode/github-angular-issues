import React from "react";
import RaisedButton from "material-ui/RaisedButton";

import { IssueSearchBox } from "./IssueSearchBox";
import { IssueFilterDropList } from "./IssueFilterDropList";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle
} from "material-ui/Toolbar";

const style = {
  margin: 12,
  backgroundColor: "rgb(0, 188, 212)",
  color: "rgb(255, 255, 255)"
};

export class IssueFilters extends React.Component {
  constructor(props) {
    super(props);
    this.stateList = [
      { value: "open", label: "Open" },
      { value: "closed", label: "Closed" },
      { value: "all", label: "All" }
    ];
    this.sortList = [
      { value: "created", label: "Created" },
      { value: "updated", label: "Updated" },
      { value: "comments", label: "Comments" }
    ];
    this.directionList = [
      { value: "desc", label: "Descending" },
      { value: "asc", label: "Ascending" }
    ]
  }

  handleFilterValue = (filter, value) => {
    this.props.setFilterValues({ ...this.props.filterValues, [filter]: value });
  };

  render() {
    return (
      <Toolbar style={style}>
        <ToolbarGroup>
          <ToolbarTitle style={style} text="Filter By:" />
        </ToolbarGroup>
        <ToolbarGroup>
          <IssueFilterDropList
            filterType="state"
            filterLabel="State"
            value={this.props.filterValues.state}
            data={this.stateList}
            handleFilterValue={this.handleFilterValue}
          />
          <IssueFilterDropList
            filterType="sort"
            filterLabel="Sort By"
            value={this.props.filterValues.sort}
            data={this.sortList}
            handleFilterValue={this.handleFilterValue}
          />
          <IssueFilterDropList
            filterType="direction"
            filterLabel="Order By"
            value={this.props.filterValues.direction}
            data={this.directionList}
            handleFilterValue={this.handleFilterValue}
          />
          <IssueSearchBox
            filterType="creator"
            filterLabel="Created By"
            hintText="Creator login"
            value={this.props.filterValues.labels}
            handleFilterValue={this.handleFilterValue}
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <RaisedButton
            label="SEARCH"
            style={style}
            onClick={event => {
              this.props.setPage(1);
              this.props.requestIssues(undefined, 1);
            }}
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
