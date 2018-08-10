import React, {Component} from 'react'

class MenuBar extends Component {


  handleClick = (e) => {
    this.props.onMenuClick(e.target.id)
  }

  render() {
    return (
      <div className="ui four item menu">
        <a className="item active" id="profile" onClick={this.handleClick}>
          <i className="user large icon" id="profile"/>
        </a>

        <a className="item" id="photo" onClick={this.handleClick}>
          <i className="photo large icon" id="photo"/>
        </a>

        <a className="item" id="cocktail" onClick={this.handleClick}>
          <i className="cocktail large icon" id="cocktail"/>
        </a>

        <a className="item" id="pokemon" onClick={this.handleClick}>
          <i className=" themeisle large icon" id="pokemon"/>
        </a>
      </div>
    )
  }
}

export default MenuBar
