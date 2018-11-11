import React, { Component, Fragment } from 'react'
import Question from './Question'
import Answer from './Answer'
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
  render() {
    return (
      ApiService.formattedData().map((result) =>
        <Fragment key={result.question.id}>
          <div className="single-panel" data-action-id={getLastActionId(result)}>
            <span className="collapse-state-icon">></span>
            <Question userName={utils.getUserName(result.user_id)} question={result.question.questionText} />
            <Answer text={result.answer.answerText} />
          </div>
        </Fragment>
      )
    )
  }
}

export default QuestionPanel