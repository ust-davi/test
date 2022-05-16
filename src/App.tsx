import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import './styles/temp.css';

import Main from './pages/Main';
import Signup from './common/pages/Signup';
import Login from './common/pages/Login';
import SearchPw from './common/pages/SearchPw';
import ChangingPassword from './common/pages/ChangingPassword';
import TermsAgreement from './common/pages/TermsAgreement';
import Event from './common/pages/Event';
import NoticeList from './common/pages/NoticeList';
import Terms from './common/components/Terms';
import useLoginRefresh from './common/hooks/useLoginRefresh';
import Store from './pages/Store';
import ShopManagement from './pages/ShopManagement';
import NoticeWrite from './pages/NoticeWrite';
import Cookies from 'universal-cookie';
import { AuthRefreshTokenRequest } from './common/type';
import SalesManagerLogin from './pages/SalesManagerLogin';
import SalesManagerForm from './pages/SalesManagerForm';

function App() {
  const cookies = new Cookies();
  const { mutateAsync } = useLoginRefresh();

  useEffect(() => {
    const request: AuthRefreshTokenRequest = {
      refresh: cookies.get('refreshToken'),
    };
    mutateAsync(request);
  }, []);

  return (
    <>
      <Router>
        <Route exact path="/" component={Main} />
        <Switch>
          <Route path="/event" component={Event} />
          <Route path="/store" component={Store} />
          <Route path="/shopManagement" component={ShopManagement} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/searchpw" component={SearchPw} />
          <Route path="/changePassword" component={ChangingPassword} />
          <Route exact path="/termsAgreement" component={TermsAgreement} />
          <Route exact path="/terms" component={Terms} />
          <Route path="/event" component={Event} />
          <Route path="/notice" component={NoticeList} />
          <Route exact path="/notice/write" component={NoticeWrite} />
          <Route
            exact
            path="/salesManager/login"
            component={SalesManagerLogin}
          />
          <Route exact path="/salesManager/form" component={SalesManagerForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
