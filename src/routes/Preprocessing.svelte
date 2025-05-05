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


    let finalized_dataset = "https://docs.google.com/spreadsheets/d/1GGl72rv4w5Nj0xWuO4UrPLCey6OTtPAnVTV8sImYsqU/edit?usp=sharing";
    let colab_link = "https://colab.research.google.com/drive/1oohGaBcZXjV41udiQipQl1Lw0ZCKSvzl?usp=sharing";
</script>
<div class="max-w-5xl mx-auto">
    <h1 class="mb-2">Data Preprocessing</h1>
    <p class="mb-4">
        For data preporcessing, four major steps were used on both dataset to arrive on the combined final dataset. Before proceeding to the four major steps, a preliminary check was done on both datasets to gain a brief understanding about the structure and format of both datasets.
    </p>
    <ul class="list-inside list-disc">
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
    <br>
    <div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 pb-8 pt-4 px-4" role="alert">
        <p class="font-bold">Note:</p>
        <p>For references, you may refer to part 1 and 2 of the Google Colab notebook below.</p>
        <br>
        <a class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" href="https://colab.research.google.com/drive/1oohGaBcZXjV41udiQipQl1Lw0ZCKSvzl#scrollTo=MQ2Hz2yBssEo">Google Colab link</a>
    </div>
    

</div>