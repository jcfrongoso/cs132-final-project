<script>
    import { base } from '$app/paths';
</script>

<div class="max-w-5xl mx-auto bg-gray-200 p-6 pt-10 rounded-lg">
    <h1 class="mb-4">Exploratory Data Analysis</h1>
    <div class="flex items-center bg-blue-500 text-white text-sm font-medium px-4 py-3 mb-4" role="alert">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
        <p>This subsection is a summary of a lengthy process. To know more,
            <a href="{base}/exploratory-data-analysis"
            class="inline-flex items-center font-bold text-blue-100 underline">
                follow this link
                <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
            </a>
        </p>
    </div>
    <p class="mb-4">
        Now that we've successfully preprocessed our data, we proceed to visualize and analyze our dataset through a series of plots from univariate to multivariate analyses.
    </p>
    <h2>Univariate Analysis</h2>
    <p class="mb-4">
        Univariate analysis focuses on the smaller picture of identifying characteristics of a feature from our dataset. On our Colab file, we were able to plot several of them for each possible feature.
    </p>
    <p class="mb-4">
        Based on our plots, we were able to identify that our data contained a sizeable amount of values that are past 3 standard deviations. We won't classify them as outliers and eventually remove them because they are values that were gathered by professionals and with our trust in them, we assure that the data gathered weren't faulty for the next few section of this portfolio. This means that the distribution of our data is prominently righ-skewed followed by a very long tail. The outlier values actually highlight the presence of large producers in the country while the majority of the production entities produce at smaller volumes.
    </p>
    <h2>Bivariate Analysis</h2>
    <p class="mb-4">
         Bivariate analysis on the other hand pairs up two features and identifies relations between them.
    </p>
    <p class="mb-4">
        From our plots, we were able to find out that there are species and regions that emerges in terms of economic value and production volume. Milkfish leads the charts with the highest mean economic value while seaweed dominates total production volume, which sparks contrast on what is valued and produced more in the market. On the other hand, Central Luzon actually leads as the economic powerhouse in the Philippines.
    </p>
    <h2>Multivariate Analysis</h2>
    <p class="mb-4">
        Finally, we analyzed groups of features in order to identify trends from each species and region.
    </p>
    <p class="mb-4">
        Based on our plots, the BARMM region leads in production volume while Central Luzon dominates in economic value. Among species, milkfish generates the highest economic value while P. Vannamei (whiteleg shrimp) shows consistently high production volumes. Seaweed production remains significant across multiple quarters, with substantial regional variations in both production and economic returns. The box plots reveal that grouper has the highest economic value distribution per unit despite not having the largest production volume, indicating it's a high-value species compared to others. These reveals distinct regional variation, reflecting diverse ecological conditions and market specializations throughout the Philippine archipelago.
    </p>
    <!-- <p class="mb-4">
        <a class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" href="{base}/exploratory-data-analysis">Click here to see the process.</a>
    </p> -->
    
</div>