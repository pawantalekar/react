const Footer = () => {
    return (
        <footer style={{ padding: '20px', marginTop: '2rem', borderTop: '1px solid #444' }}>
            <div>
                <h2>Footer Page</h2>
                <p>&copy; {new Date().getFullYear()} ABC Company. All rights reserved.</p>
                <p>This is the footer component of our application.</p>
            </div>
        </footer>
    );
};

export default Footer;