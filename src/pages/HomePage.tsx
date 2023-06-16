import React, { useState } from "react";
import Button from "../components/button";

const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [filepicked, setFilePicked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files) {
      if (files[0] && files[0].type === "application/pdf") {
        setSelectedFile(files[0]);
        console.log(files[0].text)
        setFilePicked(true);
      } else {
        alert("Please upload a pdf file");
      }
    }
  };

  const handleUpload = () => {
    if (filepicked) {
      console.log(selectedFile);
      alert("File uploaded successfully!");
    } else {
      alert("Please upload a file!");
    }
  };

  return (
    <div className="home_page">
      <p className="app_header">Chat with your PDF</p>
      <div className="upload_section">
        <form onSubmit={handleUpload}>
          <input type="file" onChange={handleChange} />
          <Button type="submit" />
        </form>
      </div>
    </div>
  );
};

export default HomePage;
