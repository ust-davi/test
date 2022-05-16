import { Route } from 'react-router-dom';
import EventDetail from './EventDetail';
import EventList from './EventList';

const Event = ({ match }: any) => {
  return (
    <>
      <Route exact path={match.path} component={EventList} />
      <Route path={`${match.path}/:id`} component={EventDetail} />
    </>
  );
};

export default Event;
