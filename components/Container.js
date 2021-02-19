export default function Container({ children, width = 'max-w-screen-lg', bgColor = 'bg-gray-50' }) {
    return (
        <div className={`w-full pb-10 dark:bg-dark-bg transition-colors ${bgColor}`}>
            <div className={`container mx-auto ${width}`}>{children}</div>
        </div>
    );
}
