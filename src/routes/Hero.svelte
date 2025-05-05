<script>
    import bg from "$lib/images/hero_section.jpg";
    import { base } from '$app/paths';
</script>
<div class="max-w-5xl mx-auto h-screen text-white z-10">
    <div class="absolute inset-0 ">
        <img class="h-screen" src="{bg}" alt="Hero Section Image"/>
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>
    <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 class="leading-tight mb-4">Beneath the Surface</h1>
        <p class="text-lg text-gray-300 mb-8">Regional Disparities in Aquaculture Production and Volume</p>
        <a href="{base}/#Overview" class="bg-blue-400 text-gray-900 hover:bg-blue-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
    </div>
</div>
