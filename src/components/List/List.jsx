import React from 'react';
import classNames from 'classnames'
import Badge from './Badge';

import removeIcon from '../../assets/img/icons/icons-trash.svg';
import './listS.scss';

const List = ({ items,Removable,onClick,onRemove }) => {
  return (
    <ul onClick={onClick} className="list">
      {items.map((item, index) => (
        <li key={index} className={classNames(item.className,{'active':item.active})}>
          <i>
            {item.icon ? (item.icon) : (<Badge color={item.color}/>
            )}
          </i>
          <h4>
            <p>{item.titile}</p>
          </h4>
							{Removable&&<img className="list__remove-icon" src={removeIcon} alt="remove-icon"
							onClick={()=>onRemove(item)}/>}
        </li>
      ))}
    </ul>
  );
};
export default List;
