import { useEffect, useRef, useState } from 'react'
import './MainContent.css'
import HomePage from './homepage/HomePage'
import AboutSection from './about-section/AboutSection'
import SkillsSection from './skills-section/SkillsSection'
import ProjectsSection from './projects-section/ProjectsSection'
import ExperinceSection from './experience-section/ExperienceSection'
import EducationSection from './education-section/EducationSection'
import CertificationSection from './certifications-section/CertificationsSection'
import BooksSection from './books-section/BooksSection'
import HobbiesSection from './hobbies-section/HobbiesSection'
import AchievementsSection from './achievements-section/AchievementsSection'
import BlogSection from './blog-section/BlogSection'
import ContactSection from './contact-section/ContactSection'
import Footer from '../footer/Footer'

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
                <BooksSection />

                {/* <!-- HOBBIES --> */}
                <HobbiesSection />

                {/* <!-- ACHIEVEMENTS --> */}
                <AchievementsSection />
                
                {/* <!-- BLOG --> */}
                <BlogSection />

                {/* <!-- CONTACT --> */}
                <ContactSection
                    preventDefault={preventDefault}
                    handleSubmit={handleSubmit}
                />

                {/* <!-- FOOTER --> */}
                <Footer />
            </main>
        </>

    );
}

export default MainContent;