import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/product/:productId' element={<ProductDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
