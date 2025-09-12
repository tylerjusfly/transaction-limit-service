# Transaction Limit Service

## 📌 Overview

The Transaction Limit Service enforces regulatory, tier-based, and user-defined rules on financial transactions. It defines how much a user can deposit, withdraw, transfer, or spend on specific services (e.g., airtime, bill payments) within a given timeframe.

It integrates with the KYC Service (to enforce tier-based restrictions), User Service (to store personal settings), and Transaction/Payments Service (to validate transactions before execution).

## 🔗 Integration Points
This document describes how other services in the ecosystem integrate with it.  

### 1. 👤 User Service
- Provides **user details** such as:
  - User ID
  - User Tier (e.g., Basic, Premium, Business)
- This information is required to determine applicable transaction limits.  

---

### 2. ✅ KYC Service
- Determines **tier-based limits** based on KYC verification.  
- Works with the Transaction Limit Service to enforce regulatory thresholds.  

---

### 3. 💳 Transaction Service
- Calls the **Transaction Limit Service** before processing:
  - Deposits  
  - Withdrawals  
  - Transfers  
- Ensures that all debit/credit operations comply with defined limits.  

---

### 4. 📱 Airtime & Bill Service and Transfer Service
- Must **validate against the Transaction Limit Service** before executing payments.  
- Example use cases:
  - Airtime top-ups  
  - Utility/bill payments  
  - Peer-to-peer transfers  

---

### 5. 📢 Notification Service
- Alerts the user whenever:
  - A transaction limit has been reached  
  - A transaction is blocked due to exceeding a limit  
- Provides a feedback loop for user awareness and compliance.  

## 📜 Summary

- **All financial transactions must pass through the Transaction Limit Service**.  
- **User & KYC data** determine the applicable limits.  
- **Payments and transfers** are blocked if they exceed defined thresholds.  
- **Notifications** ensure users are aware of limits and restrictions.  


## 🛠️ High-level Documentation
- Handles central identity and profile management business logic
- Interacts with Transaction Service, KYC service, User Service
- Integrates with 3rd party APIs if any

## 📂 Code Structure

Example:

```
/src
/controllers
/models
/services
/tests
/config
/docs
```

## 🧩 Design Documentation
- Pattern(s) used: e.g. Factory, Observer, Strategy
- Key abstractions/interfaces
- Error handling strategy
- Logging and observability setup

## 🔌 API Specification
- gRPC proto files → `/proto`
- REST API docs → `/docs/openapi.yaml`

## 📦 Third-Party Dependencies
- Payment Provider: Paystack / Flutterwave
- Bill Aggregator: XYZ
- Notification: Twilio / SendGrid

## 🧪 Testing
- Unit tests: `npm test` / `pytest` / `dotnet test`
- Integration tests: details
- CI/CD pipeline: GitHub Actions / GitLab CI

## ▶️ Running Locally
```bash
# Install dependencies
npm install

# Start dev server
npm run start:dev
```
