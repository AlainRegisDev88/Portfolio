import './AchievementsSection.css'

const AchievementsSection = () => {
    return (
        <section className="section" id="achievements">
            <div className="sec-header reveal">
                <div className="sec-eyebrow">Milestones</div>
                <h2 className="sec-title">Achievements</h2>
            </div>
            <div className="ach-grid reveal">
                <div className="ach-card">
                    <div className="ach-cat">Scholarship</div>
                    <div className="ach-title">MasterCard Foundation Scholar</div>
                    <div className="ach-detail">Highly competitive scholarship supporting transformative African leaders pursuing
                        higher education at Ashesi University.</div>
                    <div className="ach-year">2024</div>
                </div>
                <div className="ach-card">
                    <div className="ach-cat">Leadership Program</div>
                    <div className="ach-title">Aspire Leaders Program — Cohort 1</div>
                    <div className="ach-detail">Selected for a global leadership development program designed to accelerate Africa's
                        next generation of change-makers.</div>
                    <div className="ach-year">2026</div>
                </div>
                <div className="ach-card">
                    <div className="ach-cat">Research</div>
                    <div className="ach-title">National Geographic Externship Applicant</div>
                    <div className="ach-detail">Applied to the Marine & Community Conservation Externship, connecting personal story
                        from Lake Kivu and Rwanda's wetlands to global conservation work.</div>
                    <div className="ach-year">2025</div>
                </div>
                <div className="ach-card">
                    <div className="ach-cat">Startup</div>
                    <div className="ach-title">Co-Founder, Annotate</div>
                    <div className="ach-detail">Built and pitched a research workspace startup as a freshman — handling both the CMO
                        and developer roles simultaneously.</div>
                    <div className="ach-year">2024 – Present</div>
                </div>
                <div className="ach-card">
                    <div className="ach-cat">Internship</div>
                    <div className="ach-title">Data Science Intern at Future Interns</div>
                    <div className="ach-detail">Completed a data science and analytics internship, delivering a full end-to-end
                        analytics project using Python, R, and React.</div>
                    <div className="ach-year">2026</div>
                </div>
                <div className="ach-card">
                    <div className="ach-cat">Community</div>
                    <div className="ach-title">Co-Leader, Youths For Change</div>
                    <div className="ach-detail">Building digital literacy and health education programs for communities around Ashesi
                        University's campus in Berekuso.</div>
                    <div className="ach-year">2024 – Present</div>
                </div>
            </div>
        </section>

    );
}

export default AchievementsSection;