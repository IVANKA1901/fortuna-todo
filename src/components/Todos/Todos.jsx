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
        <AddButton type="submit">ADD TODO</AddButton>
      </Form>
      <motion.div
        animate={controlls}
        onTap={handleTap}
        style={{
          width: '700px',
          height: '700px',
          display: 'flex',
          margin: '0 auto',
          borderRadius: '50%',
          background: 'transparent',
          position: 'relative',
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: 'rgb(82, 163, 112) 0px 0px 50px',
        }}
      >
        <PieChart
          data={pieChartData}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{ fontSize: 4 }}
          animate
          animationDuration={500}
        />
        <div
          style={{
            position: 'absolute', // Position the stopper relative to the pie chart container
            top: '5%', // Adjust the top position as needed
            left: '50%', // Center the stopper horizontally
            transform: 'translateX(-50%)', // Center the stopper horizontally
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderBottom: '20px solid #ff0000', // Replace this with the desired stopper color or any other styling
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)', // Add shadow to the stopper for a more realistic look
          }}
        />
      </motion.div>
    </>
  );
};
