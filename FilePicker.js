import React, { useRef } from 'react';
import './FilePicker.css';

function App() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    // do something with the selected file
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Pick the file</button>
      <input
        type="file"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileInputChange}
      />
    </div>
  );
}

export default App;