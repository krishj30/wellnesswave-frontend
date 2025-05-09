import React, { useState, useEffect } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import CalmingExercises from './CalmingExercises.jsx';
// First define all animations/keyframes
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const rippleAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;
// Theme configuration
export const theme = {
  primary: "#7C3AED",
  secondary: "#A78BFA", 
  gradient: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
  background: "#F5F3FF",
  surface: "#FFFFFF",
  text: "#1F2937",
  textLight: "#6B7280",
  success: "#059669",
  warning: "#D97706",
  error: "#DC2626",
  borderRadius: "16px",
};
// Global styles
export const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.background};
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
// Updated styled components with new theme
export const Container = styled.div`
  min-height: calc(100vh - 80px); // Account for navbar
  width: 100%;
  padding: 6rem 2rem 2rem 2rem; // Added top padding
  background: ${theme.background};
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: ${theme.gradient};
    opacity: 0.1;
    transform: skewY(-6deg);
    transform-origin: top left;
  }
`;

export const ContentWrapper = styled(motion.div)`
  width: 100%;
  max-width: 1000px;
  position: relative;
  z-index: 1;
`;

export const QuestionCard = styled(motion.div)`
  background: ${theme.surface};
  border-radius: ${theme.borderRadius};
  box-shadow: 0 20px 40px rgba(124, 58, 237, 0.1);
  padding: 3rem;
  margin: 2rem 0;
  border: 1px solid rgba(124, 58, 237, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(124, 58, 237, 0.15);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const Title = styled(motion.h1)`
  font-size: 3.5rem;
  background: ${theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
  
  @media (max-width: 768px) {
  font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.textLight};
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${theme.background};
  border-radius: 20px;
  margin: 2rem 0;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
      rgba(124, 58, 237, 0.2) 0%,
      rgba(124, 58, 237, 0.1) 100%
    );
    animation: ${floatAnimation} 2s infinite ease-in-out;
  }

  div {
    height: 100%;
    background: ${theme.gradient};
    width: ${props => props.$progress}%;
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 20px;
  }
`;

export const QuestionText = styled.h2`
  font-size: 1.8rem;
  color: ${theme.text};
  margin-bottom: 2rem;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

export const Option = styled(motion.button)`
  width: 100%;
  background: ${props => props.selected ? theme.gradient : theme.surface};
  color: ${props => props.selected ? 'white' : theme.text};
  border: 2px solid ${props => props.selected ? 'transparent' : 'rgba(124, 58, 237, 0.1)'};
  border-radius: ${theme.borderRadius};
  padding: 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(124, 58, 237, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:focus:not(:active)::after {
    animation: ${rippleAnimation} 1s ease-out;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 1rem;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${props => props.primary ? theme.gradient : 'transparent'};
  color: ${props => props.primary ? 'white' : theme.primary};
  border: 2px solid ${props => props.primary ? 'transparent' : theme.primary};
  border-radius: ${theme.borderRadius};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.primary ? '0 10px 20px rgba(124, 58, 237, 0.2)' : 'none'};
  }
`;

