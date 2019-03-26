import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './_button.scss';

export const Button = ({ children, clickFn, type, className, disabled }) => {
    const buttonStyles = classNames('btn', 'btn--' + type.toLowerCase(), disabled ? 'btn--disabled' : '', className);

    return (
        <button className={buttonStyles} onClick={clickFn} disabled={disabled}>
            {children}
        </button>
    );
};

Button.displayName = 'Button';

Button.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string,
    clickFn: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};

Button.defaultProps = {
    children: 'Button',
    type: 'default',
    disabled: false,
    className: '',
};

export default Button;
