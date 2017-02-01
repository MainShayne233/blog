import React, { Component } from 'react'

const pages = [
]

export default class Homepage extends Component {



  renderPages() {
    return pages.map((page, index) => {
      return (
        <a
          href={`/${page}`}
          key={index}
          >
          {page}
        </a>
      )
    })
  }

  render() {
    return (
      <div>
        <p>a blog about things im thinking about</p>
        <p>not necessarily things i know a lot about</p>
        <p>this is obviousily a create-react-app</p>
        <a href="https://github.com/MainShayne233/blog">and open source af</a>
        <hr/>
        <div>
          {this.renderPages()}
        </div>
      </div>
    )
  }
}
