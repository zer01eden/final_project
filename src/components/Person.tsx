import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Back from './Back';


export default function Person() {
	const { id } = useParams();
	console.log(id);

	const navigate = useNavigate();
	
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
			<h2>{data.name}</h2>
			<img src={data.image}></img>
			<p>height: {data.height}</p>
			<p>gender: {data.gender}</p>
			<p>affiliations: {data.affiliations}</p>
			<p>apprentices: {data.apprentices}</p>
			<Back/>
		</div>
	);
}
