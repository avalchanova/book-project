import React from 'react';
const Footer = () => {
    return (
        <div style={styles.footer}>© All rights reserved.</div>
    );
};

const styles = {
    footer: {
        position: "absolute",
        bottom: "1%",
        color: "#b3e5fc",
        marginLeft: "1%",
    }
};

export default Footer;