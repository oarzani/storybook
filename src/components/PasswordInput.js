import React, { useState } from "react";

/**
 * Exercise
 * Change the background-color of the input based
 * on the length of the password
 * At a length of 0-4 it should be a red to orange
 * At a length of around 10 it should become green
 * It should never become blue, so stop at green
 */
// const inputStyle = {
//   background: "red"
// };
// const [password, setPassword] = useState();

// const updatePassword = event => {
//   setPassword(event.target.value);
// };

function getInputStyle(passwordLength) {
  let pwLength = passwordLength > 10 ? 10 : passwordLength;
  return {
    backgroundColor: `hsl(${pwLength * 10},100%,50%)`
  };
}
//Alternativ zu oben
// function getInputStyle(length) {
//   const hue = length * 10;
//   if (hue > 100) {
//     return {
//       backgroundColor: "hsl(100, 100%, 50%)"
//     };
//   }
//   return {
//     backgroundColor: `hsl(${hue}, 100%, 50%)`
//   };
// }
// Oder wie die Lösung oben
// function getInputStyle(length) {
//   const hue = length * 10;
//   return {
//     backgroundColor: `hsl(${hue > 100 ? 100 : hue}, 100%, 50%)`
//   };
// }

//Oder mit dem Math min, dass die kleinere Zahl ausgibt.

// function getInputStyle(length) {
//   const hue = Math.min(length * 10, 100);

//   return {
//     backgroundColor: `hsl(${hue}, 100%, 50%)`
//   };
// }

function PasswordInput() {
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        style={getInputStyle(password.length)}
        className="password-input"
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      {password.length}
    </div>
  );
}

export default PasswordInput;

// How to change the background color? -CSS Lösung
// How to access the input value (password)?
// How should a function looks like which returns the color  based on password length?
// Why does it make sense to us CMYK?
//..
