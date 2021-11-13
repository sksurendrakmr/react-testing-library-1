import React, {useState, useEffect} from 'react'

function App() {
  const [buttonColor, setButtonColor] = useState(false)
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      <button 
      style={{backgroundColor:isChecked? 'grey' : buttonColor?'blue' : 'red'}}
      onClick={()=>setButtonColor(!buttonColor)}
      disabled={isChecked}
      >
        Change to {buttonColor ? 'red' : 'blue'}
        </button>
        <input id="disable-button-checkbox" type='checkbox' aria-checked={isChecked} checked={isChecked} onChange={(e)=>setIsChecked(e.target.checked)}/>
        <label htmlFor="disable-button-checkbox">Disable button</label>
    </>
  );
}

export default App;
