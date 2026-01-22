const Footer = () => {
    return (
        <footer style={{
            padding: '20px',
            marginTop: 'auto',
            borderTop: '1px solid #444',
            backgroundColor: '#1a1a1a',
            textAlign: 'center'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <p>&copy; {new Date().getFullYear()} ABC Company. All rights reserved.</p>
                <p style={{ fontSize: '0.9rem', color: '#888' }}>Built with React & React Router</p>
            </div>
        </footer>
    );
};

export default Footer;