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
import Evaluation from './shared/Evaluation';

function App () {
  const [studentEmail, setStudentEmail] = useState('');
  const [evaluation, setEvaluation] = useState<Evaluation>({} as Evaluation);
  const handleLoginSuccess = (email: string) => setStudentEmail(email);
  const handleSubmitEval = (evaluation: Evaluation) => setEvaluation(evaluation);

  const commentsPage = <CommentsForm studentEmail={studentEmail} submitEval={handleSubmitEval}/>;
  const thankYouPage = <ThankYouForm evaluation={evaluation}/>;
  const restrictedPage = <Navigate to='/restricted' />;

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
                studentEmail ? commentsPage : restrictedPage
              }
            />
            <Route
              path='/thankyou'
              element={
                evaluation.rating && evaluation.comment ? thankYouPage : restrictedPage
              } />
            <Route
              path='/restricted'
              element={ <Restricted></Restricted> }
            />
            <Route
              path='*'
              element={<Navigate to='/restricted' />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
