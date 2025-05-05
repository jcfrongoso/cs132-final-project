<script>
	import { base } from '$app/paths';

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
<main class="container mx-auto">
	{@render children?.()}
</main>
<Footer />