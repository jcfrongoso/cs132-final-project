<script>
    let render_results = false;

    import Hero from './Hero.svelte';
    import Overview from './Overview.svelte';
    import Problem from './Problem.svelte';
    import Data from './Data.svelte';
    import Preprocessing from './Preprocessing.svelte';
    import Results from './Results.svelte';
    import Team from './Team.svelte';
</script>

<!-- Introduction to the entire thing -->
<section id="Hero">
    <Hero />
</section>

<!-- Overview -->
<section id="Overview">
    <Overview />
</section>

<!-- Problem, Solution, Objectives & Hypothesis -->
<section id="Problem">
    <Problem />
</section>

<!-- Data History and Collection -->
<section id="Data">
    <Data />
</section>

{#if render_results}
<!-- Data Preprocessing -->
<section>
    <Preprocessing />
</section>

<!-- Results -->
<section>
    <Results />
</section>    
{/if}

<!-- Team -->
<section id="Team">
    <Team />
</section>