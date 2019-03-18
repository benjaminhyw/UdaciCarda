export const RESET_QUIZ = "RESET_QUIZ";

export function resetQuiz(deck) {
  return {
    type: RESET_QUIZ,
    deck
  };
}
