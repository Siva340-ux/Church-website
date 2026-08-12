import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const navItems = [
        { name: "THE PRODUCER'S 1ST ALBUM", path: "/" },
        { name: "THE PRESENT CONDITION OF THE WORLD", path: "/present-condition" },
        { name: "HIGHLIGHTS OF ALBUM", path: "/highlights" },
        { name: "WHY THE ALBUM IS NEEDED?", path: "/why-needed" },
        { name: "WHO CAN PARTICIPATE?", path: "/who-participate" },
        { name: "PARTICIPANT REGISTRATION", path: "/participant-registration" },
        { name: "BECOME A SPONSOR", path: "/become-sponsor" },
        { name: "YOUR SUPPORT MATTERS", path: "/support-matters" },
        { name: "CREDITS & SINCERE THANKS", path: "/credits" },
        { name: "LISTENER TESTIMONIES", path: "/testimonies" },
    ];

    return (
        <header style={{ width: '100%', position: 'sticky', top: 0, zIndex: 50, backgroundColor: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            {/* Top Logo Header Section */}
            <div style={{ width: '100%', backgroundColor: '#ffffff', padding: '12px 0', borderBottom: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'center' }}>
                    <div style={{ width: '70px', height: '50px' }}>
                        <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div>
                        <h1 style={{
                            fontSize: '28px',
                            fontFamily: '"Brush Script MT", "cursive", sans-serif',
                            fontWeight: 'bold',
                            color: '#2563eb',
                            margin: 0,
                            lineHeight: 1.1,
                            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                        }}>
                            God Cares Ministries
                        </h1>
                        <p style={{
                            fontSize: '10px',
                            letterSpacing: '2.5px',
                            color: '#d4af37',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            margin: '3px 0 0 0',
                            fontFamily: 'sans-serif'
                        }}>
                            (A Ministry Rooted in Love)
                        </p>
                    </div>
                </div>
            </div>

            {/* Gold Navigation Bar */}
            <nav style={{ width: '100%', backgroundColor: '#e6b800', overflowX: 'auto', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06)' }}>
                <ul style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', listStyle: 'none', margin: 0, padding: '10px 20px', whiteSpace: 'nowrap', gap: '10px' }}>
                    {navItems.map((item, index) => (
                        <li key={index} style={{ padding: '0 6px' }}>
                            <Link
                                to={item.path}
                                style={{
                                    color: '#000000',
                                    fontSize: '11px',
                                    fontWeight: 900,
                                    letterSpacing: '0.5px',
                                    textDecoration: 'none',
                                    paddingBottom: '3px',
                                    borderBottom: '2px solid transparent',
                                    transition: 'all 0.2s ease-in-out'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.color = '#ffffff';
                                    e.target.style.borderColor = '#ffffff';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.color = '#000000';
                                    e.target.style.borderColor = 'transparent';
                                }}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;