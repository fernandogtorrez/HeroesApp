import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { startLogout } from '../../auth/store/auth/thunks';
import { SearchByPublisher } from '../../heroes/components/SearchByPublisher';
import {useCounter} from '../../hooks/useCounter'

export const Navbar = () => {

    const navigate = useNavigate()

    const {reset} = useCounter(1)

    const setReset = () => reset(1)

    const { displayName } = useSelector((state)=> state.auth)

    const isActive = ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`
    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(startLogout())
        navigate('auth/login', {
            replace: true
        })
    }
        

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                HeroesApp
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={isActive} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={isActive}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={isActive}
                        to="/search"
                    >
                        Search
                    </NavLink>
                    
                </div>
                <SearchByPublisher setReset={setReset}/>
                
            </div>
            
 
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   <span className="nav-item nav-link text-primary">
                        {displayName}
                   </span>
                   <button
                        className='btn nav-item nav-link'
                        onClick={onLogout}
                   >
                        Logout
                   </button>
                </ul>
            </div>
        </nav>
    )
}