import { Fragment } from 'react';
import { Provider , useSelector , useDispatch } from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'
import { authAction } from './store';


function App() {

  const isAuth = useSelector((state) => state.auth.isloggedin);

  return (
    <Fragment>
      <Header/>
      <h1>this is prateek in aws</h1>
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
