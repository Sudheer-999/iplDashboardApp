import './index.css'

const MatchCard = props => {
  const {matchItem} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchItem

  const winLossClass = matchStatus === 'Lost' ? 'loss' : 'win'

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="competing-team-venue">{result}</p>
      <p className={winLossClass}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
