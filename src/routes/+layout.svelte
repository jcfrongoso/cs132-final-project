<script>
	import '../app.css';
	import './index.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	let { children } = $props();

</script>

<!-- 
<svelte:head>
    <link rel="icon" href={favicon} />
    <meta property="og:image" content="" />
</svelte:head> -->

<Header />
<main class="container">
	{@render children()}
</main>
<Footer />