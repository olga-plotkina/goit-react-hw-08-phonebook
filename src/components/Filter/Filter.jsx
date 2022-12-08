import { StyledFilter } from './Filter.styled';
import { selectFilterString } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterString } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterString);
  return (
    <StyledFilter>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={event =>
            dispatch(setFilterString(event.target.value.trim()))
          }
        ></input>
      </label>
    </StyledFilter>
  );
};
