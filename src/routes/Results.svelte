<script>
    import { base } from '$app/paths';

    // Place images here
    import rq1_1 from '$lib/images/plots/4-1 Relationship between Production Volume and Economic Value.png'
    import rq1_2 from '$lib/images/plots/4-1 KMeans Clustering.png'
    import rq1_3 from '$lib/images/plots/4-1 Kmeans with regression lines.png'
    import nutshell_plot from '$lib/images/plots/5 Nutshell Plot.png' ;
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
        <img alt="Placeholder" class="w-xl" src={rq1_1} />
        <h2>IMPLICATIONS</h2>
        <p  class="mb-2">From our earlier discussion regarding the scatter plot, we brought up that there are two visual clusterings that can be made that's why the current regression line identified from the current plot is questionnable in some sense. So, if there are indeed two possible clustering, what could it be? Here, we use K-means clustering to identify the two visually identifiable clustering.</p>
        <img alt="Placeholder" class="w-xl" src={rq1_2} />
        <p class="mb-2">The plot above is quite interesting as compared to what we could have imagined (most would easily halve the original scatter plot into two by creating a dividing line that will cluster the original scatter plot). But does these two plots inherit the same regression line from the original plot?</p>
        <img alt="Placeholder" class="w-xl" src={rq1_3} />
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
    
    <h3 class="mb-2">What's our take?</h3>
    <img alt="Placeholder" class="w-5xl" src={nutshell_plot} />
    <p>
        With these things in mind, we get to see a bigger picture. Having resources is not enough for an economy to work without proper support. Even though a large portion of Visayas is surrounded by a large body of water, they still lack in terms of production volume. But is it the end-all? No, there are prospering regions that dare defy this case. Central Luzon is one of the leading regions in terms of production volume but in their case, they are not as geographically resourceful in terms of bodies of water. This might mean one thing. Other regions are not trying. ...
    </p>
</div>