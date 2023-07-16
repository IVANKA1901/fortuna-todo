import { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { motion, useAnimation } from 'framer-motion';

import { AddButton, Form, Input } from './Todos.styled';
import { getRandomColor } from '../../helpers/randomColors';

export const Todos = () => {
  // eslint-disable-next-line
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [pieChartData, setPieChartData] = useState([]);

  const handleInputChange = e => {
    setTodo(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (todo !== '') {
      setTodos(prev => [
        ...prev,
        {
          text: todo,
          complete: false,
          value: 1,
        },
      ]);
      setTodo('');
    }
  };

  useEffect(() => {
    const pieChartData = todos.map(todoItem => ({
      title: todoItem.text,
      value: todoItem.value,
      color: todoItem.color || getRandomColor(),
    }));
    setPieChartData(pieChartData);
  }, [todos]);

  const controlls = useAnimation();

  function randomRotate() {
    return Math.floor(Math.random() * 360) + 1800;
  }

  const handleTap = async () => {
    const rotate = randomRotate();
    await controlls.start({
      rotate: -rotate,
      transition: {
        duration: Math.floor(Math.random() * 1) + 4,
      },
    });
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <Input type="text" value={todo} onChange={handleInputChange} />
        <AddButton type="submit">Add todo</AddButton>
      </Form>
      <motion.div animate={controlls} onTap={handleTap}>
        <PieChart
          data={pieChartData}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{ fontSize: 4 }}
          animate
          animationDuration={500}
        />
      </motion.div>
    </>
  );
};
