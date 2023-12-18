// TopicPage.js

import React, { useState,useEffect } from "react";
import "./TopicPage.css";
import topicData from './questions';
import { useParams } from 'react-router-dom';



const TopicPage = () => {

const { title } = useParams();
const topicName = title;


  const selectedTopic = topicData[topicName];

  

  const initialState = selectedTopic.questions.reduce((state, question) => {
    state[question.name] = localStorage.getItem(`${topicName}-${question.name}`) === 'true';
    return state;
  }, {});

  const [checkboxState, setCheckboxState] = useState(initialState);

  const handleCheckboxChange = (questionName) => {
    const updatedState = {
      ...checkboxState,
      [questionName]: !checkboxState[questionName],
    };
    setCheckboxState(updatedState);
    localStorage.setItem(`${topicName}-${questionName}`, updatedState[questionName].toString());
  };

  const totalQuestions = selectedTopic.questions.length;
  const checkedQuestions = Object.values(checkboxState).filter(Boolean).length;
  const progress = (checkedQuestions / totalQuestions) * 100;

  useEffect(() => {
    // Update the progress and localStorage data whenever the checkboxState changes
    const checkedQuestions = Object.values(checkboxState).filter(Boolean).length;
    const progress = (checkedQuestions / totalQuestions) * 100;
    // localStorage.setItem(`${topicName}-progress`, progress.toString());
    // return () => {
    //   localStorage.removeItem(`${topicName}-progress`,progress.toString());
    // };
  }, [checkboxState, totalQuestions, topicName]);

  if (!selectedTopic) {
    return <div>Topic not found {topicName}</div>;
  }

  return (
    <div className="topic-page">
      <h2 className="topic-title">{selectedTopic.title} Questions</h2>
      <div className="progress">
        Progress: {progress}% ({checkedQuestions}/{totalQuestions} questions completed)
      </div>
      <div className="question-container">
      <ul className="question-list">
        {selectedTopic.questions.map((question, index) => (
          <li key={index}>
            <label>
              <input
                className="checkbox"
                type="checkbox"
                checked={checkboxState[question.name]}
                onChange={() => handleCheckboxChange(question.name)}
              />
              <span>{question.name}</span>
              <a href={question.link} target="_blank" rel="noopener noreferrer">
                Problem Link
              </a>
            </label>
          </li>
        ))}
      </ul>
      </div>
    </div>
    
);
};

export default TopicPage;
