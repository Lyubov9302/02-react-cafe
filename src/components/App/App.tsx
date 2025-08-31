import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import { Votes, VoteType } from "../../types/votes";
import { useState } from "react";

export default function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });

  const handleVote = (type: VoteType) => {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  };
  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <button onClick={() => handleVote("good")}>Good: {votes.good}</button>
        <button onClick={() => handleVote("neutral")}>
          Neutral: {votes.neutral}
        </button>
        <button onClick={() => handleVote("bad")}>Bad: {votes.bad}</button>
        <button onClick={resetVotes}>Reset</button>
      </div>
    </>
  );
}
