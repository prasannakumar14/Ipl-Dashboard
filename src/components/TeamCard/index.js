import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {id, name, teamImageUrl} = cardDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-link-container">
      <div className="team-card-container">
        <img src={teamImageUrl} alt={name} className="team-card-image" />
        <p className="team-name">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
