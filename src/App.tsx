// import { useState } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import CommentsForm from './components/CommentsForm';
import ThankYouForm from './components/ThankYouForm';
import Restricted from './components/Restricted';
import Header from './components/Header';
import Footer from './components/Footer';

function App () {
  const [studentEmail, setStudentEmail] = useState('');
  const handleLoginSuccess = (email: string) => setStudentEmail(email);

  return (
    <div>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path='/' element={<LoginForm onLoginSuccess={handleLoginSuccess}/>} />
            <Route
              path='/comments'
              element={
                studentEmail ? <CommentsForm studentEmail={studentEmail}/> : <Navigate to='/restricted' />
              } />
            <Route
              path='/thankyou'
              element={
                studentEmail ? <ThankYouForm studentEmail={studentEmail}/> : <Navigate to='/restricted' />
              } />
            <Route
              path='/restricted'
              element={ <Restricted></Restricted> } />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
