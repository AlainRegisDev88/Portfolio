const EducationSection = () => {
    return (
        <section className="section" id="education">
            <div className="sec-header reveal">
                <div className="sec-eyebrow">Academic Foundation</div>
                <h2 className="sec-title">Education</h2>
            </div>
            <div className="edu-cards reveal">
                <div className="edu-card">
                    <div className="edu-degree">BSc. Computer Science · 2024 – 2028</div>
                    <div className="edu-school">Ashesi University</div>
                    <div className="edu-detail" style={{ color: 'var(--text2)' }}>Berekuso, Eastern Region, Ghana</div>
                    <div className="edu-detail" style={{ color: 'var(--text3)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>MasterCard
                        Foundation Scholar</div>
                    <div className="edu-courses">
                        <div className="courses-label">Relevant Coursework</div>
                        <span className="course-tag">Data Structures</span>
                        <span className="course-tag">Algorithms</span>
                        <span className="course-tag">Calculus</span>
                        <span className="course-tag">Linear Algebra</span>
                        <span className="course-tag">Data Science</span>
                        <span className="course-tag">OOP (Java)</span>
                        <span className="course-tag">Discrete Math</span>
                        <span className="course-tag">Leadership</span>
                    </div>
                </div>
                <div className="edu-card">
                    <div className="edu-degree">Leadership Program · 2026</div>
                    <div className="edu-school">Aspire Leaders Program</div>
                    <div className="edu-detail" style={{ color: 'var(--text2)' }}>Cohort 1, 2026</div>
                    <div className="edu-detail" style={{ color: 'var(--text3)', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>Graduate</div>
                    <div className="edu-courses">
                        <div className="courses-label">Focus Areas</div>
                        <span className="course-tag">Servant Leadership</span>
                        <span className="course-tag">Community Impact</span>
                        <span className="course-tag">Career Development</span>
                        <span className="course-tag">Networking</span>
                        <span className="course-tag">Global Perspective</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EducationSection;