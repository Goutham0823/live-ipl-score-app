import { useState } from 'react';

function LiveScore() {
  const [score, setScore] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLiveScore = () => {
    setIsLoading(true);
    fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/current', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a60bd51c75msh69763dfcdb777d9p1981c7jsncb7cd6586bf5',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
      }
    })
      .then(res => res.json())
      .then(data => {
        const liveMatch = data.typeMatches?.[0]?.seriesMatches?.[0]?.seriesAdWrapper?.matches?.[0];
        setScore(liveMatch?.matchInfo);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching live score:', error);
        setIsLoading(false);
      });
  };

  return (
    <div className="live-score">
      <button onClick={fetchLiveScore}>Get Live Score</button>
      {isLoading ? (
        <p>Loading live score...</p>
      ) : score ? (
        <div>
          <h2>🏏 Live Score</h2>
          <p><strong>{score.team1?.teamName}</strong> vs <strong>{score.team2?.teamName}</strong></p>
          <p>Status: {score.status}</p>
          {/* Add more score details here if needed */}
        </div>
      ) : (
        <p>No live score available</p>
      )}
    </div>
  );
}

export default LiveScore;
