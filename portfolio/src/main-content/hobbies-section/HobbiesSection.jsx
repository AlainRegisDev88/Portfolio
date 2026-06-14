import './HobbiesSection.css'

const HobbiesSection = () => {
    return (
        <section className="section" id="hobbies">
            <div className="sec-header reveal">
                <div className="sec-eyebrow">Beyond the Screen</div>
                <h2 className="sec-title">Hobbies & Interests</h2>
            </div>
            <div className="hobbies-grid reveal">
                <div className="hobby-card">
                    <div className="hobby-icon">🎸</div>
                    <div className="hobby-title">Guitar</div>
                    <div className="hobby-desc">Self-taught guitarist who lets music be the counterweight to long coding sessions.
                        Acoustic, fingerstyle, and learning theory slowly.</div>
                </div>
                <div className="hobby-card">
                    <div className="hobby-icon">🏋️</div>
                    <div className="hobby-title">Strength Training</div>
                    <div className="hobby-desc">Following a structured 3-day split program focused on muscle gain. Discipline in the
                        gym carries over into every technical challenge.</div>
                </div>
                <div className="hobby-card">
                    <div className="hobby-icon">⚽</div>
                    <div className="hobby-title">Football</div>
                    <div className="hobby-desc">Lifelong love of the beautiful game — as a player and a fan. Teamwork and pressure
                        performance transfer directly to project work.</div>
                </div>
                <div className="hobby-card">
                    <div className="hobby-icon">📖</div>
                    <div className="hobby-title">Reading</div>
                    <div className="hobby-desc">Across AI, leadership, philosophy, and biography. A book a month keeps the thinking
                        fresh and the perspective wide.</div>
                </div>
                <div className="hobby-card">
                    <div className="hobby-icon">🔬</div>
                    <div className="hobby-title">AI Research</div>
                    <div className="hobby-desc">Exploring ML applications for African agriculture — crop disease detection and weather
                        prediction models for smallholder farmers.</div>
                </div>
                <div className="hobby-card">
                    <div className="hobby-icon">🌍</div>
                    <div className="hobby-title">Community Building</div>
                    <div className="hobby-desc">Co-leading Youths For Change, teaching digital skills, and believing that the most
                        meaningful technology is built with community, not for it.</div>
                </div>
            </div>
            <div className="quotes-grid reveal" style={{ marginTop: '48px' }}>
                <div className="quote-card">
                    <div className="quote-text">The best way to predict the future is to invent it.</div>
                    <div className="quote-author">— Alan Kay</div>
                </div>
                <div className="quote-card">
                    <div className="quote-text">Technology is best when it brings people together.</div>
                    <div className="quote-author">— Matt Mullenweg</div>
                </div>
                <div className="quote-card">
                    <div className="quote-text">Intelligence is the ability to adapt to change.</div>
                    <div className="quote-author">— Stephen Hawking</div>
                </div>
                <div className="quote-card">
                    <div className="quote-text">Education is the most powerful weapon you can use to change the world.</div>
                    <div className="quote-author">— Nelson Mandela</div>
                </div>
            </div>
        </section>
    );
}

export default HobbiesSection;