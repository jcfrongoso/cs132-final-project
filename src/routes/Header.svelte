<script>
// @ts-nocheck

    let navbars = $state(null);
    let hoverButton = $state(null);

    import { base } from '$app/paths';
    const nav_items = [
        "Rationale",
        "Problem",
        "Data",
        "Preprocessing",
        "Analysis",
        "Nutshell",
        "Forecast",
        "Conclusion",
        "Team",
    ]
    const icons = {
        // Hero Icon - Magnifying Glass
        "Rationale": '<path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" stroke-linecap="round" stroke-linejoin="round"></path>',
        // Hero Icon - Question Mark
        "Problem": '<path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" stroke-linecap="round" stroke-linejoin="round"></path>',
        // Hero Icon - Variable
        "Data": '<path d="M4.745 3A23.933 23.933 0 0 0 3 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 0 1 1.105.402l2.402 7.206a.75.75 0 0 0 1.104.401l1.445-.889m-8.25.75.213.09a1.687 1.687 0 0 0 2.062-.617l4.45-6.676a1.688 1.688 0 0 1 2.062-.618l.213.09" stroke-linecap="round" stroke-linejoin="round"></path>',
        // Hero Icon - CubeTransparent
        "Preprocessing": '<path d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" stroke-linecap="round" stroke-linejoin="round"></path>',
        // Hero Icon - Sparkles
        "Analysis": '<path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" stroke-linecap="round" stroke-linejoin="round"></path>',
        // Nutshell - Literal Peanut
        "Nutshell": '<path d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" stroke-linecap="round" stroke-linejoin="round"></path>',
        // Machine Learning - Computer
        "Forecast": '<path d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" stroke-linecap="round" stroke-linejoin="round"></path>',
        "Conclusion": '<path d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" stroke-linecap="round" stroke-linejoin="round"></path>',
        // Hero Icon - User Group
        "Team": '<path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" stroke-linecap="round" stroke-linejoin="round"></path>',
    }

    function showNavbar(value) {
        if (value) {
            hoverButton.classList.add('hidden')
            navbars.classList.remove('hidden')
        } else {
            hoverButton.classList.remove('hidden')
            navbars.classList.add('hidden')
        }
    }
</script>

<header>
    <!-- <nav>
        <ul class="flex justify-center">
            {#each nav_items as item}
            <li>
                <a class="block p-4 transition-colors font-medium" href="{base}/#{item}">{item}</a>
            </li>
            {/each}
        </ul>
    </nav> -->
    
    <!-- From: https://www.creative-tim.com/twcomponents/component/floating-side-bar  -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div onmouseover={()=>{ showNavbar(true) }} onfocus={()=>{ showNavbar(true) }} onmouseleave={()=>{ showNavbar(false) }} id="hoverArea" class="z-20 flex shrink-0 grow-0 justify-around h-screen w-[128px] fixed flex-col">
        
        <div bind:this={hoverButton} class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-blue-100 text-blue-600 ">
            <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
        
    </div>
    <nav bind:this={navbars} onmouseover={()=>{ showNavbar(true) }} onfocus={()=>{ showNavbar(true) }} onmouseleave={()=>{ showNavbar(false) }} class="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t p-2.5 shadow-lg backdrop-blur-lg border-slate-600/60 bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border hidden"
    >
        {#each nav_items as item}
        <a href="{base}/#{item}" class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-blue-100 text-blue-600 "
        >
            <svg data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" class="w-6 h-6 shrink-0" xmlns="http://www.w3.org/2000/svg">
                {@html icons[item.toString()]}
            </svg>
            <small class="text-center text-xs font-medium"> {item.substring(0,10)} </small>
        </a>
        {/each}
    </nav>
</header>