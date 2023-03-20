import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = matchDetails

  return (
    <div className="latest-match">
      <div className="sm-top-con">
        <div className="left-con">
          <p className="competing-team-name">{competingTeam}</p>
          <p className="latest-date">{date}</p>
          <p className="latest-venue">{venue}</p>
          <p className="latest-result">{result}</p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="l-competing-team-logo"
          />
        </div>
      </div>
      <hr className="line" />
      <div className="right-con">
        <p className="l-first-ings">First Innings</p>
        <p className="l-f-name">{firstInnings}</p>
        <p className="l-second-ings">Second Innings</p>
        <p className="l-s-name">{secondInnings}</p>
        <p className="l-mom-head">Man of The Match</p>
        <p className="l-mom">{manOfTheMatch}</p>
        <p className="l-umpires-head">Umpires</p>
        <p className="l-umpires">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
