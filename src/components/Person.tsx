import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Back from './Back';
import Footer from './Footer';
import Header from './Header';

export default function Person() {
	const { id } = useParams();
	console.log(id);

	const sections = [{ title: '', url: '' }];
	
	const [data, setData] = useState({
		name: '',
		height: '',
		gender: '',
		affiliations: '',
		apprentices: '',
		image: '',
	});
	console.log(data);
	useEffect(() => {
		fetch(
			`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${id}.json`
		)
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.log(error));
	}, []);
	return (
		<div>
			<Header title='Home' sections={sections} />
			<h2>{data.name}</h2>
			<img src={data.image}></img>
			<p>height: {data.height}</p>
			<p>gender: {data.gender}</p>
			<p>affiliations: {data.affiliations}</p>
			<p>apprentices: {data.apprentices}</p>
			<Back/>
			<Footer title='star wars' description='page about characters from the movie' />
		</div>
	);
}
