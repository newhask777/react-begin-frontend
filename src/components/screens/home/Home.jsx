import { useState } from 'react'
import Layout from '../../layout/Layout'


function Home() {
	const [count, setCount] = useState(0)

	return (
		<Layout>
			<div className='App'>
				home
			</div>
		</Layout>
		
	)
}

export default Home