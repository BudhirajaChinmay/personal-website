import React from 'react';

const Contact = ({ profile }) => {
    return (
        <section className="container section" style={{ paddingBottom: 'var(--spacing-lg)' }}>
            <div className="grid">
                <h2 className="section-title">Contact</h2>
                <div className="section-content">
                    <p className="text-large mb-md">
                        Interested in working together? <br />
                        <a href={`mailto:${profile.email}`} className="accent" style={{ textDecoration: 'underline' }}>
                            Get in touch.
                        </a>
                    </p>

                    <div className="flex gap-sm mb-lg">
                        {profile.social.map((item, index) => (
                            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="text-body" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <item.icon /> {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="text-small" style={{ borderTop: '1px solid var(--color-light-gray)', paddingTop: 'var(--spacing-sm)' }}>
                        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
                        <p>Designed in the Swiss International Style.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
