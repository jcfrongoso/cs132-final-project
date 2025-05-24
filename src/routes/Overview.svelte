<script>
    let counter = 0;
    let increment = () => {
        counter++;
        return counter;
    }
    const references = [
        "https://www.fao.org/fishery/en/countrysector/naso_philippines",
        "https://psa.gov.ph/statistics/fisheries-situationer",
        "https://www.bfar.da.gov.ph/2024/02/07/bfar-eyes-100-food-fish-sufficiency-by-2028/",
        "https://ispweb.pcaarrd.dost.gov.ph/philippine-fisheries-dynamics-market-shifts-aquaculture-update-sovereignty-concerns-solar-projects-and-project-lead/",
        "https://earthjournalism.net/stories/rich-seas-poor-fishers-the-impact-of-fisheries-subsidies-in-the-philippines",
        "https://dergipark.org.tr/en/download/article-file/1793345",

    ]
</script>


<div class="max-w-5xl mx-auto bg-gray-200 p-6 pt-10 rounded-lg">
    <!-- <h1 class="mb-4">Overview</h1> -->
    <h1 class="mb-2">Rationale</h1>
    <p class="mb-4">
        There are three fisheries sectors in the Philippines: municipal fisheries, commercial fisheries, and aquaculture.
    </p>
    <p class="mb-4">
        As of 2024, <strong>approximately 64.1%</strong> of the total volume of fisheries productions comes from aquaculture, contributing 683,934.30 Metric Tons of production. Despite a -7.3% decrease of production from 2023 to 2024, aquaculture still remains effective as a constant and reliable source of fish, especially for a country that subsists on a fish-based protein diet.
    </p>
    <p class="mb-4">
        An attribution to its rising increase of production are due to overfishing and illegal fishing practices that destroy marine environment, which leads to less hauls for other fisheries sectors. This also includes rising sovereignity tensions between the Philippines and the China for control of the West Philippine Sea, driving away local fishers from their designated areas. This, in turn, creates a need for adaptation to aquaculture practices.
    </p>
    <p class="mb-4">
        The United Nation's Food and Agriculture Organization (FAO) report titled "<em>The State of World Fisheries and Aquaculture 2024</em>" released in June 2024 also highlights Philippines as one of the few nations to dominate the global aquaculture industry. In order for the Philippines to capitalize future positive market implications, the shift towards aquaculture requires proper investments in infrastructure, training for local fishermen to transition smoothly and sustainably from recent events, and finding specific trends that will boost existing aquaculture production.
    </p>
    <p class="mb-4">
        <em>References:</em>
        {#each references as item}
            <a target="_blank" rel="noreferrer" class="font-medium text-blue-600 hover:underline" href="{item}">[{increment()}]</a>
        {/each}
    </p>

</div>