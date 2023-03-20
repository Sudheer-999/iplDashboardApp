import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard/index'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamData = await response.json()

    const updatedData = teamData.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamsList: updatedData, isLoading: false})
  }

  renderTeamsList = () => {
    const {teamsList} = this.state
    return (
      <ul className="teams-list">
        {teamsList.map(eachItem => (
          <TeamCard teamDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="home-loader-con">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-container">
        <div className="ipl-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-head">IPL Dashboard</h1>
        </div>
        <div>{isLoading ? this.renderLoader() : this.renderTeamsList()}</div>
      </div>
    )
  }
}

export default Home
