import './CertificationsSection.css'

const CertificationSection = () => {
    return (
        <section className="section" id="certifications">
            <div className="sec-header reveal">
                <div className="sec-eyebrow">Verified Learning</div>
                <h2 className="sec-title">Certifications</h2>
            </div>
            <div className="cert-stats reveal">
                <div className="cert-stat">
                    <div className="cert-stat-num">5+</div>
                    <div className="cert-stat-label">Certificates</div>
                </div>
                <div className="cert-stat">
                    <div className="cert-stat-num">200+</div>
                    <div className="cert-stat-label">Learning Hours</div>
                </div>
                <div className="cert-stat">
                    <div className="cert-stat-num">4+</div>
                    <div className="cert-stat-label">Platforms</div>
                </div>
            </div>
            <div className="cert-grid reveal">
                <div className="cert-card">
                    <div className="cert-issuer">Future Interns</div>
                    <div className="cert-name">Data Science & Analytics Internship</div>
                    <div className="cert-date">May – Jun 2026 · CIN: FIT/MAY26/DS18653</div>
                </div>
                <div className="cert-card">
                    <div className="cert-issuer">Aspire Leaders Program</div>
                    <div className="cert-name">Leadership Development — Cohort 1</div>
                    <div className="cert-date">2026</div>
                </div>
                <div className="cert-card">
                    <div className="cert-issuer">MasterCard Foundation</div>
                    <div className="cert-name">MasterCard Foundation Scholar</div>
                    <div className="cert-date">2024 – 2028</div>
                </div>
                <div className="cert-card">
                    <div className="cert-issuer">Codetopia</div>
                    <div className="cert-name">Community Internship — Developer Relations</div>
                    <div className="cert-date">Jun 2026 – Present</div>
                </div>
            </div>
        </section>
    );
}

export default CertificationSection;