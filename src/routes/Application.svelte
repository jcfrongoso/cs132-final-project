<script>
    import { base } from '$app/paths';

    import { Client } from "@gradio/client";
    
    let region_pick = $state('National Capital Region (NCR)');
    let species_pick = $state('Milkfish');

    let scrollingTarget = $state();
    let imaging = $state();
    let loading = $state();

    const region_list = [
        'National Capital Region (NCR)', 'Cordillera Administrative Region (CAR)',
        'Region I (Ilocos Region)', 'Region II (Cagayan Valley)', 'Region III (Central Luzon)',
        'Region IV-A (CALABARZON)', 'MIMAROPA Region', 'Region V (Bicol Region)',
        'Region VI (Western Visayas)', 'Region VII (Central Visayas)', 'Region VIII (Eastern Visayas)',
        'Region IX (Zamboanga Peninsula)', 'Region X (Nothern Mindanao)', 'Region XI (Davao Region)',
        'Region XII (SOCCSKSARGEN)', 'Region XIII (Caraga)',
        'Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)'
    ];

    const species_list = [
        'Milkfish', 'Tilapia', 'Tiger Prawn', 'Mudcrab', 'Endeavor Prawn', 'White Shrimp',
        'Grouper', 'Siganid', 'P. Vannamei', 'Spiny Lobster', 'Carp', 'Catfish',
        'Gourami', 'Mudfish', 'Freshwater Prawn', 'Others', 'Oyster', 'Mussel', 'Seaweed'
    ]


    /**
     * @param {string} region_picked
     * @param {string} species_picked
     */
    async function predictProphet(region_picked, species_picked) {

        scrollingTarget.scrollIntoView({ behavior: 'smooth' });

        imaging.classList.add('hidden');
        loading.classList.remove('hidden');

        const client = await Client.connect("jcfrongoso/aquaculture-prophet");
        const result = await client.predict("/route_model", { 		
                model_choice: "Prophet", 		
                region: region_picked, 		
                species: species_picked, 
        });

        imaging.classList.remove('hidden');
        loading.classList.add('hidden');

        // @ts-ignore
        imaging.src = result.data[0].plot;
    }
</script>

<div class="max-w-5xl mx-auto bg-[#161a1a] p-6 pt-10 rounded-lg">
    <div class="grid grid-cols-[35%_65%]">
        <h1 class="scroll-mt-15 mb-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text" bind:this={scrollingTarget}>Forecasting Model</h1>
        <p class="text-xs text-gray-400 mb-4">
            To generate a forecast, pick a specific region and species respectively to generate a forecast plot of their input. The applet outputs a forecast plot with a trendline with uncertainty bands, and observed points seen in the dataset.
        </p>
    </div>
    
    <!-- Selection -->
    <div class="grid grid-cols-2 gap-8 mb-4">
        <form class="mx-auto w-full">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a <strong class="text-green-300">region</strong>.</label>
            <select bind:value={region_pick} class="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                {#each region_list as region}
                <option value={region}>{region}</option>
                {/each}
            </select>
        </form>

        <form class="mx-auto w-full">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pick a <strong class="text-green-300">species</strong>.</label>
            <select bind:value={species_pick} class="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                {#each species_list as species }
                    <option value={species}>{species}</option>
                {/each}
            </select>
        </form>

    </div>
    
    <button onclick={() => predictProphet(region_pick,species_pick)} class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 hover:from-green-500 hover:via-indigo-400 hover:to-blue-600 text-white font-bold py-2 px-4  rounded w-full mb-8 transition duration-150">
    Generate Forecast
    </button>

    <div bind:this={loading} class="text-center my-16 hidden">
        <div role="status">
            <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
    </div>

    <!-- svelte-ignore a11y_missing_attribute -->
    <img bind:this={imaging} class="mx-auto mb-8 w-2/3" src="{base}/images/plot_placeholder.png">
    
    

    <div class="flex items-center bg-blue-900 text-white text-sm font-medium px-4 py-3" role="alert">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
        <p>Clich here for the
            <a href="https://jcfrongoso-aquaculture-prophet.hf.space/?logs=container&__theme=system"
            class="inline-flex items-center font-bold text-blue-100 underline">
                Huggingface Gradio App
                <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
            </a>
        </p>
    </div>
</div>