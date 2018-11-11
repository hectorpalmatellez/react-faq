import React, { Component, Fragment } from 'react'
import Answer from './Question'
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
        <Fragment key={result.question.id}>
          <div className="single-panel" data-action-id={getLastActionId(result)}>
            <span className="collapse-state-icon">></span>
            <h2 className="question-container" onClick={this.toggleAnswer}>
              <span className="question-author">{utils.getUserName(result.user_id)}</span>
              <span className="question-text">{result.question.questionText}</span>
            </h2>
            <Answer text={result.answer.answerText}/>
          </div>
        </Fragment>
      )
    )
  }
}

export default QuestionPanel