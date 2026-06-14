import './BooksSection.css'

const BooksSection = () => {
    return (
        <section className="section" id="books">
            <div className="sec-header reveal">
                <div className="sec-eyebrow">Continuous Learning</div>
                <h2 className="sec-title">Books & Learning</h2>
                <p className="sec-desc">Knowledge compounds. Every book is an investment in becoming a better engineer and leader.
                </p>
            </div>
            <div className="books-grid reveal">
                <div className="book-card">
                    <div className="book-cover">Hands-On Machine Learning</div>
                    <div className="book-info">
                        <div className="book-author">Aurélien Géron</div>
                        <div className="book-stars">★★★★★ · AI/ML</div>
                    </div>
                </div>
                <div className="book-card">
                    <div className="book-cover">Clean Code</div>
                    <div className="book-info">
                        <div className="book-author">Robert C. Martin</div>
                        <div className="book-stars">★★★★★ · Engineering</div>
                    </div>
                </div>
                <div className="book-card">
                    <div className="book-cover">The Lean Startup</div>
                    <div className="book-info">
                        <div className="book-author">Eric Ries</div>
                        <div className="book-stars">★★★★☆ · Entrepreneurship</div>
                    </div>
                </div>
                <div className="book-card">
                    <div className="book-cover">Deep Work</div>
                    <div className="book-info">
                        <div className="book-author">Cal Newport</div>
                        <div className="book-stars">★★★★★ · Productivity</div>
                    </div>
                </div>
                <div className="book-card">
                    <div className="book-cover">Atomic Habits</div>
                    <div className="book-info">
                        <div className="book-author">James Clear</div>
                        <div className="book-stars">★★★★★ · Growth</div>
                    </div>
                </div>
                <div className="book-card">
                    <div className="book-cover">Long Walk to Freedom</div>
                    <div className="book-info">
                        <div className="book-author">Nelson Mandela</div>
                        <div className="book-stars">★★★★★ · Leadership</div>
                    </div>
                </div>
            </div>
            <div
                style={{ marginTop: '40px', background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '32px', maxWidth: '640px' }}
                className="reveal">
                <div className="sec-eyebrow" style={{ marginBottom: '14px' }}>Learning Philosophy</div>
                <p style={{ color: 'var(--text2)', lineHeight: 1.8, fontSize: '15px' }}>"I build technical solutions to African and global
                    problems using data science and ML, fueled by my passion for learning and helping others. Every skill I
                    acquire is a potential tool in service of something bigger than myself."</p>
            </div>
        </section>
    );
}

export default BooksSection;