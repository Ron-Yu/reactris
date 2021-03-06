import React, { Component } from 'react';
import styles from './style.scss';


export default class Panel extends Component {

    get nextShape() {
        const { next } = this.props;

        return next.pattern[0].map( (e, i) => <rect key={i} className={styles.rect} x={e[0] * 15} y={e[1] * 15} /> );
    }
    
    render() {
        return (
            <section className={styles.section}>
                NEXT
                <svg className={styles.svg}>
                    <g>
                        {this.nextShape}
                    </g>
                </svg>
            </section>
        );
    }
}