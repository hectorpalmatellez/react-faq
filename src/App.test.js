import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import App from './App'
import QuestionPanel from './components/QuestionPanel'

it('renders App', () => {
  const wrap = shallow(<App/>)
  expect(wrap.exists('.panel-container')).toEqual(true)
});

it('renders QuestionPanel', () => {
  const wrap = shallow(
    <QuestionPanel/>
    )
  expect(wrap.exists('.single-panel')).toEqual(true)
});

it('question panel has a question', () => {
  const wrap = shallow(
    <QuestionPanel/>
  )
  expect(wrap.exists('.question-text')).toEqual(true)
})

it('question panel has an answer', () => {
  const wrap = shallow(
    <QuestionPanel/>
  )
  expect(wrap.exists('.question-answer')).toEqual(true)
})

it('renders a question with date', () => {
  const wrap = shallow(
    <QuestionPanel/>
  )
  expect(wrap.exists('.question-modification-date')).toEqual(true)
});