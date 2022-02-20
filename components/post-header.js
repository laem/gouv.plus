import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ titre, image, date }) {
  return (
    <>
      <PostTitle>{titre}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={titre} src={image} height={620} width={1240} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
