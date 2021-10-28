import { useLayoutEffect, useRef } from 'react';

import styles from './index.module.scss';


export default function Advertisement(props) {
    const inter = `<script src="https://adm.shinobi.jp/s/8c0a5520b7e5a52529b010c8d7009d44"></script>
    <script src="https://adm.shinobi.jp/s/d3b2d4363aec0a4207a46e8ed51c25d8"></script>`;

    const htmlAdString = `
    <div class="admax-ads" data-admax-id="66ba52cd36f362ffa9a52d2722a62baa" style="display:inline-block;width:160px;height:600px;"></div>
    <script type="text/javascript">(admaxads = window.admaxads || []).push({admax_id: "66ba52cd36f362ffa9a52d2722a62baa",type: "banner"});</script>
    <script type="text/javascript" charset="utf-8" src="https://adm.shinobi.jp/st/t.js" async></script>${inter}`;

    const htmlString = `
    <div class="admax-ads" data-admax-id="4ac74c10568cda6e0688eed236b6a8bc" style="display:inline-block;width:160px;height:600px;"></div>
    <script type="text/javascript">(admaxads = window.admaxads || []).push({admax_id: "4ac74c10568cda6e0688eed236b6a8bc",type: "banner"});</script>
    <script type="text/javascript" charset="utf-8" src="https://adm.shinobi.jp/st/t.js" async></script>${inter}`;

    const divRef = useRef();
  
    useLayoutEffect(() => {
    if (!divRef.current) {
        return;
    }

    const fragment = document
        .createRange()
        .createContextualFragment(htmlString);

        if (divRef.current) {
            let refCurrent: any = divRef.current;
            refCurrent.appendChild(fragment);
        }
    }, [htmlString]);

  return <>
            <div className={styles.ad_disp}>
                <div ref={divRef} />
            </div>
        </>;
}
