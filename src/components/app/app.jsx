import React, { useState } from 'react';
import List from '../List';
import AddList from '../List/AddList';
import Tasks from '../List/Tasks';
import DB from '../../assets/db.json';

const App = () => {
  const [list, setList] = useState(
    DB.lists.map((item) => {
      item.color = DB.colors.filter(
        (color) => color.id === item.colorId
      )[0].name;
      return item;
    })
  );
  const inaddList = (obj) => {
    const newList = [...list, obj];
    setList(newList);
  };
	const indeleteList=(id)=>{
		const Newlist=(list.filter(item=>item.id!==id));
		console.log(id);
		setList(Newlist);
	}
  return (
    <>
      <div className="todo">
        <div className="todo__sidebar">
          <div className="todo__icon">
            <h1>
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="100px"
                height="100px"
              >
                <path d="M 7 2 C 4.199219 2 2 4.199219 2 7 L 2 34 C 2 36.800781 4.199219 39 7 39 L 34 39 C 36.800781 39 39 36.800781 39 34 L 39 7 C 39 6.5 38.914063 6 38.8125 5.5 L 19.09375 27.40625 L 9.40625 18.6875 L 10.6875 17.1875 L 19 24.5 L 37.6875 3.6875 C 36.789063 2.6875 35.5 2 34 2 Z M 41 11 L 41 35 C 41 38.300781 38.300781 41 35 41 L 11 41 L 11 43 C 11 45.800781 13.199219 48 16 48 L 43 48 C 45.800781 48 48 45.800781 48 43 L 48 16 C 48 13.199219 45.800781 11 43 11 Z" />
              </svg>
            </h1>
          </div>
          <List
            items={[
              {
                icon: (
                  <svg
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="20px"
                    height="20px"
                  >
                    <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
                  </svg>
                ),
                titile: 'Весь список',
              },
            ]}
          />
          <List items={list} onRemove={(Item) => indeleteList(Item.id)} Removable />
          <AddList inaddList={inaddList} colors={DB.colors} />
        </div>
        <Tasks />
      </div>
    </>
  );
};

export default App;
