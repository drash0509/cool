import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './Register';
import bg from '../Assets/Images/BannerLR.png';

export default function Login() {
    const [isLoginActive, setIsLoginActive] = useState(true);

    const containerStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '80vh',
        width: '45vw',
        overflow: 'auto',
        margin: '20px',
        marginRight: '8vw', 
        border: "1px solid rgba(0,0,0,0.4)",
        borderRadius: '1vw',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#D9D9D9',
        padding: '1vw',
        zIndex: 2, 
    };

    return (
        <div style={styles.maincontainer}>
            <div style={styles.overlay}></div>
            <div style={containerStyles}>
                <div style={styles.toggleButtons}>
                    <div style={styles.buttonContainer}>
                        <button
                            onClick={() => setIsLoginActive(true)}
                            style={isLoginActive ? styles.activeButton : styles.inactiveButton}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLoginActive(false)}
                            style={!isLoginActive ? styles.activeButton : styles.inactiveButton}
                        >
                            Register
                        </button>
                    </div>
                </div>
                <div style={{ width: '100%' }}>
                    {isLoginActive ? <LoginForm onToggleForm={() => setIsLoginActive(!isLoginActive)} /> : <RegisterForm onToggleForm={() => setIsLoginActive(!isLoginActive)} />}
                </div>
            </div>
        </div>
    );
};

const styles = {
    maincontainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative', 
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(250, 250, 250, 0)', 
        zIndex: 1,
    },
    toggleButtons: {
        display: 'flex',
        justifyContent: 'center',
        margin: '1vh 0',
        backgroundColor: 'white',
        marginBottom:'2vh',
        borderRadius: '1.5vh',

    },
    buttonContainer: {
        width: '100%', 
        display: 'flex',
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: '1.5vh',
    },
    activeButton: {
        flex: 1, 
        backgroundColor: 'black',
        border: 'none',
        padding: '1vh 2vw',
        cursor: 'pointer',
        color: 'white',
        borderRadius: '1.5vh',
        fontSize: '3vh',
        outline: 'none',
        
    },
    inactiveButton: {
        flex: 1,
        backgroundColor: ' rgba(110,89,75,0)',
        border: 'none',
        padding: '1vw 2vw',
        cursor: 'pointer',
        color:'#000',
        borderRadius: '1.5vh',
        fontSize: '3vh',
        outline: 'none',
    }
};
