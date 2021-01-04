import markdownStyles from './markdown-styles.module.css';

export default function PostBody({ content }) {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
