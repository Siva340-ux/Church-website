import React from 'react';
import heroBgImage from '../assets/backdrop-cloud.png';         // Background cloud image for the first section
import highlightImage from '../assets/main-graphic.png'; // Introduction section image
import rolesImage from '../assets/roles.png';
import sing from '../assets/sing.png';
import visualalbum from '../assets/visual-album.png';
import lyricists from '../assets/lyricists.png';
import md from '../assets/md.png';
import orchestra from '../assets/orchestra.png';
import psinger from '../assets/p-singers.png';
import tvsinger from '../assets/tv-singers.png';
import supersinger from '../assets/super-singer.png';
import socialmedia from '../assets/social-media.png';
import juniorsinger from '../assets/junior-singer.png';
import ministers from '../assets/ministers.png';
import Backdrop from '../components/Backdrop';
import renowned from '../assets/renowned.png'
import sololists from '../assets/sololists.png'
import choirs from '../assets/choirs.png'
import musicians from '../assets/musicians.png'
import seniorvocal from '../assets/senior-vocal.png'
import midvocal from '../assets/mid-age-vocal.png'
import juniorvocal from '../assets/junior-vocal.png'
import talentedvocal from '../assets/talented-vocal.png'
import narrators from '../assets/narrators.png'
import filmdirector from '../assets/film-director.png'
import cameraman from '../assets/cameraman.png'
import screenwriters from '../assets/screenwriters.png'
import actors from '../assets/actors.png'
import engineer from '../assets/engineer.png'
import videoeditor from '../assets/video-editor.png'
import aiaudio from '../assets/ai audio.png'
import graphicdesigner from '../assets/graphic designer.png'
import makeup from '../assets/makeup.png'
import performers from '../assets/performers.png'
import undiscovered from '../assets/undiscovered.png'
import newspaper from '../assets/newspaper.png'
import volunteers from '../assets/volunteers.png'
import webdesigner from '../assets/web designer.png'


// Participation & Roles section image on the left

