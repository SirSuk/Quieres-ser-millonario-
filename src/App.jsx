import "./app.css"
import { useEffect, useMemo, useState } from "react";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";

function App() {
// hooks
  const [userName, setUsername] = useState(null);
  const  [questionNumber, setQuestionNumber] = useState(1)
  const   [stop, setStop] = useState(false);
  const   [earned, setEarned] = useState("$0");


// data - preguntas 

  const data = [
    {
      id: 1,
      question: " ¿Quien es la mas guapa?",
      answers: [
        {
          text: "Fatima",
          correct: false,
        },
        {
          text: "Ghada",
          correct: true,
        },
        {
          text: "Khadija",
          correct: false,
        },
        {
          text: "Malika",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "¿Cuál es el país más visitado del mundo?",
      answers: [
        {
          text: "Francia",
          correct: true,
        },
        {
          text: "USA",
          correct: false,
        },
        {
          text: "España",
          correct: false,
        },
        {
          text: "Japón",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "¿Dónde nació la pizza?",
      answers: [
        {
          text: "Roma",
          correct: false,
        },
        {
          text: "Milano",
          correct: false,
        },
        {
          text: "Cagliari",
          correct: false,
        },
        {
          text: "Napoli",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "De los cinco sentidos, ¿cuál es el que se desarrolla primero?",
      answers: [
        {
          text: "La vista",
          correct: false,
        },
        {
          text: "El oido",
          correct: false,
        },
        {
          text: "El tacto",
          correct: false,
        },
        {
          text: "El olfato.",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "¿En qué año se disolvió la Unión Soviética?",
      answers: [
        {
          text: "1978",
          correct: false,
        },
        {
          text: "1985",
          correct: false,
        },
        {
          text: "1996",
          correct: false,
        },
        {
          text: "1991",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "¿Quien pintó La Mona Lisa?",
      answers: [
        {
          text: "Van Gogh",
          correct: false,
        },
        {
          text: "Velazquez",
          correct: false,
        },
        {
          text: "Romeo Batini",
          correct: false,
        },
        {
          text: "Leonardo Da Vinci",
          correct: true,
        },
      ],
    },
  ];

  
  const moneyPyramid = useMemo(() => 
    [
    {id:1, amount:"$ 100"},
    {id:2, amount:"$ 200"},
    {id:3, amount:"$ 300"},
    {id:4, amount:"$ 500"},
    {id:5, amount:"$ 1000"},
    {id:6, amount:"$ 2000"},
    {id:7, amount:"$ 4000"},
    {id:8, amount:"$ 8000"},
    {id:9, amount:"$ 16000"},
    {id:10, amount:"$ 32000"},
    {id:11, amount:"$ 64000"},
    {id:12, amount:"$ 125000"},
    {id:13, amount:"$ 250000"},
    {id:14, amount:"$ 500000"},
    {id:15, amount:"$ 1000000"},
  ].reverse(),
[]);
  useEffect(() => {
    questionNumber>1 && 
    setEarned(moneyPyramid.find(m =>  m.id === questionNumber-1).amount) 
  },[moneyPyramid,questionNumber])
  


  return (
    <div className="app">
     <div className="main">
      {stop ? ( 
        <div className="endTextDad"> <h1 className="endText"> Has ganado <br/><span className="endTextDown">{earned} </span></h1></div> ) : (
    <>
      <div className="top">
        <div className="timer">
          <Timer setStop={setStop} questionNumber={questionNumber} />
        </div>
      </div>
      <div className="bottom">
          <Trivia 
          data={data} 
          setStop={setStop}
          questionNumber={questionNumber}
          setQuestionNumber= {setQuestionNumber}/>
      </div>
    </>

      )}

     </div>

     <div className="pyramid">
       <ul className="moneyList">
          {moneyPyramid.map((m)=> (
        <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
         <span className="moneyListItemNumber">{m.id}</span>
         <span className="moneyListItemAmount">{m.amount}</span>
        </li>
           ))} </ul>
     </div>
    </div>
  );
}

export default App;
