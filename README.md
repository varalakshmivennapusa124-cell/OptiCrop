# 🌱 OptiCrop - Smart Agricultural Production Optimization Engine

## 📌 Project Overview

OptiCrop is a Machine Learning based crop recommendation system that predicts the most suitable crop based on soil nutrients and environmental conditions such as Nitrogen (N), Phosphorus (P), Potassium (K), temperature, humidity, pH, and rainfall.

The project covers the complete machine learning pipeline including:

- Data Collection
- Exploratory Data Analysis (EDA)
- Data Preprocessing
- Machine Learning Model Building
- Model Evaluation
- Crop Recommendation Prediction
- Flask Web Application

---

## 🛠 Technologies Used

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Scikit-learn
- Flask
- HTML
- CSS
- JavaScript

---

## 📂 Project Structure

 OptiCrop-Smart-Agricultural-Production-Optimization-Engine/
│
├── dataset/
│   └── Crop_recommendation.csv      # Dataset
│
├── flask/
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css            # Website styling
│   │   └── js/
│   │       └── script.js            # JavaScript
│   │
│   ├── templates/
│   │   ├── index.html               # Home page
│   │   ├── about.html               # About page
│   │   └── findyourcrop.html        # Prediction page
│   │
│   ├── app.py                       # Flask backend
│   ├── model.pkl                    # Trained ML model
│   └── scaler.pkl                   # Feature scaler
│
├── screenshots/
│   ├── about.jpg
│   ├── home.jpg
│   ├── predict.jpg
│   └── result.jpg
│
├── TRAINING/
│   ├── Crop_Recommendation.ipynb    # Model training notebook
│   ├── model.pkl                    # Generated model
│   └── scaler.pkl                   # Generated scaler
│
├── LICENSE                          # MIT License
├── README.md                        # Project documentation
└── requirements.txt                 # Python dependencies

---

## 🤖 Machine Learning Model

- K-Means Clustering
- Logistic Regression

---

## 📊 Model Evaluation

The model was evaluated using:

- Accuracy
- Precision
- Recall
- F1-Score
- Classification Report

The trained model is saved as:

- model.pkl
- scaler.pkl

---

## 🌾 Crop Prediction

Users can enter:

- Nitrogen
- Phosphorus
- Potassium
- Temperature
- Humidity
- pH
- Rainfall

The application predicts the most suitable crop.

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/varalakshmivennapusa124-cell/OptiCrop.git
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the application

```bash
cd flask
python app.py
```

 

## 📸 Screenshots

### 🏠 Home Page
![Home](screenshots/home.png)

### ℹ️ About Page
![About](screenshots/about.png)

### 🌱 Prediction Page
![Prediction](screenshots/predict.png)

### ✅ Crop Recommendation Result
![Result](screenshots/result.png)

---
# 👩‍💻 Author

## Full Name
**Vennapusa Varalakshmi**

## Education
**B.Tech – Computer Science and Engineering (CSE)**  
Rise Krishna Sai Gandhi Group of Institutions

## GitHub
https://github.com/varalakshmivennapusa124-cell/

## LinkedIn
https://www.linkedin.com/in/vennapusa-varalakshmi-ab5231389/
 

