import React from 'react';
import power from '../assets/power.png'
import power2 from '../assets/power2.png'
import Backdrop from '../components/Backdrop';
import law from '../assets/law.png';
import law2 from '../assets/law2.png'
import songs from '../assets/songs.png'
import Power from '../components/Power'
import Card from "../components/Card"

// love
import love1 from '../assets/love/love1.png';
import love2 from '../assets/love/love2.png';
import love3 from '../assets/love/love3.png';
import love4 from '../assets/love/love4.png';
import love5 from '../assets/love/love5.png';
import love6 from '../assets/love/love6.png';
import love7 from '../assets/love/love7.png';
import love8 from '../assets/love/love8.png';
import love9 from '../assets/love/love9.png';
import love10 from '../assets/love/love10.png';
import love11 from '../assets/love/love11.png';
import love12 from '../assets/love/love12.png';
import love13 from '../assets/love/love13.png';
import love14 from '../assets/love/love14.png';
import love15 from '../assets/love/love15.png';
import love16 from '../assets/love/love16.png';
import love17 from '../assets/love/love17.png';
import love18 from '../assets/love/love18.png';
import love19 from '../assets/love/love19.png';
import love20 from '../assets/love/love20.png';
import love21 from '../assets/love/love21.png';
import love22 from '../assets/love/love22.png';
import love23 from '../assets/love/love23.png';
import love24 from '../assets/love/love24.png';
import love25 from '../assets/love/love25.png';
import love26 from '../assets/love/love26.png';
import love27 from '../assets/love/love27.png';
import love28 from '../assets/love/love28.png';
import love29 from '../assets/love/love29.png';
import love30 from '../assets/love/love30.png';
import love31 from '../assets/love/love31.png';
import love32 from '../assets/love/love32.png';

