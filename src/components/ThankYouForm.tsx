import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

interface IAppProps {
  studentEmail: string
}

const App: FunctionComponent<IAppProps> = ({ studentEmail }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="thankYouForm">
        <span className='thankYouText'>Thank You {studentEmail}</span>
        <span className='aprreciationText'>
          we appreciate your comments:
          This course prepares me to become a full-stack developer
        </span>
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
