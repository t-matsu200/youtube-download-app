import { useRouter } from 'next/router';
import { useLayoutEffect, useRef } from 'react';

import styles from './index.module.scss';


const htmlString = `<div class="admax-ads" data-admax-id="e37c0a6d6d33f83d803c294a8162de4d" style="display:inline-block;width:300px;height:250px;"></div>
<script type="text/javascript">(admaxads = window.admaxads || []).push({admax_id: "e37c0a6d6d33f83d803c294a8162de4d",type: "banner"});</script>
<script type="text/javascript" charset="utf-8" src="https://adm.shinobi.jp/st/t.js" async></script>`

const HTMLComponent = () => {
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
    
    return <div ref={divRef} />;
};


export default function CompleteComponent() {
    const router = useRouter();

    const back = () => {
        router.push('/');
    }

    return (
        <>
            <div style={{ height: '100%' }}>
                <div style={{ textAlign: 'center' }}><HTMLComponent /></div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <div className={ styles.loading }>
                        <span data-text="C">C</span>
                        <span data-text="O">O</span>
                        <span data-text="M">M</span>
                        <span data-text="P">P</span>
                        <span data-text="L">L</span>
                        <span data-text="E">E</span>
                        <span data-text="T">T</span>
                        <span data-text="E">E</span>
                    </div>
                    <button onClick={back} className={ styles.back_button }>Back</button>
                </div>
            </div>
        </>
    );
  }
