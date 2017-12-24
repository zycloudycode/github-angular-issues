import { renderComponent, branch } from "recompose";
import { LoadingScreen } from "../component/Loading";

export const WaitWhileLoading = branch(
  ({ loading }) => loading,
  renderComponent(LoadingScreen)
);
