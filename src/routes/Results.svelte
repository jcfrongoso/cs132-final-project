<script>
    import { base } from '$app/paths';

    // Place images here
    // Univariate images.
    import uni_species from '$lib/images/teehee.png';
    import uni_geolocation from '$lib/images/teehee.png';
    import uni_volume from '$lib/images/teehee.png';
    import uni_value from '$lib/images/teehee.png';

    // Bivariate images.
    import bi_species_value from '$lib/images/teehee.png';
    import bi_species_volume from '$lib/images/teehee.png';
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
    <h1 class="mb-4">Results</h1>
    <h2 class="mb-4">Exploratory Data Analysis</h2>
    <a href="{base}/exploratory-data-analysis">Click here</a>
    <h2 class="mb-4">Hypothesis Testing</h2>
    <div>
        <h2  class="mb-2">Research Question 1: Does an increase in aquaculture production volume lead to a corresponding increase in its economic value?</h2>
        <h3  class="mb-2">
            `Ho`: There is no significant correlation between aquaculture volume and value.
        </h3>
        <h3  class="mb-2">
            `Ha`: There is a significant correlation between aquaculture volume and value.
        </h3>
        <p  class="mb-2">Our first research question focuses on the significance of these two values in determining our support for aquaculture systems in the Philippines. With proper knowledge and analysis of these features, we get to understand the position of aquaculture systems in our country. We can use this knowledge to identify what key points lead to the increase/decrease of these systems in order to maintain a stable economy.</p>
        <p  class="mb-2">For the first research question, we are dealing with a quantitative independent variable Volume and a quantitative dependent variable Value. Given this, we opted to use linear regression to identify the correlation between the two variables. Using StatsModels API on Ordinary Least Squares, we were able to identify the following results.</p>
        <p  class="mb-2">insert results here</p>
        <p  class="mb-2">Given the summary results provided from our OLS regression, we conclude that we should reject the null hypothesis with $P > |t|$, t-statistic value of 37.296 which is large, and with the 95% confidence interval [0.015, 0.016] not including zero which means that there is a positive correlation between the two.</p>
    </div>
    <div>
        <h2  class="mb-2">Research Question 2: Is there a significant difference in aquaculture volume across different regions in the Ph?</h2>
        <h3  class="mb-2">
            Ho: There is no significant difference in aquaculture volume across different regions in the Philippines.
        </h3>
        <h3  class="mb-2">
            Ha: There is a significant difference in aquaculture volume across different regions in the Philippines.
        </h3>
        <p  class="mb-2">Now that we've identified that there is indeed a correlation between the two, we can further dive deeper by identifying if there's a significant difference in volume across different regions in the Philippines. Why does this matter? Well, we are an archipelago and it tells a lot about the composition of our geography. With around 7000 islands in the country, there is in no doubt that aquaculture is a thing on our regions. But does that mean that regions that are near coastal or have bodies of water inside them get to utilize them properly, thus a substantial volume? This is what this question asks. We want to know the efficiency if there's a discrepancy between regions.</p>
        <p  class="mb-2">Note that our independent variable here is the geolocation/regions in the Philippines and our dependent variable is aquaculture volume. Given this, we proceed to utilize Kruskal Wallis to test our hypothesis.</p>
        <p  class="mb-2">insert table here</p>
        <p  class="mb-2">Given the H value of 378 which is very large and a p value of $1.41\times 10^{-70}$, we reject the null hypothesis. Thus, there is a significant difference in aquaculture volume across different regions in the Philippines.</p>
    </div>
    <div>
        <h2  class="mb-2">Research Question 3: Is there a significant trend in the volume of aquaculture production in the Philippines over the years?</h2>
        <h3  class="mb-2">
            Ho: There is no significant trend in the volume of aquaculture in the Philippines over the years.
        </h3>
        <h3  class="mb-2">
            Ha: There is a significant trend in the volume of aquaculture in the Philippines over the years.
        </h3>
        <p  class="mb-2">Given the H value of 37.7 which is quite large and a p value of $1.31\times 10^{-7}$, we also reject the null hypothesis. Thus, there is a significant difference in aquaculture volume over the years.</p>
        WHAAT
    </div>

    <h3 class="mb-2">Data Modeling</h3>
    
    <h3 class="mb-2">Nutshell Graph</h3>
</div>