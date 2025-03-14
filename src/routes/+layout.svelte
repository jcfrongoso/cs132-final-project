<script>
	import './index.css';
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';

	import '../app.css';
	let { children } = $props();

	// This can be false if you're using a fallback (i.e. SPA mode)
	export const prerender = true;
</script>

<!-- 
<svelte:head>
    <link rel="icon" href={favicon} />
    <meta property="og:image" content="" />
</svelte:head> -->

<Navbar />

<main>
	{@render children()}
</main>
<Footer />