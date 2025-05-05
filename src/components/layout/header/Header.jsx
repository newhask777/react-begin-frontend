import { useAuth } from '../../../hooks/useAuth'
import styles from './Header.module.scss'
import { FaArrowLeft } from "react-icons/fa6"
import Hamburger from '../hamburger/Hamburger'


const Header = ({backLink}) => {
	/* TODO: React router useHistory */

	const {isAuth} = useAuth()

	return <header className={styles.header}>
		<button onClick={() => {}}>
			<FaArrowLeft />
		</button>
		{/* User profile */}
			<Hamburger />
		</header>
}

export default Header