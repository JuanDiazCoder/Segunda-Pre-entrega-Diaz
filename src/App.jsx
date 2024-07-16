import Nav from './components/Nav/Nav';
import ListProduct from './components/ListProductContainer/ListProductContainer';
import { Footer } from './components/Footer/Footer';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ListProductContainer from './components/ListProductContainer/ListProductContainer';

function App() {
  const [cardCount, setCardCount] = useState(1);

  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
        <Nav cardCount={cardCount} setCardCount={setCardCount} title="Agencia Quilmeña" />
        <Routes>
          <Route 
            path="/" 
            element={<ListProduct greetings="Productos destacados del mes:" />} 
          />
          <Route exact path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route 
            path="/category/:categoryId"
            element={<ListProductContainer />} 
          />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
