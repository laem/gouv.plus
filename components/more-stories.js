import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <ul
        css={`
          display: flex;
          flex-wrap: wrap;
          li {
            width: 10rem;
            height: 10rem;
          }
        `}
      >
        {posts.map((post) => (
          <li>
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
