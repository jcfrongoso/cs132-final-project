<script>
    import { base } from '$app/paths';
</script>
<div class="max-w-5xl mx-auto">
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
    <h2 class="mb-4">Application</h2>
     <div class="flex items-center bg-blue-500 text-white text-sm font-medium px-4 py-3 mb-4" role="alert">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
        <p>Clich here for the
            <a href="https://jcfrongoso-aquaculture-prophet.hf.space/?logs=container&__theme=system"
            class="inline-flex items-center font-bold text-blue-100 dark:text-blue-100 underline">
                Huggingface Gradio App
                <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
            </a>
        </p>
    </div>
    <p class="mb-4">
        A progressive web applicaiton is hosted in another site as seen in the link above. To generate a forecast, the user must pick a specific region and species respectively to generate a forecast plot of their input. All 17 regions of the Philippines are selectable as an option alongside 19 known agricultural species.
    </p>
    <p>
        The applet outputs a forecast plot with a trendline with uncertainty bands, and observed points seen in the dataset.
    </p>
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
        <li><strong>Limited Data Points per Region-Species pair:</strong></li>
        <li><strong>Limited External Factors for Analysis and Modelling:</strong></li>
    </ul>
    
</div>