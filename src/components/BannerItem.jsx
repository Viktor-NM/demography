import { useData } from '../context/DataContext'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
export default function BannerItem({ nombre }) {
	const { option, topicsCharts, topics, setOption } = useData()

	const nextItem = () => {
		const actualItem = topics.indexOf(option)
		setOption(topics[actualItem + 1] ? topics[actualItem + 1] : topics[actualItem])
	}

	const previousItem = () => {
		const actualItem = topics.indexOf(option)
		setOption(topics[actualItem - 1] ? topics[actualItem - 1] : topics[actualItem])
	}

	return (
		<section className='flex flex-direction:col title'>
			<div className='flex gap:4 jc:space-between ai:center'>
				<BiChevronLeft
					size={48}
					className='hidden@md f:gray-96'
					onClick={() => previousItem()}
				/>
				<h2 className='h:68@md w:75%@md t:end as:center js:center f:48@md '>{nombre}</h2>
				<BiChevronRight
					size={48}
					className='hidden@md f:gray-96'
					onClick={() => nextItem()}
				/>
			</div>
			{topicsCharts[option.nombre]}
		</section>
	)
}
