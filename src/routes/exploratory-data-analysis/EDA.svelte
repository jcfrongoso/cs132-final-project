<script>
    import { base } from '$app/paths';

    // Place images here
    // Univariate images.
    import uni_volume_boxplot from '$lib/images/plots/3-1-3_Boxplot_of_Production_Volume.png';
    import uni_volume_boxplot_no_outlier from '$lib/images/plots/3-1-3_Boxplot_of_Production_Volume_-_No_Outliers.png';
    import uni_volume_histogram from '$lib/images/plots/3-1-3_Histogram_of_Production_Volume.png';
    import uni_value_boxplot from '$lib/images/plots/3-1-4_Boxplot_of_Economic_Value.png';
    import uni_value_boxplot_no_outlier from '$lib/images/plots/3-1-4_Boxplot_of_Economic_Value_-_No_Outlier.png';
    import uni_value_distribution from '$lib/images/plots/3-1-4_Distribution_of_Economic_Value.png';

    // Bivariate images.
    import bi_species_value_mean from '$lib/images/plots/3-2-1_Mean_Economic_Value_of_each_Species.png';
    import bi_species_value_total from '$lib/images/plots/3-2-1_Total_Economic_Value_of_each_Species.png';

    import bi_species_volume_total from '$lib/images/plots/3-2-2_Total_Production_Volume_of_each_Species.png';
    
    import bi_geolocation_value_mean from "$lib/images/plots/3-2-3_Mean_Economic_Value_for_each_Region.png";
    import bi_geolocation_value_total from "$lib/images/plots/3-2-3_Total_Economic_Value_for_each_Region.png";
    
    import bi_geolocation_value_3 from "$lib/images/plots/3-2-3_Total_Production_Volume_of_each_Species.png";

    import bi_geolocation_volume from '$lib/images/plots/3-2-4_Total_Production_Volume_per_Region.png';

    import bi_value_yearquarter_1 from "$lib/images/plots/3-2-5_Economic_Value_from_Q1_of_2020_to_Q4_of_2024.png";
    import bi_value_yearquarter_2 from "$lib/images/plots/3-2-5_Economic_Value_from_the_Q1_of_2020_to_Q4_of_2024.png";
    import bi_value_yearquarter_3 from "$lib/images/plots/3-2-5_Production_Volume_from_Q1_of_2020_to_Q4_of_2024.png";

    import bi_volume_yearquarter from "$lib/images/plots/3-2-6_Production_Volume_from_Q1_of_2020_to_Q4_of_2024.png";

    import bi_value_volume from "$lib/images/plots/3-2-7_Economic_vs._Production_Value_of_Aquaculture_Systems_in_the_Philippines.png";

    // Mutlivariate images.
    import multi_value_species_dist from "$lib/images/plots/3-3-1_Economic_Value_Distribution_for_each_Species.png";
    import multi_value_species_trend from "$lib/images/plots/3-3-1_Economic_Value_Trend_for_each_Species.png";

    import multi_value_region_dist from "$lib/images/plots/3-3-2_Economic_Value_Distribution_for_each_Region.png";
    import multi_value_region_trend from "$lib/images/plots/3-3-2_Economic_Value_Trend_for_each_Region.png";

    import multi_volume_species_dist from "$lib/images/plots/3-3-3_Production_Volume_Distribution_for_each_Species.png";
    import multi_volume_species_trend from "$lib/images/plots/3-3-3_Production_Volume_Trend_for_each_Species.png";

    import multi_volume_region_dist from "$lib/images/plots/3-3-4_Production_Volume_Distribution_for_each_Region.png";
    import multi_volume_region_trend from "$lib/images/plots/3-3-4_Production_Volume_Trend_for_each_Region.png";
</script>

