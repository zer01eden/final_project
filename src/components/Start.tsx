import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Main from './Main';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import { post } from './post';
import axios from 'axios';
import { useData } from './useData';

const sections = [
	{ title: 'Technology', url: '#' },
	{ title: 'Design', url: '#' },
	{ title: 'Culture', url: '#' },
	{ title: 'Business', url: '#' },
	{ title: 'Politics', url: '#' },
	{ title: 'Opinion', url: '#' },
	{ title: 'Science', url: '#' },
	{ title: 'Health', url: '#' },
	{ title: 'Style', url: '#' },
	{ title: 'Travel', url: '#' },
];

// const mainFeaturedPost = {
// 	title: 'Title of a longer featured blog post',
// 	description:
// 		"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
// 	image: 'https://source.unsplash.com/random?wallpapers',
// 	imageText: 'main image description',
// 	linkText: 'Continue reading…',
// };

// const featuredPosts = [
// 	{
// 		title: 'Featured post',
// 		date: 'Nov 12',
// 		description:
// 			'This is a wider card with supporting text below as a natural lead-in to additional content.',
// 		image: 'https://source.unsplash.com/random?wallpapers',
// 		imageLabel: 'Image Text',
// 	},
// 	{
// 		title: 'Post title',
// 		date: 'Nov 11',
// 		description:
// 			'This is a wider card with supporting text below as a natural lead-in to additional content.',
// 		image: 'https://source.unsplash.com/random?wallpapers',
// 		imageLabel: 'Image Text',
// 	},
// ];

const sidebar = {
	title: 'About',
	description:
		'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
	archives: [
		{ title: 'March 2020', url: '#' },
		{ title: 'February 2020', url: '#' },
		{ title: 'January 2020', url: '#' },
		{ title: 'November 1999', url: '#' },
		{ title: 'October 1999', url: '#' },
		{ title: 'September 1999', url: '#' },
		{ title: 'August 1999', url: '#' },
		{ title: 'July 1999', url: '#' },
		{ title: 'June 1999', url: '#' },
		{ title: 'May 1999', url: '#' },
		{ title: 'April 1999', url: '#' },
	],
	social: [
		{ name: 'GitHub', icon: GitHubIcon },
		{ name: 'Twitter', icon: TwitterIcon },
		{ name: 'Facebook', icon: FacebookIcon },
	],
};
const posts = [post];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Start() {
	const [{ data, isLoading, isError }, doFetch] = useData(
		'https://akabab.github.io/starwars-api/api/all.json'
	);

	const mainFeaturedPost = {
		title: data?.[0].name ?? '',
		description: data?.[0].manufacturer ?? '',
		image: data?.[0].image ?? '',
		imageText: data?.[0].name ?? '',
		linkText: 'Continue reading…',
	};

	// const featuredPosts = [
	// 	{
	// 		title: data?.[18].name ?? '',
	// 		date: 'Nov 3',
	// 		description: data?.[18].manufacturer ?? '',
	// 		image: data?.[18].image ?? '',
	// 		imageLabel: data?.[18].manufacturer ?? '',
	// 	},
	// 	{
	// 		title: data?.[3].name ?? '',
	// 		date: 'Nov 2',
	// 		description: data?.[3].manufacturer ?? '',
	// 		image: data?.[3].image ?? '',
	// 		imageLabel: data?.[3].manufacturer ?? '',
	// 	},
	// 	{
	// 		title: data?.[4].name ?? '',
	// 		date: 'Nov 4',
	// 		description: data?.[4].manufacturer ?? '',
	// 		image: data?.[4].image ?? '',
	// 		imageLabel: data?.[4].manufacturer ?? '',
	// 	},
	// 	{
	// 		title: data?.[5].name ?? '',
	// 		date: 'Nov 1',
	// 		description: data?.[5].manufacturer ?? '',
	// 		image: data?.[5].image ?? '',
	// 		imageLabel: data?.[5].manufacturer ?? '',
	// 	},
	// ];

	const featuredPosts = data?.slice(2, 14).map((item) => {
		return {
			title: item.name ?? '',
			date: 'test',
			description: item.manufacturer ?? '',
			image: item.image ?? '',
			imageLabel: item.manufacturer ?? '',
		};
	});

	// console.log(featuredPosts);
	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<Container maxWidth='lg'>
				<Header title='Home' sections={[]} />
				<main>
					<MainFeaturedPost post={mainFeaturedPost} />
					<Grid container spacing={4}>
						{featuredPosts?.map((post) => {
							// console.log(post);
							return <FeaturedPost key={post.title} post={post} />;
						})}
					</Grid>
					<Grid container spacing={5} sx={{ mt: 3 }}>
						<Main title='TEST' posts={posts} />
						<Sidebar
							title={sidebar.title}
							description={sidebar.description}
							archives={sidebar.archives}
							social={sidebar.social}
						/>
					</Grid>
				</main>
			</Container>
			<Footer title='Footer' description='boom boom boom BOOM!' />
		</ThemeProvider>
	);
}
