<script>
	import './index.css';
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';

	import '../app.css';
	let { children } = $props();

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