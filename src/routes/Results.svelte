<script>
    import { base } from '$app/paths';

    // Place images here
    import rq1_1 from '$lib/images/plots/4-1 Relationship between Production Volume and Economic Value.png';
    import rq1_2 from '$lib/images/plots/4-1 KMeans Clustering.png';
    import rq1_3 from '$lib/images/plots/4-1 Kmeans with regression lines.png';
    import rq2_1 from '$lib/images/plots/4-2 Production Volume by Region.png';
    import rq2_2 from '$lib/images/plots/4-2 Production Volume Distribution by Region.png';
    import rq3_1 from '$lib/images/plots/4-3 Production Volume Over The Years.png';
    import rq3_2 from '$lib/images/plots/4-3 Production Volume Over the Years by Region.png';
    import res4_1 from '$lib/images/results/4-1.png';
    import res4_2 from '$lib/images/results/4-2.png';
    import res4_3 from '$lib/images/results/4-3.png';
    import nutshell_plot from '$lib/images/plots/5 Nutshell plot.png';
</script>

<div class="max-w-5xl mx-auto">
    <h1 class="mb-4">Results</h1>
    <h2 class="mb-4">Exploratory Data Analysis</h2>
    <p class="mb-4">
        Now that we've successfully preprocessed our data, we proceed to visualize and analyze our dataset through a series of plots from univariate to multivariate analyses.
    </p>
    <h3>Univariate Analysis</h3>
    <p class="mb-4">
        Univariate analysis focuses on the smaller picture of identifying characteristics of a feature from our dataset. On our Colab file, we were able to plot several of them for each possible feature.
    </p>
    <p class="mb-4">
        Based on our plots, we were able to identify that our data contained a sizeable amount of values that are past 3 standard deviations. We won't classify them as outliers and eventually remove them because they are values that were gathered by professionals and with our trust in them, we assure that the data gathered weren't faulty for the next few section of this portfolio. This means that the distribution of our data is prominently righ-skewed followed by a very long tail. The outlier values actually highlight the presence of large producers in the country while the majority of the production entities produce at smaller volumes.</p>
    <h3>Bivariate Analysis</h3>
    <p class="mb-4">
         Bivariate analysis on the other hand pairs up two features and identifies relations between them.
    </p>
    <p class="mb-4">
        From our plots, we were able to find out that there are species and regions that emerges in terms of economic value and production volume. Milkfish leads the charts with the highest mean economic value while seaweed dominates total production volume, which sparks contrast on what is valued and produced more in the market. On the other hand, Central Luzon actually leads as the economic powerhouse in the Philippines.
    </p>
    <h3>Multivariate Analysis</h3>
    <p class="mb-4">
        Finally, we analyzed groups of features in order to identify trends from each species and region.
    </p>
    <p class="mb-4">
        Based on our plots, the BARMM region leads in production volume while Central Luzon dominates in economic value. Among species, milkfish generates the highest economic value while P. Vannamei (whiteleg shrimp) shows consistently high production volumes. Seaweed production remains significant across multiple quarters, with substantial regional variations in both production and economic returns. The box plots reveal that grouper has the highest economic value distribution per unit despite not having the largest production volume, indicating it's a high-value species compared to others. These reveals distinct regional variation, reflecting diverse ecological conditions and market specializations throughout the Philippine archipelago.
    </p>
    <p class="mb-4">
        <a class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" href="{base}/exploratory-data-analysis">Click here to see the process.</a>
    </p>
    <h2 class="mb-4">Hypothesis Testing</h2>
    <div>
        <!-- Research Question 1 -->
        <h4 class="mb-2">Research Question 1: Does an increase in aquaculture production volume lead to a corresponding increase in its economic value?</h4>
        <h5 class="mb-2">
            <code>Ho</code>: There is no significant correlation between aquaculture volume and value.
        </h5>
        <h5 class="mb-2">
            <code>Ha</code>: There is a significant correlation between aquaculture volume and value.
        </h5>
        <h4>Selection of Statistical Test</h4>
        <p class="mb-2">The first research question deals with two quantitative values: volume and value. Since we are testing if there is no positive correlation between the two features and not just any relation, a one-tailed Pearson correlation test is the appropriate statistical method for the following reasons:</p>
        <ul>
            <li>1. Both variables are continuous and measured on an interval/ratio scale</li>
            <li>2. We are investigating a linear relationship between the variables</li>
            <li>3. The hypothesis is directional (specifically testing for a positive correlation)</li>
        </ul>
        <img alt="Placeholder" class="w-xl" src="{res4_1}" />
        <h4>Statistical Analysis Results</h4>
        <p class="mb-2">
            The Pearson correlation coefficient (r) calculated between production volume and economic value is 0.4275, indicating a moderate positive linear relationship between the two variables. According to established statistical guidelines, correlation coefficients between 0.3 and 0.5 typically represent moderate positive correlations.
        </p>
        <p class="mb-2">
            The one-tailed p-value is p is less than 0.0001, which is significantly below our alpha threshold of 0.05. This extremely small p-value indicates that the probability of observing this correlation coefficient (or stronger) by random chance alone, assuming the null hypothesis is true, is less than 0.01%. Therefore, we have sufficient statistical evidence to reject the null hypothesis.
        </p>
        <h4>Visual Analysis and Implications</h4>
        <p class="mb-2">
            To visually support this claim, we can utilize our plot from 3.2.7 but now we add a regression line.
        </p>
        <img alt="Placeholder" class="w-xl" src="{rq1_1}" />
        <p class="mb-2">The scatter plot reveals an interesting pattern that might not be fully captured by a single correlation coefficient. Upon visual inspection, there appear to be two distinct clusters within the data, suggesting a potentially more complex relationship. With this, we use K-means clustering to identify the two visually identifiable clustering.</p>
        <img alt="Placeholder" class="w-xl" src="{rq1_2}" />
        <p class="mb-2">The plot above is quite interesting as compared to what we could have imagined (most would easily halve the original scatter plot into two by creating a dividing line that will cluster the original scatter plot). But does these two plots inherit the same regression line from the original plot?</p>
        <img alt="Placeholder" class="w-xl" src="{rq1_3}" />
        <p class="mb-2">
            The first clustering has a high positive coefficient while the second clustering tends to have a lower negative coefficient. Given these two plots, it is hard to conclude what characteristics can be discerned from approximately 66% of production volume values. But after some point, economic value tends to die down.
        </p>
        <p class="mb-2">
            This statistical result have economic implications. The positive correlation between production volume and economic value suggests that, in general, increasing aquaculture production leads to higher economic returns. However, the cluster analysis reveals a variation where:
        </p>
        <ul>
            <li>
                Cluster 0: A strong positive relationship exists (y = 7.905x + 56,991.36), suggesting efficient market conditions where increasing production significantly boosts economic value.
            </li>
            <li>
                Cluster 1: The relationship becomes negative (y = -2.059x + 3,893,432.51), indicating diminishing returns, likely due to market saturation or price suppression at high volumes.
            </li>
        </ul>
        <p class="mb-2">
            These findings makes sense because it reflects the law of demand and supply. After some point, we cannot value the same good similar to the one previously bought due to decreasing marginal utility. Aside from that, there are income effects and demand shifts that needs to be considered especially that we are living in a third-world country and are currently facing high taxes. As a conclusion, where producers face market and policy constraints, this suggests that maximizing production may not always maximize profit.
        </p>
    </div>
    <!-- Research Question 2 -->
    <div>
        <h4 class="mb-2">Research Question 2: Is there a significant difference in aquaculture volume across different regions in the Ph?</h4>
        <h5 class="mb-2">
            <code>Ho</code>: There is no significant difference in aquaculture volume across different regions in the Philippines.
        </h5>
        <h5 class="mb-2">
            <code>Ha</code>: There is a significant difference in aquaculture volume across different regions in the Philippines.
        </h5>
        <h4>
            Selection of Statistical Test
        </h4>
        <p class="mb-2">
            For this research question, we are dealing with a categorical variable as a predictor (region) and a quantitative outcome variable (production volume). Based on this, the appropriate statistical test for comparing more than two independent groups is the Kruskal-Wallis H test, a non-parametric alternative to one-way ANOVA when normality cannot be assumed.
        </p>
        <img alt="Placeholder" class="w-xl" src="{res4_2}" />
        <h4>
            Statistical Analysis Results
        </h4>
        <p class="mb-2">
            Using the ANOVA method (`f_oneway`), we obtained an F-statistic of 45 and a p-value of $3.25 \times 10^{-35}$. Given the extremely small p-value (far below any conventional alpha level), we reject the null hypothesis that all regional aquaculture volumes come from the same distribution.
        </p>
        <p class="mb-2">
            This result indicates a statistically significant difference in aquaculture production volume across different regions in the Philippines. The variation is substantial enough to merit closer examination of regional contributions and disparities.
        </p>
        <h4>
            Visual Analysis and Implications
        </h4>
        <p class="mb-2">
            This tells us that every region has their own contribution and no conclusion can be said that could summarize the volume of aquaculture each region provides. This discrepancy allows us to identify weak points which we could prepare for or plan about. There might be some lack of support or some hidden cause that could lead to such discrepancy.
        </p>
        <p class="mb-2">
            This can be further shown by the boxplots below, excluding outliers for each region. BARMM is quite an interesting case having a healthy production volume. If we geographically locate BARMM, it is located in the south-western part of the Philippines and is comprised of several islands and a mainland Mindanao area. Given its geographical location, we can already infer as to why BARMM produces such high highs in terms of volume.
        </p>
        <img alt="Placeholder" class="w-xl" src='{rq2_1}' />
        <p class="mb-2">If we think about it, several other regions especially in the Visayas are surrounded by large bodies of water but if we take a closer look, Western Visayas have greater proportions compared to Central and Eastern Visayas. 
            Western Visayas has a well-established and well-supported aquaculture industry, backed by strong infrastructure and government investment. Key highlights include Capiz as the seafood capital, the Iloilo Fish Port Complex as a major trading and processing hub, a <a href="https://repository.seafdec.org.ph/bitstream/handle/10862/6065/AQD-Matters-2021-03_04.pdf" style="color:blue" target="_blank">rehabilitated hatchery</a> in Aklan producing up to 10 million bangus fry annually (operational since 2021), and plans for a <a href="https://www.pna.gov.ph/articles/1193131" style="color: blue;" target="_blank">₱30 million aquaculture feed mill</a> to lower feed costs.
            Central Visayas engages in aquaculture, particularly in Cebu and Siquijor, but faces economic and social challenges. A <a href="https://link.springer.com/article/10.7603/s40934-015-0014-0" style="color: blue;" target="_blank">2015</a> study found that while the sector offers employment, jobs are often non-permanent and poverty remains high in surrounding communities. Most farms use basic infrastructure like mud-bottom ponds and rely on commercial feed and free-flowing water systems, raising concerns about long-term sustainability.
            Eastern Visayas shows aquaculture potential, with feasibility studies supporting hatchery development. However, the region is highly vulnerable to typhoons, which threaten aquaculture operations and infrastructure.</p>
        <p class="mb-2">Aside from the regions that are surrounded by bodies of water, there is also another interesting instance where Central Luzon, which is known for its vast lands for farming and agricultural products, is the second in terms of production volume.
            The study by Manlosa et al. (<a href="https://link.springer.com/article/10.1007/s10113-021-01853-4" style="color:blue" target="_blank">2021</a>) explores how institutional dynamics and environmental changes have driven the expansion of aquaculture in Central Luzon, particularly highlighting the conversion of rice paddies into fish farms. A key driver of this shift is saltwater intrusion in low-lying areas, which made rice farming less viable and prompted farmers—especially in Pampanga, Bulacan, and Bataan—to transition to brackishwater aquaculture. These areas, along with inland provinces like Nueva Ecija and Tarlac, now contribute significantly to aquaculture production, cultivating species such as bangus, sugpo, and tilapia in fishponds, cages, and reservoirs.
        </p>
        <p class="mb-2"></p>
    </div>
    <!-- Research Question 3 -->
    <div>
        <h4 class="mb-2">Research Question 3: Is there a significant trend in the volume of aquaculture production in the Philippines over the years?</h4>
        <h5 class="mb-2">
            <code>Ho</code>: There is no significant trend in the volume of aquaculture in the Philippines over the years.
        </h5>
        <h5 class="mb-2">
            <code>Ha</code>: There is a significant trend in the volume of aquaculture in the Philippines over the years.
        </h5>
        <h4>
            Selection of Statistical Test
        </h4>
        <p class="mb-2">
            For analyzing the production volume trend over time, the Mann-Kendall Trend Test was selected as the appropriate statistical method. This test is ideal for this analysis because:
        </p>
        <ul style="list-style: disc; margin-left: 40px">
            <li>
                It effectively detects monotonic trends in time series data
            </li>
            <li>
                It doesn't require the data to be normally distributed
            </li>
            <li>
                It can handle seasonal variations common in production data
            </li>
            <li>
                It's resistant to outliers which appear present in the quarterly production volumes
            </li>
        </ul>
        <img alt="Placeholder" class="w-xl" src='{res4_3}' />
        <h4>
            Statistical Analysis Results
        </h4>
        <p>Given that the trend is <code>no trend</code>, this means that there's no significant trend, thus we fail to reject `Ho`. This tells us about the uncertainty of the possible volume of aquaculture that we'll have for the following years. This uncertainty can cause several implications such as:</p>
            
       
                <ul style="list-style: disc; margin-left: 40px">
                    <li>Difficulty in long-term planning for supply chain management, including storage, distribution, and market pricing.</li>
                    <li>Challenges in policy-making for the aquaculture sector, as the absence of a clear trend makes it harder to design effective interventions or subsidies.</li>
                    <li>Risk for investors and stakeholders in the aquaculture industry who rely on production forecasts for business decisions.</li>
                    <li>Potential instability in food security, especially if future volumes fluctuate unexpectedly, affecting local consumption and export goals</li>
                </ul>
        <h4>
            Visual Analysis and Implications
        </h4>
        <p>This can be further illustrated by the time series graph below which shows that there is indeed no apparent trend for the past five years.</p>
        <img alt="Placeholder" class="w-xl" src="{rq3_1}" />
        <img alt="Placeholder" class="w-xl" src="{rq3_2}" />
        <p class="mb-2">
            From these plots, we get to learn that there are no apparent upward or downward patterns for quarterly fluctuations. There are some notable peaks that occurred in Q3 2022, Q4 2021, and Q3 2023, with the highest volume reaching nearly 6,000 metric tons. Q4 2021 and Q3 2022 are interesting cases because these are times where we're still under the Covid 19 pandemic.
        </p>
    </div>
    
    <h2 class="mb-2">V. What's our take? (Nutshell Plot)</h2>
    <p>
       With these things in mind, we get to see a bigger picture. Having resources is not enough for an economy to work without proper support. Even though a large portion of Visayas is surrounded by a large body of water, they still lack in terms of production volume. But is it the end-all? No, there are prospering regions that dare defy this case. Central Luzon is one of the leading regions in terms of production volume but in their case, they are not as geographically resourceful in terms of bodies of water. This might mean one thing. Other regions are not trying. 
    </p>
    <p>
        Or it could be that the disparity lies in access to aquaculture infrastructure, policy support, and investment in technology. BARMM, for instance, dominates production—suggesting that when regions are empowered, productivity can skyrocket regardless of long-standing challenges. Meanwhile, the map also reveals that economic value doesn’t always correlate directly with production volume, hinting at deeper systemic issues in pricing, value chains, and market access. This further emphasizes the need for a more equitable and strategic approach to aquaculture development across regions.
    </p>
    <img alt="Placeholder" class="w-5xl" src="{nutshell_plot}" />
</div>