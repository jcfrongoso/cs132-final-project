<script>
    let dataset_link = "https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__2E__FS/?tablelist=true&rxid=bdf9d8da-96f1-4100-ae09-18cb3eaeb313t";
    let aquaculture_value_link = "https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__2E__FS/0082E4GCAP0.px/?rxid=bdf9d8da-96f1-4100-ae09-18cb3eaeb313t";
    let aquaculture_volume_link = "https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__2E__FS/0072E4GVAP0.px/?rxid=bdf9d8da-96f1-4100-ae09-18cb3eaeb313t";
</script>

<div class="max-w-5xl mx-auto">
    <h1 class="mb-4">Data & Methods</h1>
    <p class="mb-4">
        As of March 2025, our group have preprocessed the dataset necessary for the project. 
    </p>
    <h2 class="mb-2">Data Collection</h2>
    <p class="mb-4">
        To address the problem and research questions, our group opted to collect data from <a class="text-blue-600 hover:underline" href="{dataset_link}" target="_blank" rel="noreferrer">PSA's OpenStat website</a>. The Philippine Statistics Authority's OpenStat website is an open data platform that shares national and regional statistical data in the Philippines. 
    </p>
    <h3 class="mb-2">About the Dataset</h3>
    <p class="mb-4">
        For this project, two datasets were used: <a class="font-medium text-blue-600 hover:underline" href="{aquaculture_value_link}" target="_blank" rel="noreferrer">quarterly aquaculture value</a> and <a class="font-medium text-blue-600 hover:underline" href="{aquaculture_volume_link}">quarterly aquaculture volume</a> for each region, scoping the first quarter of 2020 to the fourth quarter of 2024. The first dataset contains the value of each aquaculture specie for each region while the second dataset contains the volume of each aquaculture specie for each region.
    </p>
    <h2 class="mb-2">Data Preprocessing</h2>
    <ul class="list-outside list-disc">
        <li>
            The first step done for data preprocessing is by checking the structure of the datasets. As shown from the notebook below, both datasets have the same structure: specie, geolocation, and the quarterly values/volumes for each specie/geolocation grouping.
        </li>
        <li>
            After identifying the structure of each dataset, we proceed to check whether we need to standardize colum values or impute for missing values. Since there are no missing values on any column, we proceed to check if we can standardize any of the values. Based on the values of the `Species` column, we can remove leading periods. The same goes to the `Geolocation` column.
        </li>
        <li>
            After standardizing the columns, we transform the wide formatting into a long formatting using `melt()` in order to properly structure the datasets into time-series format.
        </li>
        <li>
            We then combine the two datasets to prepare the final dataset that will be analyzed. The finalized dataset can be found <a target="_blank" rel="noreferrer" class="font-medium text-blue-600 hover:underline" href="https://docs.google.com/spreadsheets/d/1Clv7PSyVfpd0Z6B8E9nZ_KqdCiAqs-3NHwGAkvegNkY/edit?usp=sharing">here</a>.
        </li>
    </ul>
    <iframe title="Data Processing" src="/data-preprocessing-proper.html" width="100%" height="600px"></iframe>
</div>
