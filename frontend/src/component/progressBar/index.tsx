import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';


const ProgressBar = ({ width, percent }) => {

    const [ value, setValue ] = useState(0);
    const [ percentage, setPercentage] = useState('0');

    useEffect(() => {
        setValue(percent * width);
        setPercentage((percent * 100).toFixed(0));
    });

    return (
        <div>
            <div className={styles.progress_div} style={{ width: width }}>
                <div style={{ width: `${value}px` }} className={styles.progress} />
            </div>
            <div>{ percentage } %</div>
        </div>
    );
}

export default ProgressBar;
