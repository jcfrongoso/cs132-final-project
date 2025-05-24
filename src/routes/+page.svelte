<script>
    let render_results = true;

    import Hero from './Hero.svelte';
    import Overview from './Overview.svelte';
    import Problem from './Problem.svelte';
    import Data from './Data.svelte';
    import Preprocessing from './Preprocessing.svelte';
    import Results from './Results.svelte';
    import Nutshell from './Nutshell.svelte';
    import Team from './Team.svelte';
    import MachineLearning from './MachineLearning.svelte';
    import Action from './Action.svelte';
</script>

<!-- Introduction to the entire thing -->
<section class="mx-8 sm:mx-auto" id="Hero">
    <Hero />
</section>

<!-- <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-300"> -->

<!-- Overview -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Rationale">
    <Overview />
</section>

<hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-300">

<!-- Problem, Solution, Objectives & Hypothesis -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Problem">
    <Problem />
</section>

<hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-300">

<!-- Data History and Collection -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Data">
    <Data />
</section>

<hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-300">

{#if render_results}
<!-- Data Preprocessing -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Preprocessing">
    <Preprocessing />
    <!-- <Preprocessing /> -->
</section>

<hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-300">

<!-- Results -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Results">
    <Results />
</section>

<hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-300">

<!-- Results -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Nutshell">
    <Nutshell />
</section>

<hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-300">

<!-- Results -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Forecast">
    <MachineLearning />
</section>

<hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-300">
{/if}

<!-- Action -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Action">
    <Action />
</section>

<hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-300">

<!-- Team -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Team">
    <Team />
</section>