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
            question:   "Does an <span class='text-blue-800'>increase in aquaculture production volume</span> lead to a corresponding increase in its economic value?",
            null:       "There is no significant correlation between aquaculture volume and value.",
            alternate:  "There is a significant correlation between aquaculture volume and value.",
        },
        {
            question:   "Is there a <span class='text-blue-800'>significant difference in aquaculture volume</span> across different regions in the Ph?",
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
            question:   "Is there a <span class='text-blue-800'>significant trend in the volume of aquaculture production</span> in the Philippines over the years?",
            null:       "There is no significant trend in the volume of aquaculture in the Philippines over the years.",
            alternate:  "There is a significant trend in the volume of aquaculture in the Philippines over the years.",
        },
    ];
</script>

<div class="max-w-5xl mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        <div class="text-center bg-gray-200 p-6 pt-14 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-person-raised-hand mx-auto mb-8 text-blue-800" viewBox="0 0 16 16">
                <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207"/>
                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
            </svg>
            <h1 class="mb-4 text-center">Problem</h1>
            <p class="mb-8 text-center w-md mx-auto">
                Philippines already has a <strong>domineering aquaculture production</strong>, but recent statistical data shows a decrease in production a year prior.
            </p>
        </div>
        <div class="text-center bg-gray-200 p-6 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-clipboard2-data mx-auto mb-8 text-blue-800" viewBox="0 0 16 16">
                <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z"/>
                <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
                <path d="M10 7a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zm-6 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4-3a1 1 0 0 0-1 1v3a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1"/>
            </svg>
            <h1 class="mb-4 text-center">Solution</h1>
            <p class="mb-8 text-center w-md mx-auto">
                By analyzing previous quarterly data about aquaculture, the group aims to <strong>find specific parameters</strong> and <strong>analyze trends</strong> that could have affected the value and volume of production. This also includes recent events or policies that directly or indirectly affect the sector.
            </p>
        </div>
    </div>

    <div class="bg-gray-200 p-6 pt-10 rounded-lg">
        <h1 class="mb-4 text-center">Research Questions</h1>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {#each content as details}
            <div class="bg-gray-50 p-6 rounded-lg flex flex-col">
                <p class="mb-2">
                    <span class="bg-blue-500 text-blue-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm">
                        Research Question {increment()}
                    </span>
                </p>
                <h2 class="mb-4 text-xl">
                    {@html details.question}
                </h2>

                <div class="flex-grow"></div>

                <!-- Assumes that details[1] != details[2] are empty. -->
                {#if details.null != details.alternate}
                <p>
                    <span class="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm border border-red-400">
                        <i class="bi bi-slash-circle pr-2"></i>
                        Null Hypothesis
                    </span>
                </p>
                <p class="min-h-0 sm:min-h-20 text-sm">
                    {@html details.null}
                </p>
                <p>
                    <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm border border-green-400">
                        <i class="bi bi-h-circle pr-2"></i>
                        Alternative Hypothesis
                    </span>
                </p>
                <p class="min-h-0 sm:min-h-20 text-sm">
                    {@html details.alternate}
                </p>
                {/if}
            </div>
            {/each}
        </div>
    </div>
</div>