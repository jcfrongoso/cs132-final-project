import gradio as gr
import pandas as pd
from prophet import Prophet
from statsmodels.tsa.statespace.sarimax import SARIMAX
import matplotlib.pyplot as plt
import warnings
import tempfile
import os
from openai import OpenAI
import base64
warnings.filterwarnings("ignore")
from dotenv import load_dotenv
load_dotenv()


# Optional: Set your API key securely
client = OpenAI()

# Load dataset
data = pd.read_csv('./data/[WFW-Group10-FOK YE]  CS 132 Finalized Dataset.csv')

# Static lists
regions = [
    'National Capital Region (NCR)', 'Cordillera Administrative Region (CAR)',
    'Region I (Ilocos Region)', 'Region II (Cagayan Valley)', 'Region III (Central Luzon)',
    'Region IV-A (CALABARZON)', 'MIMAROPA Region', 'Region V (Bicol Region)',
    'Region VI (Western Visayas)', 'Region VII (Central Visayas)', 'Region VIII (Eastern Visayas)',
    'Region IX (Zamboanga Peninsula)', 'Region X (Nothern Mindanao)', 'Region XI (Davao Region)',
    'Region XII (SOCCSKSARGEN)', 'Region XIII (Caraga)',
    'Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)'
]

species_list = [
    'Milkfish', 'Tilapia', 'Tiger Prawn', 'Mudcrab', 'Endeavor Prawn', 'White Shrimp',
    'Grouper', 'Siganid', 'P. Vannamei', 'Spiny Lobster', 'Carp', 'Catfish',
    'Gourami', 'Mudfish', 'Freshwater Prawn', 'Others', 'Oyster', 'Mussel', 'Seaweed'
]

quarter_mapper = {
    ' Quarter 1': '03-31',
    ' Quarter 2': '06-30',
    ' Quarter 3': '09-30',
    ' Quarter 4': '12-31'
}

def generate_description(region, species, model_used, image_path):
    with open(image_path, "rb") as image_file:
        base64_image = base64.b64encode(image_file.read()).decode("utf-8")

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": f"This is the forecast for {species} in {region} using {model_used}. Give a short description."},
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/png;base64,{base64_image}"
                        }
                    },
                ],
            }
        ],
        max_tokens=300,
    )

    return response.choices[0].message.content.strip()

def prophet_forecast(region, species):
    df = data[(data['Geolocation'] == region) & (data['Species'] == species)].copy()
    if df.empty:
        return None, "No data for this combination."

    df = df.groupby(['Geolocation', 'Quarter', 'Year'])['Volume'].mean().reset_index()
    df['date'] = df['Year'].astype(str) + '-' + df['Quarter'].map(quarter_mapper)
    df['ds'] = pd.to_datetime(df['date'])
    df['y'] = df['Volume']
    dtf = df[['ds', 'y']]

    if len(dtf) < 8:
        return None, "Not enough data to forecast."

    model = Prophet(yearly_seasonality=False)
    model.add_seasonality(name='quarterly', period=4, fourier_order=3)
    model.fit(dtf)

    future = model.make_future_dataframe(periods=4, freq='Q')
    forecast = model.predict(future)

    fig = model.plot(forecast)
    ax = fig.gca()
    ax.scatter(dtf['ds'], dtf['y'], color='blue', label='Observed', s=20)
    ax.set_title(f"Prophet Forecast for {species} in {region}")
    ax.set_ylabel("Volume")
    ax.set_xlabel("Date")
    ax.set_ylim(bottom=0)
    ax.legend()

    img_path = save_plot(fig)
    description = generate_description(region, species, "Prophet", img_path)
    return img_path, description

def arima_forecast(region, species):
    df = data[(data['Geolocation'] == region) & (data['Species'] == species)].copy()
    if df.empty:
        return None, "No data for this combination."

    df['date'] = df['Year'].astype(str) + '-' + df['Quarter'].map(quarter_mapper)
    df['date'] = pd.to_datetime(df['date'])
    ts = df.groupby('date')['Volume'].sum().sort_index()

    if len(ts) < 8:
        return None, "Not enough data to forecast."

    model = SARIMAX(ts, order=(1, 1, 1), seasonal_order=(1, 1, 1, 4))
    results = model.fit(disp=False)

    forecast = results.get_forecast(steps=4)
    pred = forecast.predicted_mean
    conf_int = forecast.conf_int()

    full_series = pd.concat([ts, pred])

    fig, ax = plt.subplots(figsize=(10, 6))
    ax.plot(full_series.index, full_series.values, label='Observed + Forecast', color='blue')
    ax.axvline(x=ts.index[-1], color='gray', linestyle='--', label='Forecast Start')
    ax.plot(pred.index, pred.values, color='green', label='Forecast')
    ax.fill_between(conf_int.index, conf_int.iloc[:, 0], conf_int.iloc[:, 1], color='green', alpha=0.2)

    ax.set_title(f"SARIMA Forecast of {species} in {region}")
    ax.set_xlabel("Date")
    ax.set_ylabel("Volume")
    ax.set_ylim(bottom=0)
    ax.legend()
    plt.xticks(rotation=45)
    plt.tight_layout()

    img_path = save_plot(fig)
    description = generate_description(region, species, "ARIMA", img_path)
    return img_path, description

def save_plot(fig):
    tmp_file = tempfile.NamedTemporaryFile(delete=False, suffix=".png")
    fig.savefig(tmp_file.name)
    plt.close(fig)
    return tmp_file.name

def route_model(model_choice, region, species):
    if model_choice == "Prophet":
        return prophet_forecast(region, species)
    else:
        return arima_forecast(region, species)

# Gradio UI
with gr.Blocks() as demo:
    gr.Markdown("## 📈 Time Series Forecasting App")
    model_choice = gr.Radio(["Prophet", "ARIMA"], label="Choose Forecasting Model")
    region = gr.Dropdown(choices=regions, label="Region / Geolocation")
    species = gr.Dropdown(choices=species_list, label="Species")
    forecast_btn = gr.Button("Generate Forecast")
    output_image = gr.Image(type="filepath", label="Forecast Plot")
    output_text = gr.Textbox(label="AI-Generated Graph Description")

    forecast_btn.click(fn=route_model, inputs=[model_choice, region, species], outputs=[output_image, output_text])

demo.launch()
