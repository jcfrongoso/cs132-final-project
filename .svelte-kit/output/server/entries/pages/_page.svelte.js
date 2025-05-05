import "clsx";
import { m as ensure_array_like, n as stringify, u as await_block } from "../../chunks/index.js";
import { a as attr } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
import { b as base } from "../../chunks/paths.js";
function Hero($$payload) {
  $$payload.out += `<div class="max-w-5xl mx-auto"><h1 class="text-left">Beneath the Surface</h1> <h2>Regional Disparities in Aquaculture Production and Volume</h2></div>`;
}
function Overview($$payload) {
  let counter = 0;
  let increment = () => {
    counter++;
    return counter;
  };
  const references = [
    "https://www.fao.org/fishery/en/countrysector/naso_philippines",
    "https://psa.gov.ph/statistics/fisheries-situationer",
    "https://www.bfar.da.gov.ph/2024/02/07/bfar-eyes-100-food-fish-sufficiency-by-2028/",
    "https://ispweb.pcaarrd.dost.gov.ph/philippine-fisheries-dynamics-market-shifts-aquaculture-update-sovereignty-concerns-solar-projects-and-project-lead/",
    "https://earthjournalism.net/stories/rich-seas-poor-fishers-the-impact-of-fisheries-subsidies-in-the-philippines",
    "https://dergipark.org.tr/en/download/article-file/1793345"
  ];
  const each_array = ensure_array_like(references);
  $$payload.out += `<div class="max-w-5xl mx-auto"><h1 class="mb-4">Overview</h1> <p class="mb-4">Our project, "Aquaculture in the Philippines", utilizes data science techniques to analyze economic trends, assess regional variations, and evaluate the investment potential of the country's aquaculture industry. By examining the growth and distribution of various marine species across different regions, we aim to provide data-driven insights into the viability of further investment in Philippine aquaculture.</p> <h2 class="mb-2">Rationale</h2> <p class="mb-4">There are three fisheries sectors in the Philippines: municipal fisheries, commercial fisheries, and aquaculture.</p> <p class="mb-4">As of 2024, <strong>approximately 64.1%</strong> of the total volume of fisheries productions comes from aquaculture, contributing 683,934.30 Metric Tons of production. Despite a -7.3% decrease of production from 2023 to 2024, aquaculture still remains effective as a constant and reliable source of fish, especially for a country that subsists on a fish-based protein diet.</p> <p class="mb-4">An attribution to its rising increase of production are due to overfishing and illegal fishing practices that destroy marine environment, which leads to less hauls for other fisheries sectors. This also includes rising sovereignity tensions between the Philippines and the China for control of the West Philippine Sea, driving away local fishers from their designated areas. This, in turn, creates a need for adaptation to aquaculture practices.</p> <p class="mb-4">The United Nation's Food and Agriculture Organization (FAO) report titled "<em>The State of World Fisheries and Aquaculture 2024</em>" released in June 2024 also highlights Philippines as one of the few nations to dominate the global aquaculture industry. In order for the Philippines to capitalize future positive market implications, the shift towards aquaculture requires proper investments in infrastructure, training for local fishermen to transition smoothly and sustainably from recent events, and finding specific trends that will boost existing aquaculture production.</p> <p class="mb-4"><em>References:</em> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<a target="_blank" rel="noreferrer" class="font-medium text-blue-600 hover:underline"${attr("href", item)}>[${escape_html(increment())}]</a>`;
  }
  $$payload.out += `<!--]--></p></div>`;
}
function Problem($$payload) {
  let counter = 0;
  let increment = () => {
    counter++;
    return counter;
  };
  const content = [
    // {
    //     question:   "What is the general trend of aquaculture in the Philippines?",
    //     null:       "There is no significant trend (increase or decrease) in aquaculture production in the Philippines over time.",
    //     alternate:  "There is a significant trend (increase or decrease) in aquaculture production in the Philippines over time.",
    // },
    {
      question: "Does an increase in aquaculture production volume lead to a corresponding increase in its economic value?",
      null: "There is no significant correlation between aquaculture volume and value.",
      alternate: "There is a significant correlation between aquaculture volume and value."
    },
    {
      question: "Is there a significant difference in aquaculture volume across different regions in the Ph?",
      null: "There is no significant difference in aquaculture volume across different regions in the Philippines.",
      alternate: "There is a significant difference in aquaculture volume across different regions in the Philippines."
    },
    // {
    //     question:   "How does geolocation correlate to value and volume for each region?",
    //     null:       "There is no significant difference in aquaculture value and volume across different geographic regions of the Philippines.",
    //     alternate:  "There are significant differences in aquaculture value and volume across different geographic regions of the Philippines.",
    // },
    // {
    //     question:   "What species prosper in terms of growth?",
    //     null:       "There is no significant difference in growth rates among different aquaculture species in the Philippines.",
    //     alternate:  "There are significant differences in growth rates among different aquaculture species in the Philippines.",
    // },
    {
      question: "Is there a significant trend in the volume of aquaculture production in the Philippines over the years?",
      null: "There is no significant trend in the volume of aquaculture in the Philippines over the years.",
      alternate: "There is a significant trend in the volume of aquaculture in the Philippines over the years."
    }
  ];
  const each_array = ensure_array_like(content);
  $$payload.out += `<div class="max-w-5xl mx-auto"><div class="grid grid-cols-1 sm:grid-cols-2 gap-8"><div><h1 class="mb-4">Problem</h1> <p class="mb-4">Philippines already has an domineering aquaculture production, but recent statistical data shows a decrease in production a year prior.</p></div> <div><h1 class="mb-4">Solution</h1> <p class="mb-4">By analyzing previous quarterly data about aquaculture, the group aims to find specific parameters and analyze trends that could have affected the value and volume of production. This also includes recent events or policies that directly or indirectly affect the sector.</p></div></div> <h2 class="mb-2">Research Questions</h2> <div class="grid grid-cols-1 sm:grid-cols-3 gap-8"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let details = each_array[$$index];
    $$payload.out += `<div><h3>Research Question ${escape_html(increment())}</h3> <p class="min-h-0 sm:min-h-15 mb-4">${escape_html(details.question)}</p> `;
    if (details.null != details.alternate) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<h4 class="underline">Null Hypothesis</h4> <p class="min-h-0 sm:min-h-20">${escape_html(details.null)}</p> <h4 class="underline">Alternative Hypothesis</h4> <p class="min-h-0 sm:min-h-20">${escape_html(details.alternate)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
}
function Data($$payload) {
  let dataset_link = "https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__2E__FS/?tablelist=true&rxid=bdf9d8da-96f1-4100-ae09-18cb3eaeb313t";
  let aquaculture_value_link = "https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__2E__FS/0082E4GCAP0.px/?rxid=bdf9d8da-96f1-4100-ae09-18cb3eaeb313t";
  let aquaculture_volume_link = "https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__2E__FS/0072E4GVAP0.px/?rxid=bdf9d8da-96f1-4100-ae09-18cb3eaeb313t";
  $$payload.out += `<div class="max-w-5xl mx-auto"><h1 class="mb-4">Data &amp; Methods</h1> <p class="mb-4">As of March 2025, our group have preprocessed the dataset necessary for the project.</p> <h2 class="mb-2">Data Collection</h2> <p class="mb-4">To address the problem and research questions, our group opted to collect data from <a class="text-blue-600 hover:underline"${attr("href", dataset_link)} target="_blank" rel="noreferrer">PSA's OpenStat website</a>. The Philippine Statistics Authority's OpenStat website is an open data platform that shares national and regional statistical data in the Philippines.</p> <h3 class="mb-2">About the Dataset</h3> <p class="mb-4">For this project, two datasets were used: <a class="font-medium text-blue-600 hover:underline"${attr("href", aquaculture_value_link)} target="_blank" rel="noreferrer">quarterly aquaculture value</a> and <a class="font-medium text-blue-600 hover:underline"${attr("href", aquaculture_volume_link)}>quarterly aquaculture volume</a> for each region, scoping the first quarter of 2020 to the fourth quarter of 2024. The first dataset contains the value of each aquaculture specie for each region while the second dataset contains the volume of each aquaculture specie for each region. The finalized dataset that will be used for analysis contains six columns, namely Species, Geolocation, Year, Quarter, Value, and Volume, and 6800 samples.</p></div>`;
}
function Preprocessing($$payload) {
  let finalized_dataset = "https://docs.google.com/spreadsheets/d/1GGl72rv4w5Nj0xWuO4UrPLCey6OTtPAnVTV8sImYsqU/edit?usp=sharing";
  $$payload.out += `<div class="max-w-5xl mx-auto"><h1 class="mb-2">Data Preprocessing</h1> <p class="mb-4">For data preporcessing, four major steps were used on both dataset to arrive on the combined final dataset. Before proceeding to the four major steps, a preliminary check was done on both datasets to gain a brief understanding about the structure and format of both datasets.</p> <ul class="list-inside list-disc"><li>The first step done was to check the structure of both datasets. On our Colab notebook, we were able to identify that both datasets have the same structure: both contains species, geolocation, and the quarterly values/volumes for each species/geolocation grouping and a wide formatting due to the nature on how quarterly value/volumes were structured.</li> <li>The second step was to identify missing values and apply imputation, if necessary. It was found out that both datasets contain missing values in the form of 
            ".." strings. From here, we preprocess those strings in such a way that we could apply KNN imputation to fill up the gaps. This method of imputation was used because standard imputation methods, such as mean, mode, median, backward, and forward fill, may lead to reduced variance and a possibility of data leakage. KNN imputation utilizes other features to identify what value to use instead of relying on one column to infer what value to impute that's why it was chosen as the method for imputation.</li> <li>The third step done was to reformat the columns and the dataset themselves. We've skipped the outlier part since these values may have been caused by outside interactions/factors. We also took note of the source for these datasets because the sampling and collection weren't done by our group but rather by professional individuals which means that the values provided on these datasets are reliable and consistent. Based on the values of the Species column, we can remove leading periods. The same goes with the Geolocation column. After reformatting both columns, we transform the wide formatted dataset into long formatting using melt() in order to properly structure the datasets into a format suitable for time-series analysis.</li> <li>The fourth step was to combine both datasets into a finalized dataset that will be used for the analaysis step. The finalized dataset can be found <a target="_blank" rel="noreferrer" class="font-medium text-blue-600 hover:underline"${attr("href", finalized_dataset)}>here</a>.</li></ul> <br> <div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 pb-8 pt-4 px-4" role="alert"><p class="font-bold">Note:</p> <p>For references, you may refer to part 1 and 2 of the Google Colab notebook below.</p> <br> <a class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" href="https://colab.research.google.com/drive/1oohGaBcZXjV41udiQipQl1Lw0ZCKSvzl#scrollTo=MQ2Hz2yBssEo">Google Colab link</a></div></div>`;
}
const rq1_1 = "/_app/immutable/assets/4-1%20Relationship%20between%20Production%20Volume%20and%20Economic%20Value.Bf3arwwK.png";
const rq1_2 = "/_app/immutable/assets/4-1%20KMeans%20Clustering.BvlxvCo4.png";
const rq1_3 = "/_app/immutable/assets/4-1%20Kmeans%20with%20regression%20lines.sSDbeDow.png";
const rq2_1 = "/_app/immutable/assets/4-2%20Production%20Volume%20by%20Region.CoU656DR.png";
const rq3_1 = "/_app/immutable/assets/4-3%20Production%20Volume%20Over%20The%20Years.Cy1DQk6i.png";
const rq3_2 = "/_app/immutable/assets/4-3%20Production%20Volume%20Over%20the%20Years%20by%20Region.JdFnyMpU.png";
const res4_1 = "/_app/immutable/assets/4-1.Dz1QLKMz.png";
const res4_2 = "/_app/immutable/assets/4-2.CEb7HmAD.png";
const res4_3 = "/_app/immutable/assets/4-3.BELshwaI.png";
const nutshell_plot = "/_app/immutable/assets/5%20Nutshell%20plot.VCEc1O9n.png";
function Results($$payload) {
  $$payload.out += `<div class="max-w-5xl mx-auto"><h1 class="mb-4">Results</h1> <h2 class="mb-4">Exploratory Data Analysis</h2> <p class="mb-4">Now that we've successfully preprocessed our data, we proceed to visualize and analyze our dataset through a series of plots from univariate to multivariate analyses.</p> <h3>Univariate Analysis</h3> <p class="mb-4">Univariate analysis focuses on the smaller picture of identifying characteristics of a feature from our dataset. On our Colab file, we were able to plot several of them for each possible feature.</p> <p class="mb-4">Based on our plots, we were able to identify that our data contained a sizeable amount of values that are past 3 standard deviations. We won't classify them as outliers and eventually remove them because they are values that were gathered by professionals and with our trust in them, we assure that the data gathered weren't faulty for the next few section of this portfolio. This means that the distribution of our data is prominently righ-skewed followed by a very long tail. The outlier values actually highlight the presence of large producers in the country while the majority of the production entities produce at smaller volumes.</p> <h3>Bivariate Analysis</h3> <p class="mb-4">Bivariate analysis on the other hand pairs up two features and identifies relations between them.</p> <p class="mb-4">From our plots, we were able to find out that there are species and regions that emerges in terms of economic value and production volume. Milkfish leads the charts with the highest mean economic value while seaweed dominates total production volume, which sparks contrast on what is valued and produced more in the market. On the other hand, Central Luzon actually leads as the economic powerhouse in the Philippines.</p> <h3>Multivariate Analysis</h3> <p class="mb-4">Finally, we analyzed groups of features in order to identify trends from each species and region.</p> <p class="mb-4">Based on our plots, the BARMM region leads in production volume while Central Luzon dominates in economic value. Among species, milkfish generates the highest economic value while P. Vannamei (whiteleg shrimp) shows consistently high production volumes. Seaweed production remains significant across multiple quarters, with substantial regional variations in both production and economic returns. The box plots reveal that grouper has the highest economic value distribution per unit despite not having the largest production volume, indicating it's a high-value species compared to others. These reveals distinct regional variation, reflecting diverse ecological conditions and market specializations throughout the Philippine archipelago.</p> <p class="mb-4"><a class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"${attr("href", `${stringify(base)}/exploratory-data-analysis`)}>Click here to see the process.</a></p> <h2 class="mb-4">Hypothesis Testing</h2> <div><h4 class="mb-2">Research Question 1: Does an increase in aquaculture production volume lead to a corresponding increase in its economic value?</h4> <h5 class="mb-2"><code>Ho</code>: There is no significant correlation between aquaculture volume and value.</h5> <h5 class="mb-2"><code>Ha</code>: There is a significant correlation between aquaculture volume and value.</h5> <h4>Selection of Statistical Test</h4> <p class="mb-2">The first research question deals with two quantitative values: volume and value. Since we are testing if there is no positive correlation between the two features and not just any relation, a one-tailed Pearson correlation test is the appropriate statistical method for the following reasons:</p> <ul><li>1. Both variables are continuous and measured on an interval/ratio scale</li> <li>2. We are investigating a linear relationship between the variables</li> <li>3. The hypothesis is directional (specifically testing for a positive correlation)</li></ul> <img alt="Placeholder" class="w-xl"${attr("src", res4_1)}> <h4>Statistical Analysis Results</h4> <p class="mb-2">The Pearson correlation coefficient (r) calculated between production volume and economic value is 0.4275, indicating a moderate positive linear relationship between the two variables. According to established statistical guidelines, correlation coefficients between 0.3 and 0.5 typically represent moderate positive correlations.</p> <p class="mb-2">The one-tailed p-value is p is less than 0.0001, which is significantly below our alpha threshold of 0.05. This extremely small p-value indicates that the probability of observing this correlation coefficient (or stronger) by random chance alone, assuming the null hypothesis is true, is less than 0.01%. Therefore, we have sufficient statistical evidence to reject the null hypothesis.</p> <h4>Visual Analysis and Implications</h4> <p class="mb-2">To visually support this claim, we can utilize our plot from 3.2.7 but now we add a regression line.</p> <img alt="Placeholder" class="w-xl"${attr("src", rq1_1)}> <p class="mb-2">The scatter plot reveals an interesting pattern that might not be fully captured by a single correlation coefficient. Upon visual inspection, there appear to be two distinct clusters within the data, suggesting a potentially more complex relationship. With this, we use K-means clustering to identify the two visually identifiable clustering.</p> <img alt="Placeholder" class="w-xl"${attr("src", rq1_2)}> <p class="mb-2">The plot above is quite interesting as compared to what we could have imagined (most would easily halve the original scatter plot into two by creating a dividing line that will cluster the original scatter plot). But does these two plots inherit the same regression line from the original plot?</p> <img alt="Placeholder" class="w-xl"${attr("src", rq1_3)}> <p class="mb-2">The first clustering has a high positive coefficient while the second clustering tends to have a lower negative coefficient. Given these two plots, it is hard to conclude what characteristics can be discerned from approximately 66% of production volume values. But after some point, economic value tends to die down.</p> <p class="mb-2">This statistical result have economic implications. The positive correlation between production volume and economic value suggests that, in general, increasing aquaculture production leads to higher economic returns. However, the cluster analysis reveals a variation where:</p> <ul><li>Cluster 0: A strong positive relationship exists (y = 7.905x + 56,991.36), suggesting efficient market conditions where increasing production significantly boosts economic value.</li> <li>Cluster 1: The relationship becomes negative (y = -2.059x + 3,893,432.51), indicating diminishing returns, likely due to market saturation or price suppression at high volumes.</li></ul> <p class="mb-2">These findings makes sense because it reflects the law of demand and supply. After some point, we cannot value the same good similar to the one previously bought due to decreasing marginal utility. Aside from that, there are income effects and demand shifts that needs to be considered especially that we are living in a third-world country and are currently facing high taxes. As a conclusion, where producers face market and policy constraints, this suggests that maximizing production may not always maximize profit.</p></div> <div><h4 class="mb-2">Research Question 2: Is there a significant difference in aquaculture volume across different regions in the Ph?</h4> <h5 class="mb-2"><code>Ho</code>: There is no significant difference in aquaculture volume across different regions in the Philippines.</h5> <h5 class="mb-2"><code>Ha</code>: There is a significant difference in aquaculture volume across different regions in the Philippines.</h5> <h4>Selection of Statistical Test</h4> <p class="mb-2">For this research question, we are dealing with a categorical variable as a predictor (region) and a quantitative outcome variable (production volume). Based on this, the appropriate statistical test for comparing more than two independent groups is the Kruskal-Wallis H test, a non-parametric alternative to one-way ANOVA when normality cannot be assumed.</p> <img alt="Placeholder" class="w-xl"${attr("src", res4_2)}> <h4>Statistical Analysis Results</h4> <p class="mb-2">Using the ANOVA method (\`f_oneway\`), we obtained an F-statistic of 45 and a p-value of $3.25 \\times 10^-35$. Given the extremely small p-value (far below any conventional alpha level), we reject the null hypothesis that all regional aquaculture volumes come from the same distribution.</p> <p class="mb-2">This result indicates a statistically significant difference in aquaculture production volume across different regions in the Philippines. The variation is substantial enough to merit closer examination of regional contributions and disparities.</p> <h4>Visual Analysis and Implications</h4> <p class="mb-2">This tells us that every region has their own contribution and no conclusion can be said that could summarize the volume of aquaculture each region provides. This discrepancy allows us to identify weak points which we could prepare for or plan about. There might be some lack of support or some hidden cause that could lead to such discrepancy.</p> <p class="mb-2">This can be further shown by the boxplots below, excluding outliers for each region. BARMM is quite an interesting case having a healthy production volume. If we geographically locate BARMM, it is located in the south-western part of the Philippines and is comprised of several islands and a mainland Mindanao area. Given its geographical location, we can already infer as to why BARMM produces such high highs in terms of volume.</p> <img alt="Placeholder" class="w-xl"${attr("src", rq2_1)}> <p class="mb-2">If we think about it, several other regions especially in the Visayas are surrounded by large bodies of water but if we take a closer look, Western Visayas have greater proportions compared to Central and Eastern Visayas. 
            Western Visayas has a well-established and well-supported aquaculture industry, backed by strong infrastructure and government investment. Key highlights include Capiz as the seafood capital, the Iloilo Fish Port Complex as a major trading and processing hub, a <a href="https://repository.seafdec.org.ph/bitstream/handle/10862/6065/AQD-Matters-2021-03_04.pdf" style="color:blue" target="_blank">rehabilitated hatchery</a> in Aklan producing up to 10 million bangus fry annually (operational since 2021), and plans for a <a href="https://www.pna.gov.ph/articles/1193131" style="color: blue;" target="_blank">₱30 million aquaculture feed mill</a> to lower feed costs.
            Central Visayas engages in aquaculture, particularly in Cebu and Siquijor, but faces economic and social challenges. A <a href="https://link.springer.com/article/10.7603/s40934-015-0014-0" style="color: blue;" target="_blank">2015</a> study found that while the sector offers employment, jobs are often non-permanent and poverty remains high in surrounding communities. Most farms use basic infrastructure like mud-bottom ponds and rely on commercial feed and free-flowing water systems, raising concerns about long-term sustainability.
            Eastern Visayas shows aquaculture potential, with feasibility studies supporting hatchery development. However, the region is highly vulnerable to typhoons, which threaten aquaculture operations and infrastructure.</p> <p class="mb-2">Aside from the regions that are surrounded by bodies of water, there is also another interesting instance where Central Luzon, which is known for its vast lands for farming and agricultural products, is the second in terms of production volume.
            The study by Manlosa et al. (<a href="https://link.springer.com/article/10.1007/s10113-021-01853-4" style="color:blue" target="_blank">2021</a>) explores how institutional dynamics and environmental changes have driven the expansion of aquaculture in Central Luzon, particularly highlighting the conversion of rice paddies into fish farms. A key driver of this shift is saltwater intrusion in low-lying areas, which made rice farming less viable and prompted farmers—especially in Pampanga, Bulacan, and Bataan—to transition to brackishwater aquaculture. These areas, along with inland provinces like Nueva Ecija and Tarlac, now contribute significantly to aquaculture production, cultivating species such as bangus, sugpo, and tilapia in fishponds, cages, and reservoirs.</p> <p class="mb-2"></p></div> <div><h4 class="mb-2">Research Question 3: Is there a significant trend in the volume of aquaculture production in the Philippines over the years?</h4> <h5 class="mb-2"><code>Ho</code>: There is no significant trend in the volume of aquaculture in the Philippines over the years.</h5> <h5 class="mb-2"><code>Ha</code>: There is a significant trend in the volume of aquaculture in the Philippines over the years.</h5> <h4>Selection of Statistical Test</h4> <p class="mb-2">For analyzing the production volume trend over time, the Mann-Kendall Trend Test was selected as the appropriate statistical method. This test is ideal for this analysis because:</p> <ul style="list-style: disc; margin-left: 40px"><li>It effectively detects monotonic trends in time series data</li> <li>It doesn't require the data to be normally distributed</li> <li>It can handle seasonal variations common in production data</li> <li>It's resistant to outliers which appear present in the quarterly production volumes</li></ul> <img alt="Placeholder" class="w-xl"${attr("src", res4_3)}> <h4>Statistical Analysis Results</h4> <p>Given that the trend is <code>no trend</code>, this means that there's no significant trend, thus we fail to reject \`Ho\`. This tells us about the uncertainty of the possible volume of aquaculture that we'll have for the following years. This uncertainty can cause several implications such as:</p> <ul style="list-style: disc; margin-left: 40px"><li>Difficulty in long-term planning for supply chain management, including storage, distribution, and market pricing.</li> <li>Challenges in policy-making for the aquaculture sector, as the absence of a clear trend makes it harder to design effective interventions or subsidies.</li> <li>Risk for investors and stakeholders in the aquaculture industry who rely on production forecasts for business decisions.</li> <li>Potential instability in food security, especially if future volumes fluctuate unexpectedly, affecting local consumption and export goals</li></ul> <h4>Visual Analysis and Implications</h4> <p>This can be further illustrated by the time series graph below which shows that there is indeed no apparent trend for the past five years.</p> <img alt="Placeholder" class="w-xl"${attr("src", rq3_1)}> <img alt="Placeholder" class="w-xl"${attr("src", rq3_2)}> <p class="mb-2">From these plots, we get to learn that there are no apparent upward or downward patterns for quarterly fluctuations. There are some notable peaks that occurred in Q3 2022, Q4 2021, and Q3 2023, with the highest volume reaching nearly 6,000 metric tons. Q4 2021 and Q3 2022 are interesting cases because these are times where we're still under the Covid 19 pandemic.</p></div> <h2 class="mb-2">V. What's our take? (Nutshell Plot)</h2> <p>With these things in mind, we get to see a bigger picture. Having resources is not enough for an economy to work without proper support. Even though a large portion of Visayas is surrounded by a large body of water, they still lack in terms of production volume. But is it the end-all? No, there are prospering regions that dare defy this case. Central Luzon is one of the leading regions in terms of production volume but in their case, they are not as geographically resourceful in terms of bodies of water. This might mean one thing. Other regions are not trying.</p> <p>Or it could be that the disparity lies in access to aquaculture infrastructure, policy support, and investment in technology. BARMM, for instance, dominates production—suggesting that when regions are empowered, productivity can skyrocket regardless of long-standing challenges. Meanwhile, the map also reveals that economic value doesn’t always correlate directly with production volume, hinting at deeper systemic issues in pricing, value chains, and market access. This further emphasizes the need for a more equitable and strategic approach to aquaculture development across regions.</p> <img alt="Placeholder" class="w-5xl"${attr("src", nutshell_plot)}></div>`;
}
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
function Team($$payload) {
  const content = [
    {
      name: "Justin Clyde Frongoso",
      profile_picture: "s23330897651",
      about: "A retired TFT veteran and a well known malder."
    },
    {
      name: "Michael Sean Brian Omisol",
      profile_picture: "witch",
      about: "Whatever you do, do not have 6+ projects at the end of your senior year."
    },
    {
      name: "Eugene Kasilag",
      profile_picture: "teehee",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel facilisis lorem. Aenean tincidunt nisl felis, in egestas lectus tincidunt quis. Morbi suscipit at lacus eu viverra. Phasellus volutpat pellentesque ligula, quis imperdiet odio faucibus nec. Curabitur at vulputate leo. Nullam id. "
    }
  ];
  const each_array = ensure_array_like(content);
  $$payload.out += `<div class="max-w-5xl mx-auto"><h1 class="mb-4">Team</h1> <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let details = each_array[$$index];
    $$payload.out += `<div>`;
    await_block($$payload, __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../lib/images/s23330897651.png": () => import("../../chunks/s23330897651.js"), "../lib/images/teehee.png": () => import("../../chunks/teehee.js"), "../lib/images/witch.png": () => import("../../chunks/witch.js") }), `../lib/images/${details.profile_picture}.png`, 4), () => {
    }, ({ default: src }) => {
      $$payload.out += `<img${attr("src", src)} class="w-48 mx-auto mb-2" alt="Profile"> <h3 class="text-center mb-2">${escape_html(details.name)}</h3> <p>${escape_html(details.about)}</p>`;
    });
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></div>`;
}
function _page($$payload) {
  $$payload.out += `<section class="my-8 mx-8 sm:mx-auto" id="Hero">`;
  Hero($$payload);
  $$payload.out += `<!----></section> <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-300"> <section class="my-8 mx-8 sm:mx-auto" id="Overview">`;
  Overview($$payload);
  $$payload.out += `<!----></section> <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-300"> <section class="my-8 mx-8 sm:mx-auto" id="Problem">`;
  Problem($$payload);
  $$payload.out += `<!----></section> <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-300"> <section class="my-8 mx-8 sm:mx-auto" id="Data">`;
  Data($$payload);
  $$payload.out += `<!----></section> <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-300"> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<section class="my-8 mx-8 sm:mx-auto" id="Preprocessing">`;
    Preprocessing($$payload);
    $$payload.out += `<!----></section> <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-300"> <section class="my-8 mx-8 sm:mx-auto" id="Results">`;
    Results($$payload);
    $$payload.out += `<!----></section> <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-300">`;
  }
  $$payload.out += `<!--]--> <section class="my-8 mx-8 sm:mx-auto" id="Team">`;
  Team($$payload);
  $$payload.out += `<!----></section>`;
}
export {
  _page as default
};
