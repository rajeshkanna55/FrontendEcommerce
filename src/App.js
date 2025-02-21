import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import Login from './pages/Login';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Admin from './layouts/Admin';
// import Register from './pages/Register';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="admin/*" element={<Admin/>} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;