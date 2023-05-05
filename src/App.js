import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './components/redux/store/store';
function App() {
  return (
    <Provider store={store}>
<Routes>
  <Route path='/' element={<Home/>}/>
</Routes>
</Provider>
  );
}

export default App;
