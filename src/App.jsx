import Banner from './components/Banner'
import Header from './components/Header'

export default function App() {
	return (
		<div className='overflow:hidden flex flex-direction:col bg:gray-16 h:100vh '>
			<Header />
			<Banner />
		</div>
	)
}
