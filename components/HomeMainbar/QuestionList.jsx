import React from 'react'
import Questions from './Questions'

const QuestionList = ({questionsList}) => {
  return (
    <>
      {
         questionsList.map((question) =>(
            <Questions question={question} key={questionsList._id} />
         ))
      }
    </>
  );
};

export default QuestionList
