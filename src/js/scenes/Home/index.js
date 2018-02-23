import React, { Component } from 'react';
import Footer from '../../components/Footer';
import styles from "./styles.scss";
import bluenoImg from "../../../images/lampbear.jpg";

class Home extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
            <div className={`container grid-lg ${styles['grid-hero']}`}>
                <header className={styles.centered}>
                    <h1> Quora 2 </h1>
                    <h2> q+a centered around you </h2>

                    <div className={`card ${styles['card-holder']}`}>
                        <div className={`card-image`}>
                            <img src={bluenoImg} className={`img-responsive ${styles['full-img']}`}/>
                        </div>
                        <div className="card-header">
                            <div className="card-title h5">Microsoft</div>
                            <div className="card-subtitle text-gray">Software and hardware</div>
                        </div>
                        <div className={`card-body ${styles['card-body']}`}>
                            Empower every person and every organization on the planet to achieve more.
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary">Do</button>
                        </div>
                    </div>
                    <div className={styles.getit}>
                        <a href="#" className="primary-text"> get it </a>
                    </div>
                    <h6>
                        Something something something something
                        Something something something something
                        Something something something something
                    </h6>
                </header>
                </div>
                <div>
                    <Footer  
                        socialText="Find Chris here!"
                        copyText="c 2018"
                    />
                </div>
            </div>
        )
    }
}

export default Home;