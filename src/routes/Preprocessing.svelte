<script>
    let finalized_dataset = "https://docs.google.com/spreadsheets/d/1GGl72rv4w5Nj0xWuO4UrPLCey6OTtPAnVTV8sImYsqU/edit?usp=sharing";
    let colab_link = "https://colab.research.google.com/drive/1oohGaBcZXjV41udiQipQl1Lw0ZCKSvzl?usp=sharing";

    import { base } from '$app/paths';
</script>
<div class="max-w-5xl mx-auto">
    <h1 class="mb-2">Data Preprocessing</h1>
    <p class="mb-4">
        For data preporcessing, four major steps were used on both dataset to arrive on the combined final dataset. Before proceeding to the four major steps, a preliminary check was done on both datasets to gain a brief understanding about the structure and format of both datasets.
    </p>
    <ul class="list-outside list-disc">
        <li>
            The first step done was to check the structure of both datasets. On our Colab notebook, we were able to identify that both datasets have the same structure: both contains species, geolocation, and the quarterly values/volumes for each species/geolocation grouping and a wide formatting due to the nature on how quarterly value/volumes were structured.
        </li>
        <li>
            The second step was to identify missing values and apply imputation, if necessary. It was found out that both datasets contain missing values in the form of 
            ".." strings. From here, we preprocess those strings in such a way that we could apply KNN imputation to fill up the gaps. This method of imputation was used because standard imputation methods, such as mean, mode, median, backward, and forward fill, may lead to reduced variance and a possibility of data leakage. KNN imputation utilizes other features to identify what value to use instead of relying on one column to infer what value to impute that's why it was chosen as the method for imputation.
        </li>
        <li>
            The third step done was to reformat the columns and the dataset themselves. We've skipped the outlier part since these values may have been caused by outside interactions/factors. We also took note of the source for these datasets because the sampling and collection weren't done by our group but rather by professional individuals which means that the values provided on these datasets are reliable and consistent. Based on the values of the Species column, we can remove leading periods. The same goes with the Geolocation column. After reformatting both columns, we transform the wide formatted dataset into long formatting using melt() in order to properly structure the datasets into a format suitable for time-series analysis.
        </li>
        <li>
            The fourth step was to combine both datasets into a finalized dataset that will be used for the analaysis step. The finalized dataset can be found <a target="_blank" rel="noreferrer" class="font-medium text-blue-600 hover:underline" href="{finalized_dataset}">here</a>.
        </li>
    </ul>
    <div>
        For references, you may refer to part 1 and 2 of the Google Colab notebook below.
        <a href="{colab_link}" target="_blank">
            <button style="margin-top: 10px; padding: 10px 15px; background-color: #4285F4; color: white; border: none; border-radius: 5px; cursor: pointer;">
                Open in Google Colab
            </button>
        </a>
    </div>
    <h2 class="mb-2">Data Visualization</h2>
    <h2 class="mb-2">Data Modeling</h2>
    <h2 class="mb-2">Nutshell Graph</h2>
</div>