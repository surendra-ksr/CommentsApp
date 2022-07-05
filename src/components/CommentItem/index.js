// Write your code here

import './index.css'

const CommentItem = props => {
  const {commentDetails, deleteComment, toggleFavorite} = props
  const {
    id,
    firstName,
    name,
    comment,
    newClass,
    date,
    isFavorite,
  } = commentDetails

  const imgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const addClass = isFavorite ? '#0ea5e9' : ''

  const delButton = () => {
    deleteComment(id)
  }

  const onFavButton = () => {
    toggleFavorite(id)
  }

  return (
    <li>
      <div className="item-div">
        <div className="item-top-div">
          <p className={`profile ${newClass}`}>{firstName}</p>
          <div className="item-right">
            <div className="item-right-top">
              <p className="name-item">{name}</p>
              <p className="cTime">{date}</p>
            </div>
            <p className="commentP">{comment}</p>
          </div>
        </div>
        <div className="icons-div">
          <button type="button" className="reqButton" onClick={onFavButton}>
            <img src={imgUrl} className="likeImg" alt="like" />
          </button>
          <p className={`likeText ${addClass}`}>Like</p>
          <button
            type="button"
            className="deleteImg reqButton"
            onClick={delButton}
            testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              className="deleteImg"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
