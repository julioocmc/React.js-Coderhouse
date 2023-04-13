import { Navigate, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ProductList/ItemListContainer.jsx';
import NavBar from './components/Navbar/NavBar.jsx';
import CardDetailContainer from './components/CardDetail/index.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/products" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/products/:id" element={<CardDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
