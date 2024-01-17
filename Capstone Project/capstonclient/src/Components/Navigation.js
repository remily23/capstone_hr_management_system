import { Link, Outlet } from "react-router-dom";


const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <button>
            <Link to="dashboard">Dashboard</Link>
          </button>
          <button>
            <Link to="newaccount">Create Account</Link>
          </button>
          {/* <button>
            <Link to="/login">Sign-out</Link>
          </button> */}
          <button>
            <Link to="profile">Profile</Link>
          </button>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Navigation;
