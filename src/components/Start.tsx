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
	{ title: 'About', url: '/About' },
];

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
	const [{ data }] = useData(
		'https://akabab.github.io/starwars-api/api/all.json'
	);

	const mainFeaturedPost = {
		title: data?.[0].name ?? '',
		description: data?.[0].manufacturer ?? '',
		image: data?.[0].image ?? '',
		imageText: data?.[0].name ?? '',
		linkText: 'Continue reading…',
	};

	const featuredPosts = data?.slice(2, 14).map((item) => {
		return {
			id: item.id ?? '',
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
				<Header title='Home' sections={sections} />
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
