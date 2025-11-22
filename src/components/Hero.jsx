import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ profile }) => {
    return (
        <section className="container" style={{ minHeight: 'max(70vh, 500px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '2rem', paddingBottom: '2rem' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-huge mb-md">
                    HELLO,<br />
                    I AM <span className="accent">{profile.name.split(' ')[0].toUpperCase()}</span>.
                </h1>

                <div className="grid">
                    <div className="section-content" style={{ gridColumn: 'span 8' }}>
                        <p className="text-large mb-md">
                            {profile.role} based in {profile.location.split(',')[0]}.
                        </p>
                        <p className="text-body" style={{ maxWidth: '600px' }}>
                            {profile.about}
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
