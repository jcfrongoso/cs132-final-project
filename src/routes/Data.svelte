<script>
    let dataset_link = "https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__2E__FS/?tablelist=true&rxid=bdf9d8da-96f1-4100-ae09-18cb3eaeb313t";
    let aquaculture_value_link = "https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__2E__FS/0082E4GCAP0.px/?rxid=bdf9d8da-96f1-4100-ae09-18cb3eaeb313t";
    let aquaculture_volume_link = "https://openstat.psa.gov.ph/PXWeb/pxweb/en/DB/DB__2E__FS/0072E4GVAP0.px/?rxid=bdf9d8da-96f1-4100-ae09-18cb3eaeb313t";
</script>

<div class="max-w-5xl mx-auto bg-gray-200 p-6 pt-10 rounded-lg">
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
        For this project, two datasets were used: <a class="font-medium text-blue-600 hover:underline" href="{aquaculture_value_link}" target="_blank" rel="noreferrer">quarterly aquaculture value</a> and <a class="font-medium text-blue-600 hover:underline" href="{aquaculture_volume_link}">quarterly aquaculture volume</a> for each region, scoping the first quarter of 2020 to the fourth quarter of 2024. The first dataset contains the value of each aquaculture specie for each region while the second dataset contains the volume of each aquaculture specie for each region. The finalized dataset that will be used for analysis contains six columns, namely Species, Geolocation, Year, Quarter, Value, and Volume, and 6800 samples.
    </p>
</div>
