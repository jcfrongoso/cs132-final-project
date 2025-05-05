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
    <ul class="pl-4 list-outside list-disc">
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
    <div class="flex items-center bg-blue-500 text-white text-sm font-medium px-4 py-3 mb-4" role="alert">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
        <p>For references, you may refer to 
            <a href="https://colab.research.google.com/drive/1oohGaBcZXjV41udiQipQl1Lw0ZCKSvzl#scrollTo=MQ2Hz2yBssEo"
            class="inline-flex items-center font-bold text-blue-100 dark:text-blue-100 underline">
                Part 1 and 2 of the Google Colab notebook.
                <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
            </a>
        </p>
    </div>
    

</div>