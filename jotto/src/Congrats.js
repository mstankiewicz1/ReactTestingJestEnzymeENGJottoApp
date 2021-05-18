// receive the success state as a prop
import React from 'react'
import PropTypes from 'prop-types';

/**
 * @function
 * @param {object} props
 * @returns {JSX.element}
 */

export default (props) => {

    if(props.success) {
        return (
          <div data-test="component-congrats">
            <span data-test="congrats-message">
              Congratulations! You guessed the word!
            </span>
          </div>
      )
    } else {
        return (
          <div data-test="component-congrats"/>
        )
    }
};
