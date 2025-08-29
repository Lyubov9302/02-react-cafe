import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";
import { useState } from "react";
import type { Votes, VoteType } from "../../types/votes.ts";
import VoteOptions from "../VoteOptions/VoteOptions";

export default function App() {
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
  const [isOpen, setIsOpen] = useState(false);

  const handleVote = (key: keyof Votes) => {
    setVotes({
      ...votes,
      [key]: votes[key] + 1,
    });
  };

  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={css.app}>
        <CafeInfo />

        <VoteOptions
          onVote={handleVote}
          onReset={toggleMessage}
          canReset={true}
        />
        <p>
          good: {votes.good}, neutral: {votes.neutral}, bad: {votes.bad};
        </p>

        <button onClick={toggleMessage}>
          {isOpen ? "Hide message" : "Show message"}
        </button>
      </div>
    </>
  );
}
