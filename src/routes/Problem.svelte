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
            null:       "There is no significant trend (increase or decrease) in aquaculture production in the Philippines over time.",
            alternate:  "There is a significant trend (increase or decrease) in aquaculture production in the Philippines over time.",
        },
        {
            question:   "Is there a significant relationship between the value and volume aquaculture systems here in the Philippines?",
            null:       "There is no significant correlation between the value and volume of aquaculture production in the Philippines.",
            alternate:  "There is a significant correlation between the value and volume of aquaculture production in the Philippines.",
        },
        {
            question:   "What factors could cause significant changes in trend variations for the aquaculture system in the Philippines?",
            null:       "Selected factors (e.g., climate conditions, government policies, technology adoption) do not significantly affect trend variations in Philippine aquaculture systems.",
            alternate:  "Selected factors (e.g., climate conditions, government policies, technology adoption) significantly affect trend variations in Philippine aquaculture systems.",
        },
        {
            question:   "How does geolocation correlate to value and volume for each region?",
            null:       "There is no significant difference in aquaculture value and volume across different geographic regions of the Philippines.",
            alternate:  "There are significant differences in aquaculture value and volume across different geographic regions of the Philippines.",
        },
        {
            question:   "What species prosper in terms of growth?",
            null:       "There is no significant difference in growth rates among different aquaculture species in the Philippines.",
            alternate:  "There are significant differences in growth rates among different aquaculture species in the Philippines.",
        },
        {
            question:   "Should we invest more in the growth of aquaculture here in the Philippines?",
            null:       "Increased investment in aquaculture in the Philippines does not lead to significant improvements in production.",
            alternate:  "Increased investment in aquaculture in the Philippines leads to significant improvements in production.",
        },
    ];
</script>

<div class="max-w-5xl mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
            <h1 class="mb-4">Problem</h1>
            <p class="mb-4">
                Philippines already has an domineering aquaculture production, but recent statistical data shows a decrease in production a year prior.
            </p>
        </div>
        <div>
            <h1 class="mb-4">Solution</h1>
            <p class="mb-4">
                Philippines already has an domineering aquaculture production, but recent statistical data shows a decrease in production a year prior.
            </p>
        </div>
    </div>
    
    
    <h2 class="mb-2">Research Questions</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {#each content as details}
        <div>
            <h3>
                Research Question {increment()}
            </h3>
            <p class="min-h-15">
                {details.question}
            </p>
            <!-- Assumes that details[1] != details[2] are empty. -->
            {#if details.null != details.alternate}
            <h4 class="underline">
                Null Hypothesis
            </h4>
            <p class="min-h-20">
                {details.null}
            </p>
            <h4 class="underline">
                Alternative Hypothesis
            </h4>
            <p class="min-h-20">
                {details.alternate}
            </p>
            {/if}
        </div>
        {/each}
    </div>
</div>