import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f7fafc;
`;

const Title = styled.h1`
  text-align: center;
  color: #2D3748;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: bold;
`;

const ExerciseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ExerciseCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #6B46C1 0%, #805AD5 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(107, 70, 193, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Timer = styled.div`
  font-size: 2rem;
  margin: 1rem 0;
  color: #4A5568;
`;

const Instructions = styled.p`
  color: #4A5568;
  margin: 1rem 0;
  line-height: 1.6;
`;

const BreathingCircle = styled(motion.div)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6B46C1 0%, #805AD5 100%);
  margin: 2rem auto;
`;

const Quote = styled.p`
  font-size: 1.2rem;
  color: #2D3748;
  margin: 1rem 0;
  font-style: italic;
`;

function CalmingExercises() {
  const [activeExercise, setActiveExercise] = useState(null);
  const [timer, setTimer] = useState(0);
  const [isBreathing, setIsBreathing] = useState(false);
  const [quote, setQuote] = useState('');

  const quotes = [
    "Peace comes from within. Do not seek it without.",
    "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
    "Breathing in, I calm body and mind. Breathing out, I smile.",
    "Within you, there is a stillness and a sanctuary to which you can retreat at any time.",
    "Every breath we take is a new beginning."
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    let interval;
    if (activeExercise === 'breathing' && isBreathing) {
      interval = setInterval(() => {
        setTimer((prev) => (prev >= 300 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isBreathing, activeExercise]);

  const startBreathing = () => {
    setIsBreathing(!isBreathing);
    setTimer(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const exercises = [
    {
      title: "Breathing Exercise",
      content: () => (
        <>
          <Instructions>
            Follow the circle's rhythm. Breathe in as it expands, out as it contracts.
          </Instructions>
          <BreathingCircle
            animate={isBreathing ? {
              scale: [1, 1.5, 1],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            } : {}}
          />
          <Timer>{formatTime(timer)}</Timer>
          <Button onClick={startBreathing}>
            {isBreathing ? 'Stop' : 'Start'} Breathing Exercise
          </Button>
        </>
      )
    },
    {
      title: "Mindful Quotes",
      content: () => (
        <>
          <Quote>{quote || "Click for a mindful quote"}</Quote>
          <Button onClick={getRandomQuote}>Get New Quote</Button>
        </>
      )
    },
    {
      title: "Progressive Relaxation",
      content: () => (
        <>
          <Instructions>
            1. Start with your toes, tense them for 5 seconds
            2. Release and feel the relaxation
            3. Move up to your calves
            4. Continue through each muscle group
          </Instructions>
          <Button onClick={() => alert("Follow the instructions and take your time with each muscle group.")}>
            Start Guide
          </Button>
        </>
      )
    }
  ];

  return (
    <Container>
      <Title>Calming Exercises</Title>
      <ExerciseGrid>
        {exercises.map((exercise, index) => (
          <ExerciseCard
            key={index}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3>{exercise.title}</h3>
            {exercise.content()}
          </ExerciseCard>
        ))}
      </ExerciseGrid>
    </Container>
  );
}

export default CalmingExercises; 