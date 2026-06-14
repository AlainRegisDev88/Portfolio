import './ContactSection.css'

const ContactSection = ( {preventDefault, handleSubmit} ) => {
    return (
        <section className="section" id="contact">
            <div className="sec-header reveal">
                <div className="sec-eyebrow">Let's Connect</div>
                <h2 className="sec-title">Contact</h2>
            </div>
            <div className="contact-grid reveal">
                <div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-input" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-input" placeholder="you@example.com" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Subject</label>
                            <input type="text" className="form-input" placeholder="What's this about?" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Message</label>
                            <textarea className="form-textarea" placeholder="Tell me what's on your mind..."></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                            </svg>
                        </button>
                        <div id="form-msg"
                            style={{ display: 'none', fontSize: '13px', color: 'var(--text2)', fontFamily: 'var(--font-mono)', marginTop: '8px', padding: '10px 14px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '6px' }}>
                        </div>
                    </form>
                </div>
                <div className="contact-info">
                    <div className="status-badge">
                        <div className="status-dot"></div>Available for opportunities
                    </div>
                    <div className="contact-info-item">
                        <div className="contact-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </div>
                        <div>
                            <div className="contact-info-label">Email</div>
                            <div className="contact-info-val">regis@ashesi.edu.gh</div>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <div className="contact-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <div>
                            <div className="contact-info-label">Location</div>
                            <div className="contact-info-val">Accra, Ghana · Kigali, Rwanda</div>
                        </div>
                    </div>
                    <div className="contact-info-item">
                        <div className="contact-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
                            </svg>
                        </div>
                        <div>
                            <div className="contact-info-label">Discord</div>
                            <div className="contact-info-val">Available on request</div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                        <a href="#" onClick={preventDefault} className="btn btn-ghost" style={{ fontSize: '12px', padding: '10px 16px' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </a>
                        <a href="#" onClick={preventDefault} className="btn btn-ghost" style={{ fontSize: '12px', padding: '10px 16px' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;