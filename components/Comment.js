import { useEffect } from 'react';
import AV from 'leancloud-storage';

export default function Comment() {
    useEffect(() => {
        // AV.init({
        //     appId: 'aowgxqHE7wB4I8HLWqC4c4Ut-MdYXbMMI',
        //     appKey: '37wkY4T3cM7nV2UWV7EIEHPy'
        // });
        // const query = new AV.Query('Counter');
        // // https://leancloud.cn/docs/leanstorage_guide-js.html#hash1025913543
        // query.get('5fa8feb8cb5eb5529f9e864c').then((counter) => {
        //     const times = counter.get('times');
        //     console.log(times);
        // });
        // eslint-disable-next-line global-require
        const Valine = require('valine');
        const comment = new Valine({
            el: '#vcomments',
            appId: 'aowgxqHE7wB4I8HLWqC4c4Ut-MdYXbMMI',
            appKey: '37wkY4T3cM7nV2UWV7EIEHPy',
            visitor: true, // 阅读量统计
            recordIP: true,
            enableQQ: true,
            requiredFields: ['nick'],
            avatarForce: true
            // other config
        });
        console.log(comment);
    }, []);
    return <div id="vcomments"></div>;
}
