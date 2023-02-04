import { useData } from '../context/DataContext'

export default function BannerItem({ nombre }) {
	const { option, topicsCharts } = useData()
	return (
		<section className='flex flex-direction:col title'>
			<h2 className='h:68 w:75% t:end as:center f:48'>{nombre}</h2>
			{topicsCharts[option.nombre]}
		</section>
	)
}
