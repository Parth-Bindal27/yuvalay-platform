import { useState } from "react";

import StoryIntro from "../../components/OurStory/StoryIntro/StoryIntro";
import StoryJourney from "../../components/OurStory/StoryJourney_a/StoryJourney";

// 👇 Temporary Testing
import StoryEngine from "../../components/StoryEngine/StoryEngine";

const OurStory = () => {
  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene((prev) => prev + 1);
  };

  return (
    <>
      {/* SCENE 0 */}
      {scene === 0 && (
        <StoryIntro onComplete={nextScene} />
      )}

      {/* SCENE 1 */}
      {scene === 1 && (
        <StoryJourney onComplete={nextScene} />
      )}

      {/* 🟢 TEMPORARY TESTING */}
      {scene === 2 && (
        <StoryEngine />
      )}

      {/* FINALE */}
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
            fontFamily: "Inter, sans-serif",
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
              color: "#18ff8c",
              fontSize: "1.1rem",
              letterSpacing: "4px",
            }}
          >
            The Journey of Curiosity Continues...
          </p>
        </div>
      )}
    </>
  );
};

export default OurStory;