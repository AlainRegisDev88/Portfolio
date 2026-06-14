import './HomePage.css'

const HomePage = ({preventDefault}) => {
    return ( 
        <section className="section" id="home">
                    <div className="hero-eyebrow">Computer Science Student</div>
                    <h1 className="hero-title">Building<br />Intelligence<br /><em>for a Better Future</em></h1>
                    <p className="hero-sub">CS freshman at Ashesi University with a focus on AI and machine learning — building tools that
                        serve African communities, from farmers in Rwanda to students across the continent.</p>
                    <div className="hero-ctas">
                        <a href="#projects" className="btn btn-primary">View Projects
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#contact" className="btn btn-ghost">Contact Me</a>
                        <a href="#" className="btn btn-ghost" onClick={preventDefault}>Download CV</a>
                    </div>
                    <div className="hero-stats reveal">
                        <div className="stat-item">
                            <div className="stat-num">1+</div>
                            <div className="stat-label">Years Learning</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">8+</div>
                            <div className="stat-label">Projects Built</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">5+</div>
                            <div className="stat-label">Languages</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">3+</div>
                            <div className="stat-label">Certifications</div>
                        </div>
                    </div>
                </section>

     );
}
 
export default HomePage;