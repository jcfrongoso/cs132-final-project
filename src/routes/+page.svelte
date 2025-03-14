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
<section class="my-8" id="Hero">
    <Hero />
</section>

<!-- Overview -->
<section class="my-8" id="Overview">
    <Overview />
</section>

<!-- Problem, Solution, Objectives & Hypothesis -->
<section class="my-8" id="Problem">
    <Problem />
</section>

<!-- Data History and Collection -->
<section class="my-8" id="Data">
    <Data />
</section>

{#if render_results}
<!-- Data Preprocessing -->
<section class="my-8">
    <Preprocessing />
</section>

<!-- Results -->
<section class="my-8">
    <Results />
</section>    
{/if}

<!-- Team -->
<section class="my-8" id="Team">
    <Team />
</section>