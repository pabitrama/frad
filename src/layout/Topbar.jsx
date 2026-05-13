import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    toggleTheme,
    increaseFont,
    decreaseFont
} from "../redux/slices/themeSlice";

import { logout } from "../redux/slices/authSlice";

import { useNavigate } from "react-router-dom";

import ViewProfileModal from "../components/common/Profile/ViewProfileModal";

const Topbar = ({ sidebarOpen, setSidebarOpen }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, role } = useSelector(
        (state) => state.auth
    );

    const handleLogout = () => {

        dispatch(logout());

        navigate("/");
    };


    const [profileModal, setProfileModal] =
    useState(false);

    const toggleProfileModal = () => {
    setProfileModal(!profileModal);
    };

    const [profileOpen, setProfileOpen] = useState(false);

    const profileRef = useRef();


    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setProfileOpen(false);
            }
        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };

    }, []);

    return (
<>
        <header className="topbar shadow-sm">

            <div className="topbar-left">

                {/* SIDEBAR TOGGLE */}
                <button
                    className="topbar-btn"
                    onClick={() =>
                        setSidebarOpen(!sidebarOpen)
                    }
                >
                    ☰
                </button>

                <h4 className="portal-title">
                    Semen Inventory Portal
                </h4>

            </div>

            <div className="topbar-right">

                {/* ACCESSIBILITY */}
                <button
                    className="topbar-btn"
                    onClick={() =>
                        dispatch(increaseFont())
                    }
                >
                    A+
                </button>

                <button
                    className="topbar-btn"
                    onClick={() =>
                        dispatch(decreaseFont())
                    }
                >
                    A-
                </button>

                <button
                    className="topbar-btn"
                    onClick={() =>
                        dispatch(toggleTheme())
                    }
                >
                    🌙
                </button>

                {/* USER INFO */}

                <div
                    className="profile-dropdown"
                    ref={profileRef}
                >

                    {/* PROFILE BUTTON */}
                    <button
                        className="profile-btn"
                        onClick={() =>
                            setProfileOpen(!profileOpen)
                        }
                    >

                        {/* PROFILE IMAGE */}
                        <img
                            src="https://i.pravatar.cc/40"
                            alt="profile"
                            className="profile-img"
                        />

                        {/* USER INFO */}
                        <div className="profile-info">

                            <span className="profile-name">
                                {role}
                            </span>

                            <small className="profile-mobile">
                                {user}
                            </small>

                        </div>

                        {/* DROPDOWN ICON */}
                        <i className="bi bi-chevron-down"></i>

                    </button>

                    {/* DROPDOWN MENU */}
                    {profileOpen && (

                        <div className="profile-menu shadow">

                            <button
                                className="profile-menu-item"
                                onClick={toggleProfileModal}
                            >

                                <i className="bi bi-person-circle"></i>

                                View Profile

                            </button>

                            <button
                                className="profile-menu-item logout-item"
                                onClick={handleLogout}
                            >

                                <i className="bi bi-box-arrow-right"></i>

                                Logout

                            </button>

                        </div>

                    )}

                </div>

            </div>

        </header>
        <ViewProfileModal
            isOpen={profileModal}
            toggle={toggleProfileModal}
        />
        </>
    );
};

export default Topbar;