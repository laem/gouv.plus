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
          padding: 0.6rem;
        }
      `}
    >
      <CoverImage
        slug={slug}
        title={titre}
        src={image}
        height={278}
        width={556}
      />
      <div className="content">
        <h2>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a>{titre}</a>
          </Link>
        </h2>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{extrait}</p>
        {/*     <Avatar name={author.name} picture={author.picture} />*/}
      </div>
    </div>
  )
}
