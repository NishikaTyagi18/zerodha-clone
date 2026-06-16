import React from 'react';

function Signup() {
    return (
        <div style={{ padding: "100px", textAlign: "center", minHeight: "80vh" }}>
            <h1 style={{ fontSize: "2.5rem", color: "#387ed1", marginBottom: "20px" }}>
                Open a free demat and trading account
            </h1>
            <p style={{ color: "#666", fontSize: "1.2rem" }}>
                Start investing in equity, mutual funds, and options.
            </p>
            <button style={{
                backgroundColor: "#387ed1",
                color: "white",
                padding: "12px 30px",
                border: "none",
                borderRadius: "4px",
                fontSize: "1rem",
                cursor: "pointer",
                marginTop: "20px"
            }}>
                Sign up now
            </button>
        </div>
    );
}

export default Signup;