import {useState} from "react";
import Todos from "./components/Todos";
import {useDispatch} from "react-redux";
import style from "./styles.css"

function App() {

  const [inputValue,setInputValue] = useState('')
  const inputHandler = (e)=> {
    setInputValue(e.target.value)
  }

  const dispatch = useDispatch()
  const addTextHandler = ()=> {
    dispatch({type:'add', payload:inputValue})
    setInputValue("")
  }

  return (
    <>
  <div className="container">
    <div className="title">Todo list</div>
    <div className="subtitle">
      <input placeholder="Введите значение" type="text" onChange={inputHandler} value={inputValue}/>
      <button className="btn_header" type="button" onClick={addTextHandler}>Добавить</button>
    </div>
    <Todos/>
  </div>
    </>
  );
}

export default App;
