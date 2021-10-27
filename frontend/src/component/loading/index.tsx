import ProgressBar from '../progressBar';
import styles from './index.module.scss';


export default function LoadingComponent({ percent }: {
    percent: number
  }) {

    return (
        <>
            <div style={{ height: '100%' }}>
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
                    <ProgressBar width={320} percent={percent} />
                </div>
            </div>
        </>
    );
  }
