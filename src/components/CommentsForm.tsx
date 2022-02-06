import { FormEvent, FunctionComponent, useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Evaluation from '../shared/Evaluation';

interface IAppProps {
  studentEmail: string,
  submitEval: (evaluation: Evaluation) => void
}

const App: FunctionComponent<IAppProps> = ({ studentEmail, submitEval }) => {
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [topic, setTopic] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const [codeError, setCodeError] = useState(true);
  const [nameError, setNameError] = useState(true);
  const [ratingError, setRatingError] = useState(true);
  const [commentsError, setCommentsError] = useState(true);
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

  const validate = (newValue: any, valueSetter: Function, errorSetter: Function) => {
    valueSetter(newValue);

    if (newValue === '') {
      setValid(false);
      errorSetter(true);
    } else {
      errorSetter(false);
      setValid(!codeError && !nameError && !ratingError && !commentsError);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!valid) return;

    const evaluation: Evaluation = {
      courseCode,
      courseName,
      studentEmail,
      topic,
      rating,
      comment
    };

    submitEval(evaluation);

    navigate('/thankyou');
  };

  return (
      <form className='commentsForm' noValidate autoComplete='off' onSubmit={ e => handleSubmit(e) }>
        <div className='formControl'>
          <TextField
            onChange={e => {
              validate(e.target.value, setCourseCode, setCodeError);
            }}
            error={codeError}
            className='textControl'
            label='Course Code'
            required />
        </div>
        <div className="formControl">
          <TextField
            onChange={e => {
              validate(e.target.value, setCourseName, setNameError);
            }}
            error={nameError}
            className='textControl'
            label='Course Name'
            required />
        </div>
        <div className="formControl">
          <TextField
            value={studentEmail}
            className='textControl'
            label='Student Email'
            disabled />
        </div>
        <div className="formControl">
          <TextField
            onChange={ e => setTopic(e.target.value)}
            label='Favorite Topic(s)'
            fullWidth />
        </div>
        <div className='formControl'>
          <FormControl variant='outlined' fullWidth>
            <InputLabel required>Rating</InputLabel>
            <Select
              value={rating}
              onChange={e => {
                validate(e.target.value, setRating, setRatingError);
              }}
              error={ratingError}
              label="Rating"
              fullWidth
              required
            >
              { [5, 4, 3, 2, 1].map((entry) => <MenuItem key={entry} value={entry}>{entry}</MenuItem>)}
            </Select>
          </FormControl>
        </div>
        <div className="formControl">
          <TextField
            onChange={e => {
              validate(e.target.value, setComment, setCommentsError);
            }}
            error={commentsError}
            className='textControl'
            label='Comments'
            multiline
            rows={4}
            required />
        </div>
        <div className='formControl'>
          <Button
            disabled={!valid}
            type='submit'
            variant='contained'
            >Submit
          </Button>
        </div>
      </form>
  );
};

export default App;
