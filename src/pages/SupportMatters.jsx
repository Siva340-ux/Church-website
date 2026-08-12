import React from 'react';
import Backdrop from '../components/Backdrop';

const SupportMatters = () => {
    return (
        <div className="min-h-screen bg-black text-white p-8">
            <Backdrop title="Be Part of a Meaningful Mission" />
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif' }}>

                {/* Section 1: Intro Text */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '26px', fontFamily: 'serif', fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '25px' }}>
                        Be Part of a Meaningful Mission
                    </h2>
                    <p style={{ maxWidth: '850px', margin: '0 auto 15px auto', fontSize: '13px', lineHeight: '1.8', color: '#374151' }}>
                        Since the founding of God Cares Ministries in 1999, this mission has continued entirely through the sacrificial support of our own family resources, without financial assistance from any individual, family, organization, or institution—either in India or abroad.
                    </p>
                    <p style={{ maxWidth: '850px', margin: '0 auto', fontSize: '13px', lineHeight: '1.8', color: '#374151' }}>
                        Today, we humbly invite compassionate hearts across the world to support the production of truth-filled video albums, music albums, documentaries, educational media, and multilingual publications that address and expose the growing evils affecting society today.
                    </p>
                </div>

                {/* Section 2: Mission Guidance & Support Lists */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '60px' }}>

                    {/* Card 1 */}
                    <div style={{ backgroundColor: '#fef3c7', border: '1px solid #fde68a', borderRadius: '24px', padding: '35px 30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ fontSize: '14px', fontFamily: 'serif', fontWeight: 'bold', color: '#b45309', marginBottom: '15px' }}>
                            Through these productions, this mission seeks to bring awareness and guidance regarding:
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {[
                                "Violence, hatred, and corruption in society",
                                "Immorality, injustice, and moral decline",
                                "Destruction of family values and human dignity",
                                "Addiction, abuse, and harmful lifestyles",
                                "Religious intolerance, division, and hatred",
                                "Lack of compassion, peace, and respect among humanity",
                                "The urgent need for righteousness, truth, love, harmony, and obedience to the Universal Royal Law of Love"
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                    <span style={{ color: '#d97706', fontSize: '12px', fontWeight: 'bold', marginTop: '2px' }}>&#10003;</span>
                                    <span style={{ fontSize: '13px', color: '#374151', lineHeight: '1.5' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div style={{ backgroundColor: '#fef3c7', border: '1px solid #fde68a', borderRadius: '24px', padding: '35px 30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ fontSize: '14px', fontFamily: 'serif', fontWeight: 'bold', color: '#b45309', marginBottom: '15px' }}>
                            Your support will help us:
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {[
                                "Produce multilingual video albums and music productions",
                                "Create educational and humanitarian media content",
                                "Translate truth-filled productions into many world languages",
                                "Reach people globally through digital outreach and publications",
                                "Spread messages of peace, righteousness, compassion, truth, and hope",
                                "Educate humanity about 'The Universal Royal Law of Love' and its importance for peaceful living"
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                    <span style={{ color: '#d97706', fontSize: '12px', fontWeight: 'bold', marginTop: '2px' }}>&#10003;</span>
                                    <span style={{ fontSize: '13px', color: '#374151', lineHeight: '1.5' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Section 3: Closing Statement & Bible Verse */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <p style={{ maxWidth: '850px', margin: '0 auto 20px auto', fontSize: '13px', lineHeight: '1.8', color: '#374151' }}>
                        These productions are intended to inspire moral transformation, strengthen families and communities, encourage compassion and righteousness, and guide humanity toward peaceful coexistence.
                    </p>
                    <p style={{ maxWidth: '850px', margin: '0 auto 20px auto', fontSize: '13px', lineHeight: '1.8', color: '#374151' }}>
                        By supporting this mission, you become part of a global effort to spread truth, love, peace, and hope through media and educational outreach.
                    </p>
                    <blockquote style={{ fontSize: '14px', fontStyle: 'italic', color: '#b45309', marginBottom: '30px', fontFamily: 'serif' }}>
                        &ldquo;He that hath pity upon the poor lendeth unto the Lord.&rdquo; — Proverbs 19:17
                    </blockquote>
                    <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', marginBottom: '10px' }}>
                        We sincerely thank you for your prayers, encouragement, and financial support.
                    </p>
                    <p style={{ fontSize: '13px', fontWeight: 'bold', color: '#b45309', marginBottom: '5px' }}>
                        God Cares Ministries
                    </p>
                    <p style={{ fontSize: '13px', color: '#374151', marginBottom: '20px' }}>
                        Serving Truth. Serving Humanity. Serving God.
                    </p>
                    <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151' }}>
                        To support this production mission, kindly contact us or contribute through the details provided below.<br />
                        Together, let us spread the message of truth, righteousness, peace, and love to the world.
                    </p>
                </div>

                {/* Section 4: Get Involved Banner */}
                <div style={{ backgroundColor: '#ffb703', borderRadius: '24px', padding: '40px 20px', textAlign: 'center', marginBottom: '60px' }}>
                    <h3 style={{ fontSize: '22px', fontFamily: 'serif', fontWeight: '900', color: '#78350f', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px' }}>
                        Get Involved
                    </h3>
                    <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '13px', color: '#374151', lineHeight: '1.6' }}>
                        Our platform will provide complete details on how you can participate—whether as an individual or a group—including role selection, registration, and opportunities for global exposure.
                    </p>
                </div>

                {/* Section 5: How You Can Support Grid */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h3 style={{ fontSize: '22px', fontFamily: 'serif', fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px' }}>
                        How You Can Support
                    </h3>
                    <p style={{ fontSize: '13px', color: '#374151', marginBottom: '30px' }}>
                        We are looking for passionate individuals and organizations who can contribute through:
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        {[
                            "Guidance and Mentorship",
                            "Publicity & Promotion Support",
                            "AI-Driven & Creative Contribution",
                            "Advertisement & Media Production",
                            "Coordination, Volunteering, & Outreach"
                        ].map((title, idx) => (
                            <div key={idx} style={{
                                backgroundColor: '#fef3c7',
                                border: '1px solid #fde68a',
                                borderRadius: '20px',
                                padding: '25px 20px',
                                flex: '1 1 180px',
                                maxWidth: '200px',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center'
                            }}>
                                <span style={{ fontSize: '13px', fontFamily: 'serif', fontWeight: 'bold', color: '#b45309', textTransform: 'uppercase' }}>
                                    {title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 6: Scan & Donate */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h3 style={{ fontSize: '22px', fontFamily: 'serif', fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '40px' }}>
                        Scan & Donate
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

                        {/* QR Box 1 */}
                        <div style={{ backgroundColor: '#fff', border: '1px solid #d1d5db', borderRadius: '24px', padding: '25px', width: '300px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                            <p style={{ fontSize: '12px', color: '#374151', lineHeight: '1.5', marginBottom: '20px', textAlign: 'left' }}>
                                This State Bank of India Current Account is maintained solely for charitable, humanitarian, and ministry purposes.
                            </p>
                            <div style={{ backgroundColor: '#fef3c7', padding: '8px 12px', borderRadius: '20px', display: 'inline-block', marginBottom: '15px' }}>
                                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#b45309' }}>STATE BANK OF INDIA</span>
                            </div>
                            <div style={{ width: '180px', height: '180px', margin: '0 auto 15px auto', backgroundColor: '#f3f4f6', borderRadius: '12px', overflow: 'hidden' }}>
                                <img src="https://picsum.photos/seed/qrcode1/180/180" alt="QR Code 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <p style={{ fontSize: '11px', color: '#6b7280', wordBreak: 'break-all' }}>UPI ID: 326783046725799@cnrb</p>
                        </div>

                        {/* Form Box */}
                        <div style={{ backgroundColor: '#fff', border: '1px solid #d1d5db', borderRadius: '24px', padding: '25px', width: '320px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'left' }}>
                            <h4 style={{ fontSize: '14px', fontFamily: 'serif', fontWeight: 'bold', color: '#374151', textAlign: 'center', marginBottom: '20px' }}>
                                YOUR CONTRIBUTION MAKES A DIFFERENCE
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <input type="text" placeholder="Full Name" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '12px' }} readOnly />
                                <input type="email" placeholder="Email Address" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '12px' }} readOnly />
                                <input type="text" placeholder="Phone Number" style={{ padding: '10px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '12px' }} readOnly />
                                <div>
                                    <span style={{ fontSize: '12px', color: '#b45309', fontWeight: 'bold' }}>Select Amount*</span>
                                    <div style={{ display: 'flex', gap: '8px', marginTop: '5px' }}>
                                        {['₹ 500', '₹ 1000', '₹ 5000'].map((amt, idx) => (
                                            <button key={idx} style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid #f59e0b', backgroundColor: '#fef3c7', fontSize: '11px', color: '#b45309' }}>{amt}</button>
                                        ))}
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center', backgroundColor: '#ffb703', padding: '10px', borderRadius: '20px', cursor: 'pointer', marginTop: '10px' }}>
                                    <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#78350f' }}>Make a Donation ♡</span>
                                </div>
                            </div>
                        </div>

                        {/* QR Box 2 */}
                        <div style={{ backgroundColor: '#fff', border: '1px solid #d1d5db', borderRadius: '24px', padding: '25px', width: '300px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                            <p style={{ fontSize: '12px', color: '#374151', lineHeight: '1.5', marginBottom: '20px', textAlign: 'left' }}>
                                This Canara Bank Current Account is designated exclusively for participation, enrolment and voluntary support for &ldquo;The Universal Royal Law of Love&rdquo; Project.
                            </p>
                            <div style={{ backgroundColor: '#fef3c7', padding: '8px 12px', borderRadius: '20px', display: 'inline-block', marginBottom: '15px' }}>
                                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#b45309' }}>CANARA BANK</span>
                            </div>
                            <div style={{ width: '180px', height: '180px', margin: '0 auto 15px auto', backgroundColor: '#f3f4f6', borderRadius: '12px', overflow: 'hidden' }}>
                                <img src="https://picsum.photos/seed/qrcode2/180/180" alt="QR Code 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <p style={{ fontSize: '11px', color: '#6b7280', wordBreak: 'break-all' }}>UPI ID: godcaresministries@sbi</p>
                        </div>

                    </div>
                </div>

                {/* Section 7: For Foreign Donors */}
                <div style={{ backgroundColor: '#ffb703', borderRadius: '24px', padding: '40px 30px', maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
                    <h3 style={{ fontSize: '20px', fontFamily: 'serif', fontWeight: '900', color: '#78350f', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>
                        For Foreign Donors
                    </h3>
                    <p style={{ fontSize: '12px', color: '#374151', marginBottom: '25px' }}>
                        Designated FCRA Receipt-cum-Utilisation Account
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', maxWidth: '650px', margin: '0 auto' }}>
                        {[
                            "Account Name: God Cares Ministries",
                            "Bank: State Bank of India",
                            "Account Number: 43770602442",
                            "Branch: New Delhi",
                            "Branch Code: 00691",
                            "IFSC Code: SBIN0000691",
                            "SWIFT Code: SBININBB104",
                            "Branch Address: State Bank of India, New Delhi Main Branch, FCRA Cell, 11 Sansad Marg New Delhi - 110001, India"
                        ].map((detail, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                <span style={{ color: '#78350f', fontSize: '12px', fontWeight: 'bold', marginTop: '2px' }}>&#10003;</span>
                                <span style={{ fontSize: '13px', color: '#374151', lineHeight: '1.5' }}>{detail}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SupportMatters;