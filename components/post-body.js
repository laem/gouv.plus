import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div
      css={`
        max-width: 750px;
        margin: 2rem auto;

        text-align: left;
        blockquote {
          padding-left: 0.6rem;
          margin-left: 1rem;
          border-left: 8px solid ${(props) => props.theme.colors.primary};
        }
        img {
          max-width: 90%;
        }
      `}
      className={markdownStyles['markdown']}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
