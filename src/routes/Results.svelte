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
    import nutshell_plot from '$lib/images/plots/5 Nutshell plot.png';
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
        <p  class="mb-2">The first research question deals with two quantitative values: volume and value. Since we are testing if there is no positive correlation between the two features and not just any relation, we proceed to use one-tailed Pearson correlation test.</p>
        <p  class="mb-2">Based on our Pearson correlation coefficient, there is an indication that there's a moderate linear positive relationship between production volume and economic value. This means that as aquaculture production volume increases, the economic value tends to increase as well. The one-tailed p-value of 0.0000 means that the probability of observing this correlation by random chance is virtually zero. Since p-value is less than 0.05, we reject the null hypothesis.</p>
        <p class="mb-2">To visually support this claim, we can utilize our plot from 3.2.7 but now we add a regression line.</p>
        <img alt="Placeholder" class="w-xl" src="{rq1_1}" />
        <h2>IMPLICATIONS</h2>
        <p  class="mb-2">From our earlier discussion regarding the scatter plot, we brought up that there are two visual clusterings that can be made that's why the current regression line identified from the current plot is questionnable in some sense. So, if there are indeed two possible clustering, what could it be? Here, we use K-means clustering to identify the two visually identifiable clustering.</p>
        <img alt="Placeholder" class="w-xl" src="{rq1_2}" />
        <p class="mb-2">The plot above is quite interesting as compared to what we could have imagined (most would easily halve the original scatter plot into two by creating a dividing line that will cluster the original scatter plot). But does these two plots inherit the same regression line from the original plot?</p>
        <img alt="Placeholder" class="w-xl" src="{rq1_3}" />
        <p>The first clustering has a high positive coefficient while the second clustering tends to have a lower negative coefficient. Given these two plots, it is hard to conclude what characteristics can be discerned from approximately 66% of production volume values. But after some point, economic value tends to die down. This might make sense due to the law of demand and supply. After some point, we cannot value the same good similar to the one previously bought due to decreasing marginal utility. Aside from that, there are income effects and demand shifts that needs to be considered especially that we are living in a third-world country and are currently facing high taxes. With this, we can observe that higher production volumes tend to be associated with higher economic values. Do note that we are only speaking in an independent manner where we don't take into account various other factors that may lead to sudden shifts in economic value or production volume. This is still worth looking into a higher perspective.</p>
    </div>
    <div>
        <h2  class="mb-2">Research Question 2: Is there a significant difference in aquaculture volume across different regions in the Ph?</h2>
        <h3  class="mb-2">
            Ho: There is no significant difference in aquaculture volume across different regions in the Philippines.
        </h3>
        <h3  class="mb-2">
            Ha: There is a significant difference in aquaculture volume across different regions in the Philippines.
        </h3>
        <p  class="mb-2">For this research question, we are dealing with a categorical variable as a predictor and a quantitative outcome variable so based on our research, we will be using Kruskal Wallis test for hypothesis testing.</p>
        <p  class="mb-2">After using the Scipy method `f_oneway`, we get that an F value of 45 and a p value of $3.25\times 10^{-135}$ which are relatively small so we reject the null hypothesis. Given this, we can say that **there is a significant difference in aquaculture volume across different regions in the Philippines**.</p>
        <h3>IMPLICATIONS</h3>
        <p  class="mb-2">This tells us that every region has their own contribution and no conclusion can be said that could summarize the volume of aquaculture each region provides. This discrepancy allows us to identify weak points which we could prepare for or plan about. There might be some lack of support or some corruptive acts that could lead to such discrepancy. This can be further shown by the boxplots below, excluding outliers for each region. BARMM is quite an interesting case having a healthy production volume. If we geographically locate BARMM, it is located in the south-western part of the Philippines and is comprised of several islands and a mainland Mindanao area. Given its geographical location, we can already infer as to why BARMM produces such high highs in terms of volume.</p>
        <img alt="Placeholder" class="w-xl" src='{rq2_1}' />
        <p  class="mb-2">If we think about it, several other regions especially in the Visayas are surrounded by large bodies of water but if we take a closer look, Western Visayas have greater proportions compared to Central and Eastern Visayas. 
            Western Visayas has a well-established and well-supported aquaculture industry, backed by strong infrastructure and government investment. Key highlights include Capiz as the seafood capital, the Iloilo Fish Port Complex as a major trading and processing hub, a <a href="https://repository.seafdec.org.ph/bitstream/handle/10862/6065/AQD-Matters-2021-03_04.pdf" style="color:blue" target="_blank">rehabilitated hatchery</a> in Aklan producing up to 10 million bangus fry annually (operational since 2021), and plans for a <a href="https://www.pna.gov.ph/articles/1193131" style="color: blue;" target="_blank">₱30 million aquaculture feed mill</a> to lower feed costs.
            Central Visayas engages in aquaculture, particularly in Cebu and Siquijor, but faces economic and social challenges. A 2015 <a href="https://link.springer.com/article/10.7603/s40934-015-0014-0" style="color: blue;" target="_blank">study</a> found that while the sector offers employment, jobs are often non-permanent and poverty remains high in surrounding communities. Most farms use basic infrastructure like mud-bottom ponds and rely on commercial feed and free-flowing water systems, raising concerns about long-term sustainability.
            Eastern Visayas shows aquaculture potential, with feasibility studies supporting hatchery development. However, the region is highly vulnerable to typhoons, which threaten aquaculture operations and infrastructure.</p>
        <p class="mb-2">Aside from the regions that are surrounded by bodies of water, there is also another interesting instance where Central Luzon, which is known for its vast lands for farming and agricultural products, is the second in terms of production volume.
            The study by Manlosa et al. (<a href="https://link.springer.com/article/10.1007/s10113-021-01853-4" style="color:blue" target="_blank">2021</a>) explores how institutional dynamics and environmental changes have driven the expansion of aquaculture in Central Luzon, particularly highlighting the conversion of rice paddies into fish farms. A key driver of this shift is saltwater intrusion in low-lying areas, which made rice farming less viable and prompted farmers—especially in Pampanga, Bulacan, and Bataan—to transition to brackishwater aquaculture. These areas, along with inland provinces like Nueva Ecija and Tarlac, now contribute significantly to aquaculture production, cultivating species such as bangus, sugpo, and tilapia in fishponds, cages, and reservoirs.
        </p>
        <p class="mb-2"></p>
    </div>
    <div>
        <h2  class="mb-2">Research Question 3: Is there a significant trend in the volume of aquaculture production in the Philippines over the years?</h2>
        <h3  class="mb-2">
            Ho: There is no significant trend in the volume of aquaculture in the Philippines over the years.
        </h3>
        <h3  class="mb-2">
            Ha: There is a significant trend in the volume of aquaculture in the Philippines over the years.
        </h3>
        <p  class="mb-2">Similar to the previous research question, we are dealing with a quantitative predictor and a quantitative outcome variable. This time, instead of using linear regression, we apply Mann-Kendall Trend Test to test monotonic trends.</p>
        <p>Given that `trend` is `no trend`, this means that there's no significant trend, thus we fail to reject `Ho`. This tells us about the uncertainty of the possible volume of aquaculture that we'll have for the following years. This uncertainty can cause several implications such as:
