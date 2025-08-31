import React, { useState } from 'react';

function App() {
  // State to hold the message visibility
  const [messageVisible, setMessageVisible] = useState(false);

  // Event handler for the button click
  const handleClick = () => {
    setMessageVisible(true);  // Show the message
  };

  return (
    <div className="App">
      <h1>React Button Click Event</h1>
      <button onClick={handleClick}>Click me to show message</button>
      
      {messageVisible && <p>The button was clicked!</p>}
    </div>
  );
}

export default App;
