import React, { Component } from 'react';
import QuestionPanel from './components/QuestionPanel';

class Interview extends Component {
  render() {
    return (
      <div className="panel-container">
        <QuestionPanel/>
      </div>
    );
  }
}

export default Interview