const WhyNeeded = () => {
    const imagesList = [love1, love2, love3, love4, love5, love6, love7, love8, love9, love10, love11, love12, love13, love14, love15, love16, love17, love18, love19, love20, love21, love22, love23, love24, love25, love26, love27, love28, love29, love30, love31, love32];

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <Backdrop title="Why the Album is Needed?" />
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
                {/* Section Heading */}
                <h2 style={{ fontSize: '24px', fontFamily: 'serif', fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>
                    A Timely Message for a Troubled World
                </h2>

                {/* Introductory Paragraphs */}
                <div style={{ maxWidth: '800px', margin: '0 auto 40px auto', fontSize: '15px', lineHeight: '1.6', color: '#374151', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <p>
                        In an age marked by confusion, moral decline, and spiritual emptiness, the need for truth, guidance, and restoration has never been greater. Humanity is searching for meaning, peace, and direction—but often in the wrong places.
                    </p>
                    <p>
                        This album emerges as a response to that need—offering a message rooted in timeless truth, expressed through the universal language of music.
                    </p>
                </div>

                {/* Main Feature Image Container */}
                <div style={{ maxWidth: '850px', height: '480px', margin: '0 auto', borderRadius: '16px', overflow: 'hidden', border: '1px solid #d1d5db', backgroundColor: '#f3f4f6', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                    <img
                        src={law}
                        alt="Setting the Words of the Law to Music"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                </div>
                <div style={{ maxWidth: '850px', height: '480px', margin: '0 auto', borderRadius: '16px', overflow: 'hidden', border: '1px solid #d1d5db', backgroundColor: '#f3f4f6', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', marginTop: '80px' }}>
                    <img
                        src={law2}
                        alt="Setting the Words of the Law to Music"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                </div>
            </div>
            {/* 6. A Timely Message for a Troubled World */}


            {/* 7. The Power of Music to Shape Lives */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px 80px 20px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 440px', maxWidth: '443px', height: '296px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6' }}>
                        <img
                            src={power}
                            alt="The Power of Music to Shape Lives"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </div>
                    <div style={{ flex: '1 1 450px' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: '900', color: '#b45309', letterSpacing: '1px', marginBottom: '15px', textTransform: 'uppercase', fontFamily: 'serif' }}>
                            The Power of Music to Shape Lives
                        </h3>
                        <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', marginBottom: '15px' }}>
                            Throughout history, music has played a vital role in teaching, healing, and transforming hearts.
                        </p>
                        <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', marginBottom: '20px' }}>
                            In the experience of Israel, songs were used to preserve truth, strengthen faith, and unite people. As they journeyed through the wilderness, God's commandments, promises, and mighty works were expressed through music—helping people remember, reflect, and remain faithful.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#374151' }}>
                                <span style={{ color: '#d97706', fontWeight: 'bold' }}>&#10003;</span>
                                <span>Music fixed divine truths in the mind</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#374151' }}>
                                <span style={{ color: '#d97706', fontWeight: 'bold' }}>&#10003;</span>
                                <span>It uplifted hearts during trials and difficulties</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#374151' }}>
                                <span style={{ color: '#d97706', fontWeight: 'bold' }}>&#10003;</span>
                                <span>It brought unity, order, and spiritual connection</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#374151' }}>
                                <span style={{ color: '#d97706', fontWeight: 'bold' }}>&#10003;</span>
                                <span>It strengthened faith and trust in God</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 8. Teaching Truth Through Song Banner */}
            <div style={{ backgroundColor: '#fef9e7', borderTop: '1px solid #fde68a', borderBottom: '1px solid #fde68a', padding: '60px 20px', marginBottom: '80px' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <h3 style={{ fontSize: '24px', fontFamily: 'serif', fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', lineHeight: '1.3' }}>
                            Teaching Truth Through Song
                        </h3>
                    </div>
                    <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8' }}>
                            God instructed that His laws should not only be spoken—but taught diligently, repeated, and remembered.
                        </p>
                        <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8' }}>
                            In ancient times, even children learned divine principles through songs. As they sang together, truth became part of their daily lives—shaping their character and guiding their actions.
                        </p>
                        <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', fontWeight: 'bold' }}>
                            This principle remains powerful today:<br />
                            What is sung is remembered. What is remembered shapes life.
                        </p>
                    </div>
                </div>
            </div>
            {/* <Power /> */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px 80px 20px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '40px', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 440px', maxWidth: '443px', height: '296px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6' }}>
                        <img
                            src={power2}
                            alt="The Power of Music to Shape Lives"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </div>
                    <div style={{ flex: '1 1 450px' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: '900', color: '#b45309', letterSpacing: '1px', marginBottom: '15px', textTransform: 'uppercase', fontFamily: 'serif' }}>
                            The Power of Music to Shape Lives
                        </h3>
                        <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', marginBottom: '15px' }}>
                            Throughout history, music has played a vital role in teaching, healing, and transforming hearts.
                        </p>
                        <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', marginBottom: '20px' }}>
                            In the experience of Israel, songs were used to preserve truth, strengthen faith, and unite people. As they journeyed through the wilderness, God's commandments, promises, and mighty works were expressed through music—helping people remember, reflect, and remain faithful.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#374151' }}>
                                <span style={{ color: '#d97706', fontWeight: 'bold' }}>&#10003;</span>
                                <span>Music fixed divine truths in the mind</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#374151' }}>
                                <span style={{ color: '#d97706', fontWeight: 'bold' }}>&#10003;</span>
                                <span>It uplifted hearts during trials and difficulties</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#374151' }}>
                                <span style={{ color: '#d97706', fontWeight: 'bold' }}>&#10003;</span>
                                <span>It brought unity, order, and spiritual connection</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#374151' }}>
                                <span style={{ color: '#d97706', fontWeight: 'bold' }}>&#10003;</span>
                                <span>It strengthened faith and trust in God</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* 10. WhyNeeded Component (The Universal Royal Law of Love - Dual Cards) */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px 80px 20px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '22px', fontFamily: 'serif', fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                    The Universal Royal Law of Love
                </h3>
                <p style={{ fontSize: '12px', color: '#4b5563', marginBottom: '40px', fontStyle: 'italic' }}>
                    (A picture tells the story, the purpose, and the message in a single glance.)
                </p>


            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {imagesList.reduce((rows, image, index) => {
                    if (index % 2 === 0) {
                        rows.push([image]);
                    } else {
                        rows[rows.length - 1].push(image);
                    }
                    return rows;
                }, []).map((pair, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', gap: '45px', flexWrap: 'wrap' }}>
                        {pair.map((item, idx) => (
                            <div
                                key={idx}
                                style={{ flex: '1 1 450px', maxWidth: '460px', height: '280px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #d1d5db', backgroundColor: '#f3f4f6', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                            >
                                <img
                                    src={typeof item === 'string' ? item : item?.imageUrl}
                                    alt={typeof item === 'string' ? `Love Image ${rowIndex * 2 + idx + 1}` : item?.altText}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '45px', flexWrap: 'wrap', marginTop: "40px" }}>
                <img src={songs} alt="" style={{ width: '40%', height: '40%', objectFit: 'cover', display: 'block' }} />
            </div>
            <Card />
        </div>
    );
};




export default WhyNeeded;