import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props

  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="team-container">
      <Link to={`/team-matches/${id}`} className="match-card-link">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
