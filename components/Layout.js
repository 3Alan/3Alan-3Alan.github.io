import Footer from './Footer';
import Meta from './Meta';
import Navigator from './Navigator/index';

export default function Layout({ children }) {
    return (
        <>
            <Meta />
            <Navigator />
            <div className="min-h-screen pt-16">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
}
