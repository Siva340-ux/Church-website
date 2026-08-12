import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/bg.png';
import founder from '../assets/founder.png';
import familyPhoto from '../assets/familyPhoto.png';
import ten from '../assets/ten.png';
import JohnPeter from '../assets/JohnPeter.jpg';
import Seal from '../assets/Seal.png';
import tentopics from '../assets/tentopics.jpg';
import Vishaldo from '../assets/Vishaldo.jpg';
import HolySabbath from '../assets/HolySabbath.jpg';
import AudioCD from '../assets/AudioCD.png';
import Jesus1 from '../assets/jesus1.png'
import Jesus7 from '../assets/jesus7.png'
import JollyAbraham from '../assets/JollyAbraham.jpg'; // Note: mapping if file is named accordingly, or using respective imports based on file list
import Krishnaraj from '../assets/Krishnaraj.jpg';
import Srinivas from '../assets/Srinivas.jpg';
import UnniKrishnan from '../assets/UnniKrishnan.jpg';
import UnniMenon from '../assets/UnniMenon.jpg';
import SureshPeters from '../assets/SureshPeters.jpg';
import Dinesh from '../assets/Dinesh.jpg';
import Ramu from '../assets/Ramu.jpg';
import HemaJohn from '../assets/HemaJohn.jpg';
import Kalpana from '../assets/kalpana.jpg';
import sindhu from '../assets/sindhu.jpg';
import Febi from '../assets/Febi.jpg';
import Bhuvaneshwari from '../assets/Bhuvaneshwari.jpg';
import Kalyani from '../assets/kalyani.jpg';
import SectionImage from "../components/SectionImage";
import spiritual from '../assets/spritual.png';
import fragmented from '../assets/fragmented.png';
import god from '../assets/God.png';
import GodsWord from '../assets/GodsWord.png';
import jesus from '../assets/Jesus.png';
import creator from '../assets/creator.png';
import remember from '../assets/remember.png';
import mankind from '../assets/mankind.png';
import loyalty from '../assets/loyalty.png';
import manna from '../assets/manna.png';
import Jesus5 from '../assets/jesus5.png';
import Jesus6 from '../assets/jesus6.png';
import Jesus8 from '../assets/jesus8.png';
import Jesus9 from '../assets/jesus9.png';
import Jesus10 from '../assets/jesus10.png';

import JesusCustomSection from '../components/Image';
import OurDecisionAndStudySection from '../components/Decision'
import SectionsIndexComponent from '../components/SectionList';
import SomeMoreInformationComponent from '../components/UrlList';
import RewardAndConfessionsComponent from '../components/UrlReward';
import d1 from '../assets/d1.png';
import d2 from '../assets/d2.png';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import c4 from '../assets/c4.png';

