import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {cardsList: [], isLoading: true}

  componentDidMount() {
    this.getCardsItemList()
  }

  getCardsItemList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({cardsList: updatedData, isLoading: false})
  }

  render() {
    const {cardsList, isLoading} = this.state
    return (
      <Link to="/" className="home-link">
        <div className="home-container">
          <div className="name-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="home-ipl-image"
            />
            <h1 className="home-heading">IPL Dashboard</h1>
          </div>
          <div className="cards-container">
            {isLoading ? (
              <div testid="loader">
                <Loader type="Oval" color="#ffffff" height={50} width={50} />
              </div>
            ) : (
              cardsList.map(eachCard => (
                <TeamCard key={eachCard.id} cardDetails={eachCard} />
              ))
            )}
          </div>
        </div>
      </Link>
    )
  }
}
export default Home
