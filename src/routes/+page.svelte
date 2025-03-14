<script>
    import Hero from './Hero.svelte';
    import Navbar from './Navbar.svelte';
    import Overview from './Overview.svelte';
    import Problem from './Problem.svelte';
    import Data from './Data.svelte';
    import Preprocessing from './Preprocessing.svelte';
    import Results from './Results.svelte';
</script>

<Navbar />

<!-- Introduction to the entire thing -->
<Hero />

<!-- Overview -->
<Overview />

<!-- Problem, Solution, Objectives & Hypothesis -->
<Problem />

<!-- Data History and Collection -->
<Data />

<!-- Data Preprocessing -->
<Preprocessing />

<!-- Results -->
<Results />