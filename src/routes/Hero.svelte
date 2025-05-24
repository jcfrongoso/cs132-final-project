<script>
    import bg from "$lib/images/hero_section.jpg";
    import { base } from '$app/paths';
</script>
<div class="mx-auto h-screen text-white z-10">
    <div class="absolute inset-0 ">
        <img class="h-screen" src="{base}/images/hero_section.jpg" alt="Hero Section Image"/>
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>
    <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <img class="h-[150px] mb-4" src="{base}/favicon.png">
        <h1 class="leading-tight mb-4 text-6xl">Beneath the Surface</h1>
        <p class="text-lg mb-8">Regional Disparities in Aquaculture Production and Volume</p>
        <p class="text-sm text-gray-300 w-[720px] mb-4 text-center">
        Our project, "Aquaculture in the Philippines", utilizes data science techniques to analyze economic trends, assess regional variations, and evaluate the investment potential of the country's aquaculture industry. By examining the growth and distribution of various marine species across different regions, we aim to provide data-driven insights into the viability of further investment in Philippine aquaculture.
    </p>
        <a href="{base}/#Overview" class="bg-blue-400 text-gray-900 hover:bg-blue-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
    </div>
</div>
