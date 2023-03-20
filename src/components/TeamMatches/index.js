import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch/index'

import MatchCard from '../MatchCard/index'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {
    bannerImage: '',
    latestMatches: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchesList()
  }

  getTeamMatchesList = async () => {
    const {match} = this.props
    const {params} = match

    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const matchData = await response.json()

    const updatedLatestMatch = {
      umpires: matchData.latest_match_details.umpires,
      result: matchData.latest_match_details.result,
      manOfTheMatch: matchData.latest_match_details.man_of_the_match,
      id: matchData.latest_match_details.id,
      date: matchData.latest_match_details.date,
      venue: matchData.latest_match_details.venue,
      competingTeam: matchData.latest_match_details.competing_team,
      competingTeamLogo: matchData.latest_match_details.competing_team_logo,
      firstInnings: matchData.latest_match_details.first_innings,
      secondInnings: matchData.latest_match_details.second_innings,
      matchStatus: matchData.latest_match_details.match_status,
    }

    const updatedRecentMatches = matchData.recent_matches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))

    this.setState({
      bannerImage: matchData.team_banner_url,
      latestMatches: updatedLatestMatch,
      recentMatches: updatedRecentMatches,
      isLoading: false,
    })
  }

  renderTeamMatches = () => {
    const {bannerImage, latestMatches, recentMatches} = this.state

    return (
      <div>
        <img src={bannerImage} alt="team banner" className="team-banner" />
        <p className="latest-head">Latest Matches</p>
        <div className="latest-match-con">
          <LatestMatch matchDetails={latestMatches} />
        </div>
        <ul className="recent-matches-con">
          {recentMatches.map(eachItem => (
            <MatchCard matchItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderMatchesLoader = () => (
    <div data-testid="loader" className="loaders-con">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-matches-container ${id}`}>
        {isLoading ? this.renderMatchesLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
