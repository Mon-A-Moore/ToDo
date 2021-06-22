import React, { useState } from 'react';
import List from '../List';
import Badge from '../Badge';

import CloseSvg from '../../../assets/img/icons/icons-cancel.svg';
import './addList.scss';

const AddList = ({ colors, inaddList }) => {
  const [popupState, SetpopupState] = useState(false);
  const [selectColorState, SetselectColorState] = useState(null);
  const [inputValue, SetinputValue] = useState('');

	const closelist=()=>{
		SetpopupState(false);
		SetselectColorState(colors[0].id);
		SetinputValue('');
	}
  const addlist = () => {
    if (!inputValue) {
      alert('ERROR Введите Name list!');
      return;
    }
		const colorTemp=colors.filter(a=>a.id ===selectColorState)[0].name;
    inaddList({
      id: Date.now(),
      titile: inputValue,
      color: colorTemp,
    });
		closelist();
  };
  return (
    <div className="add-list">
      <List
        onClick={() => SetpopupState(true)}
        items={[
          {
            className: 'list__add-button',
            icon: (
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="20px"
                height="20px"
              >
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z" />
              </svg>
            ),
            titile: 'ADD list',
            active: false,
          },
        ]}
      />
      {popupState && (
        <div className="add-list__popup">
          <img
            onClick={closelist}
            src={CloseSvg}
            alt="крестик"
            className="add-list__popup-close-btn"
          />
          <input
            value={inputValue}
            onChange={(click) => SetinputValue(click.target.value)}
            className="field"
            type="text"
            placeholder="Name list"
          />

          <div className="add-list__popup-colors">
            {colors.map((color) => (
              <Badge
                onClick={() => SetselectColorState(color.id)}
                key={color.id}
                color={color.name}
                className={selectColorState === color.id && 'active'}
              />
            ))}
          </div>
          <button onClick={addlist} className="button">
            Добавить
          </button>
        </div>
      )}
    </div>
  );
};

export default AddList;