- Difficulty in long-term planning for supply chain management, including storage, distribution, and market pricing.
- Challenges in policy-making for the aquaculture sector, as the absence of a clear trend makes it harder to design effective interventions or subsidies.
- Risk for investors and stakeholders in the aquaculture industry who rely on production forecasts for business decisions.
- Potential instability in food security, especially if future volumes fluctuate unexpectedly, affecting local consumption and export goals.</p>
        <p>This can be further illustrated by the time series graph below which shows that there is indeed no apparent trend for the past five years.</p>
        <img alt="Placeholder" class="w-xl" src="{rq3_1}" />
        <img alt="Placeholder" class="w-xl" src="{rq3_2}" />
    </div>
    
    <h3 class="mb-2">What's our take?</h3>
    <img alt="Placeholder" class="w-5xl" src="{nutshell_plot}" />
    <p>
        With these things in mind, we get to see a bigger picture. Having resources is not enough for an economy to work without proper support. Even though a large portion of Visayas is surrounded by a large body of water, they still lack in terms of production volume. But is it the end-all? No, there are prospering regions that dare defy this case. Central Luzon is one of the leading regions in terms of production volume but in their case, they are not as geographically resourceful in terms of bodies of water. This might mean one thing. Other regions are not trying. ...
    </p>
</div>