import React from 'react';
import Backdrop from '../components/Backdrop';
import violence from '../assets/violence.png';

// Reusable Theme Card Component
const ThemeCard = ({ title, description, items }) => {
    return (
        <div style={{
            backgroundColor: '#fef3c7',
            border: '1px solid #fde68a',
            borderRadius: '24px',
            padding: '35px 30px',
            flex: '1 1 450px',
            maxWidth: '480px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left'
        }}>
            <h3 style={{ fontSize: '18px', fontFamily: 'serif', fontWeight: '900', color: '#b45309', letterSpacing: '0.5px', marginBottom: '12px' }}>
                {title}
            </h3>

            <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.6', marginBottom: '20px' }}>
                {description}
            </p>

            <h4 style={{ fontSize: '14px', fontFamily: 'serif', fontWeight: 'bold', color: '#b45309', marginBottom: '12px' }}>
                Key Initiatives:
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {items.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <span style={{ color: '#d97706', fontSize: '12px', fontWeight: 'bold', marginTop: '2px' }}>&#10003;</span>
                        <span style={{ fontSize: '13px', color: '#374151', lineHeight: '1.5' }}>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const PresentCondition = () => {
    return (
        <div className="min-h-screen bg-black text-white p-8">
            <Backdrop title="Condition of the Present World" />
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', textAlign: 'center' }}>

                {/* Section Heading */}
                <h2 style={{ fontSize: '26px', fontFamily: 'serif', fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '25px' }}>
                    Condition of the Present World
                </h2>

                {/* Description Text */}
                <p style={{ maxWidth: '850px', margin: '0 auto 40px auto', fontSize: '13px', lineHeight: '1.8', color: '#374151' }}>
                    We are living in a time of profound moral and spiritual decline. Across the world, the foundations of truth, justice, and righteousness are being shaken. What was once considered right is now often ignored, and what was once condemned is increasingly normalized. Society is witnessing a steady erosion of values—where respect for authority, reverence for life, and commitment to moral principles are fading. The absence of guiding laws rooted in truth and love has led to confusion, disorder, and instability.
                </p>

                {/* Image Container */}
                <div style={{ maxWidth: '850px', margin: '0 auto 80px auto', borderRadius: '24px', overflow: 'hidden', border: '1px solid #d1d5db', backgroundColor: '#f3f4f6', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                    <img
                        src={violence}
                        alt="Scream of Violence Banner"
                        style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                    />
                </div>

                {/* Themes & Issues Explored Section Heading */}
                <h2 style={{ fontSize: '26px', fontFamily: 'serif', fontWeight: '900', color: '#b45309', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '40px' }}>
                    Themes & Issues Explored in the Album
                </h2>

                {/* Grid Container for Theme Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    {/* Row 1 */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                        <ThemeCard
                            title="Personal & Moral Challenges"
                            description="The album explores the inner condition of the human heart and its departure from righteousness:"
                            items={[
                                "Pride, selfishness, and self-centered living",
                                "Deceit, hypocrisy, lying, and false witness",
                                "Envy, jealousy, hatred, and destructive thoughts",
                                "Moral decline through lust, immorality, and addiction",
                                "Spiritual drift, rebellion, and rejection of truth"
                            ]}
                        />
                        <ThemeCard
                            title="Domestic & Social Brokenness"
                            description="It portrays the pain and instability within homes and communities:"
                            items={[
                                "Broken families, unfaithfulness, and betrayal",
                                "Domestic violence and loss of trust",
                                "Emotional suffering, mental distress, and hopelessness",
                                "Abuse, exploitation, and crimes against women and children",
                                "Division, gossip, and breakdown of relationships"
                            ]}
                        />
                    </div>

                    {/* Row 2 */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                        <ThemeCard
                            title="Crime, Violence & Injustice"
                            description="The album exposes the growing presence of injustice in the world:"
                            items={[
                                "Theft, fraud, bribery, and corruption",
                                "Violence, cruelty, and loss of human compassion",
                                "Exploitation of the vulnerable and human trafficking",
                                "War, destruction, and disregard for life",
                                "Oppression and suffering of the weak"
                            ]}
                        />
                        <ThemeCard
                            title="Societal & Cultural Challenges"
                            description="It highlights the broader struggles affecting society:"
                            items={[
                                "Poverty, inequality, and economic hardship",
                                "Social discrimination and cultural divisions",
                                "Exploitation of children and vulnerable communities",
                                "Gender injustice and devaluation of life",
                                "Addiction, moral decline, and neglect of public responsibility"
                            ]}
                        />
                    </div>

                    {/* Row 3 (Single Centered Card) */}
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <ThemeCard
                            title="Spiritual & Religious Concerns"
                            description="The album also reveals the condition of spiritual life:"
                            items={[
                                "Religious hypocrisy without true transformation",
                                "Division and conflict among faith communities",
                                "Misuse of God's name and loss of reverence",
                                "Love of pleasure over truth and righteousness",
                                "Decline in faith, holiness, and obedience"
                            ]}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PresentCondition;