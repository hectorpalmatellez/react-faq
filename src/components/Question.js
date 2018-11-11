import React, { Component } from 'react'


class Question extends Component {
  constructor(props) {
    super(props)
    this.toggleAnswer = this.toggleAnswer.bind(this)
    this.state = {
      username: '',
      question: ''
    }
  }
  toggleAnswer = (event) => {
    const parentPanel = event.target.closest('.single-panel')
    const respectiveAnswer = parentPanel.querySelector('.question-answer')
    parentPanel.classList.toggle('is-open')
    respectiveAnswer.classList.toggle('is-visible')
  }
  render() {
    return (
      <h2 className="question-container" onClick={this.toggleAnswer}>
        <span className="question-author">{this.props.userName}</span>
        <span className="question-text">{this.props.question}</span>
      </h2>
    )
  }
}

export default Question