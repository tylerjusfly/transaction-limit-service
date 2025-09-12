# Transaction Limit Service

## 📌 Overview

The Transaction Limit Service enforces regulatory, tier-based, and user-defined rules on financial transactions. It defines how much a user can deposit, withdraw, transfer, or spend on specific services (e.g., airtime, bill payments) within a given timeframe.

It integrates with the KYC Service (to enforce tier-based restrictions), User Service (to store personal settings), and Transaction/Payments Service (to validate transactions before execution).


## 🚀 Service Requirements
- Language/Framework: (Node.js / Python / Java / .NET / PHP / Go)
- Database: (PostgreSQL, Redis, etc.)
- Messaging: (Kafka, RabbitMQ, gRPC, REST)
- Other Dependencies: (External APIs, bill aggregators, payment gateways)

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