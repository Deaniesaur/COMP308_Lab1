import { FormEvent, FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

interface ILoginFormProps {
  onLoginSuccess: (email: string) => void
}

const LoginForm: FunctionComponent<ILoginFormProps> = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailHelper, setEmailHelper] = useState('');
  const [passwordHelper, setPasswordHelper] = useState('');

  const validate = () => {
    // Set Default Values
    setEmailError(false);
    setPasswordError(false);
    setEmailHelper('');
    setPasswordHelper('');

    let valid = true;
    if (email === '' || !email.includes('@')) {
      setEmailError(true);
      setEmailHelper(email === '' ? 'Email must not be empty' : 'Invalid Email - must contain "@"');
      valid = false;
    }

    if (password === '') {
      setPasswordError(true);
      setPasswordHelper('Password must not be empty');
      valid = false;
    }

    return valid;
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    onLoginSuccess(email);
    navigate('/comments');
    console.log('navigated');
  };

  return (
    <form className='loginForm' noValidate autoComplete='off' onSubmit={handleLogin}>
      <div className='formControl'>
        <TextField
          onChange={e => setEmail(e.target.value)}
          error={emailError}
          helperText={emailHelper}
          label='Email'
          variant='outlined'
          type='email'
          fullWidth
          required />
      </div>
      <div className='formControl'>
        <TextField
          onChange={e => setPassword(e.target.value)}
          error={passwordError}
          helperText={passwordHelper}
          label='Password'
          variant='outlined'
          type='password'
          fullWidth
          required />
      </div>
      <div className='formControl'>
        <Button
          variant='contained'
          type='submit'
        >
          Login
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
