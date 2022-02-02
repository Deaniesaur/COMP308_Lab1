import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

interface IHeaderProps {
}

const Header: FunctionComponent<IHeaderProps> = (props) => {
  // const navigate = useNavigate();

  return (
    <div className='navHeader'>
      <NavLink className='navHeaderLink' to='/'>
        <span
          // onClick={() => navigate('/')}
          className='navHeaderText'
          >COMP308 Lab 1 - Course Evaluation
        </span>
      </NavLink>
    </div>
  );
};

export default Header;
