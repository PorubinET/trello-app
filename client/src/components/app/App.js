import React, { Component } from "react";
import TrelloList from "../trelloList/trelloList";
import Sidebar from "../sidebar/sidebar"
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    const {lists} = this.props

    return (    
      <div className="listConteiner">
        <Sidebar/>
        {lists.map(list =>
          <TrelloList key={list.id} title={list.title} cards={list.cards} />
        )}
      </div>
    )
  }
}


const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);