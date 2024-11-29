import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import ToDoList from './Todo';
const Main = () => {
  return (
    <div>
    <div>
      <Card1 />
      <Card2/>
    </div>
    <Card3/>
    <ToDoList />
    </div>
  );
};

export default Main;
