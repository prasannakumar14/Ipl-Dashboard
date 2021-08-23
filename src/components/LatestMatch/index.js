import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = matchDetails
  return (
    <li className="latest-match-container">
      <h1 className="latest-heading">Latest Matches</h1>
      <div className="latest-match-details-container">
        <div className="upper-container">
          <div>
            <p className="team-match-details-names">{competingTeam}</p>
            <p className="team-match-details-names" key="date">
              {date}
            </p>
            <p className="team-match-details-para">{venue}</p>
            <p className="team-match-details-para">{result}</p>
          </div>
          <div>
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="latest-match-details-image"
            />
          </div>
        </div>
        <hr className="line" />
        <div className="lower-container">
          <h1 className="lower-heading">First Innings</h1>
          <p className="lower-para">{firstInnings}</p>
          <h1 className="lower-heading">Second Innings</h1>
          <p className="lower-para">{secondInnings}</p>
          <h1 className="lower-heading">Man Of The Match</h1>
          <p className="lower-para">{manOfTheMatch}</p>
          <h1 className="lower-heading">umpires</h1>
          <p className="lower-para">{umpires}</p>
        </div>
      </div>
    </li>
  )
}

export default LatestMatch
