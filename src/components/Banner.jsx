import { useData } from '../context/DataContext'
import BannerItem from './BannerItem'

export default function Banner() {
	const { option, topics } = useData()
	return (
		<main
			className={`flex:1 flex w:1100vw overflow:hidden {w:100vw;h:100%;~property:transform;~duration:400ms;~easing:ease-in-out;transform:translateX(-${option.range}vw)}>section`}>
			{topics.map((topic) => (
				<BannerItem key={topic.range} nombre={topic.nombre} />
			))}
		</main>
	)
}
