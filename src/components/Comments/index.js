import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentsList: [],
    count: 0,
    name: '',
    comment: '',
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const firstName = name.slice(0, 1)
    const date = formatDistanceToNow(new Date())
    const newClass =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]
    const cObject = {
      id: uuidv4(),
      firstName,
      name,
      comment,
      date,
      newClass,
      isFavorite: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, cObject],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  toggleFavorite = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isFavorite: !eachItem.isFavorite}
        }
        return eachItem
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(eachItem => eachItem.id !== id)
    this.setState(prevState => ({
      commentsList: filteredList,
      count: prevState.count - 1,
    }))
  }

  render() {
    const {name, comment, count, commentsList} = this.state
    return (
      <div className="main-div">
        <h1 className="main-h1">Comments</h1>
        <div className="top-div">
          <div className="input-div">
            <p className="top-p">Say something about 4.0 Technologies</p>
            <form className="comments-div" onSubmit={this.addComment}>
              <input
                className="input"
                onChange={this.onChangeName}
                placeholder="Your Name"
                value={name}
              />
              <textarea
                cols="50"
                rows="8"
                className="input"
                onChange={this.onChangeComment}
                placeholder="Your Comment"
                value={comment}
              />
              <button type="submit" className="addButton">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="top-img"
          />
        </div>
        <hr className="hrLine" />
        <div className="commentsDiv">
          <div className="total-comments-div">
            <p className="count">{count}</p>
            <p className="comments-text">Comments</p>
          </div>
          <ul className="ulDiv">
            {commentsList.map(eachItem => (
              <CommentItem
                key={eachItem.id}
                deleteComment={this.deleteComment}
                toggleFavorite={this.toggleFavorite}
                commentDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
