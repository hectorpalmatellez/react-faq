import React, { Component } from 'react'
import * as ApiService from '../services/apiService'
import * as utils from '../utils'

const getLastActionId = (result) => {
  const resultQuestion = result.question
  const creatorID = resultQuestion.creatorId
  const deleterID = resultQuestion.deleterId
  const lastEditorID = resultQuestion.lastEditorId
  const submitterID = resultQuestion.submitterId
  const actions = {
                    creatorId: creatorID,
                    deleterId: deleterID,
                    lastEditorId: lastEditorID,
                    submitterId: submitterID
                  }

}

class QuestionPanel extends Component {

  toggleAnswer = (event) => {
    const parentPanel = event.target.closest('.single-panel')
    const respectiveAnswer = parentPanel.querySelector('.question-answer')
    parentPanel.classList.toggle('is-open')
    respectiveAnswer.classList.toggle('is-visible')
  }

  render() {
    return (
      ApiService.formattedData().map((result) =>
        <div className="single-panel" key={result.question.id} data-action-id={getLastActionId(result)}>
          <h2 className="question-text" onClick={this.toggleAnswer}>
            <span className="question-author">{utils.getUserName(result.user_id)}</span>
            {result.question.questionText}
          </h2>
          <h3 className="question-answer">{result.answer.answerText}</h3>
        </div>
      )
    )
  }
}

export default QuestionPanel