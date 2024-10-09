import React,{useState} from 'react';
import { LC, NC, SC, UC } from './data/passChar';

const App = () => {

  let [upperCase, setUpperCase] = useState(false);
  let [lowerCase, setLowerCase] = useState(false);
  let [number, setNumbers] = useState(false);
  let [symbol, setSymbol] = useState(false);
  let [passwordLength, setPasswordLength] = useState(10);
  let [password, setPassword] = useState("");

  let createPassword = () => {

    if( upperCase || lowerCase || number || symbol){

      let charSet = "";

      if( upperCase){
        charSet += UC;
      }
      if( lowerCase){
        charSet += LC;
      }
      if( number){
        charSet += NC;
      }
      if( symbol){
        charSet += SC;
      }

      let newPassword = "";

      for( let i=0; i<passwordLength; i++){
        newPassword += charSet.charAt(Math.floor(Math.random()*charSet.length));
      }

      setPassword(newPassword);

    }
    else{
      alert("Plase  select at least one option..");
    }

  }

  let copyPassword = () => {
    navigator.clipboard.writeText(password);
  }


  return (
    <div>

      <div className="passwordBox">

        <h2>
          Password Generator
        </h2>

        <div className="passwordBoxIn">
          <input type="text" readOnly
          value={password} />
          <button onClick={copyPassword} >
            Copy
          </button>
        </div>

        <div className="passLength">

          <label htmlFor="">
            Password Length
          </label>
          <input type="number" min={10} max={20}
          value={passwordLength}
          onChange={
            (e) => {
              setPasswordLength(e.target.value);
            }
          } />

        </div>

        <div className="passLength">

          <label htmlFor="">
            Including Uppercase letters
          </label>
          <input type="checkbox" 
          checked={upperCase}
          onChange={
            () => {
              setUpperCase(!upperCase);
            }
          }  />

        </div>

        <div className="passLength">

          <label htmlFor="">
            Including Lowercase letters
          </label>
          <input type="checkbox"
          checked={lowerCase}
          onChange={
            () => {
              setLowerCase(!lowerCase);
            }
          } />

        </div>

        <div className="passLength">

          <label htmlFor="">
            Including Numbers
          </label>
          <input type="checkbox"
          checked={number}
          onChange={
            () => {
              setNumbers(!number);
            }
          } />

        </div>

        <div className="passLength">

          <label htmlFor="">
            Including Symbols
          </label>
          <input type="checkbox"
          checked={symbol}
          onChange={
            () => {
              setSymbol(!symbol);
            }
          } />

        </div>

        <button className="btn"
        onClick={createPassword}
        >
          Generate PassWord
        </button>

      </div>
      
    </div>
  )
}

export default App