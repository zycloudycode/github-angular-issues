import { withProps, lifecycle, compose, withState } from 'recompose';
import { getRequest } from '../rest/Request';

const today = new Date();
today.setDate(today.getDate() - 7);
const sinceDateString = today.toISOString();
// Add &access_token=... to the url to increase the access limit
const url = 'https://api.github.com/repos/angular/angular/issues?&since=' + sinceDateString;

export const WithIssues = compose(
  withState('loading', 'setLoading', true),
  withState('issues', 'setIssues', []),
  withState('page', 'setPage', 1),
  withState('lastPage', 'setLastPage', 1),
  withState('filterValues', 'setFilterValues', {
    state: 'open',
    sort: 'created',
    direction: 'desc',
    creator: ''
  }),
  withProps(({ setIssues, setLoading, page: defaultPage, setLastPage, filterValues}) => ({
    requestIssues: (queryParams = filterValues, newPage = defaultPage) => {
      setLoading(true);
      const q = Object.keys(filterValues)
        .filter ((key) =>
          filterValues[key].length > 0
        ).reduce((query, key) =>
            query + '&' + key + '=' + filterValues[key]
      , '');
      getRequest(url +'&page=' + newPage + q).then(
        res => {
          const regex = /&page=\d+[^;]*>; rel="last"/
          const lastPageMatch =  res.links && res.links.match(regex);
          setIssues(res.issues);
          if (lastPageMatch){
            setLastPage(Number(lastPageMatch[0].match(/\d+/)[0]));
          } else {
            setLastPage(newPage);
          }
          setLoading(false);
        }
      )
    }
  })),
  withProps(({ page, lastPage, setPage, requestIssues, filterValues }) => {
    // Creates a handler to set the page and the request issues with that page
    const createNewPageRequester = newPage =>
      () => setPage(
        newPage,
        () => requestIssues(filterValues, newPage)
      );
    return ({
      nextPage: createNewPageRequester(page + 1),
      prevPage: createNewPageRequester(Math.max(1, page-1)),
      firstPage: createNewPageRequester(1),
      setLastPage: createNewPageRequester(lastPage)
    })
  }),
  lifecycle({
    componentDidMount() {
      this.props.requestIssues();
    }
  })
);
