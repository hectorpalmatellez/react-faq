import React, { Component, Fragment } from 'react'
import Question from './Question'
import Answer from './Answer'
import * as ApiService from '../services/apiService'
import * as utils from '../utils'

class QuestionPanel extends Component {
  render() {
    return (
      ApiService.formattedData().map((result) =>
        <Fragment key={result.question.id}>
          <div className="single-panel">
            <span className="collapse-state-icon">></span>
            <Question userName={utils.getUserName(result.user_id)}
                      question={result.question.questionText}
                      organization={result.user_organization} />
            <Answer text={result.answer.answerText} />
          </div>
        </Fragment>
      )
    )
  }
}

export default QuestionPanel