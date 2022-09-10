import React from 'react';
import CatalogMenu from './components/catalog-menu/catalog-menu.component.jsx';
import Navbar from './routes/navigation.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <CatalogMenu />
    </div>
  );
}

export default App;
