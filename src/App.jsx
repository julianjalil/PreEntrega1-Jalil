import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer';
import CardWidget from './components/CardWidget';

const App = () => {

  return (
    <div>
      <div>
        <CustomNavbar />
      </div>
      <div>
      <ItemListContainer greeting={"Bienvenidos a dagú"}/>
      </div>
      <div>
      <CardWidget />
      </div>
    </div>
  );
};

export default App
