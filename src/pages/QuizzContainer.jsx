import "./quizz.css"
import { useContext } from "react";
import { ActivitiesContext } from "../assets/Context/ActivitiesContext";

function QuizzContainer() {
    const { wrongAnswer,  quest, messageOk, handleAnswers, handleQuestions} = useContext(ActivitiesContext);

    return (
        <>
          {wrongAnswer  && messageOk!= 20 ? (
            <div className="message-quizz">IL EST TEMPS DE SORTIR DE CHEZ VOUS !</div>
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
              <div className="message-quizz">Bravo, mais que faites-vous ici ?!</div>
            )
          )}
        </>
      );



}

export default QuizzContainer;

