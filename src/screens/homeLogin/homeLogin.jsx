import { Link } from 'react-router-dom';

import './homeLogin.scss';

import { BsGoogle } from 'react-icons/bs';

export default function HomeLogin(){
    return(
        <>
        <div className="aligner">
            <div className="container">
                <h1>MoneyMonkey</h1>
                <div className='formBox'>
                    <Link to="/account"><BsGoogle /> Login com Google</Link>
                </div>
                <br />
                <small>Powered by: <a href="https://github.com/eduardo-raniero">E.R.S</a> </small>
            </div>
        </div>
        </>
    )
}