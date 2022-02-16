import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Support from './pages/Support';
import Tickets from './pages/Tickets';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/support" element={<PrivateRoute />}>
              <Route exact path="/support" element={<Support />} />
            </Route>
            <Route path="/tickets" element={<PrivateRoute />}>
              <Route exact path="/tickets" element={<Tickets />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
