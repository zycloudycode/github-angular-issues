import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

import { IssueAssignees } from './IssueAssignees';
import { UserLoginWithAvatar } from "./UserLoginWithAvatar";
import { IssueNavButtonContainer } from './IssueNavButtonContainer';

export default class IssueTable extends Component {
  constructor() {
    super();
    this.state = {
      selectedRow: 0
    }
  }

  handleRowSelection = selectedRow => {
    if (selectedRow.length > 0) {
      window.open(this.props.issues[selectedRow].html_url);
    }
  }

  getFilteredIssues() {
    // for future features
    return this.props.issues;
  }

  render() {
    return (
      <div>
        <IssueNavButtonContainer
          prevPage={this.props.prevPage}
          page={this.props.page}
          nextPage={this.props.nextPage}
          firstPage={this.props.firstPage}
          lastPage={this.props.lastPage}
          setLastPage={this.props.setLastPage}
        />
        <Table onRowSelection={this.handleRowSelection}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Issue #</TableHeaderColumn>
              <TableHeaderColumn>Issue Type</TableHeaderColumn>
              <TableHeaderColumn>State</TableHeaderColumn>
              <TableHeaderColumn colSpan={2}>Title</TableHeaderColumn>
              <TableHeaderColumn>Created By</TableHeaderColumn>
              <TableHeaderColumn>Assigned To</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true} displayRowCheckbox={false}>
            {this.getFilteredIssues().map(
              ({ number, title, user, assignees, pull_request, state }, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{number}</TableRowColumn>
                  <TableRowColumn>{pull_request ? 'Pull Request' : 'Issue'}</TableRowColumn>
                  <TableRowColumn>{state}</TableRowColumn>
                  <TableRowColumn colSpan={2}>{title}</TableRowColumn>
                  <TableRowColumn>
                    <span>
                      <UserLoginWithAvatar
                        login={user.login}
                        avatar_url={user.avatar_url}
                      />
                    </span>
                  </TableRowColumn>
                  <TableRowColumn>
                  {
                    assignees.length === 0 ? 'None' :
                    <IssueAssignees assignees={assignees}/>
                  }
                  </TableRowColumn>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

IssueTable.propTypes = {
  page: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired
};
