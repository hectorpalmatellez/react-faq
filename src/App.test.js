import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import App from './App'
import QuestionPanel from './components/QuestionPanel'
import Question from './components/Question'
import Answer from './components/Answer'

describe('<App/>', () => {
  it('renders App', () => {
    const wrap = shallow(<App/>)
    expect(wrap.exists('.panel-container')).toEqual(true)
  })
})

describe('<QuestionPanel/>', () => {
  it('renders QuestionPanel', () => {
    const wrap = shallow(
      <QuestionPanel/>
      )
    expect(wrap.exists('.single-panel')).toEqual(true)
  })
})

describe('<Question/>', () => {
  it('renders Question', () => {
    const wrap = shallow(
      <Question/>
      )
    expect(wrap.exists('.question-container')).toEqual(true)
  })

  it('Question author passes to DOM', () => {
    const testUser = 'user1'
    const wrap = shallow(<Question userName={testUser}/>)
    expect(wrap.find('.question-author').text()).toEqual('user1')
  })

  it('Question text passes to DOM', () => {
    const testQuestion = 'Are you OK?'
    const wrap = shallow(<Question question={testQuestion}/>)
    expect(wrap.find('.question-text').text()).toEqual('Are you OK?')
  })
})

describe('<Answer/>', () => {
  it('renders Answer', () => {
    const wrap = shallow(
      <Answer/>
      )
    expect(wrap.exists('.question-answer')).toEqual(true)
  })
  it('Answer prop passes to DOM', () => {
    const testAnswer = 'test'
    const wrap = shallow(<Answer text={testAnswer}/>)
    expect(wrap.find('.question-answer').text()).toEqual('test')
  })
})

