import React, { useEffect } from "react";
import { Navbar, Nav, Container, Figure, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../feature/userSch";

const MyNavbar = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history("/home");
      }
    });
    // eslint-disable-next-line
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history("/");
        })
        .catch((err) => alert(err.message));
    }
  };
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          href="/home"
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            fontFamily: "monospace",
            padding: "5px 15px",
            margin: "-5px",
            background: "purple",
            marginRight: "10px",
            borderRadius: "20px 50px",
          }}
        >
          <i class="fas fa-heartbeat fa-fw"></i>
          FIT-HUB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {!userName ? (
          <div className="login-btn">
            <Nav.Link
              onClick={handleAuth}
              style={{
                color: "white",
              }}
            >
              <i class="far fa-user" style={{ paddingRight: "5px" }}></i>
              LOGIN
            </Nav.Link>
          </div>
        ) : (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/home/chatroom">Chat Room</Nav.Link>
              <Nav.Link as={Link} to="/home/contact">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/home/about">About Us</Nav.Link>
            </Nav>
            <Nav>
              <>
                <div className="user-box">
                  <Figure.Image
                    width={30}
                    height={30}
                    src={userPhoto}
                    className="profile-img"
                  />
                  <Badge bg="success">{userName}</Badge>
                </div>
                <div className="logout-btn">
                  <Nav.Link
                    onClick={handleAuth}
                    style={{
                      color: "white",
                    }}
                  >
                    LOGOUT <i class="fa-fw fas fa-sign-out-alt"></i>
                  </Nav.Link>
                </div>
              </>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
