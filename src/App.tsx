import './app.scss';
import Admin from './admin/components/Admin';
import Resource from './admin/components/Resource';
import ListGuesser from './admin/components/ListGuesser';
import UsersList from './resources/users/users-list';
import jsonServerProvider from './admin/data/jsonServerProvider';

const App = () => {

  return <div>
    <Admin dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}>
      <Resource name="users" list={UsersList}  dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}/>
      <Resource name="posts" list={ListGuesser} dataProvider={jsonServerProvider('https://jsonplaceholder.typicode.com')}/>
    </Admin>
  </div>
}

export default App;
