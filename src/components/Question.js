import React from 'react'

const Question = ({userName, question}) => (
  <h2 className="question-container">
    <span className="question-author">{userName}</span>
    <span className="question-text">{question}</span>
  </h2>
)

export default Question