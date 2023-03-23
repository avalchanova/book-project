import React from 'react';
// TODO: fix the footer position: must stay at the bottom of the page 
const Footer = () => {
    return (
        <div style={styles.footer}>© All rights reserved.</div>
    );
};

const styles = {
    footer: {
        position: "absolute",
        bottom: "0",
        color: "#b3e5fc",
        marginLeft: "1%",
    }
};

export default Footer;