import { useState } from 'react';
import './App.css';


function App() {
  const [display, setDisplay] = useState('')
  const [theme, setTheme] = useState([1,'theme1']);
  
  const displayInput = (show) => {
      setDisplay(`${display}${show}`)
  }

  const handleDisplay = (e) => {
    displayInput(e.target.value)
  }

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const equalTo = () => {
    setDisplay(numberWithCommas(eval(display)))
  }

  const resetCalc = () => {
    setDisplay('')
  }

  const handleDel = () => {
    setDisplay(display.slice(0,-1))
  }

  const changeTheme = (e) => {
    if (e.target.value === '1') {
      setTheme([1,'theme1'])
    }
    if (e.target.value === '2') {
      setTheme([2,'theme2'])
    }
    if (e.target.value === '3') {
      setTheme([3,'theme3'])
    }
  }


  
  return (
    <div className={`main-body ${theme[1]}`}>
      <div className='container'>
        <header>
          <h1>calc</h1>
          <div className="theme-controller">
            <h4>Theme</h4>
            <div className="toggler">
              <div className='number'>
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <input type="range" min={1} max={3} step={1} onChange={changeTheme} 
              value={theme[0]}/>
            </div>
          </div>
        </header>

        <div className='display'>
          <input type="text" value={display}/>
        </div>

        <div className="main-calculator">
          <button value={7} onClick={handleDisplay}>7</button>
          <button value={8} onClick={handleDisplay}>8</button>
          <button value={9} onClick={handleDisplay}>9</button>
          <button className='special-key' onClick={() => handleDel()}>Del</button>
          <button value={4} onClick={handleDisplay}>4</button>
          <button value={5} onClick={handleDisplay}>5</button>
          <button value={6} onClick={handleDisplay}>6</button>
          <button value={'+'} onClick={(e) => displayInput(e.target.value)}>+</button>
          <button value={1} onClick={handleDisplay}>1</button>
          <button value={2} onClick={handleDisplay}>2</button>
          <button value={3} onClick={handleDisplay}>3</button>
          <button value={'-'} onClick={handleDisplay}>-</button>
          <button value={'.'} onClick={handleDisplay}>.</button>
          <button value={0} onClick={handleDisplay}>0</button>
          <button value={'/'} onClick={handleDisplay}>/</button>
          <button value={'*'} onClick={handleDisplay}>x</button>
          <button className='special-key two' onClick={resetCalc}>Reset</button>
          <button id='equal-to' className='two' onClick={() => equalTo()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
