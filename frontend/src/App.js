import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import ContactUS from './pages/ContactUS';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Schdeule from './pages/Schdeule';
import Support from './pages/Support';
import Ticket from './pages/Ticket';
import Tickets from './pages/Tickets';
import ViewDocuments from './pages/ViewDocuments';

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
            <Route path="/tickets/:ticketId" element={<PrivateRoute />}>
              <Route exact path="/tickets/:ticketId" element={<Ticket />} />
            </Route>
            <Route path="/profile" element={<PrivateRoute />}>
              <Route exact path="/profile" element={<Profile />} />
            </Route>
            <Route path="/schedule" element={<PrivateRoute />}>
              <Route exact path="/schedule" element={<Schdeule />} />
            </Route>
            <Route path="/view-documents" element={<PrivateRoute />}>
              <Route exact path="/view-documents" element={<ViewDocuments />} />
            </Route>
            <Route path="/contact" element={<ContactUS />} />
          </Routes>
        </main>
        <Footer />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
