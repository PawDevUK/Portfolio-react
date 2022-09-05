import { faCheck, faTimes, faInfoCircle, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState, useEffect } from "react";
import s from './styles/RegisterLogin.module.css'
import Base from "./Base";
import NavButtons from "./NavButtons";
import { registerLogin_API } from "api/registerLogin";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,24}$/;

export default function Register() {

    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)

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
        const result = EMAIL_REGEX.test(email)
        setValidEmail(result)
    },[email])

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
        if(!user || !pwd || !matchPwd ){
            setErrMsg('Invalid Entry');
            return;
        }else if(validName && validEmail && matchPwd){
            try{
                const response = await registerLogin_API.post(
                    '',
                    {  user, email, pwd },
                    {
                        header:{
                            'Content-Type': 'application/json'
                        },
                        // withCredentials:true
                    }
                    )
                    console.log(response.data);

            }catch{

            }
            setSuccess(true)
            return
        }
        try{

        }
        catch{

        }
    }

    return (
        <Base>
            {success ? 
                <>
                    <h1>Success</h1>
                    <p>
                        <a href="/signIn">Sign In</a>
                    </p>
                    <p>
                        <a href="/register">Register</a>
                    </p>
                </>
                :
                <>
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
                                <span className={validName ? s.valid : s.hide}>
                                    <FontAwesomeIcon icon={faCheck} ></FontAwesomeIcon>
                                </span>
                                <span className={validName || !user ? s.hide:s.invalid}>
                                    <FontAwesomeIcon icon={faTimes} ></FontAwesomeIcon>
                                </span>
                            </label>
                            <input
                                className={s.input}
                                type="text"
                                id='username'
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e)=>{setUser(e.target.value)}}
                                required
                                aria-invalid={validName? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={()=>{setUserFocus(true)}}
                                onBlur={()=>{setUserFocus(false)}}
                            /> 
                            <p id='uidnote' className={userFocus&&user&&!validName?s.instructions:s.offscreen}>
                                <FontAwesomeIcon icon={faInfoCircle} className={s.fontInfoPopUp}></FontAwesomeIcon>
                                4 to 24 characters. <br></br>
                                Must begins with letter. <br></br>
                                Letters, numbers, underscore are allowed.
                            </p>                                  
                        </div>
                        <div className={s.fieldSection}>
                            <label 
                                htmlFor="email" 
                                className={s.label}
                            >
                                Email:
                                <span className={validEmail ? s.valid : s.hide}>
                                    <FontAwesomeIcon icon={faCheck} ></FontAwesomeIcon>
                                </span>
                                <span className={validEmail || !email ? s.hide:s.invalid}>
                                    <FontAwesomeIcon icon={faTimes} ></FontAwesomeIcon>
                                </span>
                            </label>
                            <input
                                className={s.input}
                                type="text"
                                id='email'
                                autoComplete="off"
                                onChange={(e)=>{setEmail(e.target.value)}}
                                required
                                aria-invalid={validEmail? "false" : "true"}
                                aria-describedby="emailnote"
                                onFocus={()=>{setEmailFocus(true)}}
                                onBlur={()=>{setEmailFocus(false)}}
                            />
                            <p id='emailnote' className={email&&!validEmail&&emailFocus?s.instructions:s.offscreen}>
                                <FontAwesomeIcon icon={faInfoCircle} className={s.fontInfoPopUp}></FontAwesomeIcon>
                                Must be a valid email. <br/>
                                Letters, numbers, @ are allowed.
                            </p>                                   
                        </div>
                        <div className={s.fieldSection}>
                            <label 
                                htmlFor="password"
                                className={s.label}
                                >
                                Password:
                                <span className={validPwd ? s.valid : s.hide}>
                                    <FontAwesomeIcon icon={faCheck} ></FontAwesomeIcon>
                                </span>
                                <span className={ validPwd || !pwd ? s.hide : s.invalid}>
                                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                                </span>
                            </label>
                            <div className={s.passWrapper}>
                                <input 
                                    required
                                    className={s.input}
                                    type={showPass?"text":"password"}
                                    id="password"
                                    autoComplete="off"
                                    onChange={(e)=>{setPwd(e.target.value)}}
                                    aria-invalid={validPwd?true:false}
                                    aria-describedby='pwdnote'
                                    onFocus={()=>{setPwdFocus(true)}}
                                    onBlur={()=>{setPwdFocus(false)}}
                                />
                                {!showPass ? 
                                <span className={s.passEyeSpan}>
                                    <FontAwesomeIcon className={s.passEye} onClick={showPassOnClick} icon={faEye}/>
                                </span>
                                :
                                <span className={s.passEyeSpan}>
                                    <FontAwesomeIcon  className={s.passEye} onClick={showPassOnClick} icon={faEyeSlash}/>
                                </span>
                                }
                            </div>
                            <p id="pwdnote" className={pwd&&pwdFocus&&!validPwd?s.instructions:s.offscreen} >
                                <FontAwesomeIcon icon={faInfoCircle} className={s.fontInfoPopUp}></FontAwesomeIcon>
                                8-24 characters <br />
                                Need contain lower, upper case and number.
                                Special letters are allowed.
                            </p>
                        </div>
                        <div className={s.fieldSection}>
                            <label 
                                htmlFor="confirm_pwd"
                                className={s.label}
                            >
                                Confirm Password:
                                <span className={validMatchPwd && matchPwd ? s.valid : s.hide}>
                                    <FontAwesomeIcon icon={faCheck} ></FontAwesomeIcon>
                                </span>
                                <span className={validMatchPwd || !matchPwd ? s.hide : s.invalid}>
                                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                                </span>          
                            </label>
                            <div className={s.passWrapper}> 
                                <input 
                                    required
                                    id='confirm_pwd'
                                    className={s.input}
                                    type={showPass?"text":"password"}
                                    onChange={e=>setMatchPwd(e.target.value)}
                                    aria-invalid={validMatchPwd?'false':'true'}
                                    aria-describedby='validpwdnote'
                                    onFocus={()=>{setMatchFocus(true)}}
                                    onBlur={()=>{setMatchFocus(false)}}
                                />
                            </div>
                            <p id="validpwdnote" className={matchPwd&&!validMatchPwd&&matchFocusPwd?s.instructions:s.offscreen} >
                                <FontAwesomeIcon icon={faInfoCircle} className={s.fontInfoPopUp}></FontAwesomeIcon>
                                Must match the first password input field. <br />
                            </p>
                        </div>
                        <div id={s.submitWrapper}>   
                            <button id={s.submit} disabled={!validName||!validEmail||!validPwd||!validMatchPwd?true:false} onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                    <div className={s.linksWrapper}>
                        <NavButtons left='signIn' right='RegisterSignIn' textL='Login' textR='Back'></NavButtons>
                    </div> 
                </>
            }
        </Base>
    )
}
