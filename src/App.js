import React, { Component } from 'react'
import QuestionPanel from './components/QuestionPanel'
import UserSelector from './components/UserSelector'

class Interview extends Component {
  render() {
    return (
      <div className="panel-container">
        <UserSelector/>
        <QuestionPanel/>
      </div>
    );
  }
}

export default Interview
