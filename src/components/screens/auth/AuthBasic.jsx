import Layout from '../../layout/Layout'
import { useState } from 'react'

const Auth = () => {

	const [email, setEmail] = useState('')
	// console.log(email)

	return (
		<Layout heading='Sign in' bgImage='/images/auth-bg.png'>
			<div className="wrapper-inner-page" >
				<input type="text" placeholder='Enter email' value={email} onChange={e => setEmail(e.target.value)}/>
			</div>
		</Layout>
	)
}

export default Auth