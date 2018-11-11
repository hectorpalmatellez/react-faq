import QuestionsSource from '../mock/questions';
import AnswersSource from '../mock/answers';
import UsersSource from '../mock/users';

const formattedData = () => {
  const result = QuestionsSource.map((question) => {
    const answer = AnswersSource.filter((a) => a.questionId === question.id).pop()
    const user = question.creatorId
    return {
      user_id: user,
      question: question,
      answer: answer
    }
  })
  return result
}

export {
  formattedData,
  UsersSource
}