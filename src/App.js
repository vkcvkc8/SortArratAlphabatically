import React from 'react';
import './style.css';

export default function App() {
  const sortStringsAlphabetically = (arr) => {
    return [...arr].sort((a, b) => a.localeCompare(b));
  };

  const strings = ['Apple', 'Orange', 'Banana', 'Mango'];
  const sortedStrings = sortStringsAlphabetically(strings);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>Original Strings: {strings.join(', ')}</p>
      <p>Sorted Strings: {sortedStrings.join(', ')}</p>
    </div>
  );
}
