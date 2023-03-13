import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/Navbar/NavBar.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer text="Bienvenido!" />
    </div>
  );
}

export default App;
