import Modal from 'react-modal';
import { useRouter } from 'next/router';
import { useState } from 'react';

import styles from './index.module.scss';


// アプリのルートを識別するクエリセレクタを指定する。
Modal.setAppElement('#__next');


export default function ModalComponent({ modalStyles }: {
    modalStyles: Modal.Styles;
  }) {
    const [modalIsOpen, setIsOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    const openModal = () => {
        setIsOpen(true);
        setIsLoading(true);
    }
    
    const afterOpenModal = () => {
        // モーダルが開いた後の処理
    }
    
    // モーダルを閉じる処理
    const closeModal = () => {
        setIsOpen(false);
        router.push('/');
    }
    
    function LoadingResult(): JSX.Element {
        if (isLoading) {
            return <>
                    <div style={{ textAlign: 'center' }}>
                        <div>
                            <div className={ styles.circle }></div>
                            <div className={ styles.circle1 }></div>
                        </div>
                        <div className={ styles.loading }>
                            <span data-text="L">L</span>
                            <span data-text="O">O</span>
                            <span data-text="A">A</span>
                            <span data-text="D">D</span>
                            <span data-text="I">I</span>
                            <span data-text="N">N</span>
                            <span data-text="G">G</span>
                        </div>
                    </div>
                </>;
        } else {
            return <>
                    <div>
                        <button onClick={closeModal}>close</button>
                    </div>
                </>;
        }
      }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                style={modalStyles}
                >
                <div style={{ height: '100%' }}>
                    <div style={{ height: '74%' }}>{ router.query.q }</div>
                    <LoadingResult />
                </div>
            </Modal>
        </>
    );
  }

  