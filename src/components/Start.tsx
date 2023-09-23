import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

import { post } from './post';
import axios from 'axios';
import { useData } from './useData';

const sections = [
	{ title: 'Test1', url: '#' },
	{ title: 'Test2', url: '#' },
	{ title: 'Test3', url: '#' },
	{ title: 'Test4', url: '#' },
	{ title: 'Test5', url: '#' },
	{ title: 'Test6', url: '#' },
	// { title: "Science", url: "#" },
	// { title: "Health", url: "#" },
	// { title: "Style", url: "#" },
	// { title: "Travel", url: "#" },
];

const posts = [post];

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

	const featuredPosts = [
		{
			title: data?.[10].name ?? '',
			date: 'Nov 12',
			description: data?.[10].manufacturer ?? '',
			image: data?.[10].image ?? '',
			imageLabel: 'Image Text',
		},
		{
			title: data?.[11].name ?? '',
			date: 'Nov 11',
			description: data?.[11].manufacturer ?? '',
			image: data?.[11].image ?? '',
			imageLabel: 'Image Text',
		},
	];
	return (
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<Container maxWidth='lg'>
				<Header title='Test Start' sections={sections} />
				<main>
					<MainFeaturedPost post={mainFeaturedPost} />
					<Grid container spacing={4}>
						{featuredPosts.map((post) => (
							<FeaturedPost key={post.title} post={post} />
						))}
					</Grid>
					<Grid container spacing={5} sx={{ mt: 3 }}>
						<Main title='From the firehose' posts={posts} />
						<Sidebar
							title={sidebar.title}
							description={sidebar.description}
							archives={sidebar.archives}
							social={sidebar.social}
						/>
					</Grid>
				</main>
			</Container>
			<Footer
				title='Footer'
				description='Something here to give the footer a purpose!'
			/>
		</ThemeProvider>
	);
}
