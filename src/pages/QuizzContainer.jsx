/* eslint-disable react/no-unescaped-entities */
import "./quizz.css"
import { useContext } from "react";
import { ActivitiesContext } from "../assets/Context/ActivitiesContext";

function QuizzContainer() {
    const { wrongAnswer,  quest, messageOk, handleAnswers, handleQuestions} = useContext(ActivitiesContext);

    return (
        <>
          {wrongAnswer  && messageOk!= 20 ? (
            <div className="message-quizz">Il est temps de sortir de chez vous !</div>
          ) : (
            messageOk != 20 ? (
              <>
                <div className="quizz-question" key={quest.id}>{quest.question}</div>
                <div className="button-container-quizz">
                  <button className="quizz-button" onClick={handleQuestions}>{quest.trueanswer}</button>
                  <button className="quizz-button" onClick={handleAnswers}>{quest.falseanswer}</button>
                </div>
              </>
            ) : (
              <div className="message-quizz messagequizz-ok">Bravo <br/> N'hésitez pas à visiter notre site pour d'autres idées !</div>
            )
          )}
        </>
      );



}

export default QuizzContainer;

