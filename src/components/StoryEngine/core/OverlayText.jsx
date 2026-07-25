import "./OverlayText.css";

export default function OverlayText() {
  return (
    <div className="story-overlay">

      <div className="story-overlay-box">

        <span className="story-chapter">
          CHAPTER 01
        </span>

        <h1 className="story-title">
          Every Revolution
          <br />
          Begins With
          <br />
          A Question
        </h1>

        <p className="story-description">
          Every invention...
          Every breakthrough...
          Every idea that changed humanity...
          <br />
          started with someone asking
          <span> "What if?"</span>
        </p>

        <div className="story-scroll">

          <div className="story-scroll-line"></div>

          <p>Scroll to Begin</p>

        </div>

      </div>

    </div>
  );
}