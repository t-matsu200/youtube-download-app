import { useLayoutEffect, useRef } from 'react';


export default function Advertisement(props) {
    const inter = `
    <script type="text/javascript">(admaxads = window.admaxads || []).push({admax_id: "8c0a5520b7e5a52529b010c8d7009d44",type: "action"});</script>
    <script type="text/javascript" charset="utf-8" src="https://adm.shinobi.jp/st/t.js" async></script>`;

    const smartPhonHtml = `<script type="text/javascript">(admaxads = window.admaxads || []).push({admax_id: "e5bd851fb6048282a5037dbcfdcda547",type: "overlay"});</script>
    <script type="text/javascript" charset="utf-8" src="https://adm.shinobi.jp/st/t.js" async></script>`;

    const smartPhonAdHtml = `<script type="text/javascript">(admaxads = window.admaxads || []).push({admax_id: "ad9d235476e7ed671d6480df04a78d78",type: "overlay"});</script>
    <script type="text/javascript" charset="utf-8" src="https://adm.shinobi.jp/st/t.js" async></script>`;

    const htmlString = `
    <div class="admax-ads" data-admax-id="66ba52cd36f362ffa9a52d2722a62baa" style="display:inline-block;width:160px;height:600px;"></div>
    <script type="text/javascript">(admaxads = window.admaxads || []).push({admax_id: "66ba52cd36f362ffa9a52d2722a62baa",type: "banner"});</script>
    <script type="text/javascript" charset="utf-8" src="https://adm.shinobi.jp/st/t.js" async></script>
    ${inter} ${smartPhonAdHtml}`;

    const htmlString2 = `
    <div class="admax-ads" data-admax-id="4ac74c10568cda6e0688eed236b6a8bc" style="display:inline-block;width:160px;height:600px;"></div>
    <script type="text/javascript">(admaxads = window.admaxads || []).push({admax_id: "4ac74c10568cda6e0688eed236b6a8bc",type: "banner"});</script>
    <script type="text/javascript" charset="utf-8" src="https://adm.shinobi.jp/st/t.js" async></script>
    ${inter} ${smartPhonAdHtml}`;

    const divRef = useRef();
  
    useLayoutEffect(() => {
    if (!divRef.current) {
        return;
    }

    const fragment = document
        .createRange()
        .createContextualFragment(htmlString2);

        if (divRef.current) {
        let refCurrent: any = divRef.current;
        refCurrent.appendChild(fragment);
        }
    }, [htmlString2]);
  
  return <div ref={divRef} />;
}
