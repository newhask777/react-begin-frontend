import { useAuth } from '../../../hooks/useAuth'
import styles from './Header.module.scss'
import { FaArrowLeft } from "react-icons/fa6"
import { CiUser } from "react-icons/ci"
import Hamburger from '../hamburger/Hamburger'
import { useLocation, useNavigate } from 'react-router'


const Header = ({backLink}) => {
	/* TODO: React router useHistory */

	const { pathname } = useLocation()
	const navigate = useNavigate()
	const {isAuth} = useAuth()

	const arrowIcon = <FaArrowLeft fill='#fff' fontSize={29} />

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink)
					}}
				>
					<FaArrowLeft fill='#fff' fontSize={29} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile')
					}}
				>
					<CiUser fill='#fff' fontSize={25} />
				</button>
			)}
			<Hamburger />
		</header>
	)
}


export default Header