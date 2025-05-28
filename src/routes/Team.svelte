<script lang="ts">
    import { base } from '$app/paths';
    const content = [
        {
            name:               "Justin Clyde Frongoso",
            profile_picture:    "frongs",
            about:              "An aspiring film director.",
            github:              "https://github.com/jcfrongoso",
        },
        {
            name:               "Michael Sean Brian Omisol",
            profile_picture:    "omi",
            about:              "Whatever you do, <strong>do not have 6+ projects</strong> at the end of your senior year.",
            github:              "https://github.com/FlamingHerb",
        },
        {
            name:               "Eugene Kasilag",
            profile_picture:    "kasilag",
            about:              "A bit too cool and mysterious.",
            github:              "https://github.com/epkasilag1",
        },
    ];

</script>

<div class="max-w-5xl mx-auto bg-gray-200 p-6 pt-10 rounded-lg">
    <h1 class="mb-4">Team</h1>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 mx-auto">
        {#each content as details}
        <div>
            <!-- Social Media -->
            <img src="{base}/images/{details.profile_picture}.png" class="w-48 mx-auto mb-2 rounded-2xl border-2 border-gray-800" alt="Profile">
            <div class="text-center mx-auto my-2">
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <a target="_blank" rel="noreferrer" class="hover:text-blue-500 transition duration-150" href="{details.github}">
                    <i class="bi bi-github text-3xl"></i>
                </a>
            </div>
            <h3 class="text-center mb-2">{details.name}</h3>
            <p class="text-center">{@html details.about}</p>
        </div>
        {/each}
    </div>
</div>