import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* 百度统计代码 */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `var _hmt = _hmt || [];
                            (function() {
                            var hm = document.createElement("script");
                            hm.src = "https://hm.baidu.com/hm.js?e6c2ff650ed2b378b13f2bcdc9aa1e21";
                            var s = document.getElementsByTagName("script")[0]; 
                            s.parentNode.insertBefore(hm, s);
                            })();`
                        }}
                    ></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
