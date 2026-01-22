import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header style={{
            backgroundColor: '#1a1a1a',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '1rem' }}>My Application</h1>
                <nav style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '10px',
                    backgroundColor: '#2a2a2a',
                    borderRadius: '8px'
                }}>
                    <NavLink
                        to="/"
                        end
                        style={({ isActive }) => ({
                            color: isActive ? '#535bf2' : '#646cff',
                            textDecoration: 'none',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            backgroundColor: isActive ? '#3a3a3a' : 'transparent',
                            fontWeight: isActive ? 'bold' : 'normal'
                        })}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        style={({ isActive }) => ({
                            color: isActive ? '#535bf2' : '#646cff',
                            textDecoration: 'none',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            backgroundColor: isActive ? '#3a3a3a' : 'transparent',
                            fontWeight: isActive ? 'bold' : 'normal'
                        })}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        style={({ isActive }) => ({
                            color: isActive ? '#535bf2' : '#646cff',
                            textDecoration: 'none',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            backgroundColor: isActive ? '#3a3a3a' : 'transparent',
                            fontWeight: isActive ? 'bold' : 'normal'
                        })}
                    >
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;