import { useState } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'

export default function App() {
	const [openModal, setOpenModal] = useState(false)
	return (
		<div className='overflow:hidden flex flex-direction:col bg:gray-16 h:100vh '>
			<Header />
			<Banner />
			<div>
				<button onClick={()=>setOpenModal(true)} className='p:4|12 m:8 b:none r:4'>Información</button>
			</div>
			{
				openModal && (<div tabIndex={-1} onClick={()=>setOpenModal(false)} className='z:4 bg:#6b6a6d55 abs w:100vw h:100vh d:flex ai:center jc:center '>
				<section className='bg:white p:2rem r:10 d:grid gap:2rem jc:center'>
					<header className='d:flex jc:space-between ai:center'>
						<h2>Demography - ITA</h2>
						<img className='w:82' src="http://it-acapulco.edu.mx/wp-content/themes/TecNMCampus/assets/img/logo-ita.png" alt="ita-logo" />
					</header>
					<nav className='d:grid grid-template-cols:1fr|1fr gap-x:2em'>
						<p className='grid-col-span:2 t:24 t:bold mb:12'>Equipo 5</p>
						<p className='t:left'>Nuñez Mendoza Victor Jesus</p>
						<p>18320943</p>
						<p className='t:left'>Mondragon Solano Cristopher</p>
						<p>19520595</p>
						<p className='t:left'>Vergara Barrientos Jesus Evedel</p>
						<p>17321015</p>
						<p className='t:left'>Yamamoto Lopez Manuel Goichi</p>
						<p>17321017</p>
					</nav>
				</section>
			</div>)
			}
			
		</div>
	)
}
