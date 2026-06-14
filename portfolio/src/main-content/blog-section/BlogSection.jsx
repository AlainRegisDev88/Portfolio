import './BlogSection.css'

const BlogSection = () => {
    return (
        <section className="section" id="blog">
            <div className="sec-header reveal">
                <div className="sec-eyebrow">Thoughts & Insights</div>
                <h2 className="sec-title">Blog</h2>
                <p className="sec-desc">Writing as a tool for thinking — on AI, African tech, and the journey of building something
                    from scratch.</p>
            </div>
            <div className="blog-grid reveal">
                <div className="blog-card">
                    <div className="blog-tag">Artificial Intelligence</div>
                    <div className="blog-title">Why Africa Needs Its Own AI Models — Not Just Translations</div>
                    <div className="blog-excerpt">The global AI pipeline was not built with African languages, crops, or climates in
                        mind. Here's why building locally-grounded models is not just idealistic — it's technically necessary.</div>
                    <div className="blog-meta"><span>8 min read</span><span>Coming soon</span></div>
                </div>
                <div className="blog-card">
                    <div className="blog-tag">Learning</div>
                    <div className="blog-title">From CSV Files to Full Dashboards: My Python → R → React Workflow</div>
                    <div className="blog-excerpt">A practical breakdown of the data science pipeline I used in my internship —
                        cleaning data with pandas, modeling in R, and building a live React dashboard from scratch.</div>
                    <div className="blog-meta"><span>6 min read</span><span>Coming soon</span></div>
                </div>
                <div className="blog-card">
                    <div className="blog-tag">Leadership</div>
                    <div className="blog-title">What Running a Club Taught Me About Shipping Software</div>
                    <div className="blog-excerpt">Co-leading Youths For Change and building Annotate simultaneously taught me that the
                        hardest part of any project is the same: keeping people aligned when the path isn't clear.</div>
                    <div className="blog-meta"><span>5 min read</span><span>Coming soon</span></div>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;