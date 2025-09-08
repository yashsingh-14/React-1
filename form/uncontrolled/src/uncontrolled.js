import { useRef } from "react";

export default function Uncontrolled() {

  const name = useRef(null)
  const name1 = useRef(null)

  const changeColor = () => {
    name.current.style.color = "green"
  }

  const steve = {
    color: 'red'
  }

  const changeFocus = () => {
    name1.current.focus()
  }

  return (
    <div>
      <h1 style={steve} ref={name}>Hello Steve</h1>
      <button type='button' onClick={changeColor}>Change Color</button>
      <br /><br />
      
      <label htmlFor="">First Name:</label>
      <input type="text" />
      <br /><br />

      <label htmlFor="">Last Name:</label>
      <input type="text" ref={name1} />
      <button type='button' onClick={changeFocus}>Change focus</button>
    </div>
  )
}