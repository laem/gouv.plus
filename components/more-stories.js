import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <ul
        css={`
          display: flex;
          flex-wrap: wrap;
          padding-left: 0.6rem;
          li {
            width: 12rem;
            height: 20rem;
            border: 3px solid ${(props) => props.theme.colors.primary};
            border-radius: 0.2rem;
            margin: 0.6rem;
          }
        `}
      >
        {posts.map((post) => (
          <li key={post.titre}>
            <PostPreview {...post} />
          </li>
        ))}
      </ul>
    </section>
  )
}
