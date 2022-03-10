import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
export const dateCool = (date) =>
  new Date(date).toLocaleString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

export default function PostPreview({ titre, image, date, extrait, slug }) {
  return (
    <div
      css={`
        h2 {
          font-size: 110%;
          margin-top: 0.1rem;
        }
        > .content {
          padding: 0.2rem 0.6rem;
          h2 {
            margin: 0.2rem 0;
          }
        }

        position: relative;
        img {
          object-fit: cover;
          width: 100%;
          max-height: 8rem;
        }
      `}
    >
      <img src={image} />
      <div className="content">
        <h2>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a>{titre}</a>
          </Link>
        </h2>
        <small>
          <DateFormatter dateString={date} />
        </small>
        <p>{extrait}</p>
        {/*     <Avatar name={author.name} picture={author.picture} />*/}
      </div>
    </div>
  )
}
