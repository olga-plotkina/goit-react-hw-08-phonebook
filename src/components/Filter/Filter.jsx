import { StyledFilter } from './Filter.styled';
import { getFilterString } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterString } from 'redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterString);
  return (
    <StyledFilter>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={event => dispatch(setFilterString(event.target.value))}
        ></input>
      </label>
    </StyledFilter>
  );
};
