import React from 'react';
import classNames from 'classnames';
import './badge.scss';

const Badge = ({ color, onClick, className }) => {
  return (
    <i
      onClick={onClick}
			/* либо используем класс, но передаём color.name в addList, либо используем style как ниже и передаём hex.
			className={classNames('badge', { [`badge--${color}`]: color}, className )}
			
			style={{backgroundColor: color}}
			className={classNames('badge', className)}
			*/
			
			className={classNames('badge', { [`badge--${color}`]: color}, className )}
    ></i>
  );
};

export default Badge;
