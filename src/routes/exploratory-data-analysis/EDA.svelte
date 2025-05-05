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
    
    import bi_geolocation_value_mean from "$lib/images/plots/3-2-3 Mean Economic Value for each Region.png";
    import bi_geolocation_value_total from "$lib/images/plots/3-2-3 Total Economic Value for each Region.png";
    import bi_geolocation_value_3 from "$lib/images/plots/3-2-3 Total Production Volume of each Species.png";

    import bi_geolocation_volume from '$lib/images/plots/3-2-4 Total Production Volume per Region.png';

    import bi_value_yearquarter_1 from "$lib/images/plots/3-2-5 Economic Value from Q1 of 2020 to Q4 of 2024.png";
    import bi_value_yearquarter_2 from "$lib/images/plots/3-2-5 Economic Value from the Q1 of 2020 to Q4 of 2024.png";
    import bi_value_yearquarter_3 from "$lib/images/plots/3-2-5 Production Volume from Q1 of 2020 to Q4 of 2024.png";

    import bi_volume_yearquarter from "$lib/images/plots/3-2-6 Production Volume from Q1 of 2020 to Q4 of 2024.png";

    import bi_value_volume from "$lib/images/plots/3-2-7 Economic vs. Production Value of Aquaculture Systems in the Philippines.png";

    // Mutlivariate images.
    import multi_value_species_dist from "$lib/images/plots/3-3-1 Economic Value Distribution for each Species.png";
    import multi_value_species_trend from "$lib/images/plots/3-3-1 Economic Value Trend for each Species.png";

    import multi_value_region_dist from "$lib/images/plots/3-3-2 Economic Value Distribution for each Region.png";
    import multi_value_region_trend from "$lib/images/plots/3-3-2 Economic Value Trend for each Region.png";

    import multi_volume_species_dist from "$lib/images/plots/3-3-3 Production Volume Distribution for each Species.png";
    import multi_volume_species_trend from "$lib/images/plots/3-3-3 Production Volume Trend for each Species.png";

    import multi_volume_region_dist from "$lib/images/plots/3-3-4 Production Volume Distribution for each Region.png";
    import multi_volume_region_trend from "$lib/images/plots/3-3-4 Production Volume Trend for each Region.png";
</script>

