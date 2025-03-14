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
            null:       "Yep.",
            alternate:  "Nah.",
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
            null:       "Yep.",
            alternate:  "Nah.",
        },
    ];
</script>

<div class="max-w-5xl mx-auto">
    <h1 class="mb-4">Problem</h1>
    <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis nunc a ipsum sollicitudin hendrerit. Proin auctor ullamcorper mollis. Nunc felis quam, iaculis a eleifend id, facilisis ac est. Nam feugiat sed mi a accumsan. Cras eu tortor et neque rhoncus porta quis quis diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc eu ipsum et metus hendrerit finibus vel sed odio. Duis tempus condimentum metus in commodo. Nulla hendrerit tortor mauris, porttitor ultrices lacus convallis sit amet. Phasellus lorem ligula, viverra non commodo ut, pharetra sit amet dolor. Duis faucibus enim fringilla lorem convallis congue. Integer ullamcorper arcu et leo congue tincidunt. Pellentesque velit risus, faucibus ac sapien semper, faucibus feugiat velit. Phasellus bibendum varius est id mattis. Vestibulum sem nunc, ornare in risus in, elementum maximus elit. Etiam elementum, erat pulvinar maximus viverra, felis lectus maximus turpis, eget facilisis mi lacus non nisi. 
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