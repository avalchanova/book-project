import React from 'react';
import styles from './Footer.module.css';
// TODO: the inline css used to work great, but when i tried to move it 
// in the Footer.module.css something broke completely 
const Footer = () => {
    return (
        <div className={styles.footer} id="footer">© All rights reserved.</div>
    );
};

// const styles = {
//     footer: {
//         position: "absolute",
//         bottom: "0",
//         color: "#b3e5fc",
//         marginLeft: "1%",
//     }
// };

export default Footer;