const Highlights = () => {
    return (
        <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', fontFamily: 'sans-serif' }}>

            {/* 1. Hero Header Banner */}

            <Backdrop title="Highlights of the Album" />

            {/* Main Content Body */}
            <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '60px 20px' }}>

                {/* 2. Introduction Section */}
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '40px', flexWrap: 'wrap', marginBottom: '60px' }}>

                    <div style={{ flex: '1 1 440px', maxWidth: '443px', height: '296px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6' }}>
                        <img
                            src={highlightImage}
                            alt="The Universal Royal Law of Love"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </div>

                    <div style={{ flex: '1 1 450px' }}>
                        <h2 style={{ fontSize: '20px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', letterSpacing: '1px', marginBottom: '15px', lineHeight: '1.4', textTransform: 'uppercase' }}>
                            Introduction: The Universal Royal Law of Love
                        </h2>
                        <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', marginBottom: '15px' }}>
                            The Universal Royal Law of Love is an extraordinary global audio/visual production created to resonate with all humanity—transcending language, culture, race, religion, and geographical boundaries.
                        </p>
                        <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', marginBottom: '15px' }}>
                            At its core, this project is a celebration of unity, love, justice, and universal values of life. Through powerful visual storytelling, each theme is brought to life using real-life dramatizations, creating an immersive and emotionally engaging experience that makes timeless truths both visible and relatable to audiences around the world.
                        </p>
                    </div>
                </div>

                {/* 3. Callout Info Box */}
                <div style={{ backgroundColor: '#fef3c7', border: '1px solid #fde68a', borderRadius: '16px', padding: '40px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', marginBottom: '80px' }}>
                    <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', marginBottom: '15px' }}>
                        Click the link below to learn who is eligible to participate, who can register, and how to complete the registration for "The Universal Royal Law of Love" Multilingual Audio/Visual Album.
                    </p>
                    <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', marginBottom: '25px' }}>
                        Discover the participation guidelines, eligibility criteria, registration process, and other important information to become a part of this unique multilingual audio/visual initiative. We warmly invite individuals who share this vision to register and participate in spreading a universal message of love, unity, and hope.
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1pSWbGLfnl3hpajatJxzOGGLcOjTxTCHd/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '13px', color: '#2563eb', fontWeight: 'bold', wordBreak: 'break-all', textDecoration: 'underline' }}
                    >
                        https://drive.google.com/file/d/1pSWbGLfnl3hpajatJxzOGGLcOjTxTCHd/view?usp=sharing
                    </a>
                </div>

            </div>

            {/* 4. Project Highlights Stats Banner */}
            <div style={{ backgroundColor: '#fef9e7', borderTop: '1px solid #fde68a', borderBottom: '1px solid #fde68a', padding: '50px 20px', textAlign: 'center', marginBottom: '60px' }}>
                <h3 style={{ fontSize: '22px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Project Highlights
                </h3>
                <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '40px' }}>
                    A Global Collaboration on an Unprecedented Scale
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px 60px', maxWidth: '1000px', margin: '0 auto' }}>
                    <div>
                        <div style={{ fontSize: '32px', fontFamily: 'serif', fontWeight: 'bold', color: '#1f2937' }}>21+</div>
                        <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#4b5563', letterSpacing: '1px', marginTop: '5px', textTransform: 'uppercase' }}>Lyricists</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '32px', fontFamily: 'serif', fontWeight: 'bold', color: '#1f2937' }}>21+</div>
                        <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#4b5563', letterSpacing: '1px', marginTop: '5px', textTransform: 'uppercase' }}>Music Directors</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '32px', fontFamily: 'serif', fontWeight: 'bold', color: '#1f2937' }}>10,000</div>
                        <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#4b5563', letterSpacing: '1px', marginTop: '5px', textTransform: 'uppercase' }}>Voices</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '32px', fontFamily: 'serif', fontWeight: 'bold', color: '#1f2937' }}>21+</div>
                        <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#4b5563', letterSpacing: '1px', marginTop: '5px', textTransform: 'uppercase' }}>Global Directors</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '32px', fontFamily: 'serif', fontWeight: 'bold', color: '#1f2937' }}>195</div>
                        <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#4b5563', letterSpacing: '1px', marginTop: '5px', textTransform: 'uppercase' }}>Countries</div>
                    </div>
                </div>
            </div>

            {/* 5. Participation & Roles Section */}
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px 80px 20px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '40px', flexWrap: 'wrap' }}>

                    {/* Left Side Image */}
                    <div style={{ flex: '1 1 440px', maxWidth: '443px', height: '520px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6' }}>
                        <img
                            src={rolesImage}
                            alt="Participation & Roles"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </div>

                    {/* Right Side Roles Content */}
                    <div style={{ flex: '1 1 450px' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: '900', color: '#b45309', letterSpacing: '1px', marginBottom: '25px', textTransform: 'uppercase', fontFamily: "Anastasia" }}>
                            Participation & Roles
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                            {/* Role Item 1 */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <span style={{ color: '#d97706', fontSize: '14px', marginTop: '2px' }}>&bull;</span>
                                <div>
                                    <h4 style={{ fontSize: '13px', fontWeight: 'bold', color: '#b45309', marginBottom: '4px', textTransform: 'uppercase' }}>Singers & Personalities</h4>
                                    <p style={{ fontSize: '12px', color: '#374151', lineHeight: '1.6' }}>Open to all voices worldwide—professionals and newcomers—bringing songs to life through powerful real-life storytelling.</p>
                                </div>
                            </div>

                            {/* Role Item 2 */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <span style={{ color: '#d97706', fontSize: '14px', marginTop: '2px' }}>&bull;</span>
                                <div>
                                    <h4 style={{ fontSize: '13px', fontWeight: 'bold', color: '#b45309', marginBottom: '4px', textTransform: 'uppercase' }}>Expert Narrations & Guidance</h4>
                                    <p style={{ fontSize: '12px', color: '#374151', lineHeight: '1.6' }}>Experts and leaders provide meaningful insights and guidance, adding depth and real-world relevance.</p>
                                </div>
                            </div>

                            {/* Role Item 3 */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <span style={{ color: '#d97706', fontSize: '14px', marginTop: '2px' }}>&bull;</span>
                                <div>
                                    <h4 style={{ fontSize: '13px', fontWeight: 'bold', color: '#b45309', marginBottom: '4px', textTransform: 'uppercase' }}>Creative & Technical Teams</h4>
                                    <p style={{ fontSize: '12px', color: '#374151', lineHeight: '1.6' }}>A global team of creators and technicians collaborating to deliver a world-class production.</p>
                                </div>
                            </div>

                            {/* Role Item 4 */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <span style={{ color: '#d97706', fontSize: '14px', marginTop: '2px' }}>&bull;</span>
                                <div>
                                    <h4 style={{ fontSize: '13px', fontWeight: 'bold', color: '#b45309', marginBottom: '4px', textTransform: 'uppercase' }}>Musicians & Instruments</h4>
                                    <p style={{ fontSize: '12px', color: '#374151', lineHeight: '1.6' }}>Artists from across cultures unite, blending diverse instruments into a universal musical experience.</p>
                                </div>
                            </div>

                            {/* Role Item 5 */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <span style={{ color: '#d97706', fontSize: '14px', marginTop: '2px' }}>&bull;</span>
                                <div>
                                    <h4 style={{ fontSize: '13px', fontWeight: 'bold', color: '#b45309', marginBottom: '4px', textTransform: 'uppercase' }}>Scale of Participation</h4>
                                    <p style={{ fontSize: '12px', color: '#374151', lineHeight: '1.6' }}>A massive global collaboration featuring thousands of participants from India and 195 countries.</p>
                                </div>
                            </div>

                            {/* Role Item 6 */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <span style={{ color: '#d97706', fontSize: '14px', marginTop: '2px' }}>&bull;</span>
                                <div>
                                    <h4 style={{ fontSize: '13px', fontWeight: 'bold', color: '#b45309', marginBottom: '4px', textTransform: 'uppercase' }}>Recognition for Every Participant</h4>
                                    <p style={{ fontSize: '12px', color: '#374151', lineHeight: '1.6' }}>Every contributor is honored with global recognition, regardless of background or status.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* 6. Purpose Section */}
            <div style={{ backgroundColor: '#fef9e7', borderTop: '1px solid #fde68a', borderBottom: '1px solid #fde68a', padding: '60px 20px', textAlign: 'center', marginBottom: '60px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h3 style={{ fontSize: '24px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '30px', lineHeight: '1.4' }}>
                        Join, The Only Audio-Visual Production That Suits The Entire World's Human Races!
                    </h3>

                    <div style={{ textAlign: 'left', backgroundColor: '#ffffff', padding: '40px', borderRadius: '16px', border: '1px solid #fde68a', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                        <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#b45309', textTransform: 'uppercase', marginBottom: '15px', letterSpacing: '0.5px' }}>
                            NOTE: Purpose of These Productions
                        </h4>
                        <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', marginBottom: '20px' }}>
                            The productions "<strong>The Universal Royal Law of Love</strong>" and "<strong>The Holy Sabbath</strong>" are created to promote awareness of the growing challenges facing humanity today. They highlight how hatred, violence, greed, corruption, injustice, dishonesty, discrimination, environmental destruction, and the erosion of moral values have gradually crept into society, affecting individuals, families, communities, and nations across the world.
                        </p>
                        <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', marginBottom: '20px' }}>
                            These productions encourage people from every nation, culture, language, and background to reflect on the universal values of love, compassion, truth, integrity, justice, respect, responsibility, kindness, forgiveness, and peaceful coexistence. They seek to inspire individuals to make positive choices that strengthen families, build healthier communities, and contribute to a more just, united, and compassionate world.
                        </p>
                        <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', margin: 0 }}>
                            The purpose of these productions is not to criticize or target any individual, community, religion, culture, or organization. Instead, they are an invitation to join hands in promoting the universal principles of love, mutual respect, human dignity, and responsible living for the well-being of all humanity and future generations.
                        </p>
                    </div>
                </div>
            </div>

            {/* 7. Overview & Album Preview Section */}
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 80px 20px' }}>
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h3 style={{ fontSize: '24px', fontFamily: "Anastasia", fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px', lineHeight: '1.4' }}>
                        A Global Multilingual Audio/Visual Album<br />For All Humanity Uniting The World Through Music!
                    </h3>

                    <p style={{ fontSize: '13px', fontWeight: 'bold', color: '#4b5563', marginBottom: '25px' }}>
                        Welcoming Participants from 2,000+ Ethnic Groups, All 28 States and 8 Union Territories of India, and All 195 Countries of the World
                    </p>

                    <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px', color: '#374151', fontSize: '13px', lineHeight: '1.8' }}>
                        <p>
                            An extraordinary Global Multilingual Audio/Visual Album created for the entire human family, transcending the barriers of language, race, religion, culture, nationality, and geographical distance. This landmark global initiative is designed to unite people through the universal language of music, storytelling, and shared human values, inspiring love, peace, hope, harmony, and mutual respect among people everywhere.
                        </p>
                        <p>
                            The project features a series of approximately 25-minute Social Impact Musical Short Films, where every theme is brought to life through inspiring songs, compelling storytelling, and practical real-life dramatizations. Each production reflects the realities of human life while presenting messages that encourage truth, compassion, reconciliation, transformation, and the life-changing power of love. Every film is designed to be meaningful, engaging, and relevant to audiences of every generation and culture.
                        </p>
                        <p>
                            Everyone is invited to participate—regardless of age, status, profession, community, caste, color, creed, religion, language, ethnicity, state, or country. This is a worldwide collaborative movement that welcomes every individual who desires to use their talents and abilities for the good of humanity.
                        </p>
                        <p>
                            Participants are invited from more than 2,000 ethnic groups, representing all 28 States and 8 Union Territories of India, together with participants from all 195 countries of the world, making this one of the most inclusive and diverse artistic collaborations ever undertaken.
                        </p>
                        <p style={{ fontWeight: 'bold', color: '#b45309', marginTop: '10px' }}>
                            This historic production will bring together:
                        </p>
                        <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', margin: 0 }}>
                            <li>21+ distinguished lyricists</li>
                            <li>21+ renowned music directors</li>
                            <li>21 accomplished film directors</li>
                            <li>10,000+ celebrated singers, musicians, and voices from the entertainment industry and every section of society</li>
                            <li>Globally recognized artists, performers, educators, professionals, and creative contributors from diverse fields</li>
                        </ul>
                        <p style={{ marginTop: '10px' }}>
                            Through inspiring music, authentic performances, cinematic excellence, and practical visual dramatizations of real-life situations, this global Audio/Visual Album seeks to touch hearts, strengthen families, promote social transformation, encourage mutual understanding, and foster peace, unity, and love among all people throughout the world.
                        </p>
                        <p style={{ fontWeight: 'bold', textAlign: 'center', color: '#b45309', fontSize: '15px', marginTop: '15px' }}>
                            Together, let us celebrate our diversity, embrace our shared humanity, and unite the world through the universal language of music.
                        </p>
                    </div>
                </div>

                {/* Preview Banner Images Side by Side */}
                {/* <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div style={{ flex: '1 1 440px', maxWidth: '480px', height: '280px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db', backgroundColor: '#f3f4f6', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                        <img
                            src={visualalbum}
                            alt="Album Preview 1"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </div>
                    <div style={{ flex: '1 1 440px', maxWidth: '480px', height: '280px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db', backgroundColor: '#f3f4f6', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                        <img
                            src={sing}
                            alt="Album Preview 2"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                    </div>
                </div> */}
                <div
                    style={{
                        display: 'flex',
                        gap: '20px',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        width: '100%',
                        boxSizing: 'border-box',
                    }}
                >
                    {/* Image 1 */}
                    <div
                        style={{
                            flex: '1 1 440px',
                            width: '100%',
                            maxWidth: '480px',
                            aspectRatio: '16 / 9',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid #d1d5db',
                            backgroundColor: '#f3f4f6',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                            boxSizing: 'border-box',
                        }}
                    >
                        <img
                            src={visualalbum}
                            alt="Album Preview 1"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                display: 'block',
                            }}
                        />
                    </div>

                    {/* Image 2 */}
                    <div
                        style={{
                            flex: '1 1 440px',
                            width: '100%',
                            maxWidth: '480px',
                            aspectRatio: '16 / 9',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid #d1d5db',
                            backgroundColor: '#f3f4f6',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                            boxSizing: 'border-box',
                        }}
                    >
                        <img
                            src={sing}
                            alt="Album Preview 2"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                display: 'block',
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* 8. Invitation Sections (Lyricists, Music Directors, Singers, etc.) */}
            <div
                style={{
                    maxWidth: '1000px',
                    width: '100%',
                    margin: '0 auto',
                    padding: '0 20px 80px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '80px',
                    boxSizing: 'border-box',
                }}
            >

                {/* Invite Item: World-Renowned Distinguished Lyricists */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3
                        style={{
                            fontSize: '18px',
                            fontFamily: 'Anastasia',
                            fontWeight: '900',
                            color: '#b45309',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            marginBottom: '20px',
                        }}
                    >
                        We Invite: World-Renowned Distinguished Lyricists
                    </h3>

                    <div
                        style={{
                            width: '100%',
                            maxWidth: '750px',
                            margin: '0 auto',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '1px solid #d1d5db',
                            backgroundColor: '#f3f4f6',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        }}
                    >
                        <img
                            src={lyricists}
                            alt="World-Renowned Distinguished Lyricists"
                            style={{
                                display: 'block',
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </div>


                {/* Invite Item: World-Renowned Music Directors */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3
                        style={{
                            fontSize: '18px',
                            fontFamily: 'Anastasia',
                            fontWeight: '900',
                            color: '#b45309',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            marginBottom: '20px',
                        }}
                    >
                        We Invite: World-Renowned Music Directors
                    </h3>

                    <div
                        style={{
                            width: '100%',
                            maxWidth: '750px',
                            margin: '0 auto',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '1px solid #d1d5db',
                            backgroundColor: '#f3f4f6',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        }}
                    >
                        <img
                            src={md}
                            alt="World-Renowned Music Directors"
                            style={{
                                display: 'block',
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </div>


                {/* Invite Item: World-Renowned Professional Singers */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3
                        style={{
                            fontSize: '18px',
                            fontFamily: 'Anastasia',
                            fontWeight: '900',
                            color: '#b45309',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            marginBottom: '20px',
                        }}
                    >
                        We Invite: World-Renowned Professional Singers
                    </h3>

                    <div
                        style={{
                            width: '100%',
                            maxWidth: '750px',
                            margin: '0 auto',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '1px solid #d1d5db',
                            backgroundColor: '#f3f4f6',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        }}
                    >
                        <img
                            src={psinger}
                            alt="World-Renowned Professional Singers"
                            style={{
                                display: 'block',
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </div>


                {/* Invite Item: Distinguished Television Serial Singers */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3
                        style={{
                            fontSize: '18px',
                            fontFamily: 'Anastasia',
                            fontWeight: '900',
                            color: '#b45309',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            marginBottom: '20px',
                        }}
                    >
                        We Invite: Distinguished Television Serial Singers
                    </h3>

                    <div
                        style={{
                            width: '100%',
                            maxWidth: '750px',
                            margin: '0 auto',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '1px solid #d1d5db',
                            backgroundColor: '#f3f4f6',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        }}
                    >
                        <img
                            src={tvsinger}
                            alt="Distinguished Television Serial Singers"
                            style={{
                                display: 'block',
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </div>


                {/* Invite Item: Celebrated Adult Super Singers */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3
                        style={{
                            fontSize: '18px',
                            fontFamily: 'Anastasia',
                            fontWeight: '900',
                            color: '#b45309',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            marginBottom: '20px',
                        }}
                    >
                        We Invite: Celebrated Adult Super Singers of TV Channels
                    </h3>

                    <div
                        style={{
                            width: '100%',
                            maxWidth: '750px',
                            margin: '0 auto',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '1px solid #d1d5db',
                            backgroundColor: '#f3f4f6',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        }}
                    >
                        <img
                            src={supersinger}
                            alt="Celebrated Adult Super Singers"
                            style={{
                                display: 'block',
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </div>


                {/* Invite Item: Celebrated Junior Super Singers */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3
                        style={{
                            fontSize: '18px',
                            fontFamily: 'Anastasia',
                            fontWeight: '900',
                            color: '#b45309',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            marginBottom: '20px',
                        }}
                    >
                        We Invite: Celebrated Junior Super Singers of TV Channels
                    </h3>

                    <div
                        style={{
                            width: '100%',
                            maxWidth: '750px',
                            margin: '0 auto',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '1px solid #d1d5db',
                            backgroundColor: '#f3f4f6',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        }}
                    >
                        <img
                            src={juniorsinger}
                            alt="Celebrated Junior Super Singers"
                            style={{
                                display: 'block',
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </div>


                {/* Invite Item: Celebrated Stage Singers & Orchestra */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3
                        style={{
                            fontSize: '18px',
                            fontFamily: 'Anastasia',
                            fontWeight: '900',
                            color: '#b45309',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            marginBottom: '20px',
                        }}
                    >
                        We Invite: Celebrated Stage Singers & Orchestra
                    </h3>

                    <div
                        style={{
                            width: '100%',
                            maxWidth: '750px',
                            margin: '0 auto',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '1px solid #d1d5db',
                            backgroundColor: '#f3f4f6',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        }}
                    >
                        <img
                            src={orchestra}
                            alt="Celebrated Stage Singers & Orchestra"
                            style={{
                                display: 'block',
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </div>


                {/* Invite Item: Celebrated Social Media Singers */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3
                        style={{
                            fontSize: '18px',
                            fontFamily: 'Anastasia',
                            fontWeight: '900',
                            color: '#b45309',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            marginBottom: '20px',
                        }}
                    >
                        We Invite: Celebrated Social Media Singers
                    </h3>

                    <div
                        style={{
                            width: '100%',
                            maxWidth: '750px',
                            margin: '0 auto',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '1px solid #d1d5db',
                            backgroundColor: '#f3f4f6',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        }}
                    >
                        <img
                            src={socialmedia}
                            alt="Celebrated Social Media Singers"
                            style={{
                                display: 'block',
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </div>

            </div>
            {/* 9. Additional Invite Sections */}
            <div
                style={{
                    width: '100%',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    padding: '0 20px 80px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '80px',
                    boxSizing: 'border-box',
                }}
            >

                {/* Renowned Pastors Who Sing */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3 style={{
                        fontSize: '18px',
                        fontFamily: "Anastasia",
                        fontWeight: '900',
                        color: '#b45309',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        We Invite: Renowned Pastors Who Sing
                    </h3>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        margin: '0 auto',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #d1d5db',
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={renowned}
                            alt="Renowned Pastors Who Sing"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>


                {/* Celebrated Church Soloists */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3 style={{
                        fontSize: '18px',
                        fontFamily: "Anastasia",
                        fontWeight: '900',
                        color: '#b45309',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        We Invite: Celebrated Church Soloists
                    </h3>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        margin: '0 auto',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #d1d5db',
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={sololists}
                            alt="Celebrated Church Soloists"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>


                {/* Celebrated Church Choirs */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3 style={{
                        fontSize: '18px',
                        fontFamily: "Anastasia",
                        fontWeight: '900',
                        color: '#b45309',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        We Invite: Celebrated Church Choirs
                    </h3>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        margin: '0 auto',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #d1d5db',
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={choirs}
                            alt="Celebrated Church Choirs"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>


                {/* Celebrated Music Academy Singers & Musicians */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3 style={{
                        fontSize: '18px',
                        fontFamily: "Anastasia",
                        fontWeight: '900',
                        color: '#b45309',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        We Invite: Celebrated Music Academy Singers & Musicians
                    </h3>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        margin: '0 auto',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #d1d5db',
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={musicians}
                            alt="Celebrated Music Academy Singers & Musicians"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>


                {/* Celebrated Senior Vocalists */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3 style={{
                        fontSize: '18px',
                        fontFamily: "Anastasia",
                        fontWeight: '900',
                        color: '#b45309',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        We Invite: Celebrated Senior Vocalists
                    </h3>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        margin: '0 auto',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #d1d5db',
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={seniorvocal}
                            alt="Celebrated Senior Vocalists"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>


                {/* Celebrated Middle-Aged Vocalists */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3 style={{
                        fontSize: '18px',
                        fontFamily: "Anastasia",
                        fontWeight: '900',
                        color: '#b45309',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        We Invite: Celebrated Middle-Aged Vocalists
                    </h3>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        margin: '0 auto',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #d1d5db',
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={midvocal}
                            alt="Celebrated Middle-Aged Vocalists"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>


                {/* Talented Junior Vocalists */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3 style={{
                        fontSize: '18px',
                        fontFamily: "Anastasia",
                        fontWeight: '900',
                        color: '#b45309',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        We Invite: Talented Junior Vocalists
                    </h3>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        margin: '0 auto',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #d1d5db',
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={juniorvocal}
                            alt="Talented Junior Vocalists"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>


                {/* Talented Vocalists of Educational Institutions */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3 style={{
                        fontSize: '18px',
                        fontFamily: "Anastasia",
                        fontWeight: '900',
                        color: '#b45309',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        We Invite: Talented Vocalists of Educational Institutions
                    </h3>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        margin: '0 auto',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #d1d5db',
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={talentedvocal}
                            alt="Talented Vocalists of Educational Institutions"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>


                {/* Renowned VIP Speakers & Narrators */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3 style={{
                        fontSize: '18px',
                        fontFamily: "Anastasia",
                        fontWeight: '900',
                        color: '#b45309',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        We Invite: Renowned VIP Speakers & Narrators
                    </h3>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        margin: '0 auto',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #d1d5db',
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={narrators}
                            alt="Renowned VIP Speakers & Narrators"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>


                {/* Renowned Film Directors */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3 style={{
                        fontSize: '18px',
                        fontFamily: "Anastasia",
                        fontWeight: '900',
                        color: '#b45309',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        We Invite: Renowned Film Directors
                    </h3>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        margin: '0 auto',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #d1d5db',
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={filmdirector}
                            alt="Renowned Film Directors"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>


                {/* Celebrated Film Cameramen */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3 style={{
                        fontSize: '18px',
                        fontFamily: "Anastasia",
                        fontWeight: '900',
                        color: '#b45309',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        We Invite: Celebrated Film Cameramen
                    </h3>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        margin: '0 auto',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #d1d5db',
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={cameraman}
                            alt="Celebrated Film Cameramen"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>


                {/* Celebrated Screenwriters */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3 style={{
                        fontSize: '18px',
                        fontFamily: "Anastasia",
                        fontWeight: '900',
                        color: '#b45309',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        We Invite: Celebrated Screenwriters
                    </h3>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        margin: '0 auto',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #d1d5db',
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={screenwriters}
                            alt="Celebrated Screenwriters"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>


                {/* Distinguished Actors */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3 style={{
                        fontSize: '18px',
                        fontFamily: "Anastasia",
                        fontWeight: '900',
                        color: '#b45309',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        We Invite: Distinguished Actors
                    </h3>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        margin: '0 auto',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #d1d5db',
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={actors}
                            alt="Distinguished Actors"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>


                {/* Celebrated Audio Recording Engineers */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3 style={{
                        fontSize: '18px',
                        fontFamily: "Anastasia",
                        fontWeight: '900',
                        color: '#b45309',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        We Invite: Celebrated Audio Recording Engineers
                    </h3>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        margin: '0 auto',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #d1d5db',
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={engineer}
                            alt="Celebrated Audio Recording Engineers"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>


                {/* Distinguished Film & Video Editors */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3 style={{
                        fontSize: '18px',
                        fontFamily: "Anastasia",
                        fontWeight: '900',
                        color: '#b45309',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        We Invite: Distinguished Film & Video Editors
                    </h3>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        margin: '0 auto',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #d1d5db',
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={videoeditor}
                            alt="Distinguished Film & Video Editors"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>


                {/* Celebrated AI Audio & Video Creators */}
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h3 style={{
                        fontSize: '18px',
                        fontFamily: "Anastasia",
                        fontWeight: '900',
                        color: '#b45309',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        marginBottom: '20px'
                    }}>
                        We Invite: Celebrated AI Audio & Video Creators
                    </h3>

                    <div style={{
                        width: '100%',
                        maxWidth: '750px',
                        margin: '0 auto',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid #d1d5db',
                        backgroundColor: '#f3f4f6',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src={aiaudio}
                            alt="Celebrated AI Audio & Video Creators"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxWidth: '100%',
                                objectFit: 'contain',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>

            </div>


            {/* Distinguished Graphic Designers */}
            <div style={{
                width: '100%',
                textAlign: 'center',
                padding: '0 20px',
                boxSizing: 'border-box'
            }}>
                <h3 style={{
                    fontSize: '18px',
                    fontFamily: "Anastasia",
                    fontWeight: '900',
                    color: '#b45309',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '20px'
                }}>
                    We Invite: Distinguished Graphic Designers
                </h3>

                <div style={{
                    width: '100%',
                    maxWidth: '750px',
                    margin: '0 auto',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #d1d5db',
                    backgroundColor: '#f3f4f6',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}>
                    <img
                        src={graphicdesigner}
                        alt="Distinguished Graphic Designers"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            display: 'block'
                        }}
                    />
                </div>
            </div>


            {/* Distinguished Makeup Artists */}
            <div style={{
                width: '100%',
                textAlign: 'center',
                padding: '0 20px',
                boxSizing: 'border-box',
                marginTop: '70px'
            }}>
                <h3 style={{
                    fontSize: '18px',
                    fontFamily: "Anastasia",
                    fontWeight: '900',
                    color: '#b45309',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '20px'
                }}>
                    We Invite: Distinguished Makeup Artists
                </h3>

                <div style={{
                    width: '100%',
                    maxWidth: '750px',
                    margin: '0 auto',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #d1d5db',
                    backgroundColor: '#f3f4f6',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}>
                    <img
                        src={makeup}
                        alt="Distinguished Makeup Artists"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            display: 'block'
                        }}
                    />
                </div>
            </div>


            {/* Musical Instrument Performers */}
            <div style={{
                width: '100%',
                textAlign: 'center',
                padding: '0 20px',
                boxSizing: 'border-box',
                marginTop: '70px'
            }}>
                <h3 style={{
                    fontSize: '18px',
                    fontFamily: "Anastasia",
                    fontWeight: '900',
                    color: '#b45309',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '20px'
                }}>
                    We Invite: Musical Instrument Performers
                </h3>

                <div style={{
                    width: '100%',
                    maxWidth: '750px',
                    margin: '0 auto',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #d1d5db',
                    backgroundColor: '#f3f4f6',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}>
                    <img
                        src={performers}
                        alt="Musical Instrument Performers"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            display: 'block'
                        }}
                    />
                </div>
            </div>


            {/* Undiscovered Talents */}
            <div style={{
                width: '100%',
                textAlign: 'center',
                padding: '0 20px',
                boxSizing: 'border-box',
                marginTop: '70px'
            }}>
                <h3 style={{
                    fontSize: '18px',
                    fontFamily: "Anastasia",
                    fontWeight: '900',
                    color: '#b45309',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                }}>
                    We Invite: Undiscovered Talents
                </h3>

                <p style={{
                    fontSize: '12px',
                    color: '#4b5563',
                    marginBottom: '20px',
                    fontStyle: 'italic',
                    lineHeight: '1.6'
                }}>
                    (people who have never had an opportunity to sing, play instruments,
                    act, or otherwise showcase their abilities)
                </p>

                <div style={{
                    width: '100%',
                    maxWidth: '750px',
                    margin: '0 auto',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #d1d5db',
                    backgroundColor: '#f3f4f6',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}>
                    <img
                        src={undiscovered}
                        alt="Undiscovered Talents"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            display: 'block'
                        }}
                    />
                </div>
            </div>


            {/* Media Support */}
            <div style={{
                width: '100%',
                textAlign: 'center',
                padding: '0 20px',
                boxSizing: 'border-box',
                marginTop: '70px'
            }}>
                <h3 style={{
                    fontSize: '18px',
                    fontFamily: "Anastasia",
                    fontWeight: '900',
                    color: '#b45309',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                    lineHeight: '1.5'
                }}>
                    We Invite: The Support of Newspapers, TV Channels,
                    Radio Stations & Social Media Platforms
                </h3>

                <div style={{
                    width: '100%',
                    maxWidth: '750px',
                    margin: '0 auto',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #d1d5db',
                    backgroundColor: '#f3f4f6',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}>
                    <img
                        src={newspaper}
                        alt="Media Support"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            display: 'block'
                        }}
                    />
                </div>
            </div>


            {/* Volunteers or Coordinators */}
            <div style={{
                width: '100%',
                textAlign: 'center',
                padding: '0 20px',
                boxSizing: 'border-box',
                marginTop: '80px'
            }}>
                <h3 style={{
                    fontSize: '18px',
                    fontFamily: "Anastasia",
                    fontWeight: '900',
                    color: '#b45309',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '20px'
                }}>
                    We Invite: Volunteers or Coordinators
                </h3>

                <div style={{
                    width: '100%',
                    maxWidth: '750px',
                    margin: '0 auto',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #d1d5db',
                    backgroundColor: '#f3f4f6',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}>
                    <img
                        src={volunteers}
                        alt="Volunteers or Coordinators"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            display: 'block'
                        }}
                    />
                </div>
            </div>


            {/* Dedicated Web Designers & Developers */}
            <div style={{
                width: '100%',
                textAlign: 'center',
                padding: '0 20px',
                boxSizing: 'border-box',
                marginTop: '70px'
            }}>
                <h3 style={{
                    fontSize: '18px',
                    fontFamily: "Anastasia",
                    fontWeight: '900',
                    color: '#b45309',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '20px',
                    lineHeight: '1.5'
                }}>
                    We Invite: Dedicated Web Designers & Developers
                </h3>

                <div style={{
                    width: '100%',
                    maxWidth: '750px',
                    margin: '0 auto',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #d1d5db',
                    backgroundColor: '#f3f4f6',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}>
                    <img
                        src={webdesigner}
                        alt="Dedicated Web Designers & Developers"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            display: 'block'
                        }}
                    />
                </div>
            </div>


            {/* Final Closing Banner Image */}
            <div style={{
                width: '100%',
                textAlign: 'center',
                padding: '0 20px',
                boxSizing: 'border-box',
                marginTop: '80px',
                marginBottom: '40px'
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '750px',
                    margin: '0 auto',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #d1d5db',
                    backgroundColor: '#f3f4f6',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}>
                    <img
                        src={ministers}
                        alt="The Universal Royal Law of Love Closing"
                        style={{
                            width: '100%',
                            height: 'auto',
                            maxWidth: '100%',
                            objectFit: 'contain',
                            display: 'block'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Highlights;