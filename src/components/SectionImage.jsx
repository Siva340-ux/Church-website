import React from 'react';
import Jesus2 from "../assets/jesus2.png"
import Jesus3 from "../assets/jesus3.png"

const ComeOutOfHerSection = () => {
    return (
        <section style={{ marginBottom: '60px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '20px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', marginBottom: '25px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                "COME OUT OF HER, MY PEOPLE": GOD'S FINAL CALL TO REFORMATION:
            </h2>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto 25px auto' }}>
                <div style={{ flex: '1', minWidth: '300px', maxWidth: '480px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                    <img
                        src={Jesus2}
                        alt="Come Out of Her My People Part 1"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>

                <div style={{ flex: '1', minWidth: '300px', maxWidth: '480px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                    <img
                        src={Jesus3}
                        alt="Come Out of Her My People Part 2"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default ComeOutOfHerSection;