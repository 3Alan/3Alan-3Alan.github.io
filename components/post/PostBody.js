import markdownStyles from './markdown-styles.module.css';

export default function PostBody({ content }) {
  return (
    <div className="max-w-screen-md">
      <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
