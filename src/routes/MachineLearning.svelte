<script>
    import { base } from '$app/paths';

    // import { Client } from "@gradio/client";
    
    // let region_pick = 'National Capital Region (NCR)';
    // let species_pick = 'Milkfish';
    // let imaging = $state();

    // const region_list = [
    //     'National Capital Region (NCR)', 'Cordillera Administrative Region (CAR)',
    //     'Region I (Ilocos Region)', 'Region II (Cagayan Valley)', 'Region III (Central Luzon)',
    //     'Region IV-A (CALABARZON)', 'MIMAROPA Region', 'Region V (Bicol Region)',
    //     'Region VI (Western Visayas)', 'Region VII (Central Visayas)', 'Region VIII (Eastern Visayas)',
    //     'Region IX (Zamboanga Peninsula)', 'Region X (Nothern Mindanao)', 'Region XI (Davao Region)',
    //     'Region XII (SOCCSKSARGEN)', 'Region XIII (Caraga)',
    //     'Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)'
    // ];

    // const species_list = [
    //     'Milkfish', 'Tilapia', 'Tiger Prawn', 'Mudcrab', 'Endeavor Prawn', 'White Shrimp',
    //     'Grouper', 'Siganid', 'P. Vannamei', 'Spiny Lobster', 'Carp', 'Catfish',
    //     'Gourami', 'Mudfish', 'Freshwater Prawn', 'Others', 'Oyster', 'Mussel', 'Seaweed'
    // ]


    // /**
    //  * @param {string} region_picked
    //  * @param {string} species_picked
    //  */
    // async function predictProphet(region_picked, species_picked) {
    //     const client = await Client.connect("jcfrongoso/aquaculture-prophet");
    //     const result = await client.predict("/route_model", { 		
    //             model_choice: "Prophet", 		
    //             region: region_picked, 		
    //             species: species_picked, 
    //     });

    //     // @ts-ignore
    //     imaging.src = result.data[0].plot;
    // }
</script>
<div class="max-w-5xl mx-auto bg-gray-200 p-6 pt-10 rounded-lg">
    <h1 class="mb-4">Time Series Forecasting</h1>
    <p class="mb-4">
        For the final part of our project, we are tasked to create apply a machine learning model from our dataset. Since our dataset is time series in nature, our group opted to use autoregressive integrated moving average (ARIMA) to forecast the next quarter.
    </p>
    <p class="mb-4">
        Since our dataset has minimal datapoints for every Region-Species specific combination, we opted to finetune models instead by using APIs from statmodels and Prophet.
    </p>
    <!--
    [ ] - What can we do with our data? (forecasting intro + dataset explanations)
    [ ] - How did we forecast? (model explanation)
    [ ] - What did it look like? (app explanation)
    [ ] - Is it perfect? (nope, dataset has limitations) -->
    <h2 class="mb-4">Model</h2>
    <p class="mb-4">
        Future volume can be forecasted using <a target="_blank" rel="noreferrer" class="font-medium text-blue-600 hover:underline" href="https://facebook.github.io/prophet/">Facebook's Prophet library</a>, designed for time series data that exhibits trends and seasonality. This procedure is robust to missing data and shifts in trends, especially when taking to account strong seasonal effects common in the archipelago.
    </p>
    <p class="mb-4">
        To use Prophet, there are four quarters in the season to take note of:
    </p>
    <ul class="list-outside list-disc ml-10 mb-2">
        <li><strong>Quarter 1</strong>: March 31</li>
        <li><strong>Quarter 2</strong>: June 30</li>
        <li><strong>Quarter 3</strong>: September 30</li>
        <li><strong>Quarter 4</strong>: December 31</li>
    </ul>
    <p class="mb-4">
        By grouping specific quarters with their respective volumes for each region-species to a time-series format, we can fit the model and start predicting the volume for upcoming years.
    </p>
    <!-- <h2 class="mb-4">Application</h2>
    <p class="mb-4">
        A progressive web applicaiton is hosted in another site as seen in the link above. To generate a forecast, the user must pick a specific region and species respectively to generate a forecast plot of their input. All 17 regions of the Philippines are selectable as an option alongside 19 known agricultural species.
    </p>
    <p class="mb-4">
        The applet outputs a forecast plot with a trendline with uncertainty bands, and observed points seen in the dataset.
    </p> -->

    <h2 class="mb-4">Limitations</h2>
    <!--
    - Very limited data points per Region-Species pair, limited factors considered for the analysis and modelling, and hanggang next quarter lang kaya iforecast ng models na ginamit.
    - Given the limited availability of our data points, finetuning pretrained models was not a choice considered due to the lack of meaningful "knowledge" that the model could learn.
    -->
    <p class="mb-4">
        There are a few limitations regarding the model, specifically to its dataset.
    </p>
    <!-- Turn this into a card later -->
    <ul class="list-outside list-disc ml-10 mb-2">
        <li>
            <strong>Limited Data Points per Region-Species pair:</strong>
            <p>
                Currently, the dataset only holds 20 data points for each region-species pair and this causes problems that are relevant for forecasting due to the lack of source knowledge that the model needs to learn from. This leads to overfitting of points and may not provide a significant result.
            </p>
        </li>
        <li>
            <strong>Limited External Factors for Analysis and Modelling:</strong>
            <p>
                Aside from the lack of data points, the features included in the dataset does not fully include all factors that may affect the studied variables. These may lead to wrong correlations due to exogenous variables unaccounted during the analyses.
            </p>
        </li>
    </ul>
    
</div>