<div class="max-w-5xl mx-auto bg-gray-200 p-6 pt-10 rounded-lg">
    <h1 class="mb-4">Exploratory Data Analysis (In-Depth)</h1>
    <div class="flex items-center bg-blue-500 text-white text-sm font-medium px-4 py-3 mb-4" role="alert">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
        <p>This is a more user-friendly look to the analysis.
            <a href="https://colab.research.google.com/drive/1oohGaBcZXjV41udiQipQl1Lw0ZCKSvzl#scrollTo=MQ2Hz2yBssEo"
            class="inline-flex items-center font-bold text-blue-100  underline">
                Check the Colab Notebook for more details.
                <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
            </a>
        </p>
    </div>
    <p class="mb-4">We now proceed with exploring our dataset through several graphs, plots, and analyses. The first thing that we'll do is univariate analysis where we analyze basic statistics of a feature from our dataset.</p>

    <h2 class="mb-2">Univariate Analysis</h2>
    
    <h3 class="mb-2">Species</h3>
    <p class="mb-4">For <code>Species</code>, the only analysis that we can do is to identify what set of species and the number of species included in the dataset.</p>
    <p class="mb-4">Based on the dataset, there's currently 19 different species included in our dataset (excluding 'All Species'). Since we want to exclude 'All Species', we proceed to fix our dataset.</p>
    <h3 class="mb-2">Geolocation</h3>
    <p class="mb-4">As for the <code>Geolocation</code>, we have all 17 regions in the Philippines since they were all available from the data source.</p>

    <h3 class="mb-2">Volume</h3>
    <p class="mb-4">Moving on, we proceed to the <code>Volume</code> feature. Since this is numerical variable, the <code>describe()</code> method provides a different set of attributes.</p>
    <p class="mb-4">From here, we can see that there is a very large gap between the 75% quantile and the max value. This is further supported by the very large standard deviation which means that our data "could be" clumped between 1.24 and 278 and might go as high as 328,205. To prove this point, we provide a boxplot below.</p>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-1-3_Boxplot_of_Production_Volume.png" />
    <p class="mb-4">This may not seem like a "very intuitive" box plot but it provides us a view that there's quite a substantial amount of <code>Volume</code> data that is "extraneous". It is quite interesting to identify which species or timeframe contribute to this occurrence. Since the graph above is quite scuffed, we provide a boxplot below that contains no "outliers".</p>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-1-3_Boxplot_of_Production_Volume_-_No_Outliers.png" />
    <p class="mb-4">We can't fully view how they are distributed so below is a histogram showing the distribution of aquaculture volume.</p>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-1-3_Histogram_of_Production_Volume.png" />
    <p class="mb-4">As we can see from the histogram above, the graph is indeed positively skewed which means that there are indeed instances where the <code>Volume</code> value is really high.</p>
    
    <h3 class="mb-2">Value</h3>
    <p class="mb-4">The same set of visualizations can be used for the <code>Value</code> feature since we are dealing with a quantitative value.</p>
    <p class="mb-4">Compared to the <code>Volume</code> feature, the <code>Value</code> feature contains quantitatively higher degree in values but as we can see the difference between the 75% quantile and the maximum value is still large. This can be further proven by the boxplot below.</p>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-1-4_Boxplot_of_Economic_Value.png" />
    <p class="mb-4">There are still a considerable amount of "outliers" in our <code>Value</code> column and a similar question arises: what causes this occurrence? Hopefully, we get an answer to this question later. Again, we repeat the boxplot by removing the outliers and by also providing a histogram to determine the distribution of the <code>Value</code> column.</p>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-1-4_Boxplot_of_Economic_Value_-_No_Outlier.png" />
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-1-4_Distribution_of_Economic_Value.png" />
    <p class="mb-4">Similar to the <code>Volume</code> column, the histogram for the <code>Value</code> column is also positively skewed with the values going to the right decreasing to around 0 or 1 count (eyeballed values). Since we cannot infer something new from these plots, we proceed to bivariate analysis to further analyze pairings of features and hopefully get to answer the questions that we found earlier.</p>
    
    <!-- Bivariate Analysis -->
    
    <h2 class="mb-2">Bivariate Analysis</h2>
    <p class="mb-4">
        Bivariate analysis investigates the relationship between two variables. (Masud, n.d.) For this section, we pair up features, plot graphs for each pairing, and identify relationships/findings based on these plots.
    </p>

    <h3 class="mb-2">Species - Value</h3>
    <p class="mb-4">
        We first begin with the <code>Species</code>-<code>Value</code> pairing. Given the nature of these two features, we proceed to use a horizontal bar chart to identify the total <code>Value</code> of each specie.
    </p>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-2-1_Total_Economic_Value_of_each_Species.png" />
    <p class="mb-4">
        We can see that the Milkfish specie contributes to the highest value compared to the remainder. We can infer from here that the Milkfish specie contributes to the extraneous values from our <code>Value</code> data earlier. Note that we used <code>sum</code> for our grouping in this plot. Let's check if <code>mean</code> would have a different plot.
    </p>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-2-1_Mean_Economic_Value_of_each_Species.png" />
    <p class="mb-4">
        If we clearly think about it, it doesn't actually contribute to anything new since the values were simply "normalized" in some way. Since there's nothing else to see here, we proceed to the next pairing.
    </p>


    <h3 class="mb-2">Species - Volume</h3>
    <p class="mb-4">We proceed with the <code>Species</code> - <code>Volume</code> pairing. We can also use the same set of plots above since <code>Volume</code> is also a quantitative variable.</p>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-2-2_Total_Production_Volume_of_each_Species.png" />
    <p class="mb-4">
        Wow, this is something. Milkfish contributes to the highest value but seaweeds contribute to the highest volume. Why could this be?
    </p>
    <p class="mb-4">
        Seaweeds typically reach harvestable size in around 50 days (~1.6 months) <a href="https://www.seafdec.org.ph/seaweed-kappaphycus" class="font-medium text-blue-600  hover:underline">[SEAFDEC]</a>, allowing for multiple harvests each year. In contrast, milkfish require 3–4 months to grow in brackishwater ponds and up to 6–8 months in marine pens and cages <a href="https://www.fao.org/fishery/affris/species-profiles/milkfish/production" class="font-medium text-blue-600  hover:underline">[FAO]</a>. The faster growth cycle of seaweeds enables more frequent harvests, contributing to higher annual production volumes. Additionally, seaweed farming is less labor- and resource-intensive, as it requires no feed or active water management. It also involves lower capital investment and technical skill, making it more accessible to small-scale coastal producers.
    </p>
    <p class="mb-4">
        This finding leads us to the cause of the outliers from the boxplot earlier.
    </p>

    <h3 class="mb-2">Geolocation - Value</h3>
    <p class="mb-4">
        Next up, we have <code>Geolocation</code> vs <code>Value</code>. Here, we identify if there's a difference between the value of aquaculture per region.
    </p>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-2-3_Mean_Economic_Value_for_each_Region.png" />
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-2-3_Total_Economic_Value_for_each_Region.png" />
    <!-- <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{bi_geolocation_value_3}" /> -->
    <p class="mb-4">
        From this plot, we can see that Central Luzon offers a large total and average value compared to other regions. Why is this so? Why do they value their aquaculture products so much?
        Manlosa et al. (<a href="https://link.springer.com/article/10.1007/s10113-021-01853-4" style="color: blue;" target="_blank">2021</a>) highlight how saltwater intrusion and environmental changes have driven the conversion of rice paddies into fish farms in Central Luzon, especially in low-lying areas like Pampanga, Bulacan, and Bataan. As a result, these provinces—along with inland areas such as Nueva Ecija and Tarlac—now play a major role in aquaculture production, cultivating species like bangus, sugpo, and tilapia.
        Based on the data we gathered, the top three species produced in BARMM are seaweed, P. vannamei (whiteleg shrimp), and oyster. 
        In contrast, the leading species in Central Luzon are tilapia, milkfish, and white shrimp. As shown in the previous sections, seaweed and P. vannamei rank highest in terms of production volume. 
        However, it was also shown that their mean economic value is relatively low compared to that of milkfish and tilapia. 
        This disparity helps explain why Central Luzon, despite having lower production volumes, achieves a higher overall economic value than BARMM.
    </p>

    <h3 class="mb-2">Geolocation - Volume</h3>
    <p class="mb-4">
        Next up, we have the <code>Geolocation</code> - <code>Volume</code> pairing. Similar to the plots above, we can do the same set of visuals for this pairing.
    </p>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-2-4_Total_Production_Volume_per_Region.png" />
    <p class="mb-4">
        Again, the total volume for BARMM is quite large in number compared to the following regions. Location-wise, BARMM is at the southwestern portion of the Philippines and is comprised of several islands surrounded by a significantly large body of water. This might be a reason as to why there's a "significant" discrepancy in <code>Volume</code> compared to other regions especially to those in the Visayas regions since they are also surrounded significantly by bodies of water.
    </p>

    <h3 class="mb-2">Value - Year/Quarter</h3>
    <p class="mb-4">
        This next pairing may not seem like a pair but the <code>Year</code> and <code>Quarter</code> features can be actually combined to provide us a time series analysis of <code>Value</code> and <code>Volume</code> (next section). For this part, we will be plotting a line chart for the <code>Value</code> variable.
    </p>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-2-5_Economic_Value_from_Q1_of_2020_to_Q4_of_2024.png" />
    <p class="mb-4">
        Based on this line chart, we cannot actually discern any particular trend without performing a linear regression, which we can do but for now we will only provide a visualization.
    </p>
    
    <h3 class="mb-2">Volume - Year/Quarter</h3>
    <p class="mb-4">
        Second to the last is the <code>Volume</code> time series where we can plot a line chart to determine if a particular trend is occurring.
    </p>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-2-6_Production_Volume_from_Q1_of_2020_to_Q4_of_2024.png" />
    <p class="mb-4">
        Similar to our findings earlier, there's also no discernable trend that can be visually found in this graph.
    </p>
    

    <h3 class="mb-2">Value - Volume</h3>
    <p class="mb-4">
        Finally, we have the <code>Value</code> - <code>Volume</code> pair. Both values are quantitative values so we utilized a scatter plot.
    </p>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-2-7_Economic_vs._Production_Value_of_Aquaculture_Systems_in_the_Philippines.png" />
    <p class="mb-4">
        This is quite an interesting plot since we can say through visual eyeballing that there are two probable clusters from this graph but we cannot yet conclude if this is so but for now we can state that there are two probable clusters pertaining to different line regressions.
    </p>
    
    
    <!-- Multivariate Analysis -->
    
    <h2 class="mb-2">Multivariate Analysis</h2>
    <p class="mb-4">We're now transitioning to creating analyses for multiple features. We won't delve into all groupings but rather focus only to the set of features that makes sense.</p>

    <h3 class="mb-2">Value - Year/Quarter per Species</h3>
    <p class="mb-4">The first set of group includes the value of each specie as a time series. We provide below a heatmap showing the changes in value for each specie as time goes on.</p>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-3-1_Economic_Value_Distribution_for_each_Species.png" />
    <p class="mb-4">Aside from the heatmap, we can also create multiple boxplots to further determine the gap on the distribution of each specie.</p>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-3-1_Economic_Value_Trend_for_each_Species.png" />
    <p class="mb-4">As we can see from the heatmap above, almost half of the available species has very low value compared to Milkfish, Tilapia, and Tiger Prawn (visually judged). Some of these species include mussel, mudfish, oyster, prawns, catfish, and carp which I think are luxury species when based on the choices of the common people, thus contributing to little value. As for the boxplots, we can see that the distribution for Milkfish do have a larger gap as compared to the other species which have lower quantitative value.</p>
    
    <h3 class="mb-2">Value - Year/Quarter per Region</h3>
    <p class="mb-4">Next up is the time series changes in value per region. We again utilize the same plot function above.</p>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-3-2_Economic_Value_Trend_for_each_Region.png" />
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-3-2_Economic_Value_Distribution_for_each_Region.png" />
    <p class="mb-4">Similar to our findings earlier, Central Luzon has high aquaculture value. Through visual analysis, we can see that Central Luzon leads on all the Year-Quarter combinations in terms of value. As for the following region, there's no clear contender as to who to watch for.</p>
    
    <h3 class="mb-2">Volume - Year/Quarter per Species</h3>
    <p class="mb-4">The next few plots below are the `Volume` feature equivalent of the `Value` plots above.</p>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-3-3_Production_Volume_Distribution_for_each_Species.png" />
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-3-3_Production_Volume_Trend_for_each_Species.png" />
    <p class="mb-4">Seaweed clearly has the highest volume output among all aquaculture species, likely because it is relatively easy to cultivate, requires minimal maintenance, and is well-suited for small-scale production. Its accessibility allows even low-capital communities to engage in farming, contributing to its widespread adoption and consistently high output.</p>
    
    <h3 class="mb-2">Volume - Year/Quarter per Region</h3>
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-3-4_Production_Volume_Distribution_for_each_Region.png" />
    <img alt="Placeholder" class="h-96 my-8 mx-auto" src="{base}/images/plots/3-3-4_Production_Volume_Trend_for_each_Region.png" />
    <p class="mb-4">BARMM consistently leads in aquaculture production volume, largely due to extensive seaweed farming, as shown by its high median and wide distribution in the boxplot and sustained dominance in the heatmap. 
        CAR ranks second, with stable yet moderate output likely driven by freshwater and inland aquaculture systems. 
        In contrast, most other regions exhibit lower and less variable production volumes, reflecting smaller-scale or less intensive aquaculture operations. 
        These differences highlight how geography, species specialization, and investment influence regional output.</p>
    
</div>