import React, { useState } from 'react';

function FileUploader() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(selectedFiles);
    // Here you can send the selected files to the server for further processing.
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Select files:
        <input type="file" name="files" multiple onChange={handleFileInputChange} />
      </label>
      <button type="submit">Upload files</button>
    </form>
  );
}

export default FileUploader;