const Footer = () => {
    return (
        <footer
            style={{ borderTop: '1px solid var(--border)', padding: '32px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text3)' }}>© 2026 Regis · Ashesi University ·
                Rwanda 🇷🇼</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text3)' }}>Built with curiosity and intention
            </div>
        </footer>

    );
}

export default Footer;