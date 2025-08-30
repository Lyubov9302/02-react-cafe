import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import Votes from "../../types/votes";
import { useState } from "react";

export default function App() {
  const [votes, setVotes] = useState(0);

  const handleVote = () => {
    setVotes(votes + 1);
  };
  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <button onClick={handleVote}>Good: {votes}</button>;
        <button onClick={handleVote}>Neutral: {votes}</button>;
        <button onClick={handleVote}>Bad: {votes}</button>;
      </div>
    </>
  );
}
