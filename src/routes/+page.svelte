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

<!--  -->

<!-- Overview -->
<section class="scroll-mt-10 mt-20 mb-20 mx-8 sm:mx-auto" id="Rationale">
    <Overview />
</section>



<!-- Problem, Solution, Objectives & Hypothesis -->
<section class="scroll-mt-10 my-40 mx-8 sm:mx-auto" id="Problem">
    <Problem />
</section>



<!-- Data History and Collection -->
<section class="scroll-mt-10 my-40 mx-8 sm:mx-auto" id="Data">
    <Data />
</section>



{#if render_results}
<!-- Data Preprocessing -->
<section class="scroll-mt-10 my-40 mx-8 sm:mx-auto" id="Preprocessing">
    <Preprocessing />
    <!-- <Preprocessing /> -->
</section>



<!-- Analysis -->
<section class="scroll-mt-10 my-40 mx-8 sm:mx-auto" id="Analysis">
    <Analysis />
</section>



<!-- Analysis -->
<section class="scroll-mt-10 my-40 mx-8 sm:mx-auto" id="Nutshell">
    <Nutshell />
</section>



<!-- Analysis -->
<section class="scroll-mt-10 my-40 mx-8 sm:mx-auto" id="Forecast">
    <MachineLearning />
</section>


{/if}

<!-- Conclusion -->
<section class="scroll-mt-10 my-40 mx-8 sm:mx-auto" id="Conclusion">
    <Conclusion />
</section>



<!-- Team -->
<section class="scroll-mt-10 my-40 mx-8 sm:mx-auto" id="Team">
    <Team />
</section>