//ICONS
import { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'

//SCSS
import './menu.scss';

export default function Menu(isLogin){
    const [isLoginPage, setIsLoginPage] = useState()

    useEffect(() => {
        setIsLoginPage(isLogin)
    }, []);
    
    return(
        <div className='menuBox'>
            <div style={{textAlign: 'center !important'}} className='menuArea'>           
                    <>
                        <div >Logo</div>
                    </> 
                    
            </div>
        </div>
    )
}