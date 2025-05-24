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
        // {
        //     question:   "What is the general trend of aquaculture in the Philippines?",
        //     null:       "There is no significant trend (increase or decrease) in aquaculture production in the Philippines over time.",
        //     alternate:  "There is a significant trend (increase or decrease) in aquaculture production in the Philippines over time.",
        // },
        {
            question:   "Does an increase in aquaculture production volume lead to a corresponding increase in its economic value?",
            null:       "There is no significant correlation between aquaculture volume and value.",
            alternate:  "There is a significant correlation between aquaculture volume and value.",
        },
        {
            question:   "Is there a significant difference in aquaculture volume across different regions in the Ph?",
            null:       "There is no significant difference in aquaculture volume across different regions in the Philippines.",
            alternate:  "There is a significant difference in aquaculture volume across different regions in the Philippines.",
        },
        // {
        //     question:   "How does geolocation correlate to value and volume for each region?",
        //     null:       "There is no significant difference in aquaculture value and volume across different geographic regions of the Philippines.",
        //     alternate:  "There are significant differences in aquaculture value and volume across different geographic regions of the Philippines.",
        // },
        // {
        //     question:   "What species prosper in terms of growth?",
        //     null:       "There is no significant difference in growth rates among different aquaculture species in the Philippines.",
        //     alternate:  "There are significant differences in growth rates among different aquaculture species in the Philippines.",
        // },
        {
            question:   "Is there a significant trend in the volume of aquaculture production in the Philippines over the years?",
            null:       "There is no significant trend in the volume of aquaculture in the Philippines over the years.",
            alternate:  "There is a significant trend in the volume of aquaculture in the Philippines over the years.",
        },
    ];
</script>

<div class="max-w-5xl mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-4">
        <div>
            <h1 class="mb-4 text-center">Problem</h1>
            <p class="mb-4 text-center">
                Philippines already has an domineering aquaculture production, but recent statistical data shows a decrease in production a year prior.
            </p>
        </div>
        <div class="text-center">
            <h1 class="mb-4 text-center">Solution</h1>
            <p class="mb-4 text-center">
                By analyzing previous quarterly data about aquaculture, the group aims to find specific parameters and analyze trends that could have affected the value and volume of production. This also includes recent events or policies that directly or indirectly affect the sector.
            </p>
        </div>
    </div>
    <h2 class="mb-4 text-center">Research Questions</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {#each content as details}
        <div>
            <h3>
                Research Question {increment()}
            </h3>
            <p class="min-h-0 sm:min-h-15 mb-4">
                {details.question}
            </p>
            <!-- Assumes that details[1] != details[2] are empty. -->
            {#if details.null != details.alternate}
            <h4 class="underline">
                Null Hypothesis
            </h4>
            <p class="min-h-0 sm:min-h-20">
                {details.null}
            </p>
            <h4 class="underline">
                Alternative Hypothesis
            </h4>
            <p class="min-h-0 sm:min-h-20">
                {details.alternate}
            </p>
            {/if}
        </div>
        {/each}
    </div>
</div>