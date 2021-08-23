import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamImage: [], latestMatch: [], matchcard: [], isLoading: true}

  componentDidMount = () => {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedTeamImage = {
      teamBannerUrl: data.team_banner_url,
    }
    const updatedLatestMatch = {
      latestMatchDetails: data.latest_match_details,
      competingTeam: data.latest_match_details.competing_team,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      result: data.latest_match_details.result,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      umpires: data.latest_match_details.umpires,
    }

    const updatedMatchCard = data.recent_matches.map(every => ({
      id: every.id,
      competingTeam: every.competing_team,
      competingTeamLogo: every.competing_team_logo,
      result: every.result,
      matchStatus: every.match_status,
    }))

    this.setState({
      teamImage: updatedTeamImage,
      latestMatch: updatedLatestMatch,
      matchcard: updatedMatchCard,
      isLoading: false,
    })
  }

  render() {
    const {teamImage, latestMatch, matchcard, isLoading} = this.state
    const {teamBannerUrl} = teamImage

    return (
      <ul className="team-matches-container">
        {isLoading ? (
          <div testid="loader">
            <Loader
              type="Oval"
              color="#ffffff"
              height={50}
              width={50}
              testid="loader"
            />
          </div>
        ) : (
          <>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-matches-image"
            />
            <ul>
              <LatestMatch matchDetails={latestMatch} />
            </ul>
            <ul className="match-card-start">
              {matchcard.map(everycard => (
                <MatchCard key={everycard.id} cardDetails={everycard} />
              ))}
            </ul>
          </>
        )}
      </ul>
    )
  }
}

export default TeamMatches
