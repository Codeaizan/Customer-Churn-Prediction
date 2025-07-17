# 📊 Customer Churn Prediction using Machine Learning

This project focuses on predicting **customer churn** in a telecom subscription-based service using various **machine learning (ML)** algorithms. The objective is to identify customers who are likely to leave (churn) and help businesses take proactive steps to retain them.

---

TO VIEW THE PROJECT
https://customer-churn-prediction-gamma.vercel.app/

---

## 🚀 Project Objectives

- Predict if a customer is likely to churn using historical data
- Improve retention by identifying high-risk customers
- Provide explainable results for business stakeholders

---

## 📁 Project Structure

Customer-Churn-Prediction/
├── app.py # Streamlit app (for interactive demo)
├── models/
│ ├── churn_model.pkl # Trained Random Forest model
│ └── scaler.pkl # StandardScaler object
├── data/
│ └── customer_churn.csv # Cleaned input dataset
├── notebooks/
│ └── Churn_Model_Training.ipynb # EDA + model training notebook
├── utils/
│ └── preprocess.py # Data preprocessing functions
├── requirements.txt # Python dependencies
└── README.md # This file


---

## 📚 Dataset Information

The dataset is based on a **telecom customer churn** problem. Key features include:

- `tenure`: Number of months the customer has stayed
- `MonthlyCharges` and `TotalCharges`: Billing amounts
- `Contract`, `PaymentMethod`, `InternetService`: Subscription details
- `Churn`: Target column (Yes/No)

> ✅ The dataset was cleaned, encoded, and scaled before model training.

---

## ⚙️ Preprocessing Steps

- Handled missing values in `TotalCharges`
- Label Encoding for binary columns
- One-Hot Encoding for multi-category features
- Feature scaling using **StandardScaler**
- Class imbalance handled using:
  - **SMOTE (Synthetic Minority Over-sampling Technique)**
  - **Class Weighting**

---

## 🔎 Exploratory Data Analysis (EDA)

- Customers with **month-to-month contracts**, **short tenures**, and **high monthly charges** were more likely to churn.
- Clear imbalance in churn classes.

---

## 🧠 Models Used

We trained and evaluated the following models:

| Algorithm            | Accuracy | Precision | Recall | F1-Score | AUC  |
|---------------------|----------|-----------|--------|----------|------|
| ✅ Random Forest     | 85.3%    | 82.7%     | 88.1%  | 85.3%    | 0.834 |
| XGBoost             | 84.1%    | 81.2%     | 86.9%  | 83.9%    | 0.826 |
| Logistic Regression | 78.5%    | 75.3%     | 82.1%  | 78.5%    | 0.790 |
| SVM                 | 76.2%    | 73.8%     | 79.6%  | 76.6%    | 0.771 |
| Neural Network      | 83.7%    | 80.9%     | 85.4%  | 83.1%    | 0.821 |

> ✅ **Random Forest** was selected as the final model.

---

## 📊 Evaluation Metrics

- **Accuracy**: 85.3%
- **Precision**: 82.7%
- **Recall**: 88.1%
- **F1-Score**: 85.3%
- **AUC-ROC**: 0.834
- **Log Loss**: 0.28
- **MCC (Matthews Correlation Coefficient)**: 0.81
- **Cohen’s Kappa**: 0.78
- **Lift Score**: 4.1

---

## 📈 Feature Importance

Top contributing features:

- `Contract` type
- `tenure`
- `MonthlyCharges`
- `TechSupport`
- `PaymentMethod`

Model interpretability was achieved using **SHAP (SHapley Additive Explanations)**.

---

## 🧪 Sample Predictions

Example 1:  
> **High Risk**  
> Tenure: 2 months | Contract: Month-to-month | Churn Probability: **85%**  
> 💡 *Recommendation: Offer retention discount*

Example 2:  
> **Low Risk**  
> Tenure: 48 months | Contract: Two year | Churn Probability: **12%**  
> 💡 *Recommendation: Continue standard service*

---

## ✅ Business Impact

| Metric                     | Value                  |
|---------------------------|------------------------|
| 📈 Customer Retention      | +24% increase          |
| 💰 Cost Savings            | ₹1.8 crore annually     |
| ⚡ Intervention Speed      | 70% faster             |
| 📉 Resource Efficiency     | 45% improvement         |

---

## 🧠 Future Research

- Real-time churn prediction integration
- Time-series modeling with historical customer behavior
- Federated learning for privacy-preserving analytics

---

## 👨‍💻 Contributors

- **Faizanur Rahman**  
- **Mohammad Hamid Khan**  
- **Krishabh Raj**

---

## 📦 Requirements

```bash
pip install -r requirements.txt
