import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

//Don't know how to determine what should be in state
//What information are sibings interacting on?
  state = {
    display: "profile"
  }

  handleClick = (displayName) => {
    this.setState({
      display: displayName
    })
  }

  displayContent = () => {
    switch(this.state.display) {
      case 'profile':
        return <div><Profile /></div>
      break;
      case 'photo':
       return  <div><Photos /></div>
      break;
      case 'cocktail':
       return  <div><Cocktails /></div>
      break;
      case 'pokemon':
       return  <div><Pokemon /></div>
      break;
      default:
        return <div><Profile /></div>
    }
  }

  render() {

    return (
      <div>
        {/* Don't know when to pass state vs. props
            Because it seems there are occasions when state is just
            passed in as a prop. */}
        <MenuBar view={this.state.display} onMenuClick={this.handleClick}/>
        {this.displayContent()}
      </div>
    )
  }

}

export default MainBox