const ResultSection = styled.div`
  text-align: center;
  padding: 3rem;
  
  h2 {
    font-size: 2.5rem;
    color: #2d3748;
    margin-bottom: 2rem;
  }
  
  p {
    font-size: 1.2rem;
    color: #4a5568;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ResourceCardWrapper = styled.div`
  background: ${theme.surface};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }

  h4 {
    color: ${theme.text};
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: ${theme.textLight};
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }

  .content-list {
    margin: 1rem 0;
  }
    
  .content-item {
  padding: 1rem;
      border-bottom: 1px solid ${theme.background};
      
      &:last-child {
        border-bottom: none;
      }
      
    h5 {
  font-weight: 600;
      color: ${theme.text};
      margin-bottom: 0.5rem;
    }

    .contact, .availability, .location {
      font-size: 0.9rem;
      color: ${theme.textLight};
      margin: 0.25rem 0;
    }

    .resource-link {
  display: inline-block;
        color: ${theme.primary};
        text-decoration: none;
      margin-top: 0.5rem;
      font-weight: 500;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }

  .emergency-note {
    margin-top: 1rem;
  padding: 1rem;
    background: #FEF3F2;
  border-radius: 8px;
    color: #DC2626;
    font-size: 0.9rem;
    text-align: center;
  }
`;

const ResultCard = styled.div`
  background: white;
  border-radius: 24px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ResultLevel = styled.div`
  text-align: center;
  padding: 1.5rem;
  border-radius: 12px;
  margin: 2rem 0;
  background: ${props => {
    switch (props.level) {
      case 'minimal': return '#E8F5E9';
      case 'mild': return '#FFF3E0';
      case 'moderate': return '#FFE0B2';
      case 'moderately_severe': return '#FFCCBC';
      case 'severe': return '#FFEBEE';
      default: return '#E8F5E9';
    }
  }};
  
  h3 {
    color: ${props => {
      switch (props.level) {
        case 'minimal': return '#2E7D32';
        case 'mild': return '#F57C00';
        case 'moderate': return '#EF6C00';
        case 'moderately_severe': return '#E64A19';
        case 'severe': return '#C62828';
        default: return '#2E7D32';
      }
    }};
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const ScoreDisplay = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #2C5282;
  margin: 2rem 0;
  text-align: center;
`;

const FrequencyDescription = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: #EDF2F7;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #4A5568;
`;

const NextStepsContainer = styled.div`
  margin-top: 2rem;

  h3 {
    color: ${theme.text};
  margin-bottom: 1.5rem;
    text-align: center;
    font-size: 1.6rem;
  }

  p {
    color: ${theme.textLight};
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const EmergencyAlert = styled.div`
  background: #fff0f0;
  border-left: 4px solid #ff4444;
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 8px;

  h3 {
    color: #cc0000;
    margin-bottom: 1rem;
  }

  ul {
    margin-top: 1rem;
    padding-left: 1.5rem;
    list-style-type: disc;
  }

  li {
    color: #666;
    margin-bottom: 0.5rem;
  }
`;

const QuickResources = styled.div`
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;

  h4 {
    color: ${theme.text};
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    color: ${theme.textLight};
    margin-bottom: 0.5rem;

    a {
      color: ${theme.primary};
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: ${theme.secondary};
        text-decoration: underline;
      }
    }
  }
`;

const ResultContainer = styled.div`
  background: ${theme.surface};
  border-radius: ${theme.borderRadius};
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ResultMessage = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background: #FFF9E6;
  border-radius: 12px;
  
  h2 {
    color: ${theme.text};
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }
  
  p {
    color: ${theme.textLight};
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

const SectionDivider = styled.div`
  margin: 3rem 0 2rem 0;
  text-align: center;
  padding: 2rem;
  background: ${theme.background};
  border-radius: ${theme.borderRadius};

  h3 {
    font-size: 2rem;
    color: ${theme.text};
    margin-bottom: 1rem;
    background: ${theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: ${theme.textLight};
    font-size: 1.1rem;
  }
`;

const Quote = styled.p`
  font-size: 1.25rem;
  color: #2D3748;
  margin: 2rem 0;
  font-style: italic;
  line-height: 1.6;
  padding: 1rem;
  background: ${theme.background};
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const GameSection = styled.div`
  margin: 3rem 0;
  background: linear-gradient(135deg, #f6f8ff 0%, #f0f4ff 100%);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StyledGameCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(124, 58, 237, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${theme.gradient};
  }

  h3 {
    color: ${theme.text};
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.textLight};
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const PlayButton = styled(motion.button)`
  background: ${theme.gradient};
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
  width: 100%;
  max-width: 200px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(124, 58, 237, 0.2);
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GameModal = styled(motion.div)`
  position: relative;
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 500px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem;
    width: 85%;
  }
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #EDF2F7;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #E2E8F0;
    transform: rotate(90deg);
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 2px;
    background: #4A5568;
    transform-origin: center;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const BreathingCircle = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${theme.gradient};
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.2);

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    font-size: 1rem;
  }
`;

const mentalHealthResources = {
  professional: [
    {
      name: "NIMHANS - National Institute of Mental Health and Neurosciences",
      name: "NIMHANS",
      link: "https://nimhans.ac.in",
      contact: "080-26995000"
    },
    {
      name: "Indian Association of Clinical Psychologists",
      link: "https://iacp.in",
    },
    {
      name: "Tata Institute of Social Sciences (TISS)",
      link: "https://tiss.edu",
    }
  ],
  helplines: [
    {
      name: "National Mental Health Helpline",
      number: "1800-599-0019",
      available: "24/7"
    },
    {
      name: "Vandrevala Foundation",
      number: "1860-2662-345",
      available: "24/7"
    },
    {
      name: "AASRA",
      number: "91-9820466726",
      available: "24/7"
    }
  ],
  onlineResources: [
    {
      name: "Mind India",
      link: "https://mindindia.org"
    },
    {
      name: "The Live Love Laugh Foundation",
      link: "https://thelivelovelaughfoundation.org"
    },
    {
      name: "Your Dost",
      link: "https://yourdost.com"
    }
  ]
};

const resources = [
  {
    title: "Professional Support",
    description: "Connect with mental health professionals in India who specialize in depression treatment.",
    action: "Find Support",
    icon: "🤝",
    link: "https://www.practo.com/counselling-psychology"
  },
  {
    title: "24/7 Helpline",
    description: "Call 1800-599-0019 for immediate support during difficult times.",
    action: "Call Now",
    icon: "📞",
    link: "tel:1800-599-0019"
  },
  {
    title: "Self-Help Resources",
    description: "Access curated resources for managing depression and improving mental wellness.",
    action: "Learn More",
    icon: "📚",
    link: "https://thelivelovelaughfoundation.org/depression"
  },
  {
    title: "Support Groups",
    description: "Join supportive communities and connect with others who understand.",
    action: "Find Groups",
    icon: "👥",
    link: "https://www.nami.org/Support-Education/Support-Groups"
  }
];

const ResourceCard = ({ resource }) => (
  <ResourceCardWrapper>
    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
      {resource.icon}
    </div>
    <h4>{resource.title}</h4>
    <p>{resource.description}</p>
    <Button 
      as="a"
      href={resource.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ width: '100%', marginTop: '1rem' }}
    >
      {resource.action}
    </Button>
  </ResourceCardWrapper>
);

const ResultsSection = styled.div`
  margin: 2rem auto;
  max-width: 800px;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const SupportSection = styled.div`
  background: linear-gradient(135deg, #EDF2F7 0%, #E2E8F0 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 1rem 0;

  h3 {
    color: #2D3748;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

const EmergencyContact = styled.div`
  background: #FED7D7;
  border-left: 4px solid #F56565;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;

  p {
    color: #C53030;
    font-weight: bold;
  }

  a {
    color: #C53030;
    text-decoration: underline;
  }
`;

const GamesSection = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: #F7FAFC;
  border-radius: 15px;
`;

const GameCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h4 {
    color: #2D3748;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  p {
    color: #4A5568;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const GameButton = styled(motion.button)`
  background: linear-gradient(135deg, #6B46C1 0%, #805AD5 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(107, 70, 193, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const QuoteContent = styled(motion.div)`
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  margin: 1rem 0;

  p.quote-text {
    font-size: 1.5rem;
    color: ${theme.text};
    margin-bottom: 1rem;
    line-height: 1.4;
    font-weight: 500;
  }

  p.quote-author {
    color: ${theme.textLight};
    font-size: 1.1rem;
    font-style: italic;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #EDF2F7;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 1001;

  &:hover {
    background: #E2E8F0;
    transform: rotate(90deg);
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 2px;
    background: #4A5568;
    transform-origin: center;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const BreathingExercise = ({ onClose }) => {
  const [isBreathing, setIsBreathing] = useState(false);
  const [phase, setPhase] = useState('ready');
  const [count, setCount] = useState(4);

  useEffect(() => {
    let timer;
    if (isBreathing) {
      timer = setInterval(() => {
        setCount(prev => {
          if (prev === 0) {
            setPhase(current => {
              switch (current) {
                case 'inhale': return 'hold';
                case 'hold': return 'exhale';
                case 'exhale': return 'inhale';
                default: return 'inhale';
              }
            });
            return phase === 'hold' ? 4 : 7;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isBreathing, phase]);

  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <GameModal
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ 
          marginBottom: '2rem', 
          color: theme.text,
          fontSize: '2rem',
          fontWeight: '600'
        }}>
          Breathing Exercise
        </h2>
        
        <BreathingCircle
          animate={isBreathing ? {
            scale: phase === 'inhale' ? 1.5 : phase === 'exhale' ? 1 : 1.3
          } : {}}
          transition={{ duration: 2 }}
        >
          {phase === 'ready' ? 'Ready?' : `${phase} (${count})`}
        </BreathingCircle>

        <GameButton
          onClick={() => {
            setIsBreathing(!isBreathing);
            if (!isBreathing) setPhase('inhale');
          }}
          whileTap={{ scale: 0.95 }}
          style={{ marginTop: '2rem' }}
        >
          {isBreathing ? 'Pause' : 'Start'} Breathing
        </GameButton>
        <CloseButton onClick={onClose} />
      </GameModal>
    </ModalOverlay>
  );
};

const MindfulQuotes = ({ onClose }) => {
  const [currentQuote, setCurrentQuote] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [usedQuotes, setUsedQuotes] = useState(new Set());

  const allQuotes = [
    {
      text: "Peace comes from within. Do not seek it without.",
      author: "Buddha"
    },
    {
      text: "Every moment is a fresh beginning.",
      author: "T.S. Eliot"
    },
    {
      text: "Happiness is not by chance, but by choice.",
      author: "Jim Rohn"
    },
    {
      text: "The present moment is filled with joy and happiness.",
      author: "Thich Nhat Hanh"
    },
    {
      text: "You are stronger than you know.",
      author: "Unknown"
    },
    {
      text: "Your mind is a garden, your thoughts are the seeds.",
      author: "Unknown"
    },
    {
      text: "Breathe in courage, breathe out fear.",
      author: "Unknown"
    },
    {
      text: "Within you lies infinite patience and peace.",
      author: "Unknown"
    },
    {
      text: "Every day is a new opportunity to grow and be better.",
      author: "Unknown"
    },
    {
      text: "Your peace is more important than your understanding.",
      author: "Unknown"
    },
    {
      text: "In the midst of movement and chaos, keep stillness inside of you.",
      author: "Deepak Chopra"
    },
    {
      text: "The only way out is through.",
      author: "Robert Frost"
    },
    {
      text: "You are not your thoughts; you are the observer of your thoughts.",
      author: "Unknown"
    },
    {
      text: "Small steps are still steps forward.",
      author: "Unknown"
    },
    {
      text: "Your calm mind is the ultimate weapon against your challenges.",
      author: "Bryant McGill"
    }
  ];

  const getRandomQuote = () => {
    setIsAnimating(true);
    
    // Filter out already used quotes
    const availableQuotes = allQuotes.filter(quote => 
      !usedQuotes.has(quote.text)
    );

    setTimeout(() => {
      // If all quotes have been used, reset the used quotes
      if (availableQuotes.length === 0) {
        setUsedQuotes(new Set());
        const randomQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
        setCurrentQuote(randomQuote);
        setUsedQuotes(new Set([randomQuote.text]));
      } else {
        // Get a random quote from available quotes
        const randomQuote = availableQuotes[Math.floor(Math.random() * availableQuotes.length)];
        setCurrentQuote(randomQuote);
        setUsedQuotes(prev => new Set([...prev, randomQuote.text]));
      }
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <GameModal
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ 
          marginBottom: '2rem', 
          color: theme.text,
          fontSize: '2rem',
          fontWeight: '600'
        }}>
          Mindful Quotes
        </h2>
        
        <QuoteContent
          initial={{ opacity: 1 }}
          animate={{ opacity: isAnimating ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          {currentQuote && (
            <>
              <p className="quote-text">"{currentQuote.text}"</p>
              <p className="quote-author">- {currentQuote.author}</p>
            </>
          )}
        </QuoteContent>

        <div style={{ 
          marginTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
          width: '100%'
        }}>
          <GameButton
            onClick={getRandomQuote}
            whileTap={{ scale: 0.95 }}
          >
            Next Quote
          </GameButton>
          <p style={{ 
            color: theme.textLight,
            fontSize: '0.9rem'
          }}>
            {usedQuotes.size} of {allQuotes.length} quotes shown
          </p>
        </div>
        <CloseButton onClick={onClose} />
      </GameModal>
    </ModalOverlay>
  );
};

const DepressionForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState("");
  const [activeGame, setActiveGame] = useState(null);

  const standardOptions = [
    { value: "not_at_all", label: "Not at all", score: 0 },
    { value: "several_days", label: "Several days", score: 1 },
    { value: "more_than_half", label: "More than half the days", score: 2 },
    { value: "nearly_every_day", label: "Nearly every day", score: 3 }
  ];

  const questions = [
    {
      id: 1,
      text: "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?",
      key: "Feeling sad",
      options: standardOptions
    },
    {
      id: 2,
      text: "How often have you had little interest or pleasure in doing things you usually enjoy?",
      key: "Loss of interest",
      options: standardOptions
    },
    {
      id: 3,
      text: "Have you been having trouble falling or staying asleep, or sleeping too much?",
      key: "Sleep problems",
      options: standardOptions
    },
    {
      id: 4,
      text: "How often have you felt tired or had little energy?",
      key: "Low energy",
      options: standardOptions
    },
    {
      id: 5,
      text: "Have you been experiencing poor appetite or overeating?",
      key: "Appetite changes",
      options: standardOptions
    },
    {
      id: 6,
      text: "How often have you felt bad about yourself or that you are a failure?",
      key: "Feeling worthless",
      options: standardOptions
    },
    {
      id: 7,
      text: "Have you had trouble concentrating on things, such as reading or watching TV?",
      key: "Concentration problems",
      options: standardOptions
    },
    {
      id: 8,
      text: "Have you been moving or speaking so slowly that other people could have noticed?",
      key: "Psychomotor changes",
      options: standardOptions
    },
    {
      id: 9,
      text: "Have you had thoughts that you would be better off dead or of hurting yourself?",
      key: "Suicidal thoughts",
      options: standardOptions
    },
    {
      id: 10,
      text: "How often have you felt nervous, anxious, or on edge?",
      key: "Anxiety",
      options: standardOptions
    },
    {
      id: 11,
      text: "How often have you not been able to stop or control worrying?",
      key: "Uncontrolled worry",
      options: standardOptions
    },
    {
      id: 12,
      text: "Have you had trouble relaxing?",
      key: "Difficulty relaxing",
      options: standardOptions
    },
    {
      id: 13,
      text: "How often have you felt restless or had difficulty sitting still?",
      key: "Restlessness",
      options: standardOptions
    },
    {
      id: 14,
      text: "How often have you felt irritable or easily annoyed?",
      key: "Irritability",
      options: standardOptions
    }
  ];

  const handleAnswer = (answer, score) => {
    setAnswers(prev => ({
      ...prev,
      [currentStep]: { answer, score }
    }));
    
    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    }
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((total, current) => {
      return total + (current?.score || 0);
    }, 0);
  };

  const getDepressionLevel = (score) => {
    const maxScore = questions.length * 3; // Maximum score is now 42 (14 questions * 3 points max each)
    const percentage = (score / maxScore) * 100;

    if (percentage <= 25) return {
      level: 'minimal',
      title: 'Minimal Depression',
      description: 'Your responses suggest minimal signs of depression. While your symptoms appear mild, it\'s still important to monitor your mental health.',
      color: '#2E7D32',
      recommendations: [
        'Continue monitoring your mood',
        'Maintain healthy lifestyle habits',
        'Practice self-care regularly'
      ]
    };
    if (percentage <= 45) return {
      level: 'mild',
      title: 'Mild Depression',
      description: 'Your responses indicate mild depression symptoms. While your symptoms are not severe, it may be helpful to talk to someone.',
      color: '#F57C00',
      recommendations: [
        'Consider talking to a counselor',
        'Establish a regular exercise routine',
        'Practice stress management techniques'
      ]
    };
    if (percentage <= 65) return {
      level: 'moderate',
      title: 'Moderate Depression',
      description: 'Your responses suggest moderate depression. It\'s recommended to consult with a mental health professional.',
      color: '#EF6C00',
      recommendations: [
        'Consult a mental health professional',
        'Build a support network',
        'Develop coping strategies'
      ]
    };
    if (percentage <= 85) return {
      level: 'moderately_severe',
      title: 'Moderately Severe Depression',
      description: 'Your responses indicate moderately severe depression. Professional help is strongly recommended.',
      color: '#E64A19',
      recommendations: [
        'Seek professional help promptly',
        'Consider therapy or counseling',
        'Discuss treatment options with a healthcare provider'
      ]
    };
    return {
      level: 'severe',
      title: 'Severe Depression',
      description: 'Your responses suggest severe depression. Please seek professional help as soon as possible.',
      color: '#C62828',
      recommendations: [
        'Seek immediate professional help',
        'Contact emergency services if having suicidal thoughts',
        'Don\'t hesitate to reach out to loved ones'
      ]
    };
  };

  const renderResults = () => {
    const score = calculateScore();
    const result = getDepressionLevel(score);

    return (
      <ResultsSection>
      <ResultMessage>
          <h2>Thank you for completing the assessment</h2>
          <p>It's important to acknowledge that you've taken this step to understand your mental health better.</p>
          <p>Based on your responses, here's what we've found:</p>
      </ResultMessage>

        {/* Score and Result Level */}
        <div style={{ margin: '2rem 0' }}>
          <h3>Assessment Results</h3>
          <ScoreDisplay>
            Score: {score} / {questions.length * 3}
          </ScoreDisplay>

          <ResultLevel level={result.level}>
            <h3>{result.title}</h3>
            <p>{result.description}</p>
          </ResultLevel>
      </div>

        {/* Support Resources Section - Moved to top */}
        <SupportSection>
          <h3>Immediate Support Available</h3>
          <EmergencyContact>
            <p>24/7 Crisis Helpline: <a href="tel:988">988</a></p>
            <p>Emergency: <a href="tel:911">911</a></p>
          </EmergencyContact>

          <QuickResources>
            <h4>Support Contacts:</h4>
            <ul>
              <li>
                <a href="tel:1800-599-0019">National Mental Health Helpline: 1800-599-0019 (24/7)</a>
              </li>
              <li>
                <a href="tel:080-26995000">NIMHANS: 080-26995000</a>
              </li>
              <li>
                <a href="tel:1860-2662-345">Vandrevala Foundation: 1860-2662-345</a>
              </li>
              </ul>
          </QuickResources>

          {score > (questions.length * 3 * 0.7) && (
            <EmergencyAlert>
              <h3>⚠️ Important Notice</h3>
              <p>Your responses indicate significant symptoms of depression. We strongly recommend:</p>
              <ul>
                <li>Reaching out to a mental health professional immediately</li>
                <li>Calling the 24/7 helpline: 1800-599-0019</li>
                <li>Talking to someone you trust about how you're feeling</li>
              </ul>
            </EmergencyAlert>
          )}
        </SupportSection>

        {/* Professional Resources */}
      <NextStepsContainer>
          <h3>What Can You Do Next?</h3>
          <p>There are several ways to get support and start feeling better.</p>
        
        <ResourcesGrid>
          {resources.map((resource, index) => (
              <ResourceCard 
                key={index}
                resource={resource}
              />
          ))}
        </ResourcesGrid>
      </NextStepsContainer>

        {/* Calming Games Section */}
        <SectionDivider>
          <h3>Calming Activities</h3>
          <p>Try these activities to help manage your feelings:</p>
        </SectionDivider>

        <GameGrid>
          <GameCard
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3>Breathing Exercise</h3>
            <p>Follow guided breathing patterns to reduce anxiety and promote relaxation.</p>
            <GameButton
              onClick={() => setActiveGame('breathing')}
              whileTap={{ scale: 0.95 }}
            >
              Start Exercise
            </GameButton>
          </GameCard>

          <GameCard
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3>Mindful Quotes</h3>
            <p>Read and reflect on inspiring quotes to shift your perspective and find peace.</p>
            <GameButton
              onClick={() => setActiveGame('quotes')}
              whileTap={{ scale: 0.95 }}
            >
              View Quotes
            </GameButton>
          </GameCard>
        </GameGrid>

        {/* Take Again Button */}
        <div style={{ textAlign: 'center', margin: '3rem 0' }}>
          <p style={{ marginBottom: '1rem', color: theme.textLight }}>
            Remember: This assessment is a screening tool and not a diagnosis. 
            Always consult with a qualified mental health professional for a proper evaluation.
          </p>
          <Button 
        onClick={() => {
              setShowResults(false);
              setCurrentStep(0);
              setAnswers({});
            }}
            style={{ marginTop: '1rem' }}
      >
        Take Assessment Again
          </Button>
        </div>
      </ResultsSection>
    );
  };

  const FrequencyGuide = styled.div`
    background: #EDF2F7;
    border-radius: 12px;
    padding: 1.5rem;
    margin: 1rem 0 2rem;

    h4 {
      color: #2D3748;
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    li {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      color: #4A5568;

      &:before {
        content: "•";
        color: #4299E1;
        font-weight: bold;
        margin-right: 0.5rem;
      }
    }
  `;

  const renderFrequencyGuide = () => (
    <FrequencyGuide>
      <h4>How to interpret the timeframes:</h4>
      <ul>
        <li>Not at all: The symptom has not occurred</li>
        <li>Several days: Symptom present 2-6 days in the past 2 weeks</li>
        <li>More than half the days: Symptom present 7-11 days</li>
        <li>Nearly every day: Symptom present almost daily (12-14 days)</li>
      </ul>
    </FrequencyGuide>
  );

  const renderQuestion = () => (
    <>
      <QuestionText>{questions[currentStep].text}</QuestionText>
      {renderFrequencyGuide()}
      <OptionsGrid>
        {questions[currentStep].options.map((option, index) => (
          <Option
            key={option.value}
            selected={answers[currentStep]?.answer === option.value}
            onClick={() => handleAnswer(option.value, option.score)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {option.label}
          </Option>
        ))}
      </OptionsGrid>
    </>
  );

  return (
    <>
      <GlobalStyle />
      <Container>
        <ContentWrapper
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Depression Assessment
          </Title>

          <AnimatePresence mode="wait">
            {!showResults ? (
              <QuestionCard
                key="question"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <ProgressBar $progress={((currentStep + 1) / questions.length) * 100}>
                  <div />
                </ProgressBar>

                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {renderQuestion()}
                </motion.div>

                <NavigationButtons>
                  {currentStep > 0 && (
                    <Button onClick={() => setCurrentStep(prev => prev - 1)}>
                      Previous
                    </Button>
                  )}
                  {currentStep === questions.length - 1 ? (
                    <Button 
                      primary 
                      onClick={() => {
                        if (Object.keys(answers).length === questions.length) {
                          setShowResults(true);
                        } else {
                          setError("Please answer all questions before continuing.");
                        }
                      }}
                    >
                      Complete Assessment
                    </Button>
                  ) : (
                    <div />
                  )}
                </NavigationButtons>

                {error && (
                  <div style={{ 
                    color: '#C62828', 
                    marginTop: '1rem', 
                    textAlign: 'center' 
                  }}>
                    {error}
                  </div>
                )}
              </QuestionCard>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              >
                {renderResults()}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Game Modals */}
          <AnimatePresence>
            {activeGame === 'breathing' && (
              <BreathingExercise onClose={() => setActiveGame(null)} />
            )}
            {activeGame === 'quotes' && (
              <MindfulQuotes onClose={() => setActiveGame(null)} />
            )}
          </AnimatePresence>
        </ContentWrapper>
    </Container>
    </>
  );
};

export default DepressionForm;