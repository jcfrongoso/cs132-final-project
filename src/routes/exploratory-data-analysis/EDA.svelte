<script>
    import { base } from '$app/paths';

    // Place images here
    // Univariate images.
    import uni_volume_boxplot from '$lib/images/plots/3-1-3 Boxplot of Production Volume.png';
    import uni_volume_boxplot_no_outlier from '$lib/images/plots/3-1-3 Boxplot of Production Volume - No Outliers.png';
    import uni_volume_histogram from '$lib/images/plots/3-1-3 Histogram of Production Volume.png';
    import uni_value_boxplot from '$lib/images/plots/3-1-4 Boxplot of Economic Value.png';
    import uni_value_boxplot_no_outlier from '$lib/images/plots/3-1-4 Boxplot of Economic Value - No Outlier.png';
    import uni_value_distribution from '$lib/images/plots/3-1-4 Distribution of Economic Value.png';

    // Bivariate images.
    import bi_species_value_mean from '$lib/images/plots/3-2-1 Mean Economic Value of each Species.png';
    import bi_species_value_total from '$lib/images/plots/3-2-1 Total Economic Value of each Species.png';

    import bi_species_volume_total from '$lib/images/plots/3-2-2 Total Production Volume of each Species.png';
    
    import bi_geolocation_value_mean from "src/lib/images/plots/3-2-3 Mean Economic Value for each Region.png"
    import bi_geolocation_value_total from "src/lib/images/plots/3-2-3 Total Economic Value for each Region.png"

    import bi_geolocation_value from '$lib/images/teehee.png';
    import bi_geolocation_volume from '$lib/images/teehee.png';

    import bi_value_yearquarter from '$lib/images/teehee.png';
    import bi_volume_yearquarter from '$lib/images/teehee.png';

    import bi_value_volume from '$lib/images/teehee.png';

    // Mutlivariate images.
    import multi_value_species from '$lib/images/teehee.png';
    import multi_value_region from '$lib/images/teehee.png';
    import multi_volume_species from '$lib/images/teehee.png';
    import multi_volume_region from '$lib/images/teehee.png';
</script>

<div class="max-w-5xl mx-auto">
    <h1 class="mb-4">Exploratory Data Analysis</h1>
    <h2 class="mb-2">Univariate Analysis</h2>
    <p class="mb-4"></p>
    
    <h3 class="mb-2">Species</h3>
    <p class="mb-4"></p>

    <h3 class="mb-2">Geolocation</h3>
    <p class="mb-4"></p>

    <h3 class="mb-2">Volume</h3>
    <img alt="Placeholder" class="w-1/6" src={uni_volume_boxplot} />
    <img alt="Placeholder" class="w-1/6" src={uni_volume_boxplot_no_outlier} />
    <img alt="Placeholder" class="w-1/6" src={uni_volume_histogram} />
    <p class="mb-4"></p>
    
    <h3 class="mb-2">Value</h3>
    <img alt="Placeholder" class="w-1/6" src={uni_value_boxplot} />
    <img alt="Placeholder" class="w-1/6" src={uni_value_boxplot_no_outlier} />
    <img alt="Placeholder" class="w-1/6" src={uni_value_distribution} />
    <p class="mb-4"></p>
    
    <!-- Bivariate Analysis -->
    
    <h2 class="mb-2">Bivariate Analysis</h2>
    <p class="mb-4"></p>

    <h3 class="mb-2">Species - Value</h3>
    <img alt="Placeholder" class="w-1/6" src={bi_species_value_mean} />
    <img alt="Placeholder" class="w-1/6" src={bi_species_value_total} />
    <p class="mb-4"></p>

    <h3 class="mb-2">Species - Volume</h3>
    <img alt="Placeholder" class="w-1/6" src={bi_species_volume_total} />
    <p class="mb-4"></p>

    <h3 class="mb-2">Geolocation - Value</h3>
    <img alt="Placeholder" class="w-1/6" src={bi_geolocation_value_mean} />
    <img alt="Placeholder" class="w-1/6" src={bi_geolocation_value_total} />
    <p class="mb-4"></p>

    <h3 class="mb-2">Geolocation - Volume</h3>
    <img alt="Placeholder" class="w-1/6" src={bi_geolocation_volume} />
    <p class="mb-4"></p>

    <h3 class="mb-2">Value - Year/Quarter</h3>
    <img alt="Placeholder" class="w-1/6" src={bi_value_yearquarter} />
    <p class="mb-4"></p>
    
    <h3 class="mb-2">Volume - Year/Quarter</h3>
    <img alt="Placeholder" class="w-1/6" src={bi_volume_yearquarter} />
    <p class="mb-4"></p>
    
    <h3 class="mb-2">Value - Volume</h3>
    <img alt="Placeholder" class="w-1/6" src={bi_value_volume} />
    <p class="mb-4"></p>
    
    
    <!-- Multivariate Analysis -->
    
    <h2 class="mb-2">Multivariate Analysis</h2>
    <p class="mb-4"></p>


    <h3 class="mb-2">Value - Year/Quarter per Species</h3>
    <img alt="Placeholder" class="w-1/6" src={multi_value_species} />
    <p class="mb-4"></p>
    
    <h3 class="mb-2">Value - Year/Quarter per Region</h3>
    <img alt="Placeholder" class="w-1/6" src={multi_value_region} />
    <p class="mb-4"></p>
    
    <h3 class="mb-2">Volume - Year/Quarter per Species</h3>
    <img alt="Placeholder" class="w-1/6" src={multi_volume_species} />
    <p class="mb-4"></p>
    
    <h3 class="mb-2">Volume - Year/Quarter per Region</h3>
    <img alt="Placeholder" class="w-1/6" src={multi_volume_region} />
    <p class="mb-4"></p>
    
</div>