import QuestionsSource from '../mock/questions';
import AnswersSource from '../mock/answers';
import UsersSource from '../mock/users';

const formattedData = () => {
  const result = QuestionsSource.map((question) => {
    const answer = AnswersSource.filter((a) => a.questionId === question.id).pop()
    const user_id = question.creatorId
    const user_org = UsersSource.filter((current_user) => current_user.id === user_id).pop().organization
    return {
      user_id: user_id,
      user_organization: user_org,
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