export default function Container({ children, width = 'max-w-screen-lg', bgColor = 'bg-gray-100' }) {
    return (
        <div className={`w-full pb-10 dark:bg-gray-900 ${bgColor}`}>
            <div className={`container mx-auto ${width}`}>{children}</div>
        </div>
    );
}
