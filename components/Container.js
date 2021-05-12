export default function Container({ children, width = 'max-w-screen-lg' }) {
  return (
    <div className="w-full pb-10 dark:bg-dark-bg transition-colors bg-gray-50">
      <div className={`container mx-auto ${width}`}>{children}</div>
    </div>
  );
}
