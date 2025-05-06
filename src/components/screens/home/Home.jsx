import { useNavigate } from 'react-router'

import Button from '../../ui/button/Button'

import { useAuth } from '../../../hooks/useAuth'

import Layout from '../../layout/Layout'

import styles from './Home.module.scss'

function Home() {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	return (
		<Layout bgImage="/images/home-bg.jpg">
			<Button clickHandler={() => navigate(!isAuth ?  '/auth': '/new-workout')}>
				{!isAuth ? 'Sign in' : 'New'}
			</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			{/* TODO: Counters */}
		</Layout>
	)
}

export default Home
