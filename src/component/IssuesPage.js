import React from 'react';

import { IssueTableContainer } from './IssueTableContainer';
import { IssueFilters } from './IssueFilters';

export const IssuesPage = props => (
  <div>
    <IssueFilters
      requestIssues={props.requestIssues}
      setPage={props.setPage}
      filterValues={props.filterValues}
      setFilterValues={props.setFilterValues}
    />
    <IssueTableContainer {...props}/>
  </div>
);
