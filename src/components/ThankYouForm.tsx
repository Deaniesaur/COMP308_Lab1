import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Evaluation from '../shared/Evaluation';

interface IAppProps {
  evaluation: Evaluation
}

const App: FunctionComponent<IAppProps> = ({ evaluation }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="thankYouForm">
        <span className='thankYouText'>Thank you, { evaluation.studentEmail }</span>
        <div className="appreciationText">
          We really appreciate your time for evaluating {evaluation.courseCode} : { evaluation.courseName}.
        </div>
        <div className="detailsText">
          Details:
          <ul>
            <li>Rating : {evaluation.rating}</li>
            {evaluation.topic && <li>Favorite Topic/s : {evaluation.topic}</li>}
            <li>Comment : {evaluation.comment}</li>
          </ul>
        </div>
      </div>
      <div>
        <Button
          // className='formControl'
          onClick={ () => navigate('/') }
          variant='contained'
        >Back to Login
        </Button>
      </div>
    </div>
  );
};

export default App;
