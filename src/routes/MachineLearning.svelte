<script>
    import { base } from '$app/paths';
</script>
<div class="max-w-5xl mx-auto">
    <h1 class="mb-4">Time Series Forecasting</h1>
    <!--
    [ ] - What can we do with our data? (forecasting intro + dataset explanations)
    [ ] - How did we forecast? (model explanation)
    [ ] - What did it look like? (app explanation)
    [ ] - Is it perfect? (nope, dataset has limitations) -->
    <p class="mb-4">
        For the final part of our project, we are tasked to create apply a machine learning model from our dataset. Since our dataset is time series in nature, our group opted to use autoregressive integrated moving average (ARIMA) to forecast the next quarter.
    </p>
    <p class="mb-4">
        Since our dataset has minimal datapoints for every Region-Species specific combination, we opted to finetune models instead by using APIs from statmodels and Prophet.
    </p>
    <div class="flex items-center bg-blue-500 text-white text-sm font-medium px-4 py-3 mb-4" role="alert">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
        <p>For references, you may refer to our deployed
            <a href="https://jcfrongoso-aquaculture-prophet.hf.space/?logs=container&__theme=system"
            class="inline-flex items-center font-bold text-blue-100 dark:text-blue-100 underline">
                Huggingface Gradio App
                <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
            </a>
        </p>
    </div>
    
</div>