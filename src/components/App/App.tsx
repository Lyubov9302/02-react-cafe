import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import type { Votes, VoteType } from "../../types/votes";
import { useState } from "react";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";

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
        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
          canReset={true}
        />
        <VoteStats
          votes={votes}
          totalVotes={0}
          positiveRate={0}
        />
      </div>
    </>
  );
}
