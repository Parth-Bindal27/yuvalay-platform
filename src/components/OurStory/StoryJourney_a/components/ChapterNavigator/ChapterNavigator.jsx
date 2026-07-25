import "./ChapterNavigator.css";

const chapters = [
  "The Spark",
  "The Problem",
  "A Vision",
  "Yuvalay",
  "Beyond Walls",
  "India",
  "The Future",
  "Finale",
];

export default function ChapterNavigator({
  activeChapter = 0,
}) {
  return (
    <aside className="chapter-nav">
      {chapters.map((chapter, index) => (
        <div
          key={chapter}
          className={`chapter-nav__item ${
            index === activeChapter
              ? "chapter-nav__item--active"
              : index < activeChapter
              ? "chapter-nav__item--completed"
              : ""
          }`}
        >
          <span className="chapter-nav__number">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="chapter-nav__title">
            {chapter}
          </span>

          <span className="chapter-nav__dot"></span>
        </div>
      ))}
    </aside>
  );
}