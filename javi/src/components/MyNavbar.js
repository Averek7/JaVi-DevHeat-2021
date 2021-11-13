<<<<<<< HEAD
import React, { useEffect } from "react";
import { Navbar, Nav, Container, Figure } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
          history("/home");
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
        <Navbar.Brand href="/home">FIT-HUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {!userName ? (
          <Nav.Link onClick={handleAuth} style={{ color: "white" }}>
            LOGIN
          </Nav.Link>
        ) : (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/chatroom">Chat Room</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
            </Nav>
            <Nav>
              <Figure>
                <Figure.Image
                  width={25}
                  height={25}
                  alt={userName}
                  src={userPhoto}
                />
                <Nav.Link onClick={handleAuth}>LogOut</Nav.Link>
              </Figure>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
=======
import React, { useEffect } from "react";
import { Navbar, Nav, Container, Figure } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
        <Navbar.Brand href="#home">FIT-HUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#chatroom">Chat Room</Nav.Link>\
            <Nav.Link href="#aboutus">About Us</Nav.Link>
          </Nav>
          <Nav>
            {!userName ? (
              <Nav.Link onClick={handleAuth}>Login</Nav.Link>
            ) : (
              <>
                {/* <Figure> */}
                <div className="user-box">
                  <Figure.Image
                    width={30}
                    height={30}
                    alt={userName}
                    src={userPhoto}
                    className="profile-img"
                  />
                  {/* </Figure> */}
                  <Nav.Link className="navbar-usrname">{userName}</Nav.Link>
                </div>
                <Nav.Link onClick={handleAuth}>LogOut</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
>>>>>>> c9714db8b2d57afe7c81b4483c79f8304ab035ac
