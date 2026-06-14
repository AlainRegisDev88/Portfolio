import { useEffect, useRef, useState } from 'react'
import './MainContent.css'
import HomePage from './homepage/HomePage'
import AboutSection from './about-section/AboutSection'
import SkillsSection from './skills-section/SkillsSection'
import ProjectsSection from './projects-section/ProjectsSection'
import ExperinceSection from './experience-section/ExperienceSection'
import EducationSection from './education-section/EducationSection'
import CertificationSection from './certifications-section/CertificationsSection'

const personalityTraits = [
    { label: 'Curiosity', val: 95 },
    { label: 'Discipline', val: 88 },
    { label: 'Creativity', val: 80 },
    { label: 'Adaptability', val: 85 },
    { label: 'Teamwork', val: 90 }
]

const MainContent = ({ sidebarOpen, toggleSidebar, closeSidebar }) => {
    const canvasRef = useRef(null)
    const [formMessage, setFormMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormMessage("✓ Message received — I'll get back to you soon.")
    }

    const preventDefault = (e) => e.preventDefault()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let W = window.innerWidth
        let H = window.innerHeight
        let nodes = []
        const NODE_COUNT = 60
        let animId

        const resizeCanvas = () => {
            W = canvas.width = window.innerWidth
            H = canvas.height = window.innerHeight
        }

        const initNodes = () => {
            nodes = []
            for (let i = 0; i < NODE_COUNT; i++) {
                nodes.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    r: Math.random() * 1.5 + 0.5,
                    pulse: Math.random() * Math.PI * 2
                })
            }
        }

        const drawNeural = () => {
            ctx.clearRect(0, 0, W, H)
            nodes.forEach((n) => {
                n.x += n.vx
                n.y += n.vy
                if (n.x < 0 || n.x > W) n.vx *= -1
                if (n.y < 0 || n.y > H) n.vy *= -1
                n.pulse += 0.02
            })

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x
                    const dy = nodes[i].y - nodes[j].y
                    const d = Math.sqrt(dx * dx + dy * dy)
                    if (d < 120) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(255,255,255,${(1 - d / 120) * 0.12})`
                        ctx.lineWidth = 0.5
                        ctx.moveTo(nodes[i].x, nodes[i].y)
                        ctx.lineTo(nodes[j].x, nodes[j].y)
                        ctx.stroke()
                    }
                }
            }

            nodes.forEach((n) => {
                const pulse = 0.7 + Math.sin(n.pulse) * 0.3
                ctx.beginPath()
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255,255,255,${pulse * 0.4})`
                ctx.fill()
            })

            animId = requestAnimationFrame(drawNeural)
        }

        const handleResize = () => {
            resizeCanvas()
            initNodes()
        }

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (reduceMotion) {
            canvas.style.display = 'none'
        } else {
            resizeCanvas()
            initNodes()
            drawNeural()
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
            if (animId) cancelAnimationFrame(animId)
        }
    }, [])

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll('.section'))
        const navItems = Array.from(document.querySelectorAll('.nav-item'))

        const updateActive = () => {
            let current = ''
            sections.forEach((s) => {
                const top = s.offsetTop - 100
                if (window.scrollY >= top) current = s.id
            })
            navItems.forEach((n) => {
                n.classList.toggle('active', n.getAttribute('href') === '#' + current)
            })
        }

        window.addEventListener('scroll', updateActive, { passive: true })
        updateActive()

        return () => {
            window.removeEventListener('scroll', updateActive)
        }
    }, [])

    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal')
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.12 }
        )

        reveals.forEach((r) => observer.observe(r))
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const barObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.skill-bar-fill').forEach((bar) => {
                            setTimeout(() => {
                                bar.style.width = `${bar.dataset.w}%`
                            }, 200)
                        })
                        barObserver.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.2 }
        )

        document.querySelectorAll('.skill-cat').forEach((cat) => barObserver.observe(cat))
        return () => barObserver.disconnect()
    }, [])

    useEffect(() => {
        const pbContainer = document.getElementById('personality-bars')
        if (!pbContainer) return
        const pbObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('[data-pw]').forEach((bar) => {
                            setTimeout(() => {
                                bar.style.width = `${bar.dataset.pw}%`
                            }, 300)
                        })
                        pbObserver.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.3 }
        )
        pbObserver.observe(pbContainer)
        return () => pbObserver.disconnect()
    }, [])

    return (
        <>

            <canvas id="neural-canvas" ref={canvasRef}></canvas>

            <button id="mobile-toggle" onClick={toggleSidebar} aria-label="Toggle menu">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="17" x2="21" y2="17" />
                </svg>
            </button>
            <div className="sidebar-overlay" id="overlay" onClick={toggleSidebar}></div>
            <main className="main">

                {/* <!-- HOME --> */}
                <HomePage />

                {/* <!-- ABOUT --> */}
                <AboutSection />

                {/* <!-- SKILLS --> */}
                <SkillsSection />

                {/* <!-- PROJECTS --> */}
                <ProjectsSection />

                {/* <!-- EXPERIENCE --> */}
                <ExperinceSection />

                {/* <!-- EDUCATION --> */}
                <EducationSection />

                {/* <!-- CERTIFICATIONS --> */}
                <CertificationSection />

                {/* <!-- BOOKS --> */}
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

                {/* <!-- HOBBIES --> */}
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

                {/* <!-- ACHIEVEMENTS --> */}
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

                {/* <!-- BLOG --> */}
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

                {/* <!-- CONTACT --> */}
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

                {/* <!-- FOOTER --> */}
                <footer
                    style={{ borderTop: '1px solid var(--border)', padding: '32px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text3)' }}>© 2026 Regis · Ashesi University ·
                        Rwanda 🇷🇼</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text3)' }}>Built with curiosity and intention
                    </div>
                </footer>

            </main>
        </>

    );
}

export default MainContent;