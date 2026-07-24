// src/pages/OurStory/OurStory.jsx

import { useState } from "react";

import StoryIntro from "../../components/OurStory/StoryIntro/StoryIntro";
import StoryProblem from "../../components/OurStory/StoryProblem/StoryProblem";
import StoryOrigin from "../../components/OurStory/StoryOrigin/StoryOrigin";

const OurStory = () => {
  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene((prev) => prev + 1);
  };

  return (
    <>
      {scene === 0 && (
        <StoryIntro
          onComplete={nextScene}
        />
      )}

      {scene === 1 && (
        <StoryProblem
          onComplete={nextScene}
        />
      )}

      {scene === 2 && (
        <StoryOrigin
          onComplete={nextScene}
        />
      )}

      {scene >= 3 && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            background: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "#fff",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2.5rem,6vw,5rem)",
              marginBottom: "20px",
              letterSpacing: "8px",
            }}
          >
            TO BE CONTINUED...
          </h1>

          <p
            style={{
              color: "#8ef7b4",
              fontSize: "1.2rem",
              letterSpacing: "4px",
            }}
          >
            Makerspace Journey Begins Next
          </p>
        </div>
      )}
    </>
  );
};

export default OurStory;