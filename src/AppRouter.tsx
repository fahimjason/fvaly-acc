import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home/Home'));
const Help = React.lazy(() => import('./pages/Help/Help'));
const Login = React.lazy(() => import('./pages/Login/Login'));
const ProductDetails = React.lazy(
  () => import('components/home/ProductDetails')
);
const ForgotPassword = React.lazy(
  () => import('./pages/ForgotPassword/ForgotPassword')
);
const Checkout = React.lazy(() => import('./pages/CheckOut/Checkout'));
const Dashboard = React.lazy(() => import('admin/layout/DefaultLayout'));

const AppRouter: React.FC = ({ children }) => {
  return (
    <Router>
      {children}
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/dashboard" component={Dashboard} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default AppRouter;
