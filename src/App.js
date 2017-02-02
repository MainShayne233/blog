import React, { Component } from 'react'
import { Router, Route, Link, browserHistory  } from 'react-router'
import logo from './logo.svg'
import "../node_modules/semantic-ui/dist/semantic.min.css"
import './App.css'

class PageContainer extends Component {

  renderPage() {
    const page = this.props.routeParams.page || 'homepage'
    var pageComponent
    try {
     pageComponent = require(`./pages/${page}.jsx`).default
    } catch(e) {
      pageComponent = require(`./pages/missing.jsx`).default
    } 
    return React.createElement(pageComponent)
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
	        <Link style={{color: "white"}} to="/">
            <h2>MainShayne233</h2>
          </Link>
        </div>
        {this.renderPage()}
      </div>
    )
  }
}


class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/:page" component={PageContainer}/>
        <Route path="/" component={PageContainer}/>
      </Router>
    )
  }
}

export default App
