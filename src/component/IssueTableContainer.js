import { compose } from "recompose";
import IssueTable from "./IssueTable";
import { WaitWhileLoading } from '../hoc/WaitWhileLoading';

export const IssueTableContainer = compose(
  WaitWhileLoading
)(IssueTable);
