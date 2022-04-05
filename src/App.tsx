import './app.scss';
import Admin from './admin/components/Admin';
import Resource from './admin/components/Resource';
import ListGuesser from './admin/components/ListGuesser';

const App = () => {

  return <div>
    <Admin>
      <Resource name="users" list={ListGuesser} />
      <Resource name="posts" list={ListGuesser} />
    </Admin>
  </div>
}

export default App;
