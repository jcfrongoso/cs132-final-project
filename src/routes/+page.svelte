<script>
    let render_results = true;

    import Hero from './Hero.svelte';
    import Overview from './Overview.svelte';
    import Problem from './Problem.svelte';
    import Data from './Data.svelte';
    import Preprocessing from './Preprocessing.svelte';
    import Analysis from './Analysis.svelte';
    import Nutshell from './Nutshell.svelte';
    import Team from './Team.svelte';
    import MachineLearning from './MachineLearning.svelte';
    import Conclusion from './Conclusion.svelte';
</script>

<!-- Introduction to the entire thing -->
<section class="mx-8 sm:mx-auto" id="Hero">
    <Hero />
</section>

<!-- <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded-sm md:my-10> -->

<!-- Overview -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Rationale">
    <Overview />
</section>

<hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded-sm md:my-10>

<!-- Problem, Solution, Objectives & Hypothesis -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Problem">
    <Problem />
</section>

<hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded-sm md:my-10>

<!-- Data History and Collection -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Data">
    <Data />
</section>

<hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded-sm md:my-10>

{#if render_results}
<!-- Data Preprocessing -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Preprocessing">
    <Preprocessing />
    <!-- <Preprocessing /> -->
</section>

<hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded-sm md:my-10>

<!-- Analysis -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Analysis">
    <Analysis />
</section>

<hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded-sm md:my-10>

<!-- Analysis -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Nutshell">
    <Nutshell />
</section>

<hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded-sm md:my-10>

<!-- Analysis -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Forecast">
    <MachineLearning />
</section>

<hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded-sm md:my-10>
{/if}

<!-- Conclusion -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Conclusion">
    <Conclusion />
</section>

<hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded-sm md:my-10>

<!-- Team -->
<section class="scroll-mt-10 my-8 mx-8 sm:mx-auto" id="Team">
    <Team />
</section>