import { faCheck, faTimes, faInfoCircle, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState, useEffect } from "react";
import s from './styles/RegisterLogin.module.css'
import Base from "./Base";
import NavButtons from "./NavButtons";


export default function SignIn() {

    const userEmailRef = useRef()
    const errRef = useRef()

    const [userEmail, setUserEmail] = useState('')
    const [userEmailFocus, setUserEmailFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [pwdFocus, setPwdFocus] = useState(false)
    const [showPass, setShowPass] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(()=>{
        userEmailRef.current.focus();
    },[])

    useEffect(()=>{
        setErrMsg('')
    },[userEmail, pwd]);

    function showPassOnClick(){
        setShowPass(!showPass)
    }

    async function handleSubmit(e){
        e.preventDefault();
        if(userEmail&& pwd){
            setSuccess(true)
            return;
        }
        else if(!userEmail || !pwd ){
            setErrMsg('Invalid Entry')
            return;
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
                    <h1>Success!!! </h1>
                    <h5>You are signed in !!</h5>
                    <p>
                        <a href="/signIn">Sign Out</a>
                    </p>
                    <p>
                        <a href="/content">Back to Portfolio</a>
                    </p>
                </>
                :
                <>
                    <p 
                        ref={errRef} 
                        className={errMsg?s.errMsg:s.offscreen} 
                        aria-live="assertive">{errMsg}
                    </p>
                    <h1 className={s.RegisterHeader}>Login</h1>
                    <form>
                        <div className={s.fieldSection}>
                            <label 
                                htmlFor="username" 
                                className={s.label}
                            >
                                Username/Email:
                            </label>
                            <input
                                className={s.input}
                                type="text"
                                id={s.username}
                                ref={userEmailRef}
                                autoComplete="off"
                                onChange={(e)=>{setUserEmail(e.target.value)}}
                                required
                                aria-describedby="uidnote"
                                onFocus={()=>{setUserEmailFocus(true)}}
                                onBlur={()=>{setUserEmailFocus(false)}}
                            />                                   
                        </div>
                        <div className={s.fieldSection}>
                            <label 
                                htmlFor="password"
                                className={s.label}
                                >
                                Password:
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
                                <FontAwesomeIcon className={s.passEye} onClick={showPassOnClick}icon={faEye} />
                                :
                                <FontAwesomeIcon className={s.passEye} onClick={showPassOnClick} icon={faEyeSlash}/>
                                }
                            </div>
                        </div>
                        <div id={s.submitWrapper}>   
                            <button id={s.submit} onClick={handleSubmit}>Submit</button>
                        </div>
                        <div className={s.linksWrapper}>
                            <NavButtons left='register' textL='Register' right='RegisterSignIn' textR='Back'></NavButtons>
                        </div>
                    </form>         
                </>
            }
        </Base>
    )
}