<div class="max-w-5xl mx-auto">
    <h1 class="mb-4">Exploratory Data Analysis</h1>
    <h2 class="mb-2">Univariate Analysis</h2>
    <p class="mb-4"></p>
    
    <h3 class="mb-2">Species</h3>
    <p class="mb-4">For `Species`, the only analysis that we can do is to identify what set of species and the number of species included in the dataset.</p>
    <p class="mb-4">Based on the dataset, there's currently 19 different species included in our dataset (excluding 'All Species'). Since we want to exclude 'All Species', we proceed to fix our dataset.</p>
    <h3 class="mb-2">Geolocation</h3>
    <p class="mb-4">As for the `Geolocation`, we have all 17 regions in the Philippines since they were all available from the data source.</p>

    <h3 class="mb-2">Volume</h3>
    <p class="mb-4">Moving on, we proceed to the `Volume` feature. Since this is numerical variable, the `describe()` method provides a different set of attributes.</p>
    <p class="mb-4">From here, we can see that there is a very large gap between the 75% quantile and the max value. This is further supported by the very large standard deviation which means that our data "could be" clumped between 1.24 and 278 and might go as high as 328,205. To prove this point, we provide a boxplot below.</p>
    <img alt="Placeholder" class="h-96" src={uni_volume_boxplot} />
    <p class="mb-4">This may not seem like a "very intuitive" box plot but it provides us a view that there's quite a substantial amount of `Volume` data that is "extraneous". It is quite interesting to identify which species or timeframe contribute to this occurrence. Since the graph above is quite scuffed, we provide a boxplot below that contains no "outliers".</p>
    <img alt="Placeholder" class="h-96" src={uni_volume_boxplot_no_outlier} />
    <p class="mb-4">We can't fully view how they are distributed so below is a histogram showing the distribution of aquaculture volume.</p>
    <img alt="Placeholder" class="h-96" src={uni_volume_histogram} />
    <p class="mb-4">As we can see from the histogram above, the graph is indeed positively skewed which means that there are indeed instances where the `Volume` value is really high.</p>
    
    <h3 class="mb-2">Value</h3>
    <p class="mb-4">The same set of visualizations can be used for the `Value` feature since we are dealing with a quantitative value.</p>
    <p class="mb-4">Compared to the `Volume` feature, the `Value` feature contains quantitatively higher degree in values but as we can see the difference between the 75% quantile and the maximum value is still large. This can be further proven by the boxplot below.</p>
    <img alt="Placeholder" class="h-96" src={uni_value_boxplot} />
    <p class="mb-4">There are still a considerable amount of "outliers" in our `Value` column and a similar question arises: what causes this occurrence? Hopefully, we get an answer to this question later. Again, we repeat the boxplot by removing the outliers and by also providing a histogram to determine the distribution of the `Value` column.</p>
    <img alt="Placeholder" class="h-96" src={uni_value_boxplot_no_outlier} />
    <img alt="Placeholder" class="h-96" src={uni_value_distribution} />
    <p class="mb-4">Similar to the `Volume` column, the histogram for the `Value` column is also positively skewed with the values going to the right decreasing to around 0 or 1 count (eyeballed values). Since we cannot infer something new from these plots, we proceed to bivariate analysis to further analyze pairings of features and hopefully get to answer the questions that we found earlier.</p>
    
    <!-- Bivariate Analysis -->
    
    <h2 class="mb-2">Bivariate Analysis</h2>
    <p class="mb-4"></p>

    <h3 class="mb-2">Species - Value</h3>
    <img alt="Placeholder" class="h-96" src={bi_species_value_mean} />
    <img alt="Placeholder" class="h-96" src={bi_species_value_total} />
    <p class="mb-4"></p>

    <h3 class="mb-2">Species - Volume</h3>
    <img alt="Placeholder" class="h-96" src={bi_species_volume_total} />
    <p class="mb-4"></p>

    <h3 class="mb-2">Geolocation - Value</h3>
    <img alt="Placeholder" class="h-96" src={bi_geolocation_value_mean} />
    <img alt="Placeholder" class="h-96" src={bi_geolocation_value_total} />
    <img alt="Placeholder" class="h-96" src={bi_geolocation_value_3} />
    <p class="mb-4"></p>

    <h3 class="mb-2">Geolocation - Volume</h3>
    <img alt="Placeholder" class="h-96" src={bi_geolocation_volume} />
    <p class="mb-4"></p>

    <h3 class="mb-2">Value - Year/Quarter</h3>
    <img alt="Placeholder" class="h-96" src={bi_value_yearquarter_1} />
    <img alt="Placeholder" class="h-96" src={bi_value_yearquarter_2} />
    <img alt="Placeholder" class="h-96" src={bi_value_yearquarter_3} />
    <p class="mb-4"></p>
    
    <h3 class="mb-2">Volume - Year/Quarter</h3>
    <img alt="Placeholder" class="h-96" src={bi_volume_yearquarter} />
    <p class="mb-4"></p>
    
    <h3 class="mb-2">Value - Volume</h3>
    <img alt="Placeholder" class="h-96" src={bi_value_volume} />
    <p class="mb-4"></p>
    
    
    <!-- Multivariate Analysis -->
    
    <h2 class="mb-2">Multivariate Analysis</h2>
    <p class="mb-4">We're now transitioning to creating analyses for multiple features. We won't delve into all groupings but rather focus only to the set of features that makes sense.</p>

    <h3 class="mb-2">Value - Year/Quarter per Species</h3>
    <p class="mb-4">The first set of group includes the value of each specie as a time series. We provide below a heatmap showing the changes in value for each specie as time goes on.</p>
    <img alt="Placeholder" class="h-96" src={multi_value_species_dist} />
    <p class="mb-4">Aside from the heatmap, we can also create multiple boxplots to further determine the gap on the distribution of each specie.</p>
    <img alt="Placeholder" class="h-96" src={multi_value_species_trend} />
    <p class="mb-4">As we can see from the heatmap above, almost half of the available species has very low value compared to Milkfish, Tilapia, and Tiger Prawn (visually judged). Some of these species include mussel, mudfish, oyster, prawns, catfish, and carp which I think are luxury species when based on the choices of the common people, thus contributing to little value. As for the boxplots, we can see that the distribution for Milkfish do have a larger gap as compared to the other species which have lower quantitative value.</p>
    
    <h3 class="mb-2">Value - Year/Quarter per Region</h3>
    <p class="mb-4">Next up is the time series changes in value per region. We again utilize the same plot function above.</p>
    <img alt="Placeholder" class="h-96" src={multi_value_region_trend} />
    <img alt="Placeholder" class="h-96" src={multi_value_region_dist} />
    <p class="mb-4">Similar to our findings earlier, Central Luzon has high aquaculture value. Through visual analysis, we can see that Central Luzon leads on all the Year-Quarter combinations in terms of value. As for the following region, there's no clear contender as to who to watch for.</p>
    
    <h3 class="mb-2">Volume - Year/Quarter per Species</h3>
    <p class="mb-4">The next few plots below are the `Volume` feature equivalent of the `Value` plots above.</p>
    <img alt="Placeholder" class="h-96" src={multi_volume_species_dist} />
    <img alt="Placeholder" class="h-96" src={multi_volume_species_trend} />
    <p class="mb-4">Seaweed clearly has the highest volume output compared to the other species.</p>
    
    <h3 class="mb-2">Volume - Year/Quarter per Region</h3>
    <img alt="Placeholder" class="h-96" src={multi_volume_region_dist} />
    <img alt="Placeholder" class="h-96" src={multi_volume_region_trend} />
    <p class="mb-4"></p>
    
</div>