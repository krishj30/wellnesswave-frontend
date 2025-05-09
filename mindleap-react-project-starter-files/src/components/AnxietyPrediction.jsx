import React, { useState, useEffect } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const API_BASE_URL = "http://127.0.0.1:5001";

// Theme configuration
const theme = {
  primary: "#7C3AED", // Purple
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
const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.background};
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  min-height: calc(100vh - 80px);
  width: 100%;
  padding: 6rem 2rem 2rem 2rem;
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

const ContentWrapper = styled(motion.div)`
  width: 100%;
  max-width: 1000px;
  position: relative;
  z-index: 1;
`;

const QuestionCard = styled(motion.div)`
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

const Title = styled(motion.h1)`
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

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.textLight};
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const QuestionText = styled.h2`
  font-size: 1.8rem;
  color: ${theme.text};
  margin-bottom: 2rem;
  line-height: 1.4;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    white-space: normal;
  }
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

const Option = styled(motion.button)`
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
  text-align: center;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(124, 58, 237, 0.1);
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${theme.background};
  border-radius: 20px;
  margin: 2rem 0;
  overflow: hidden;
  position: relative;

  div {
    height: 100%;
    background: ${theme.gradient};
    width: ${props => props.progress}%;
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 20px;
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

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ResultContainer = styled(motion.div)`
  background: ${theme.surface};
  border-radius: ${theme.borderRadius};
  padding: 3rem;
  margin-top: 2rem;
  box-shadow: 0 20px 40px rgba(124, 58, 237, 0.1);
  border: 3px solid ${props => props.borderColor};

  h3 {
    font-size: 2rem;
    color: ${theme.text};
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const SymptomCategory = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem;
  border-radius: ${theme.borderRadius};
  background: ${props => {
    switch (props.type) {
      case 'severe': return '#FEE2E2';
      case 'moderate': return '#FEF3C7';
      case 'mild': return '#D1FAE5';
      default: return '#F3F4F6';
    }
  }};
`;

const SymptomList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const SymptomItem = styled.li`
  padding: 1rem;
  margin: 0.5rem 0;
  background: ${theme.background};
  border-radius: ${theme.borderRadius};
  color: ${theme.text};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`;

const ResultSummary = styled.div`
  margin: 2rem 0;
  text-align: center;

  h3 {
    color: ${theme.text};
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.textLight};
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const ConfidenceBar = styled.div`
  width: 100%;
  height: 12px;
  background: ${theme.background};
  border-radius: 6px;
  overflow: hidden;
  margin: 1.5rem 0;

  div {
    height: 100%;
    background: ${props => props.color};
    width: ${props => props.progress}%;
    transition: width 1s ease-in-out;
  }
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

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ResourceCard = styled.div`
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
`;

const ScoreDisplay = styled.div`
  font-size: 1.8rem;
  color: ${theme.text};
  margin-bottom: 2rem;
  text-align: center;
`;

const ResultLevel = styled.div`
  background: ${props => {
    switch (props.level) {
      case 'no anxiety': return '#4caf50';
      case 'mild': return '#ff9800';
      case 'moderate': return '#f57c00';
      case 'severe': return '#e65100';
      default: return '#d32f2f';
    }
  }};
  padding: 1rem;
  border-radius: 12px;
  text-align: center;

  h3 {
    color: white;
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  p {
    color: white;
    line-height: 1.6;
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
    margin-bottom: 0.5rem;
  }

  .resource-link {
    color: ${theme.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.secondary};
      text-decoration: underline;
    }
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
    margin-bottom: 0.5rem;
    
    a {
      color: ${theme.primary};
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const AnxietyPrediction = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [serverStatus, setServerStatus] = useState({
    status: "Checking...",
    model_loaded: false
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    { 
      text: "Feeling nervous or anxious?",
      key: "nervousness" 
    },
    { 
      text: "Experiencing panic attacks?",
      key: "panic_attacks" 
    },
    { 
      text: "Difficulty relaxing?",
      key: "trouble_relaxing" 
    },
    { 
      text: "Avoiding social situations?",
      key: "social_avoidance" 
    },
    { 
      text: "Worrying too much?",
      key: "excessive_worry" 
    },
    { 
      text: "Trouble sleeping?",
      key: "sleep_difficulty" 
    },
    { 
      text: "Feeling dizzy?",
      key: "lightheadedness" 
    },
    { 
      text: "Racing heart?",
      key: "physical_symptoms" 
    },
    { 
      text: "Trouble concentrating?",
      key: "concentration_issues" 
    },
    { 
      text: "Fear of bad things?",
      key: "impending_doom" 
    }
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const answerOptions = [
    { value: "1", label: "Not at all", score: 1 },
    { value: "2", label: "Several days", score: 2 },
    { value: "3", label: "More than half the days", score: 3 },
    { value: "4", label: "Nearly every day", score: 4 },
    { value: "5", label: "Almost constantly", score: 5 }
  ];

  const resources = [
    {
      title: "Professional Support",
      description: "Connect with mental health professionals who specialize in anxiety treatment.",
      action: "Find Support",
      icon: "🤝",
      link: "https://www.practo.com/counselling-psychology"
    },
    {
      title: "24/7 Helpline",
      description: "Immediate support available through verified helplines.",
      action: "Call Now",
      icon: "📞",
      link: "tel:1800-599-0019"
    },
    {
      title: "Self-Help Resources",
      description: "Access verified resources for managing anxiety.",
      action: "Learn More",
      icon: "📚",
      link: "https://thelivelovelaughfoundation.org/anxiety"
    },
    {
      title: "Support Groups",
      description: "Join supportive communities near you.",
      action: "Find Groups",
      icon: "👥",
      link: "https://www.nami.org/Support-Education/Support-Groups"
    }
  ];

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/health');
        if (response.ok) {
          console.log('Server is running');
        }
      } catch (error) {
        // Silently handle the error or show a user-friendly message
        console.debug('Server connection check failed:', error);
      }
    };

    // Only check once on component mount
    checkServerStatus();
  }, []);

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(curr => curr + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(curr => curr - 1);
    }
  };

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        goToNextQuestion();
      }, 300);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (answers.includes("")) {
      setError("Please answer all questions before submitting.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formattedAnswers = questions.map((question, index) => ({
        question: question.key,
        answer: parseInt(answers[index]) // Convert to number
      }));

      console.log('Submitting answers:', formattedAnswers);

      const response = await fetch(`${API_BASE_URL}/predict/anxiety`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers: formattedAnswers }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Received data:', data);
      
      if (data.error) {
        throw new Error(data.error);
      }

      setResult(data);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "An error occurred while processing your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getResultColor = () => {
    if (!result) return "#4caf50";
    const level = result.category.toLowerCase();
    if (level.includes("no anxiety")) return "#4caf50";
    if (level.includes("mild")) return "#ff9800";
    if (level.includes("moderate")) return "#f57c00";
    if (level.includes("severe")) return "#e65100";
    return "#d32f2f";
  };

  const calculateScore = () => {
    return answers.reduce((total, answer) => total + parseInt(answer), 0);
  };
  const getAnxietyLevel = (score) => {
    if (score <= 5) return { level: "no anxiety", title: "Low Anxiety", description: "You're doing great! Keep up the good work." };
    if (score <= 10) return { level: "mild", title: "Mild Anxiety", description: "You're managing well. Keep practicing your relaxation techniques." };
    if (score <= 15) return { level: "moderate", title: "Moderate Anxiety", description: "It's important to seek support. Consider talking to a professional." };
    return { level: "severe", title: "Severe Anxiety", description: "It's important to seek immediate help. Contact a mental health professional." };
  };

  const renderResults = () => {
    const score = calculateScore();
    const result = getAnxietyLevel(score);

    return (
      <ResultContainer borderColor={getResultColor()}>
        <ResultMessage>
          <h2>Thank you for completing the anxiety assessment</h2>
          <p>Understanding your anxiety levels is an important step toward wellbeing.</p>
        </ResultMessage>

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

        {/* Emergency Alert for High Scores */}
        {score > (questions.length * 3 * 0.7) && (
          <EmergencyAlert>
            <h3>⚠️ Important Notice</h3>
            <p>Your responses indicate significant anxiety levels. We strongly recommend:</p>
            <ul>
              <li>
                <a href="https://www.practo.com/counselling-psychology" target="_blank" rel="noopener noreferrer">
                  Finding a mental health professional immediately
                </a>
              </li>
              <li>
                <a href="tel:1800-599-0019">
                  Calling our 24/7 helpline: 1800-599-0019
                </a>
              </li>
              <li>Talking to someone you trust about how you're feeling</li>
            </ul>
          </EmergencyAlert>
        )}

        <NextStepsContainer>
          <h3>What Can You Do Next?</h3>
          <p>There are several ways to get support and start feeling better.</p>
          
          <ResourcesGrid>
            {resources.map((resource, index) => (
              <ResourceCard key={index}>
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
                  style={{ width: '100%' }}
                >
                  {resource.action}
                </Button>
              </ResourceCard>
            ))}
          </ResourcesGrid>
        </NextStepsContainer>

        {/* Quick Resources with Direct Links */}
        <QuickResources>
          <h4>Immediate Support Available:</h4>
          <ul>
            <li>
              <a href="tel:1800-599-0019" className="resource-link">
                National Mental Health Helpline: 1800-599-0019 (24/7)
              </a>
            </li>
            <li>
              <a href="tel:080-26995000" className="resource-link">
                NIMHANS: 080-26995000
              </a>
            </li>
            <li>
              <a href="tel:1860-2662-345" className="resource-link">
                Vandrevala Foundation: 1860-2662-345
              </a>
            </li>
          </ul>
        </QuickResources>

        <div style={{ textAlign: 'center', margin: '3rem 0' }}>
          <p style={{ marginBottom: '1rem', color: theme.textLight }}>
            Remember: This assessment is a screening tool and not a diagnosis. 
            Always consult with a qualified mental health professional for a proper evaluation.
          </p>
          <Button 
            onClick={() => {
              setResult(null);
              setAnswers(Array(questions.length).fill(""));
              setCurrentQuestion(0);
            }}
          >
            Take Assessment Again
          </Button>
        </div>
      </ResultContainer>
    );
  };

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
            Anxiety Assessment
          </Title>
          <Subtitle>
            Take a moment to check in with yourself. Your responses are private and will help guide you to appropriate resources.
          </Subtitle>

          <AnimatePresence mode="wait">
            {!result ? (
              <QuestionCard
                key="question"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <ProgressBar progress={progress}>
                  <div />
                </ProgressBar>

                <QuestionText>{questions[currentQuestion].text}</QuestionText>

                <OptionsGrid>
                  {answerOptions.map((option, index) => (
                    <Option
                      key={option.value}
                      selected={answers[currentQuestion] === option.value}
                      onClick={() => handleAnswerChange(currentQuestion, option.value)}
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

                <NavigationButtons>
                  {currentQuestion > 0 && (
                    <Button onClick={goToPreviousQuestion}>
                      ← Previous
                    </Button>
                  )}
                  {currentQuestion === questions.length - 1 && (
                    <Button 
                      primary
                      onClick={handleSubmit}
                      disabled={loading || answers.includes("")}
                    >
                      {loading ? "Processing..." : "Complete Assessment"}
                    </Button>
                  )}
                </NavigationButtons>
              </QuestionCard>
            ) : (
              renderResults()
            )}
          </AnimatePresence>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default AnxietyPrediction; 