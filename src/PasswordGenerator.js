import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {ReactComponent as CopyIcon} from './file_copy_FILL0_wght400_GRAD0_opsz24.svg'

const PasswordGenerator = ({ setGeneratedPassword, icon, length }) => {
    const [password, setPassword] = useState('')
    const [copied, setCopied] = useState(true)

    useEffect(() => {
        if(password === '') {
            let pass = generatePassword()
            setPassword(pass)
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setCopied(false)
        }, 5000)
    }, [copied])

    const generatePassword = (length = 16) => {
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
                <a onClick={handleGeneratedPassword} style={{cursor: "pointer"}}><CopyIcon /></a>
            </div>
        </>
    )
}

PasswordGenerator.propTypes = {
    setGeneratedPassword: PropTypes.func.isRequired,
    icon: PropTypes.string,
    length: PropTypes.number
}

export default PasswordGenerator