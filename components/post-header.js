import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ titre, image, date }) {
  return (
    <div
      css={`
        margin: 0 auto;
        display: block;
        text-align: center;
      `}
    >
      <PostTitle>{titre}</PostTitle>
      <img
        title={titre}
        src={image}
        css={`
          object-fit: cover;
          margin: 0 auto;
          display: block;
          max-height: 30vh;
        `}
      />
      <small>
        <DateFormatter dateString={date} />
      </small>
    </div>
  )
}
