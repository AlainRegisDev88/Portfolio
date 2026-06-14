import './SkillsSection.css'

const SkillsSection = () => {
    return (
        <section className="section" id="skills">
            <div className="sec-header reveal">
                <div className="sec-eyebrow">Technical Arsenal</div>
                <h2 className="sec-title">Skills</h2>
                <p className="sec-desc">A growing toolkit built through coursework, internships, and self-directed learning — all in
                    service of building intelligent systems.</p>
            </div>
            <div className="skills-grid reveal">
                <div className="skill-cat">
                    <div className="skill-cat-title">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                        </svg>
                        Programming
                    </div>
                    <div className="skill-bar-item">
                        <div className="skill-bar-label"><span>Python</span><span>85%</span></div>
                        <div className="skill-bar-track">
                            <div className="skill-bar-fill" data-w="85" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar-item">
                        <div className="skill-bar-label"><span>JavaScript</span><span>70%</span></div>
                        <div className="skill-bar-track">
                            <div className="skill-bar-fill" data-w="70" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar-item">
                        <div className="skill-bar-label"><span>Java</span><span>60%</span></div>
                        <div className="skill-bar-track">
                            <div className="skill-bar-fill" data-w="60" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar-item">
                        <div className="skill-bar-label"><span>C</span><span>55%</span></div>
                        <div className="skill-bar-track">
                            <div className="skill-bar-fill" data-w="55" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar-item">
                        <div className="skill-bar-label"><span>SQL</span><span>65%</span></div>
                        <div className="skill-bar-track">
                            <div className="skill-bar-fill" data-w="65" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar-item">
                        <div className="skill-bar-label"><span>R</span><span>40%</span></div>
                        <div className="skill-bar-track">
                            <div className="skill-bar-fill" data-w="40" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="skill-cat">
                    <div className="skill-cat-title">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path
                                d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96.44 2.5 2.5 0 01-2.96-3.08 3 3 0 01-.34-5.58 2.5 2.5 0 013.32-3.97A2.5 2.5 0 019.5 2z" />
                            <path
                                d="M14.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 004.96.44 2.5 2.5 0 002.96-3.08 3 3 0 00.34-5.58 2.5 2.5 0 00-3.32-3.97A2.5 2.5 0 0014.5 2z" />
                        </svg>
                        AI & Data Science
                    </div>
                    <div className="skill-bar-item">
                        <div className="skill-bar-label"><span>Data Analysis</span><span>75%</span></div>
                        <div className="skill-bar-track">
                            <div className="skill-bar-fill" data-w="75" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar-item">
                        <div className="skill-bar-label"><span>Machine Learning</span><span>50%</span></div>
                        <div className="skill-bar-track">
                            <div className="skill-bar-fill" data-w="50" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar-item">
                        <div className="skill-bar-label"><span>Data Visualization</span><span>70%</span></div>
                        <div className="skill-bar-track">
                            <div className="skill-bar-fill" data-w="70" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar-item">
                        <div className="skill-bar-label"><span>pandas / numpy</span><span>75%</span></div>
                        <div className="skill-bar-track">
                            <div className="skill-bar-fill" data-w="75" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar-item">
                        <div className="skill-bar-label"><span>Deep Learning</span><span>30%</span></div>
                        <div className="skill-bar-track">
                            <div className="skill-bar-fill" data-w="30" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="skill-cat">
                    <div className="skill-cat-title">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                        </svg>
                        Web Development
                    </div>
                    <div className="skill-bar-item">
                        <div className="skill-bar-label"><span>React</span><span>70%</span></div>
                        <div className="skill-bar-track">
                            <div className="skill-bar-fill" data-w="70" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar-item">
                        <div className="skill-bar-label"><span>HTML / CSS</span><span>80%</span></div>
                        <div className="skill-bar-track">
                            <div className="skill-bar-fill" data-w="80" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar-item">
                        <div className="skill-bar-label"><span>FastAPI</span><span>50%</span></div>
                        <div className="skill-bar-track">
                            <div className="skill-bar-fill" data-w="50" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar-item">
                        <div className="skill-bar-label"><span>PostgreSQL</span><span>45%</span></div>
                        <div className="skill-bar-track">
                            <div className="skill-bar-fill" data-w="45" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                    <div className="skill-bar-item">
                        <div className="skill-bar-label"><span>Bootstrap</span><span>65%</span></div>
                        <div className="skill-bar-track">
                            <div className="skill-bar-fill" data-w="65" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                </div>
                <div className="skill-cat">
                    <div className="skill-cat-title">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
                        </svg>
                        Tools & Platforms
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '4px' }}>
                        <span className="skill-tag">Git</span><span className="skill-tag">GitHub</span>
                        <span className="skill-tag">VS Code</span><span className="skill-tag">Linux</span>
                        <span className="skill-tag">Jupyter</span><span className="skill-tag">React Router</span>
                        <span className="skill-tag">Figma</span><span className="skill-tag">Postman</span>
                        <span className="skill-tag">Excel</span><span className="skill-tag">Tableau</span>
                        <span className="skill-tag">Power BI</span><span className="skill-tag">Firebase</span>
                    </div>
                    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                        <div
                            style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text3)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
                            Currently Learning</div>
                        <span className="skill-tag" style={{ borderColor: 'var(--border2)', color: 'var(--text2)' }}>Deep Learning</span>
                        <span className="skill-tag" style={{ borderColor: 'var(--border2)', color: 'var(--text2)' }}>TensorFlow</span>
                        <span className="skill-tag" style={{ borderColor: 'var(--border2)', color: 'var(--text2)' }}>R (stats)</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;