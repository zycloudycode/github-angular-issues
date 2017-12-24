import { compose, withProps } from 'recompose';
import { IssueNavButton } from './IssueNavButton';

export const IssueNavButtonContainer = compose(
  withProps(({ page, lastPage }) => ({
    atFirst: page <= 1,
    atLast: page + 1 > lastPage
  }))
)(IssueNavButton);
