import { Score } from "../types";

interface LeaderboardTableProps {
  scores: Score[];
}

export default function LeaderboardTable({ scores }: LeaderboardTableProps) {
  const sortedScores = [...scores].sort((a, b) => b.points - a.points);

  return (
    <table className="w-full bg-slate-200 rounded-lg">
      <tbody>
        {sortedScores.map((score, index) => (
          <tr className="" key={score.user}>
            <td className="p-2 font-bold">{index + 1}</td>
            <td className="p-2">👤</td>
            <td className="p-2 font-bold">{score.user}</td>
            <td className="p-2">{score.points} pt</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
