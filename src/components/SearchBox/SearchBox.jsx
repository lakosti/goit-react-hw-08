import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = () => {
  const selectNameFilter = useSelector((state) => state.filter.name);
  const dispatch = useDispatch();

  const id = useId();

  const handelInputSearch = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={css.searchWrap}>
      <span className={css.searchName}>Find contacts by name or number:</span>
      <input
        id={id}
        className={css.seacrhInput}
        type="text"
        value={selectNameFilter}
        onChange={handelInputSearch}
      />
    </div>
  );
};

export default SearchBox;
