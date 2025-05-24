<script lang="ts">
    const content = [
        {
            name:               "Justin Clyde Frongoso",
            profile_picture:    "s23330897651",
            about:              "A retired TFT veteran and a well known malder.",
        },
        {
            name:               "Michael Sean Brian Omisol",
            profile_picture:    "witch",
            about:              "Whatever you do, do not have 6+ projects at the end of your senior year.",
        },
        {
            name:               "Eugene Kasilag",
            profile_picture:    "teehee",
            about:              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel facilisis lorem. Aenean tincidunt nisl felis, in egestas lectus tincidunt quis. Morbi suscipit at lacus eu viverra. Phasellus volutpat pellentesque ligula, quis imperdiet odio faucibus nec. Curabitur at vulputate leo. Nullam id. ",
        },
    ];

</script>

<div class="max-w-5xl mx-auto bg-gray-200 p-6 pt-10 rounded-lg">
    <h1 class="mb-4">Team</h1>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto">
        {#each content as details}
        <div>
            {#await import(`$lib/images/${details.profile_picture}.png`) then { default: src }}
            <img {src} class="w-48 mx-auto mb-2" alt="Profile">
            <h3 class="text-center mb-2">{details.name}</h3>
            <p>{details.about}</p>
            {/await}
        </div>
        {/each}
    </div>
</div>