const ProducerAlbum = () => {
    // Dummy image placeholder URL for new sections as requested
    const dummyImg = 'https://via.placeholder.com/300x200?text=Placeholder+Image';

    // 14 Singers data for the grid section
    const singers = [
        { name: "Jolly Abraham", img: JollyAbraham },
        { name: "Krishnaraj", img: Krishnaraj },
        { name: "Srinivas", img: Srinivas },
        { name: "Unni Krishnan", img: UnniKrishnan },
        { name: "Unni Menon", img: UnniMenon },
        { name: "Suresh Peters", img: SureshPeters },
        { name: "Dinesh", img: Dinesh },
        { name: "Ramu", img: Ramu },
        { name: "Hema John", img: HemaJohn },
        { name: "Kalpana", img: Kalpana },
        { name: "Sindhu", img: sindhu },
        { name: "Febi", img: Febi },
        { name: "Kalyani", img: Kalyani }, // Fallback mapping if exact asset isn't present
        { name: "Bhuvaneshwari", img: Bhuvaneshwari }
    ];

    // 10 Topics covered data with exact titles matching the design image
    const topics = [
        "The Change of Sabbath",
        "Institution of Sabbath",
        "Reasons for Sabbath Keeping",
        "Manner of Observing the Sabbath",
        "Sabbath in Old Testament",
        "Sabbath & Christ",
        "Sabbath in History",
        "Sabbath Reform",
        "Seal of God",
        "Sabbath in Eternity"
    ];

    return (
        <div style={{ backgroundColor: '#ffffff', color: '#000000', minHeight: '100vh', fontFamily: 'sans-serif' }}>

            {/* Hero Banner Section */}
            <div style={{
                backgroundImage: ` url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#ffffff',
                padding: '60px 20px',
                textAlign: 'center',
                borderBottom: '8px solid #e6b800',
                width: '1486.07px',
                height: '600px',
            }}>

            </div>

            {/* Main Body Content */}
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '50px 20px', textAlign: 'center' }}>
                <p style={{ fontSize: '13px', fontWeight: 'bold', color: '#374151', letterSpacing: '0.5px', marginBottom: '40px', textTransform: 'uppercase' }}>
                    CLICK ALL THE LINKS PROVIDED ABOVE TO DISCOVER, ENROLL, JOIN, MAKE PAYMENTS, AND PARTICIPATE IN THE AUDIO/VISUAL ALBUM.
                </p>

                <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#ca8a04', letterSpacing: '1px', marginBottom: '40px', textTransform: 'uppercase' }}>
                    THE FIRST PRODUCTION OF THE PRODUCER
                </h2>

                {/* Profile and Details Card */}
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '35px', textAlign: 'left', gap: '30px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    <div style={{ width: '240px', height: '280px', flexShrink: 0, backgroundColor: '#bfdbfe', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                            src={founder}
                            alt="founder"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    <div style={{ flexGrow: 1 }}>
                        <p style={{ fontSize: '11px', fontWeight: 'bold', color: '#6b7280', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>
                            PRODUCED IN LOVING SERVICE FOR THE UNITY OF HUMANITY
                        </p>
                        <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#000000', marginBottom: '15px' }}>
                            C. JAMES WHITE
                        </h3>

                        <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.6', marginBottom: '20px' }}>
                            This project is a spiritual, musical, and visual movement that reinterprets timeless moral truths through powerful storytelling, music, and global collaboration.
                        </p>

                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#1f2937' }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start' }}><span style={{ color: '#16a34a', fontWeight: 'bold', marginRight: '8px' }}>✓</span> Featured 14 renowned singers delivering soul-stirring performances</li>
                            <li style={{ display: 'flex', alignItems: 'flex-start' }}><span style={{ color: '#16a34a', fontWeight: 'bold', marginRight: '8px' }}>✓</span> Composed, arranged, and written by M. John Peter with world-class quality</li>
                            <li style={{ display: 'flex', alignItems: 'flex-start' }}><span style={{ color: '#16a34a', fontWeight: 'bold', marginRight: '8px' }}>✓</span> Contains 745 meticulously crafted music tracks across 10 thematic songs</li>
                            <li style={{ display: 'flex', alignItems: 'flex-start' }}><span style={{ color: '#16a34a', fontWeight: 'bold', marginRight: '8px' }}>✓</span> Built on a strong theological message centered on the Sabbath truth</li>
                            <li style={{ display: 'flex', alignItems: 'flex-start' }}><span style={{ color: '#16a34a', fontWeight: 'bold', marginRight: '8px' }}>✓</span> Designed to inspire listeners to revisit and rediscover the Word of God</li>
                            <li style={{ display: 'flex', alignItems: 'flex-start' }}><span style={{ color: '#16a34a', fontWeight: 'bold', marginRight: '8px' }}>✓</span> Blends classical, contemporary, and spiritual music elements</li>
                        </ul>
                    </div>
                </div>

                {/* PURPOSE AND MISSION SECTION (Placed directly below founder section) */}
                <div style={{ marginTop: '70px', textAlign: 'left', backgroundColor: '#fef3c7', border: '1px solid #fde68a', borderRadius: '16px', padding: '40px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#b45309', letterSpacing: '1px', marginBottom: '25px', textTransform: 'uppercase', textAlign: 'center' }}>
                        PURPOSE AND MISSION OF THE ALBUMS
                    </h2>
                    <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', marginBottom: '15px' }}>
                        The lyrics of the albums The Holy Sabbath and The Universal Royal Law of Love have been written to convey the exact and deeper meaning of the Ten Commandments. They seek to magnify the divine principles of God's law by illustrating how the violation of each commandment has contributed to divisions among thousands of religious denominations and throughout human society. The breaking of God's law has fostered enmity within families, among relatives, villages, towns, states, and nations, resulting in hatred, jealousy, riots, conflicts, and wars that have destroyed countless human lives. Every human life is precious and invaluable.
                    </p>
                    <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', marginBottom: '15px' }}>
                        These albums have been created solely with a sincere desire to promote love, peace, unity, and harmony among all people throughout the world. They seek to call humanity back to the eternal principles of love, obedience, peace, justice, mercy, and respect for God and for one another as revealed in the Ten Commandments.
                    </p>
                    <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', marginBottom: '15px' }}>
                        These albums are not intended to hurt, offend, criticize, or condemn any individual, denomination, sect, religion, culture, or community, nor are they produced to please or favor any individual, organization, or group. Rather, they are presented with a pure, genuine, impartial, and prayerful heart, with the sincere desire to uplift humanity by drawing attention to the timeless moral principles of the Ten Commandments.
                    </p>
                    <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', margin: 0 }}>
                        The purpose of these albums is to encourage every person to recognize the sacredness of human life, cultivate love for God and love for one another, strengthen families and communities, promote mutual respect and understanding, and inspire peace, unity, and harmony throughout the world. It is our earnest prayer that these songs will encourage thoughtful reflection, foster reconciliation where there is division, and inspire lives characterized by love, righteousness, and obedience to God for the blessing of all humanity.
                    </p>
                </div>



                {/* THE TEN COMMANDMENTS & GLOBAL REACH SECTION */}
                <div style={{ marginTop: '80px', textAlign: 'left' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', marginBottom: '40px' }}>
                        <div style={{ width: '400px', flexShrink: 0, borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db', boxShadow: '0 4px 8px rgba(0,0,0,0.08)' }}>
                            <img src={ten} alt="The Ten Commandments" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                        <div style={{ flexGrow: 1, textAlign: 'center' }}>
                            <h2 style={{ fontSize: '26px', fontFamily: 'serif', color: '#ca8a04', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                "THE HOLY SABBATH"
                            </h2>
                            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#d97706', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                (4th OF THE TEN COMMANDMENTS)
                            </h3>
                            <div style={{ padding: '20px', backgroundColor: '#fffbeb', borderRadius: '12px', border: '1px solid #fef3c7' }}>
                                <p style={{ fontSize: '15px', fontStyle: 'italic', color: '#92400e', fontWeight: 'bold', lineHeight: '1.6', margin: '0 0 8px 0' }}>
                                    "He who from the heart obeys the fourth commandment will obey the whole law".
                                </p>
                                <p style={{ fontSize: '12px', color: '#b45309', fontWeight: 'bold', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                    Counsels for the Church, Page 262.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', margin: '30px 0' }}>
                        <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#1f2937', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            "SABBATH" (Exodus 20:8–11 KJV)
                        </h4>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '13px', color: '#374151', lineHeight: '1.8' }}>
                        <p style={{ margin: 0 }}>
                            The Fourth Commandment—one of the longest among the Ten Commandments, containing 94 words—is found in the Holy Bible in Book of Exodus. Despite its divine importance, it continues to be overlooked by many, though it was established by God at Creation itself, before sin entered the world, with a sacred and eternal purpose as a <strong>SIGN</strong> that He is our Creator God and that we are His people.
                        </p>
                        <p style={{ margin: 0 }}>
                            God Himself wrote the Ten Commandments upon tables of stone with His own finger, signifying their divine authority, permanence, and sacred importance, as recorded in Book of Exodus and Book of Deuteronomy. The Holy Scriptures also reveal that God's law exists in the Heavenly Sanctuary, where the ark of His testament was seen in heaven, as written in Book of Revelation.
                        </p>
                        <p style={{ margin: 0, fontWeight: 'bold', color: '#1f2937' }}>
                            "The Holy Sabbath" album stands as a magnificent witness proclaiming that all people are the children of God.
                        </p>
                        <p style={{ margin: 0 }}>
                            The video production of <strong>"The Holy Sabbath"</strong> album has now expanded beyond Tamil into <strong>English, Hebrew, Mandarin Chinese, Modern Standard Arabic, Spanish, French, Russian, Sinhala, Finnish, Nepali, Assamese, Malayalam, Kannada, Tulu, Telugu, Bengali, Punjabi, Odia, Marathi, Hindi, Gujarati,</strong> and <strong>Urdu</strong>.
                        </p>
                        <p style={{ margin: 0 }}>
                            Efforts are also underway to produce and share the album in as many languages of the world as possible, so that its message of truth, peace, love, and unity may reach people across every nation, culture, and tongue.
                        </p>
                        <p style={{ margin: 0 }}>
                            Through music, this global initiative seeks to remind humanity of God's everlasting love, His holy Sabbath, and the unity of all people under the Creator.
                        </p>
                    </div>
                </div>

                {/* SABBATH: THE SEAL OF THE LIVING GOD SECTION */}
                <div style={{ marginTop: '80px', textAlign: 'left', borderTop: '2px solid #f3f4f6', paddingTop: '50px' }}>
                    <h2 style={{ fontSize: '24px', fontFamily: 'serif', color: '#ca8a04', fontWeight: 'bold', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        SABBATH: THE SEAL OF THE LIVING GOD.
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '40px', marginBottom: '30px' }}>
                        <div style={{ width: '280px', flexShrink: 0, borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db', boxShadow: '0 4px 8px rgba(0,0,0,0.06)' }}>
                            <img src={Seal} alt="Creator Lord Thy God 7th Day Sabbath" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '13px', color: '#374151', lineHeight: '1.7' }}>
                            <p style={{ margin: 0 }}>
                                The book of Revelation describes God's faithful people as being sealed with the <strong>SEAL OF GOD</strong> (Revelation 7:2–4; 9:4), while an opposing power enforces a <strong>MARK</strong> upon its followers (Revelation 13:16–17; 14:9–11; 15:2; 16:2; 19:20; 20:4).
                            </p>
                            <p style={{ margin: 0, fontWeight: 'bold', color: '#1f2937' }}>
                                In Ezekiel, God identifies the Sabbath as a sign between Himself and His people:
                            </p>
                            <blockquote style={{ margin: 0, paddingLeft: '15px', borderLeft: '3px solid #d97706', fontStyle: 'italic', color: '#4b5563' }}>
                                "Moreover also I gave them my sabbaths, to be a sign between me and them, that they might know that I am the LORD that sanctify them." (Ezekiel 20:12)
                            </blockquote>
                            <blockquote style={{ margin: 0, paddingLeft: '15px', borderLeft: '3px solid #d97706', fontStyle: 'italic', color: '#4b5563' }}>
                                "And hallow my sabbaths; and they shall be a sign between me and you, that ye may know that I am the LORD your God." (Ezekiel 20:20)
                            </blockquote>
                            <p style={{ margin: 0, fontWeight: 'bold', color: '#1f2937' }}>
                                Isaiah also connects God's law with His seal:
                            </p>
                            <blockquote style={{ margin: 0, paddingLeft: '15px', borderLeft: '3px solid #d97706', fontStyle: 'italic', color: '#4b5563' }}>
                                "Bind up the testimony, <strong>seal the law</strong> among my disciples." (Isaiah 8:16)
                            </blockquote>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '25px', marginBottom: '25px' }}>
                        <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.6', margin: '0 0 12px 0' }}>
                            The Sabbath commandment (Exodus 20:8–11) contains the essential elements of a royal seal:
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#1f2937' }}>
                            <li>• <strong>Name:</strong> The LORD thy God</li>
                            <li>• <strong>Title:</strong> Creator</li>
                            <li>• <strong>Territory:</strong> Heaven, Earth, Sea, and all that is in them</li>
                        </ul>
                    </div>

                    <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.7', marginBottom: '15px' }}>
                        Because the Sabbath commandment identifies God as the Creator and bears the characteristics of His authority, many Christians understand it to be God's sign or seal among His people.
                    </p>
                    <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.7', marginBottom: '20px' }}>
                        For a comprehensive and systematic study of "The Law of God" and "The Sabbath," please refer to Section 8 – The Law of God and Section 9 – The Sabbath at the link provided below.
                    </p>
                    <div>
                        <a
                            href="https://www.preparingforeternity.com/br1914/brhccontents.htm"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: '13px', color: '#2563eb', textDecoration: 'underline', wordBreak: 'break-all', fontWeight: 'bold' }}
                        >
                            https://www.preparingforeternity.com/br1914/brhccontents.htm
                        </a>
                    </div>
                </div>
                {/* FAMILY & M. JOHN PETER SECTIONS */}
                <div style={{ marginTop: '70px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#ca8a04', letterSpacing: '1px', marginBottom: '35px', textTransform: 'uppercase', lineHeight: '1.4', maxWidth: '850px', marginLeft: 'auto', marginRight: 'auto' }}>
                        THE FAMILY BEHIND GOD CARES MINISTRIES CONTINUES TO SUPPORT ITS MISSION AND PRODUCTIONS THROUGH FAITHFUL SACRIFICE AND DEDICATED COMMITMENT.
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '50px' }}>
                        <div style={{ width: '450px', height: '280px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #d1d5db', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', marginBottom: '12px' }}>
                            <img src={familyPhoto} alt="Sharon Doris Angel, J. C. James White, Vijaya James White & Stanley Dev Adams. J" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <p style={{ fontSize: '11px', color: '#4b5563', fontStyle: 'italic', letterSpacing: '0.3px' }}>
                            From Left to Right: <strong style={{ color: '#1f2937' }}>Sharon Doris Angel, J. C. James White, Vijaya James White & Stanley Dev Adams. J</strong>
                        </p>
                    </div>

                    <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#ca8a04', letterSpacing: '1px', marginBottom: '30px', textTransform: 'uppercase', textAlign: 'left' }}>
                        M. JOHN PETER, A GIFTED AND TALENTED LYRICIST AND MUSIC DIRECTOR.
                    </h2>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '30px', textAlign: 'left' }}>
                        <div style={{ width: '280px', height: '200px', flexShrink: 0, borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                            <img src={JohnPeter} alt="M. John Peter" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ flexGrow: 1 }}>
                            <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8', marginBottom: '15px' }}>
                                The vision of presenting the importance of the Holy Sabbath by C. James White came into fulfilment through the association of M. John Peter, a gifted and talented Lyricist and Music Director in the industry, whose creative excellence, musical dedication, and committed efforts greatly enriched the production of "The Holy Sabbath" album and are truly commendable.
                            </p>
                            <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.8' }}>
                                C. James White desired to bring together as many singers as possible to adorn and enrich "The Holy Sabbath" album with diverse voices, musical excellence, and spiritual beauty.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 10 TOPICS COVERED SECTION */}
                <div style={{ marginTop: '80px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#ca8a04', letterSpacing: '1px', marginBottom: '30px', textTransform: 'uppercase' }}>
                        THE 10 TOPICS COVERED
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '15px' }}>
                        {topics.map((topic, index) => (
                            <div key={index} style={{ backgroundColor: '#fef3c7', border: '1px solid #fde68a', borderRadius: '10px', padding: '20px 15px', textAlign: 'center' }}>
                                <span style={{ display: 'block', fontSize: '12px', fontWeight: 'bold', color: '#d97706', marginBottom: '5px' }}>{String(index + 1).padStart(2, '0')}</span>
                                <h4 style={{ fontSize: '13px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>{topic}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* NEW IMAGE PLACEMENT BELOW THE 10 TOPICS COVERED */}
                <div style={{ marginTop: '50px', textAlign: 'center' }}>
                    <div style={{ maxWidth: '100%', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                        <img src={tentopics} alt="Album Collateral & Credits Showcase" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                </div>



                {/* M. JOHN PETER & SINGERS SECTION */}
                <div style={{ marginTop: '70px' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#ca8a04', letterSpacing: '1px', marginBottom: '15px', textTransform: 'uppercase' }}>
                        M. John Peter, a Gifted and Talented Lyricist and Music Director
                    </h2>
                    <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto 40px auto' }}>
                        The vision of presenting the importance of the Holy Sabbath by C. James White came into fulfilment through the association of M. John Peter, whose creative excellence and committed efforts greatly enriched the production.
                    </p>

                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', marginBottom: '30px' }}>
                        M. John Peter brought together more than 14 top singers from the industry to add glory, excellence, and spiritual richness to the album "The Holy Sabbath."
                    </h3>

                    {/* Singers Grid with Imported Images */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '20px' }}>
                        {singers.map((singer, index) => (
                            <div key={index} style={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '15px', textAlign: 'center' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#e5e7eb', margin: '0 auto 10px auto', overflow: 'hidden', border: '1px solid #d1d5db' }}>
                                    <img src={singer.img} alt={singer.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>{singer.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* "THE HOLY SABBATH" ALBUM COVER & AUDIO CD PRESENTATION SECTION (Text Left, Images Right) */}
                <div style={{ marginTop: '70px', backgroundColor: '#fef3c7', border: '1px solid #fde68a', borderRadius: '20px', padding: '40px', textAlign: 'left', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '30px', flexWrap: 'wrap', boxShadow: '0 10px 25px -5px rgba(251, 191, 36, 0.2)' }}>
                    {/* Left Column: Title and Description (Text on Left) */}
                    <div style={{ flex: '1 1 250px', maxWidth: '320px' }}>
                        <h2 style={{ fontSize: '32px', fontFamily: 'serif', color: '#b45309', fontWeight: 'bold', marginBottom: '20px', letterSpacing: '1px', textTransform: 'uppercase', lineHeight: '1.2' }}>
                            "THE HOLY SABBATH"
                        </h2>
                        <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.8', margin: 0 }}>
                            A soul-lifting audio album presenting the divine significance of the Sabbath through Scripture, song, and inspiring messages.
                        </p>
                    </div>

                    {/* Right Column: Images Side-by-Side (Images on Right) */}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '25px', flexWrap: 'nowrap' }}>
                        {/* Album Cover Mockup */}
                        <div style={{ width: '360px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', backgroundColor: '#ffffff', flexShrink: 0 }}>
                            <img src={HolySabbath} alt="The Holy Sabbath Cover and Content" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>

                        {/* Audio CD Mockup */}
                        <div style={{ width: '220px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #d1d5db', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', backgroundColor: '#ffffff', flexShrink: 0 }}>
                            <img src={AudioCD} alt="The Holy Sabbath Audio CD" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </div>
                </div>
                {/* VISION / VISHALDO J. MATHINAN SECTION */}
                <div style={{ marginTop: '70px', display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#fdf8f6', border: '1px solid #f5ebe0', borderRadius: '16px', padding: '40px', gap: '40px', textAlign: 'left' }}>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#ca8a04', letterSpacing: '1px', marginBottom: '20px', textTransform: 'uppercase' }}>
                            A Vision Once Thought Impossible Became Reality
                        </h2>
                        <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.8' }}>
                            For years, the effort to produce "The Holy Sabbath" album in multiple languages and bring it into video format seemed nearly impossible. However, the association and dedicated support of <strong>Vishaldo J. Mathinan</strong> opened the way for the successful video production and the expansion of the album into many languages.
                        </p>
                    </div>
                    <div style={{ width: '240px', height: '280px', flexShrink: '0', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db' }}>
                        <img src={Vishaldo} alt="Vishaldo J. Mathinan" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>

                {/* CONTINUING DETAILED SABBATH PRESENTATION SECTIONS BASED ON IMAGES */}

                {/* 1. Spiritual Significance of the Sabbath */}
                <div style={{ marginTop: '80px', textAlign: 'left' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#ca8a04', textAlign: 'center', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        Spiritual Significance of the Sabbath
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '40px', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 400px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db' }}>
                            <img src={spiritual} alt="Spiritual Significance of the Sabbath" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                        <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#ca8a04', marginBottom: '5px' }}>Creation</h4>
                                <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.6', margin: 0 }}>
                                    The Sabbath was established at the foundation of the world—when God rested, blessed, and sanctified the seventh day, setting it apart as holy.
                                </p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#ca8a04', marginBottom: '5px' }}>A Divine Sign</h4>
                                <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.6', margin: 0 }}>
                                    The Sabbath stands as a sacred sign between God and His created people—revealing Him as the Lord who sanctifies and redeems His children (Ezekiel 20:12, 20).
                                </p>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#ca8a04', marginBottom: '5px' }}>Mount Sinai (1446–1440 BC)</h4>
                                <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.6', margin: 0 }}>
                                    The Fourth Commandment was given as a divine reminder: <strong>"Remember the sabbath day, to keep it holy,"</strong> as recorded in the Book of Exodus, emphasizing rest, worship, and obedience to God.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Christianity is Fragmented - Why? & God Wrote with His Own Finger */}
                <div style={{ marginTop: '80px', textAlign: 'left' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#ca8a04', textAlign: 'center', marginBottom: '30px', textTransform: 'uppercase', lineHeight: '1.5' }}>
                        A careful and prayerful study of the Sabbath commandment (the fourth of the Ten Commandments) is essential for every individual, every church, and every Christian denomination. Therefore, God calls all people to remember His holy Sabbath: 'Remember the Sabbath day, to keep it holy.' — Exodus 20:8 (KJV).
                    </h2>

                    <h3 style={{ fontSize: '22px', fontWeight: '900', color: '#ca8a04', marginBottom: '20px', textTransform: 'uppercase' }}>
                        Christianity is Fragmented - Why???
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '40px', flexWrap: 'wrap', marginBottom: '50px' }}>
                        <div style={{ flex: '1 1 450px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db' }}>
                            <img src={fragmented} alt="Christianity is Divided" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                        <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '13px', color: '#374151', lineHeight: '1.7' }}>
                            <p style={{ margin: 0 }}>
                                According to our understanding, the substitution of the biblical seventh-day Sabbath (Saturday) with the first day of the week (Sunday) has been a significant factor contributing to the fragmentation of Christianity into thousands of denominations. We believe that when God's expressed will is replaced by human tradition, the unity that Christ desired for His followers is weakened, and divisions inevitably arise.
                            </p>
                            <p style={{ margin: 0, fontWeight: 'bold', color: '#1f2937' }}>
                                Before His crucifixion, Jesus prayed for all who would believe in Him:
                            </p>
                            <blockquote style={{ margin: 0, paddingLeft: '15px', borderLeft: '3px solid #d97706', fontStyle: 'italic', color: '#4b5563' }}>
                                "That they all may be one; as thou, Father, art in me, and I in thee, that they also may be one in us: that the world may believe that thou hast sent me." — John 17:21
                            </blockquote>
                        </div>
                    </div>

                    <h3 style={{ fontSize: '22px', fontWeight: '900', color: '#ca8a04', marginBottom: '20px', textTransform: 'uppercase', textAlign: 'center' }}>
                        God Wrote With His Own Finger On 2 Tables of Stone
                    </h3>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <div style={{ maxWidth: '700px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db' }}>
                            <img src={god} alt="God Wrote on 2 Tables of Stone" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </div>
                </div>

                {/* 3. No Additions, No Alterations */}
                <div style={{ marginTop: '80px', textAlign: 'left' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#ca8a04', textAlign: 'center', marginBottom: '30px', textTransform: 'uppercase' }}>
                        No Additions. No Alterations.
                    </h2>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <div style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db' }}>
                            <img src={GodsWord} alt="God's Word is Complete and Perfect" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </div>
                </div>

                {/* 4. Sabbath at Creation */}
                <div style={{ marginTop: '80px', textAlign: 'left' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#ca8a04', textAlign: 'center', marginBottom: '30px', textTransform: 'uppercase' }}>
                        Sabbath at Creation
                    </h2>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <div style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db' }}>
                            <img src={jesus} alt="Sabbath at Creation" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </div>
                </div>

                {/* 5. The Sabbath: The Sign of Our Creator */}
                <div style={{ marginTop: '80px', textAlign: 'left' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#ca8a04', textAlign: 'center', marginBottom: '30px', textTransform: 'uppercase' }}>
                        The Sabbath: The Sign of Our Creator and Our Relationship With Him
                    </h2>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <div style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db' }}>
                            <img src={creator} alt="The Sabbath Sign of Our Creator" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </div>
                </div>

                {/* 6. The Only One That Begins with the Word "Remember" */}
                <div style={{ marginTop: '80px', textAlign: 'left' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#ca8a04', textAlign: 'center', marginBottom: '30px', textTransform: 'uppercase' }}>
                        The Only One That Begins with the Word "Remember"
                    </h2>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <div style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db' }}>
                            <img src={remember} alt="The 4th of the Ten Commandments Remember" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </div>
                </div>

                {/* 7. Sabbath Was Made for Mankind */}
                <div style={{ marginTop: '80px', textAlign: 'left' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#ca8a04', textAlign: 'center', marginBottom: '30px', textTransform: 'uppercase' }}>
                        Sabbath Was Made for Mankind
                    </h2>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <div style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db' }}>
                            <img src={mankind} alt="The Sabbath was made for man" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </div>
                </div>

                {/* 8. Sabbath: God's Test of Loyalty */}
                <div style={{ marginTop: '80px', textAlign: 'left' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#ca8a04', textAlign: 'center', marginBottom: '30px', textTransform: 'uppercase' }}>
                        Sabbath: God's Test of Loyalty
                    </h2>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <div style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db' }}>
                            <img src={loyalty} alt="Obedience is a Test of Loyalty" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '13px', color: '#374151', lineHeight: '1.7' }}>
                        <p style={{ margin: 0 }}>
                            Throughout every age, God has revealed the loyalty of His people through the test of obedience.
                        </p>
                        <p style={{ margin: 0 }}>
                            In the Garden of Eden, the test centered on the tree of the knowledge of good and evil. God freely gave Adam and Eve every tree in the garden except one (Genesis 2:16–17). There was nothing special about the fruit itself. The real issue was whether they would trust God's word enough to obey His command completely.
                        </p>
                        <p style={{ margin: 0 }}>
                            Obedience was the evidence of loyalty.
                        </p>
                        <p style={{ margin: 0 }}>
                            This principle is repeated throughout the Bible. Noah was instructed to build an ark. Abraham was called to offer Isaac. Israel was commanded to march around the walls of Jericho. In every case, the test was not the act itself but whether God's authority would be trusted and obeyed.
                        </p>
                        <p style={{ margin: 0 }}>
                            According to our understanding, the same principle will be seen in the closing events of earth's history.
                        </p>
                        <p style={{ margin: 0 }}>
                            The book of Revelation portrays a worldwide conflict over worship and allegiance. God's faithful end-time people are described as those who "keep the commandments of God, and the faith of Jesus" (Revelation 14:12).
                        </p>
                        <p style={{ margin: 0 }}>
                            Just as the tree of the knowledge of good and evil served as the test of loyalty in Eden, we understand the biblical seventh-day Sabbath to be God's sign of loyalty in the final conflict. It points to Him as the Creator (Genesis 2:1-3; Exodus 20:8–11; Revelation 14:7) and distinguishes the commandments of God from the traditions and commandments of men.
                        </p>
                        <p style={{ margin: 0 }}>
                            God's principle has never changed.
                        </p>
                        <p style={{ margin: 0 }}>
                            He calls His people to loving, wholehearted obedience, while Satan continually seeks to replace divine authority with human authority.
                        </p>
                        <p style={{ margin: 0 }}>
                            The final question is essentially the same as the first: Will we obey God or men?
                        </p>
                        <p style={{ margin: 0, fontWeight: 'bold', color: '#1f2937' }}>
                            "We ought to obey God rather than men." — Acts 5:29
                        </p>
                    </div>
                </div>

                {/* 9. The Manna and the Sabbath Test of Exodus 16 */}
                <div style={{ marginTop: '80px', textAlign: 'left' }}>
                    <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#ca8a04', textAlign: 'center', marginBottom: '30px', textTransform: 'uppercase', lineHeight: '1.4' }}>
                        The Manna and the Sabbath Test of Exodus 16 Occurred Before the Ten Commandments Were Written on the Stone Tablets
                    </h2>
                    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <div style={{ maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden', border: '1px solid #d1d5db' }}>
                            <img src={manna} alt="Manna and Sabbath Test" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </div>
                    <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#ca8a04', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '20px' }}>
                        2,080 Weekly Miracles Confirmed God's Holy Sabbath Before Sinai...
                    </p>
                </div>
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif', color: '#1f2937' }}>

                    {/* Section 1: From Deliverance to Disobedience */}
                    <section style={{ marginBottom: '60px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#b45309', marginBottom: '25px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            FROM DELIVERANCE TO DISOBEDIENCE - ISRAEL'S REBELLION AGAINST GOD:
                        </h2>

                        <div style={{ maxWidth: '750px', margin: '0 auto 25px auto', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                            <img
                                src={d1}
                                alt="Egyptian Bondage and Deliverance"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>

                        <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', textAlign: 'left', maxWidth: '850px', margin: '0 auto' }}>
                            The Israelites were in Egyptian bondage for 430 years (Exodus 12:40–41). After God delivered them, they repeatedly rebelled against Him. According to Scripture, their rebellion included idolatry, disobedience to God's commandments, injustice, and the profaning of His Sabbaths. These persistent covenant violations ultimately led to their later captivities, including the Babylonian exile.
                        </p>
                    </section>

                    <hr style={{ border: '0', borderTop: '1px solid #e5e7eb', marginBottom: '60px' }} />

                    {/* Section 2: A Test Through Manna for 40 Years */}
                    <section style={{ marginBottom: '60px', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#b45309', marginBottom: '25px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            A TEST THROUGH MANNA FOR 40 YEARS: "BEHOLD, I WILL RAIN BREAD FROM HEAVEN FOR YOU... THAT I MAY PROVE THEM, WHETHER THEY WILL WALK IN MY LAW, OR NO":
                        </h2>

                        <div style={{ maxWidth: '750px', margin: '0 auto 25px auto', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                            <img
                                src={d2}
                                alt="Manna from Heaven Test"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                    </section>

                    <hr style={{ border: '0', borderTop: '1px solid #e5e7eb', marginBottom: '60px' }} />

                    {/* Section 3: 2,080 Weekly Miracles Confirmed God's Holy Sabbath */}
                    <section style={{ textAlign: 'left', maxWidth: '850px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#b45309', marginBottom: '25px', letterSpacing: '0.5px', textTransform: 'uppercase', textAlign: 'center' }}>
                            2,080 WEEKLY MIRACLES CONFIRMED GOD'S HOLY SABBATH BEFORE SINAI...
                        </h2>

                        <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', marginBottom: '20px' }}>
                            For forty years, God provided a double portion of manna on the sixth day and withheld it on the seventh day, proving the sanctity of the Sabbath and testing Israel's obedience (Exodus 16:4, 22–30).
                        </p>

                        <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', marginBottom: '20px' }}>
                            If we take the biblical record that the manna was given for 40 years and that it fell every day except the Sabbath, we can estimate the number of Sabbaths very simply.
                        </p>

                        <div style={{ marginBottom: '20px' }}>
                            <p style={{ fontSize: '13px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>Calculation</p>
                            <ul style={{ paddingLeft: '20px', fontSize: '13px', lineHeight: '1.8', color: '#374151', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <li>1 year $\approx$ 52 weekly Sabbaths</li>
                                <li>40 years $\times$ 52 Sabbaths = 2,080 Sabbaths</li>
                            </ul>
                        </div>

                        <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', marginBottom: '20px' }}>
                            Total weekly Sabbaths during the manna period: $\approx$ 2,080
                        </p>

                        <div style={{ marginBottom: '20px' }}>
                            <p style={{ fontSize: '13px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>What this means</p>
                            <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', marginBottom: '8px' }}>During those approximately 2,080 Sabbaths:</p>
                            <ul style={{ paddingLeft: '20px', fontSize: '13px', lineHeight: '1.8', color: '#374151', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <li>God did not send manna on the Sabbath.</li>
                                <li>On the sixth day (Friday) He gave a double portion.</li>
                                <li>This miracle was repeated every week for forty years.</li>
                            </ul>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <p style={{ fontSize: '13px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>Therefore:</p>
                            <ul style={{ paddingLeft: '20px', fontSize: '13px', lineHeight: '1.8', color: '#374151', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                <li>About 2,080 times God reminded Israel that the seventh day was His holy Sabbath.</li>
                                <li>About 2,080 times there was no manna on the Sabbath.</li>
                                <li>About 2,080 times there was a double miracle on the sixth day, providing enough food for two days without spoiling.</li>
                            </ul>
                        </div>

                        <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', marginBottom: '20px' }}>
                            This continuous weekly miracle powerfully demonstrated the importance of the Sabbath.
                        </p>

                        <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', marginBottom: '20px' }}>
                            You could summarize it like this:
                        </p>

                        <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', marginBottom: '20px' }}>
                            For approximately 2,080 consecutive Sabbaths over forty years, God performed a weekly miracle—providing a double portion of manna on the sixth day and withholding manna on the seventh day—to prove whether Israel would keep His commandments (Exodus 16:4, 22–30).
                        </p>

                        <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151' }}>
                            This makes the manna experience one of the longest continuous miracles recorded in Scripture, emphasizing the sanctity of the seventh-day Sabbath long before the giving of the law at Sinai.
                        </p>
                    </section>

                </div>
                {/* Section 2: The Purpose of Israel's Deliverance */}
                <section style={{ marginBottom: '60px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#b45309', marginBottom: '25px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                        THE PURPOSE OF ISRAEL'S DELIVERANCE:
                    </h2>

                    <div style={{ maxWidth: '750px', margin: '0 auto 25px auto', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                        <img
                            src={c1}
                            alt="The Purpose of Israel's Deliverance"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>

                    <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', textAlign: 'left', maxWidth: '850px', margin: '0 auto' }}>
                        God delivered Israel from Egyptian bondage not merely to free them from slavery, but that they might observe His statutes, keep His laws, and remember the Sabbath—a sign that He is their God and they are His covenant people (Psalm 105:43–45; Deuteronomy 5:15; Ezekiel 20:12, 20).
                    </p>
                </section>

                <hr style={{ border: '0', borderTop: '1px solid #e5e7eb', marginBottom: '60px' }} />

                {/* Section 3: God Gave Israel His Law and Holy Sabbath */}
                <section style={{ marginBottom: '60px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#b45309', marginBottom: '25px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                        GOD GAVE ISRAEL HIS LAW AND HOLY SABBATH:
                    </h2>

                    <div style={{ maxWidth: '750px', margin: '0 auto 25px auto', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                        <img
                            src={c2}
                            alt="God Gave Israel His Law and Holy Sabbath"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>

                    <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', textAlign: 'left', maxWidth: '850px', margin: '0 auto' }}>
                        After delivering Israel from Egyptian bondage, God gave them His statutes, right judgments, true laws, good commandments, and made known His holy Sabbath, that that they might live in obedience and know that He is the LORD their God (Ezekiel 20:11; Nehemiah 9:13–14).
                    </p>
                </section>

                <hr style={{ border: '0', borderTop: '1px solid #e5e7eb', marginBottom: '60px' }} />

                {/* Section 4: The Sabbath in its Biblical Context */}
                <section style={{ marginBottom: '60px', textAlign: 'left', maxWidth: '850px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#b45309', marginBottom: '25px', letterSpacing: '0.5px', textTransform: 'uppercase', textAlign: 'center' }}>
                        THE SABBATH IN ITS BIBLICAL CONTEXT:
                    </h2>

                    <div style={{ maxWidth: '750px', margin: '0 auto 25px auto', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                        <img
                            src={c3}
                            alt="The Sabbath in its Biblical Context"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>

                    <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', marginBottom: '20px' }}>
                        The Holy Bible mentions the Sabbath is not directly in those two specific verses. Neither The Holy Bible nor The Holy Bible mentions the Sabbath.
                    </p>

                    <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', marginBottom: '20px' }}>
                        However, there is a connection in the surrounding context of both chapters.
                    </p>

                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ fontSize: '13px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>In Ezekiel 20</p>
                        <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', marginBottom: '8px' }}>The chapter develops a sequence:</p>
                        <ul style={{ paddingLeft: '20px', fontSize: '13px', lineHeight: '1.8', color: '#374151', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li>Verses 7–8 — Israel rebelled in Egypt by refusing to forsake the idols of Egypt.</li>
                            <li>Verses 10–11 — God brought them out of Egypt and gave them His statutes and judgments.</li>
                            <li>Verse 12 — God says:</li>
                        </ul>
                    </div>

                    <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', fontStyle: 'italic', marginBottom: '20px', paddingLeft: '20px', borderLeft: '3px solid #b45309' }}>
                        "Moreover also I gave them my sabbaths, to be a sign between me and them, that they might know that I am the LORD that sanctify them."
                    </p>

                    <ul style={{ paddingLeft: '20px', fontSize: '13px', lineHeight: '1.8', color: '#374151', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                        <li>Verse 13 — Israel greatly polluted God's Sabbaths.</li>
                        <li>Verse 20 — God says:</li>
                    </ul>

                    <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', fontStyle: 'italic', marginBottom: '20px', paddingLeft: '20px', borderLeft: '3px solid #b45309' }}>
                        "And hallow my sabbaths; and they shall be a sign between me and you, that ye may know that I am the LORD your God."
                    </p>

                    <ul style={{ paddingLeft: '20px', fontSize: '13px', lineHeight: '1.8', color: '#374151', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                        <li>Verse 24 — God again says they had polluted His Sabbaths.</li>
                    </ul>

                    <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', marginBottom: '20px' }}>
                        So, while verse 8 is about idolatry in Egypt, the chapter later identifies profaning the Sabbath as another major aspect of Israel's rebellion.
                    </p>

                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ fontSize: '13px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>In Exodus 32</p>
                        <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', marginBottom: '8px' }}>
                            Exodus 32 records the worship of the golden calf. The chapter does <strong>not explicitly mention the Sabbath</strong>. However, the context is noteworthy:
                        </p>
                        <ul style={{ paddingLeft: '20px', fontSize: '13px', lineHeight: '1.8', color: '#374151', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li>In <strong>The Holy Bible</strong>, immediately before the golden calf incident, God emphasized the Sabbath:</li>
                        </ul>
                    </div>

                    <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', fontStyle: 'italic', marginBottom: '20px', paddingLeft: '20px', borderLeft: '3px solid #b45309' }}>
                        "Verily my sabbaths ye shall keep... it is a sign between me and you throughout your generations."
                    </p>

                    <ul style={{ paddingLeft: '20px', fontSize: '13px', lineHeight: '1.8', color: '#374151', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                        <li>Then in <strong>Exodus 32</strong>, while Moses was receiving God's law, including the Sabbath command and other covenant instructions, the people broke the covenant by worshipping the golden calf.</li>
                    </ul>

                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ fontSize: '13px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>Summary</p>
                        <ul style={{ paddingLeft: '20px', fontSize: '13px', lineHeight: '1.8', color: '#374151', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li><strong>Ezekiel 20:8</strong> $\rightarrow$ No direct mention of the Sabbath, but the chapter soon connects Israel's rebellion with <strong>profaning God's Sabbaths</strong> (verses 12, 13, 20, 24).</li>
                            <li><strong>Exodus 32:7</strong> $\rightarrow$ No direct mention of the Sabbath, but it follows immediately after God's instruction that the Sabbath would be a <strong>sign of His covenant</strong> (Exodus 31:13–17). The golden calf episode represents a broader act of covenant unfaithfulness rather than a specific violation of the Sabbath command.</li>
                        </ul>
                    </div>

                    <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151' }}>
                        For a Bible study on the Sabbath, Ezekiel 20:12–13, 20, and 24 are the strongest passages because they explicitly connect the Sabbath with God's covenant and Israel's obedience.
                    </p>
                </section>

                <hr style={{ border: '0', borderTop: '1px solid #e5e7eb', marginBottom: '60px' }} />
            </div>
            {/* Section 6: Why God Punished Israel in the Wilderness */}
            <section style={{ marginBottom: '60px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '900', color: '#b45309', marginBottom: '25px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                    WHY GOD PUNISHED ISRAEL IN THE WILDERNESS:
                </h2>

                <div style={{ maxWidth: '750px', margin: '0 auto 25px auto', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                    <img
                        src={c4}
                        alt="Why God Punished Israel in the Wilderness"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>

                <p style={{ fontSize: '13px', lineHeight: '1.8', color: '#374151', textAlign: 'left', maxWidth: '850px', margin: '0 auto' }}>
                    God punished Israel in the wilderness because they refused to walk in His statutes, despised His judgments, polluted His holy Sabbaths, and allowed their hearts to follow idols (Ezekiel 20:13, 16).
                </p>
            </section>

            <hr style={{ border: '0', borderTop: '1px solid #e5e7eb', marginBottom: '60px' }} />
            <JesusCustomSection
                title="IT WAS THE CUSTOM OF JESUS CHRIST TO KEEP THE SABBATH HOLY:"
                imageUrl={Jesus1}
                imageAlt="Jesus Custom to Keep Sabbath Holy"
            // content="And he came to Nazareth, where he had been brought up: and, as his custom was, he went into the synagogue on the sabbath day, and stood up for to read.” (Luke 4:16)"
            />
            <JesusCustomSection
                title="IT WAS THE CUSTOM OF PAUL AND OTHERS TO KEEP THE SABBATH HOLY."
                imageUrl={Jesus1}
                imageAlt="Default"
                content="And he came to Nazareth, where he had been brought up: and, as his custom was, he went into the synagogue on the sabbath day, and stood up for to read.” (Luke 4:16)"
            />
            <SectionImage />
            <JesusCustomSection
                title="TOGETHER IN ONE ACCORD. UNITY IN THE BODY OF CHRIST."
                imageUrl={Jesus5}
                imageAlt="Jesus Custom to Keep Sabbath Holy"
                content="And he came to Nazareth, where he had been brought up: and, as his custom was, he went into the synagogue on the sabbath day, and stood up for to read.” (Luke 4:16)"
            />
            <JesusCustomSection
                title="COMMANDMENT-KEEPING PEOPLE WILL ENTER HEAVEN."
                imageUrl={Jesus6}
                imageAlt="Jesus Custom to Keep Sabbath Holy"
                content="And he came to Nazareth, where he had been brought up: and, as his custom was, he went into the synagogue on the sabbath day, and stood up for to read.” (Luke 4:16)"
            />
            <JesusCustomSection
                title="COMMANDMENTS-KEEPING PEOPLE WILL WORSHIP GOD EYERY SABBATH IN THE NEW
HEAYENS AND THE NEW EARTH."
                imageUrl={Jesus7}
                imageAlt="Jesus Custom to Keep Sabbath Holy"
                content="And he came to Nazareth, where he had been brought up: and, as his custom was, he went into the synagogue on the sabbath day, and stood up for to read.” (Luke 4:16)"
            />
            <JesusCustomSection
                title="FOLLOW THE EXAMPLE OF JESUS"
                imageUrl={Jesus8}
                imageAlt="Jesus Custom to Keep Sabbath Holy"
                content="And he came to Nazareth, where he had been brought up: and, as his custom was, he went into the synagogue on the sabbath day, and stood up for to read.” (Luke 4:16)"
            />
            <JesusCustomSection
                title="AS A NATION'S FLAG IDENTIFIES ITS CITIZENS, GOD'S SABBATH IS THE DIVINE SIGN THAT
IDENTIFIES HIS PEOPLE, DECLARING THAT WE BELONG TO HIM AND ARE HIS CHILDREN:"
                imageUrl={Jesus9}
                imageAlt="Jesus Custom to Keep Sabbath Holy"
                content="And he came to Nazareth, where he had been brought up: and, as his custom was, he went into the synagogue on the sabbath day, and stood up for to read.” (Luke 4:16)"
            />
            <JesusCustomSection
                title="THE TEN COMMANDMENTS AND THE BEATITUDES. A PERFECT HARMONY."
                imageUrl={Jesus10}
                imageAlt="Jesus Custom to Keep Sabbath Holy"
                content="And he came to Nazareth, where he had been brought up: and, as his custom was, he went into the synagogue on the sabbath day, and stood up for to read.” (Luke 4:16)"
            />
            <OurDecisionAndStudySection />
            <SectionsIndexComponent />
            <SomeMoreInformationComponent />
            <RewardAndConfessionsComponent />



        </div>
    );
};




export default ProducerAlbum;