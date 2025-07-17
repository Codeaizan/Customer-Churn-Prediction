import streamlit as st
import joblib
import numpy as np
import pandas as pd
import json


model = joblib.load("xgboost_churn_model.pkl")
scaler = joblib.load("scaler.pkl")
with open("model_columns.json") as f:
    model_columns = json.load(f)

st.title("📊 Customer Churn Prediction App")


st.sidebar.header("Enter Customer Details:")

tenure = st.sidebar.slider("Tenure (Months)", 0, 72, 12)
monthly_charges = st.sidebar.number_input("Monthly Charges ($)", min_value=10.0, max_value=150.0, value=75.0)
gender = st.sidebar.selectbox("Gender", ["Male", "Female"])
senior = st.sidebar.selectbox("Senior Citizen?", ["Yes", "No"])
partner = st.sidebar.selectbox("Has Partner?", ["Yes", "No"])
dependents = st.sidebar.selectbox("Has Dependents?", ["Yes", "No"])
contract = st.sidebar.selectbox("Contract Type", ["Month-to-month", "One year", "Two year"])
payment_method = st.sidebar.selectbox("Payment Method", ["Electronic check", "Mailed check", "Bank transfer", "Credit card"])
paperless = st.sidebar.selectbox("Paperless Billing?", ["Yes", "No"])


total_spent = tenure * monthly_charges


input_dict = {
    'tenure': tenure,
    'MonthlyCharges': monthly_charges,
    'TotalSpent': total_spent,
    'gender_Male': 1 if gender == "Male" else 0,
    'SeniorCitizen': 1 if senior == "Yes" else 0,
    'Partner_Yes': 1 if partner == "Yes" else 0,
    'Dependents_Yes': 1 if dependents == "Yes" else 0,
    'Contract_One year': 1 if contract == "One year" else 0,
    'Contract_Two year': 1 if contract == "Two year" else 0,
    'PaperlessBilling_Yes': 1 if paperless == "Yes" else 0,
    'PaymentMethod_Electronic check': 1 if payment_method == "Electronic check" else 0,
    'PaymentMethod_Mailed check': 1 if payment_method == "Mailed check" else 0,
}


for col in model_columns:
    if col not in input_dict:
        input_dict[col] = 0


input_df = pd.DataFrame([input_dict])[model_columns]


input_scaled = scaler.transform(input_df)


prediction = model.predict(input_scaled)[0]
probability = model.predict_proba(input_scaled)[0][1]


st.subheader("🔍 Prediction Result:")
st.write("Churn Prediction:", "**Yes**" if prediction == 1 else "**No**")
st.write(f"Churn Probability: **{probability * 100:.2f}%**")
