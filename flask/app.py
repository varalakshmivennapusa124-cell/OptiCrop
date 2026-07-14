from flask import Flask, render_template, request
import pickle
import numpy as np

app = Flask(__name__)

# Load trained model and scaler
model = pickle.load(open("model.pkl", "rb"))
scaler = pickle.load(open("scaler.pkl", "rb"))

# Home Page
@app.route("/")
def home():
    return render_template("index.html")

# About Page
@app.route("/about")
def about():
    return render_template("about.html")

# Find Your Crop Page
@app.route("/findyourcrop")
def findyourcrop():
    return render_template("findyourcrop.html")


# Prediction Route
@app.route("/predict", methods=["POST"])
def predict():
    try:
        nitrogen = float(request.form["nitrogen"])
        phosphorus = float(request.form["phosphorous"])
        potassium = float(request.form["potassium"])
        temperature = float(request.form["temperature"])
        humidity = float(request.form["humidity"])
        ph = float(request.form["ph"])
        rainfall = float(request.form["rainfall"])

        print("\n========== USER INPUT ==========")
        print("Nitrogen   :", nitrogen)
        print("Phosphorus :", phosphorus)
        print("Potassium  :", potassium)
        print("Temperature:", temperature)
        print("Humidity   :", humidity)
        print("pH         :", ph)
        print("Rainfall   :", rainfall)

        sample = np.array([[nitrogen,
                            phosphorus,
                            potassium,
                            temperature,
                            humidity,
                            ph,
                            rainfall]])

        print("\nBefore Scaling:")
        print(sample)

        scaled_sample = scaler.transform(sample)

        print("\nAfter Scaling:")
        print(scaled_sample)

        prediction = model.predict(scaled_sample)

        print("\nPrediction:")
        print(prediction)
        print("===============================\n")

        prediction_text = f"Recommended Crop: {prediction[0].title()}"

        return render_template(
            "findyourcrop.html",
            prediction_text=prediction_text
        )

    except Exception as e:
        print("ERROR:", e)
        return render_template(
            "findyourcrop.html",
            prediction_text=f"Error: {e}"
        )


if __name__ == "__main__":
    app.run(debug=True)
