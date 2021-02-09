import markdownStyles from './markdown-styles.module.css';
import cn from 'classnames';

export default function PostBody({ content }) {
    return (
        <div
            className={cn('dark:text-gray-300', markdownStyles['markdown'])}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
