import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      <label className={css.label}>
        Filter by name:
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
