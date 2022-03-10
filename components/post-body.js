import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div
      css={`
        max-width: 750px;
        margin: 2rem auto;
        text-align: left;
      `}
      className={markdownStyles['markdown']}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}
