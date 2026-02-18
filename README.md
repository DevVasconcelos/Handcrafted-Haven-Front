# Handcrafted Haven – Frontend

Handcrafted Haven Frontend is a Next.js web application that communicates with an independent backend REST API to provide a full marketplace experience.

This project implements a structured Atomic Design architecture and integrates dynamically with backend endpoints for authentication, product management, and review functionality.

---

## 🌐 Live Application

🔗 Deployed on Vercel:  
https://handcrafted-haven-front.vercel.app/

---

## 🚀 Features

- User registration
- User authentication (login)
- Product creation interface
- Product detail visualization
- Category filtering
- Product review submission
- Seller dashboard interface
- Dynamic API data rendering
- Loading and error state handling

---

## 🏗 Architecture

The frontend follows Atomic Design principles:

components/
├── atoms/
├── molecules/
├── organisms/
├── templates/

The application communicates with the backend through a structured API service layer using HTTP requests.

---

## 🔁 End-to-End Integration

The frontend connects to the backend to enable:

1. User registration → persisted in database  
2. Authentication flow → credential validation  
3. Product creation → stored via API  
4. Product retrieval → dynamic rendering  
5. Review submission → relational data handling  

---

## 🛠 Technologies

- Next.js
- React
- REST API integration
- Modular component architecture

---

## 📌 Purpose

This project demonstrates frontend-backend separation, scalable component architecture, and full-stack integration practices.

