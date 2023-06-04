import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer';

const App = () => {

  return (
    <div>
      <div>
        <CustomNavbar />
      </div>
      <div>
      <ItemListContainer />
      <ItemListContainer />
      <ItemListContainer />
      </div>
    </div>
  );
};

export default App
