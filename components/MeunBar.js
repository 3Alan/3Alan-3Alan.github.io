import { useRouter } from 'next/router';

export default function MenuBar() {
    const router = useRouter();
    const toggleMode = () => {
        console.log(localStorage.theme);
        if (localStorage.theme === 'dark') {
            localStorage.theme = 'light';
        } else {
            localStorage.theme = 'dark';
        }
        router.reload();
    };
    return (
        <div className="fixed right-2 bottom-2" onClick={toggleMode}>
            黑夜模式
        </div>
    );
}
