
import streamlit as st
import pandas as pd
import joblib

# Load trained model and scaler
model = joblib.load("xgboost_churn_model.pkl")
scaler = joblib.load("scaler.pkl")

# Retention strategy function
def retention_suggestion(customer):
    if customer.get('Contract') == 'Month-to-month' and customer.get('MonthlyCharges', 0) > 80:
        return "Offer discount for switching to annual contract"
    elif customer.get('InternetService') == 'Fiber optic' and customer.get('TechSupport') == 'No':
        return "Offer free technical support trial"
    elif customer.get('SupportCalls', 0) > 3:
        return "Assign priority customer care agent"
    elif customer.get('PaymentMethod') == 'Electronic check':
        return "Offer cashback for using auto-pay or credit card"
    elif customer.get('Tenure', 0) < 6:
        return "Send welcome kit and loyalty incentives"
    else:
        return "Send personalized loyalty message with offers"

# App UI
st.set_page_config(page_title="Customer Churn Prediction", layout="centered")
st.title("Customer Churn Prediction App")

st.markdown("Input the customer's information below:")

# Input fields
gender = st.selectbox("Gender", ["Male", "Female"])
senior_citizen = st.selectbox("Senior Citizen", [0, 1])
partner = st.selectbox("Partner", ["Yes", "No"])
dependents = st.selectbox("Dependents", ["Yes", "No"])
tenure = st.slider("Tenure (in months)", 0, 72, 12)
monthly_charges = st.number_input("Monthly Charges", 0.0, 150.0, 70.0)
total_charges = st.number_input("Total Charges", 0.0, 10000.0, 1000.0)
contract = st.selectbox("Contract", ["Month-to-month", "One year", "Two year"])
payment_method = st.selectbox("Payment Method", ["Electronic check", "Mailed check", "Bank transfer", "Credit card"])
internet_service = st.selectbox("Internet Service", ["DSL", "Fiber optic", "No"])
tech_support = st.selectbox("Tech Support", ["Yes", "No"])
support_calls = st.slider("Support Calls", 0, 10, 1)

# Convert to DataFrame for model input
input_dict = {
    "gender": gender,
    "SeniorCitizen": senior_citizen,
    "Partner": partner,
    "Dependents": dependents,
    "Tenure": tenure,
    "MonthlyCharges": monthly_charges,
    "TotalCharges": total_charges,
    "Contract": contract,
    "PaymentMethod": payment_method,
    "InternetService": internet_service,
    "TechSupport": tech_support,
    "SupportCalls": support_calls
}

input_df = pd.DataFrame([input_dict])

# Encode and scale
input_encoded = pd.get_dummies(input_df)
model_columns = joblib.load("model/model_columns.pkl")
for col in model_columns:
    if col not in input_encoded.columns:
        input_encoded[col] = 0
input_encoded = input_encoded[model_columns]

input_scaled = scaler.transform(input_encoded)

# Predict
if st.button("Predict Churn"):
    prediction = model.predict(input_scaled)[0]
    probability = model.predict_proba(input_scaled)[0][1]
    if prediction == 1:
        st.error(f"Customer is likely to churn. Probability: {probability:.2f}")
        strategy = retention_suggestion(input_dict)
        st.warning(f"Retention Strategy: {strategy}")
    else:
        st.success(f"Customer is likely to stay. Probability: {1 - probability:.2f}")
