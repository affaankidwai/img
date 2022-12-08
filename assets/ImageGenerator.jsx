import React, { useState } from "react";
import openai from "openai";

// Set up the OpenAI API client
openai.apiKey = "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";

const ImageGenerator = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  // Handle changes to the input text
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Use GPT-3 to generate an image based on the input text
    openai.image(
      {
        prompt: text,
        model: "image-alpha-001",
      },
      (err, response) => {
        if (err) {
          console.log(err);
        } else {
          // Update the state with the generated image
          setImage(response.data[0].image);
        }
      }
    );
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Enter the text you want to generate an image for:
          <input type="text" value={text} onChange={handleChange} />
        </label>
        <input type="submit" value="Generate" />
        {image && <img src={image} alt="hel" />}
      </form>
    </div>
  );
};

export default ImageGenerator;
