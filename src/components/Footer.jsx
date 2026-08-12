import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
    const linkStyle = {
        color: '#000000',
        textDecoration: 'none',
        transition: 'color 0.2s ease, padding-left 0.2s ease'
    };

    const handleMouseOver = (e) => {
        e.target.style.color = '#ffffff';
        e.target.style.paddingLeft = '4px';
    };

    const handleMouseOut = (e) => {
        e.target.style.color = '#000000';
        e.target.style.paddingLeft = '0px';
    };

    return (
        <footer style={{ width: '100%', backgroundColor: '#e6b800', color: '#000000', padding: '50px 20px 20px 20px', fontFamily: 'sans-serif' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

                {/* Top Logo Section inside Footer */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', textAlign: 'center' }}>
                    <img
                        src={logo}
                        alt="God Cares Ministries Logo"
                        style={{ height: '55px', width: 'auto', marginBottom: '8px', objectFit: 'contain' }}
                    />
                    <h2 style={{
                        fontSize: '28px',
                        fontFamily: '"Brush Script MT", "cursive", sans-serif',
                        fontWeight: 'bold',
                        color: '#2563eb',
                        margin: 0,
                        lineHeight: 1.1,
                        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                    }}>
                        God Cares Ministries
                    </h2>
                    <p style={{
                        fontSize: '10px',
                        letterSpacing: '2.5px',
                        color: '#121211ff',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        margin: '3px 0 0 0',
                        fontFamily: 'sans-serif'
                    }}>
                        (A Ministry Rooted in Love)
                    </p>
                </div>

                {/* 4-Column Footer Links Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '50px', fontSize: '13px' }}>

                    {/* Important Links */}
                    <div>
                        <h3 style={{ fontWeight: 'bold', fontSize: '15px', marginBottom: '15px', color: '#000000' }}>Important Links</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li><Link to="/highlights" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Highlights of the Album</Link></li>
                            <li><Link to="/why-needed" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Why the album is needed?</Link></li>
                            <li><Link to="/who-participate" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Who can participate?</Link></li>
                            <li><Link to="/become-sponsor" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Became a Sponsor</Link></li>
                            <li><Link to="/credits" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Credits & Sincere thanks</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 style={{ fontWeight: 'bold', fontSize: '15px', marginBottom: '15px', color: '#000000' }}>Company</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li><Link to="/" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>The Producer of the Album</Link></li>
                            <li><Link to="/participant-registration" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Participants Registration</Link></li>
                            <li><Link to="/support-matters" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Your Support Matters</Link></li>
                            <li><Link to="/testimonies" style={linkStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Testimonies</Link></li>
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h3 style={{ fontWeight: 'bold', fontSize: '15px', marginBottom: '15px', color: '#000000' }}>Policies</h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <li><span style={{ ...linkStyle, cursor: 'pointer' }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Privacy Policy</span></li>
                            <li><span style={{ ...linkStyle, cursor: 'pointer' }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Refund Policy</span></li>
                            <li><span style={{ ...linkStyle, cursor: 'pointer' }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Terms & Conditions</span></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 style={{ fontWeight: 'bold', fontSize: '15px', marginBottom: '15px', color: '#000000' }}>Contact</h3>
                        <p style={{ margin: '0 0 10px 0', wordBreak: 'break-all' }}>support@theuniversalroyallawoflove.org</p>
                        <p style={{ margin: 0 }}>+91-88923 36400</p>
                    </div>

                </div>

                {/* Divider line & Copyright */}
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.15)', paddingTop: '20px', textAlign: 'center', fontSize: '12px', letterSpacing: '1px', fontWeight: 'bold' }}>
                    © 2026 GODS CARES MINISTRIES
                </div>

            </div>
        </footer>
    );
};

export default Footer;