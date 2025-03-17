<script>
    let counter = 0;
    let increment = () => {
        counter++;
        return counter;
    }

    // Research Question
    // Null Hypothesis
    // Alternative Hypothesis
    const content = [
        {
            question:   "What is the general trend of aquaculture in the Philippines?",
            null:       "",
            alternate:  "",
        },
        {
            question:   "Is there a significant relationship between the value and volume aquaculture systems here in the Philippines?",
            null:       "",
            alternate:  "",
        },
        {
            question:   "What factors could cause significant changes in trend variations for the aquaculture system in the Philippines?",
            null:       "",
            alternate:  "",
        },
        {
            question:   "How does geolocation correlate to value and volume for each region?",
            null:       "",
            alternate:  "",
        },
        {
            question:   "What species prosper in terms of growth?",
            null:       "",
            alternate:  "",
        },
        {
            question:   "Should we invest more in the growth of aquaculture here in the Philippines?",
            null:       "",
            alternate:  "",
        },
    ];
</script>

<div class="max-w-5xl mx-auto">
    <h1 class="mb-4">Problem</h1>
    <p class="mb-4">
        Philippines already has a 
    </p>
    <h2 class="mb-2">Research Questions</h2>
    <div class="grid grid-cols-2 gap-4">
        {#each content as details}
        <div>
            <h3 class="">
                Research Question {increment()}
            </h3>
            <p>
                {details.question}
            </p>
            <!-- Assumes that details[1] != details[2] are empty. -->
            {#if details.null != details.alternate}
            <h4 class="underline">
                Null Hypothesis
            </h4>
            <p>
                {details.null}
            </p>
            <h4 class="underline">
                Alternative Hypothesis
            </h4>
            <p>
                {details.alternate}
            </p>
            {/if}
        </div>
        {/each}
    </div>
</div>