import React, { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import s from './styles/RegisterLogin.module.css'
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/;

export default function Register() {

    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)
    const [showPass, setShowPass] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatchPwd, setValidMatchPwd] = useState(false)
    const [matchFocusPwd, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(()=>{
        userRef.current.focus();
    },[])

    useEffect(()=>{
        const result = USER_REGEX.test(user)
        setValidName(result)
    },[user])

    useEffect(()=>{
        setValidPwd(PASSWORD_REGEX.test(pwd))
        setValidMatchPwd(pwd === matchPwd)
    },[pwd, matchPwd])

    useEffect(()=>{
        setErrMsg('')
    },[user, pwd, matchPwd]);

    function showPassOnClick(){
        setShowPass(!showPass)
    }

    async function handleSubmit(e){
        e.preventDefault();
        if(!user || !matchPwd ){
            console.log('match',matchPwd);
            setErrMsg('Invalid Entry')
            return;
        }
        if(validName && matchPwd){
            setSuccess(true)
            return
        }
        try{

        }
        catch{

        }
    }

    return (
        <div className={s.RegisterWrapper}>
            {success ? 
            <section className={s.section}>
                <h1>Success</h1>
                <p>
                    <a href="/signIn">Sign In</a>
                </p>
                <p>
                    <a href="/register">Register</a>
                </p>
            </section>
            :
            <section className={s.section}>
                <p 
                    ref={errRef} 
                    className={errMsg?s.errMsg:s.offscreen} 
                    aria-live="assertive">{errMsg}
                </p>
                <h1 className={s.RegisterHeader}>Register</h1>
                <form>
                    <div className={s.fieldSection}>
                    <label 
                        htmlFor="username" 
                        className={s.label}
                    >
                        Username:
                        <FontAwesomeIcon icon={faCheck} className={validName ? s.valid : s.hide}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faTimes} className={validName || !user ? s.hide:s.invalid}></FontAwesomeIcon>
                    </label>
                    <input
                        className={s.input}
                        type="text"
                        id={s.username}
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e)=>{setUser(e.target.value)}}
                        required
                        aria-invalid={validName? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={()=>{setUserFocus(true)}}
                        onBlur={()=>{setUserFocus(false)}}
                    />
                    </div>
                    <div className={s.fieldSection}>
                    <label 
                        htmlFor="password"
                        className={s.label}
                        >
                        Password:
                        <FontAwesomeIcon icon={faCheck} className={validPwd ? s.valid : s.hide}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faTimes} className={ validPwd || !pwd ? s.hide : s.invalid}></FontAwesomeIcon>
                    </label>
                    <div className={s.passWrapper}>
                        <input 
                            required
                            className={s.input}
                            type={showPass?"text":"password"}
                            id="password"
                            autoComplete="off"
                            onChange={(e)=>{setPwd(e.target.value)}}
                        />
                        {!showPass ? 
                        <FontAwesomeIcon onClick={showPassOnClick}icon={faEye} />
                        :
                        <FontAwesomeIcon onClick={showPassOnClick} icon={faEyeSlash}/>
                        }
                    </div>
                    </div>
                    <div className={s.fieldSection}>
                        <label 
                            htmlFor="confirm_pwd"
                            className={s.label}
                        >
                            Confirm Password:
                        </label>
                    <input 
                        required
                        className={s.input}
                        type={showPass?"text":"password"} 
                        placeholder="Confirm Password"
                        onChange={e=>setMatchPwd(e.target.value)}
                    />
                    </div>
                </form>            
            </section>}
        </div>
    )
}
