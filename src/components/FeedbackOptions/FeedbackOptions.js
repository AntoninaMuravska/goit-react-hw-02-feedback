import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionButtons = Object.keys(options);

  return (
    <ul className={s.btnGroupe}>
      {optionButtons.map((option, index) => {
        // console.log(option[0]);
        const label = option[0].toUpperCase() + option.slice(1);
        return (
          <li key={index}>
            <button
              type="button"
              name={label}
              className={s.button}
              onClick={onLeaveFeedback}
            >
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
