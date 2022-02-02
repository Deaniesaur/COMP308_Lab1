import { FormEvent, FunctionComponent, useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface IAppProps {
  studentEmail: string
}

const App: FunctionComponent<IAppProps> = ({ studentEmail }) => {
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [topic, setTopic] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const [codeError, setCodeError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [ratingError, setRatingError] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    let valid = true;

    if (courseCode === '') {
      setCodeError(true);
      valid = false;
    } else {
      setCodeError(false);
    };

    if (courseName === '') {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    };

    if (rating === '') {
      setRatingError(true);
      valid = false;
    } else {
      setRatingError(false);
    };

    return valid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const studentResponse = {
      courseCode,
      courseName,
      studentEmail,
      topic,
      rating,
      comment
    };

    navigate('/thankyou', { state: studentResponse });
  };

  return (
      <form className='commentsForm' noValidate autoComplete='off' onSubmit={ e => handleSubmit(e) }>
        <div className='formControl'>
          <TextField
            onChange={e => {
              setCourseCode(e.target.value);
              validate();
            }}
            error={codeError}
            className='textControl'
            label='Course Code'
            required />
        </div>
        <div className="formControl">
          <TextField
            onChange={e => {
              setCourseName(e.target.value);
              validate();
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
                setRating(e.target.value);
                validate();
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
            onChange={e => setComment(e.target.value)}
            className='textControl'
            label='Comments'
            multiline
            rows={4} />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
  );
};

export default App;
