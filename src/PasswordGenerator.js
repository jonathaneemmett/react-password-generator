import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const CopyIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M19 19H8q-.825 0-1.412-.587Q6 17.825 6 17V3q0-.825.588-1.413Q7.175 1 8 1h7l6 6v10q0 .825-.587 1.413Q19.825 19 19 19ZM14 8V3H8v14h11V8ZM4 23q-.825 0-1.412-.587Q2 21.825 2 21V7h2v14h11v2ZM8 3v5-5 14V3Z"/></svg>
    )
}

const PasswordGenerator = ({ setGeneratedPassword, icon, length }) => {
    const [password, setPassword] = useState('')
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        if(password === '') {
            let pass = generatePassword()
            setPassword(pass)
        }
    }, [])

    useEffect(() => {
        if(copied){
            setTimeout(() => {
                setCopied(false)
            }, 5000)
        }
    }, [copied])

    const generatePassword = () => {
        const charlen = length
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$'
        let value = ''
        for (let i = 0, n = charset.length; i < charlen; ++i) {
            value += charset.charAt(Math.floor(Math.random() * n))
        }

       return value
    }

    const handleGeneratedPassword = () => {
        setGeneratedPassword(password);
        navigator.clipboard.writeText(password);
        setCopied(true)
    }

    return (
        <>  
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h5 style={{margin: "5px 0", padding: "5px"}}>Suggested Password: </h5><span style={{margin: "5px 0", fontSize: "12px", width: "60px", textAlign: "center", background: `${copied ? "#808080" : ""}` , padding: "5px", borderRadius: "10px", display: `${copied ? "block" : "none"}`}}>Copied</span>
            </div>
            <div style={{width: "100%", background: "#fff", color: "#151515", height: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderRadius: "5px", padding: "0 15px" }}>
                <div>{password}</div>
                <a onClick={handleGeneratedPassword} style={{cursor: "pointer"}}>{icon}</a>
            </div>
        </>
    )
}

PasswordGenerator.defaultProps = {
    length: 16,
    icon: <CopyIcon />
}

PasswordGenerator.propTypes = {
    setGeneratedPassword: PropTypes.func.isRequired,
    icon: PropTypes.object,
    length: PropTypes.number
}

export default PasswordGenerator