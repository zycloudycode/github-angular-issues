import { compose } from "recompose";
import { IssuesPage } from "./IssuesPage";
import { WithIssues } from "../hoc/WithIssues";

export const IssuesPageContainer = compose(
  WithIssues
)(IssuesPage);
