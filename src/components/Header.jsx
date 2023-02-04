import { useData } from '../context/DataContext'

export default function Header() {
	const { setOption, topics, option } = useData()
	return (
		<header className='hidden block@md h:64@md flex@md flex-direction:col@md f:gray-60'>
			<ul className='h:full flex gap:12 jc:center ai:center flex:wrap {list-style:none;p:4|6;cursor:pointer;~color|150ms}>li {f:gray-94}>li:hover'>
				{topics.map((topic) => (
					<li
						onClick={() => setOption(topic)}
						key={topic.range}
						className={`${topic.range == option.range && 'active'} user-select:none`}>
						{topic.nombre}
					</li>
				))}
			</ul>
			<span className='w:75% bb:1|solid|gray-32 as:center'></span>
		</header>
	)
}
