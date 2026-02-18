import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>Marketplace</Link>

      <div>
        {user ? (
          <>
            <Link to="/favorites" style={styles.link}>Favorites</Link>
            <span style={styles.user}>Hi, {user.name}</span>
            <button onClick={logout} style={styles.button}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
  display: "flex",
  justifyContent: "space-between",
  padding: "15px 30px",
  background: "linear-gradient(90deg, #111, #333)",
  color: "#fff",
},
  logo: { color: "#fff", textDecoration: "none", fontWeight: "bold" },
  link: { color: "#fff", marginRight: "15px", textDecoration: "none" },
  user: { marginRight: "15px" },
  button: { padding: "5px 10px" },
};

export default Navbar;
