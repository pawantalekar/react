import { NavLink, Outlet } from "react-router-dom";
function Layout() {
    return (
        <div style={{ padding: '20px', minHeight: '100vh' }}>
            <nav style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '2rem',
                padding: '10px',
                backgroundColor: '#1a1a1a',
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
                        backgroundColor: isActive ? '#2a2a2a' : 'transparent'
                    })}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/header"
                    style={({ isActive }) => ({
                        color: isActive ? '#535bf2' : '#646cff',
                        textDecoration: 'none',
                        padding: '5px 10px',
                        borderRadius: '4px',
                        backgroundColor: isActive ? '#2a2a2a' : 'transparent'
                    })}
                >
                    Header
                </NavLink>
                <NavLink
                    to="/footer"
                    style={({ isActive }) => ({
                        color: isActive ? '#535bf2' : '#646cff',
                        textDecoration: 'none',
                        padding: '5px 10px',
                        borderRadius: '4px',
                        backgroundColor: isActive ? '#2a2a2a' : 'transparent'
                    })}
                >
                    Footer
                </NavLink>
            </nav>
            <main style={{ padding: '20px' }}>
                <Outlet />
            </main>
        </div>
    )
}
export default Layout;