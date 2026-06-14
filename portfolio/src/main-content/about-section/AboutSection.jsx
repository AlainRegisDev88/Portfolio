import './AboutSection.css'

const AboutSection = () => {
    return (
        <section className="section" id="about">
            <div className="sec-header reveal">
                <div className="sec-eyebrow">Who I Am</div>
                <h2 className="sec-title">About Me</h2>
            </div>
            <div className="about-grid reveal">
                <div>
                    <div className="about-bio">
                        <p>I'm Regis, a Computer Science student at Ashesi University in Ghana, originally from <strong>Ngororero,
                            Western Province, Rwanda</strong>. I'm a MasterCard Foundation Scholar and a graduate of the Aspire
                            Leaders Program, committed to using technology as a force for good across Africa.</p>
                        <p>My mission is to build <strong>AI-powered tools that solve real problems</strong> — from weather
                            prediction models for subsistence farmers in Rwanda to data systems that empower communities across the
                            continent. I believe that the most impactful technology is built close to the people who need it.</p>
                        <p>Beyond code, I serve as CMO and Developer on <strong>Annotate</strong>, a research workspace startup, and
                            co-lead Youths For Change at Ashesi, where we run digital skills training and community outreach programs.
                            I play guitar when the code needs to breathe.</p>
                    </div>
                    <div style={{ marginTop: '48px' }}>
                        <div className="sec-eyebrow" style={{ marginBottom: '20px' }}>My Journey</div>
                        <div className="timeline">
                            <div className="tl-item">
                                <div className="tl-year">2022 – 2023</div>
                                <div className="tl-role">Secondary School Graduate</div>
                                <div className="tl-org">Rwanda</div>
                                <div className="tl-desc">Completed secondary education and began exploring programming and technology
                                    independently.</div>
                            </div>
                            <div className="tl-item">
                                <div className="tl-year">2024</div>
                                <div className="tl-role">Aspire Leaders Program</div>
                                <div className="tl-org">Cohort 1, 2026</div>
                                <div className="tl-desc">Developed leadership frameworks and community impact skills alongside exceptional
                                    peers from across Africa.</div>
                            </div>
                            <div className="tl-item active">
                                <div className="tl-year">2024 – Present</div>
                                <div className="tl-role">BSc. Computer Science</div>
                                <div className="tl-org">Ashesi University · MasterCard Foundation Scholar</div>
                                <div className="tl-desc">Building foundations in CS while working on real-world projects in data science,
                                    web development, and AI research.</div>
                            </div>
                            <div className="tl-item">
                                <div className="tl-year">Future</div>
                                <div className="tl-role">AI/ML Engineer</div>
                                <div className="tl-org">Focused on African challenges</div>
                                <div className="tl-desc">Building crop disease detection, weather prediction, and community intelligence
                                    systems for farmers in my home region.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="about-sidebar-card reveal">
                        <div className="profile-placeholder">Profile Photo</div>
                        <div className="info-row"><span className="info-label">Location</span><span className="info-val">Accra, Ghana</span>
                        </div>
                        <div className="info-row"><span className="info-label">Origin</span><span className="info-val">Rwanda 🇷🇼</span></div>
                        <div className="info-row"><span className="info-label">University</span><span className="info-val">Ashesi
                            University</span></div>
                        <div className="info-row"><span className="info-label">Program</span><span className="info-val">BSc. Computer
                            Science</span></div>
                        <div className="info-row"><span className="info-label">Year</span><span className="info-val">Sophomore (Y2)</span></div>
                        <div className="info-row"><span className="info-label">Focus</span><span className="info-val">AI · ML · Data
                            Science</span></div>
                        <div className="info-row"><span className="info-label">Languages</span><span className="info-val">Kinyarwanda, English,
                            French</span></div>
                    </div>
                    <div
                        style={{ marginTop: '24px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px' }}
                        className="reveal">
                        <div className="sec-eyebrow" style={{ marginBottom: '16px' }}>Personality</div>
                        <div id="personality-bars"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;