import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';
import BackButton from './routes/BackButton';


const size = lazy(() => import('./routes/size'));
const About = lazy(() => import('./routes/Detail'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={size} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
);
export default App;