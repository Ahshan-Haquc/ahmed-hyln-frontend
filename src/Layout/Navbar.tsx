import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout, selectUser } from "@/store/features/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import CommonWrapper from "@/common/CommonWrapper";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <nav
            style={{
                borderBottom: "1px solid #2F2F2F",
                background: "#000",
                backdropFilter: "blur(6px)",
                position: "sticky",
                top: 0,
                zIndex: 50,
                width: "100%",
            }}
        >
            <CommonWrapper className="!py-0">
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: "72px",
                    }}
                >
                    {/* Logo */}
                    <Link
                        to="/"
                        style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
                    >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="10" fill="#1a1a2e" />
                            <path d="M12 20C12 15.58 15.58 12 20 12C24.42 12 28 15.58 28 20" stroke="#00E6F6" strokeWidth="3" strokeLinecap="round" />
                            <path d="M16 24C16 21.79 17.79 20 20 20C22.21 20 24 21.79 24 24" stroke="#7B5EA7" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        <span
                            style={{
                                color: "#FFF",
                                fontFamily: "Geist, sans-serif",
                                fontSize: "20px",
                                fontWeight: 700,
                                letterSpacing: "-0.5px",
                            }}
                        >
                            HYLN
                        </span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex" style={{ alignItems: "center", gap: "32px" }}>
                        <Link
                            to="/contact"
                            style={{
                                color: "#FFF",
                                fontFamily: "Geist, sans-serif",
                                fontSize: "16px",
                                fontWeight: 400,
                                textDecoration: "none",
                                lineHeight: "normal",
                                opacity: 0.85,
                            }}
                        >
                            Contact Us
                        </Link>

                        {user ? (
                            <button
                                onClick={handleLogout}
                                style={{
                                    color: "#FFF",
                                    fontFamily: "Geist, sans-serif",
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    lineHeight: "normal",
                                    opacity: 0.85,
                                }}
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                style={{
                                    color: "#FFF",
                                    fontFamily: "Geist, sans-serif",
                                    fontSize: "16px",
                                    fontWeight: 400,
                                    textDecoration: "none",
                                    lineHeight: "normal",
                                    opacity: 0.85,
                                }}
                            >
                                Login
                            </Link>
                        )}

                        {/* Book a Demo Button */}
                        <Link
                            to="/contact"
                            style={{
                                padding: "10px 20px",
                                borderRadius: "14px",
                                background: "#FFF",
                                boxShadow: "0 4px 6px 0 rgba(255, 255, 255, 0.19)",
                                color: "#000",
                                fontFamily: "Geist, sans-serif",
                                fontSize: "16px",
                                fontWeight: 500,
                                textDecoration: "none",
                                lineHeight: "normal",
                                display: "inline-block",
                            }}
                        >
                            Book a Demo
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen((prev) => !prev)}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                color: "#FFF",
                                padding: "4px",
                            }}
                        >
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </CommonWrapper>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    style={{
                        borderTop: "1px solid #2F2F2F",
                        padding: "16px 20px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        background: "#000",
                    }}
                >
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        style={{
                            color: "#FFF",
                            fontFamily: "Geist, sans-serif",
                            fontSize: "16px",
                            fontWeight: 400,
                            textDecoration: "none",
                        }}
                    >
                        Contact Us
                    </Link>
                    {user ? (
                        <button
                            onClick={handleLogout}
                            style={{
                                color: "#FFF",
                                fontFamily: "Geist, sans-serif",
                                fontSize: "16px",
                                fontWeight: 400,
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                textAlign: "left",
                                padding: 0,
                            }}
                        >
                            Logout
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            onClick={() => setIsOpen(false)}
                            style={{
                                color: "#FFF",
                                fontFamily: "Geist, sans-serif",
                                fontSize: "16px",
                                fontWeight: 400,
                                textDecoration: "none",
                            }}
                        >
                            Login
                        </Link>
                    )}
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        style={{
                            padding: "10px 20px",
                            borderRadius: "14px",
                            background: "#FFF",
                            boxShadow: "0 4px 6px 0 rgba(255, 255, 255, 0.19)",
                            color: "#000",
                            fontFamily: "Geist, sans-serif",
                            fontSize: "16px",
                            fontWeight: 500,
                            textDecoration: "none",
                            textAlign: "center",
                            display: "block",
                        }}
                    >
                        Book a Demo
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
