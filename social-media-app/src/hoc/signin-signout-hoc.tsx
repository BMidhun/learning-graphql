import { NavLink, Outlet } from 'react-router-dom'
import styles from "./style.module.css";

function SignInSignOutHOC() {
  return (
    <div className={styles['auth-layout']}>
       <ul className={styles['auth-list']}>
            <li className={styles['auth-list-item']}><NavLink to={"/auth/login"} className={({isActive}) => isActive ? styles["active-auth-link"] : "" }>Sign In</NavLink></li>
            <li className={styles['auth-list-item']}><NavLink to={"/auth/signup"}  className={({isActive}) => isActive ? styles["active-auth-link"] : "" }>Sign Up</NavLink></li>
       </ul>
       <div className={styles['auth-content']}>
        <Outlet />
       </div>

    </div>
  )
}

export default SignInSignOutHOC
