import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from "./styles.scss";
console.log(styles);

const Footer = ({ socialIcon, socialText, copyText }) => (
    <div className={styles.foot}>
        <div className={styles.social}>
            <h5 className="text-warning"> {socialIcon} {socialText} </h5>
        </div>
        <div className={styles.copyright}>
            <h6 className="text-warning"> {copyText} </h6>
        </div>
    </div>
);

Footer.PropTypes = {
    socialIcon: PropTypes.string,
    socialText: PropTypes.string,
    copyText: PropTypes.string
};

export default Footer;