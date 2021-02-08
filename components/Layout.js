import Navigator from './Navigator';
import Footer from './Footer';
import Meta from './meta';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navigator preview={preview} />
        <main className="sm:mt-20">{children}</main>
      </div>
      <Footer />
    </>
  );
}
