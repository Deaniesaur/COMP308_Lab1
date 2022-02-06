import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

interface IResctrictedProps {
}

const Restricted: FunctionComponent<IResctrictedProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div className="restricted">
      <span className='restrictedText'>Page NOT Found or Restricted.</span>
      <div className="formControl">
        <Button
          onClick={ () => navigate('/') }
          variant='contained' >
            Go back to Login Page
        </Button>
      </div>
    </div>
  );
};

export default Restricted;
