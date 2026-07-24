import { KNOWLEDGE } from "./aiKnowledge";

/**
 * Normalize text
 */
function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Simple similarity score
 */
function scoreQuestion(question, keywords) {
  const q = normalize(question);

  let score = 0;

  keywords.forEach((keyword) => {
    const k = normalize(keyword);

    // Exact match
    if (q === k) {
      score += 100;
      return;
    }

    // Contains keyword
    if (q.includes(k)) {
      score += k.length * 5;
      return;
    }

    // Individual word matching
    const words = k.split(" ");

    words.forEach((word) => {
      if (word.length < 3) return;

      if (q.includes(word)) {
        score += 4;
      }
    });
  });

  return score;
}

/**
 * Search local knowledge base
 */
export function searchKnowledge(question) {

  let bestMatch = null;
  let highestScore = 0;

  KNOWLEDGE.forEach((item) => {

    const score = scoreQuestion(
      question,
      item.keywords
    );

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }

  });

  // Minimum confidence required
  if (highestScore >= 8) {
    return bestMatch;
  }

  return null;
}

/**
 * Future semantic search
 * (Embeddings can replace this later)
 */
export function semanticSearch(question) {
  return searchKnowledge(question);
}

/**
 * Get quick suggestions
 */
export function getSuggestions() {

  return [

    "🤖 Robotics",

    "🧠 Artificial Intelligence",

    "📅 Upcoming Events",

    "🏫 Programs",

    "💼 Internship",

    "🛠 Makerspace",

    "📞 Contact"

  ];

}