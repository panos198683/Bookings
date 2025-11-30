# Bookings Management App

A modern **React + TypeScript** application for managing bookings, featuring a responsive UI, date filters, and a clean user experience. Built with **Tailwind CSS**, **ShadCN UI components**, and custom React components for a fully interactive interface.

Accessibility, error handling, and smooth loading states are integrated for a professional UX.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)

---

## Features

- Create, view, and filter bookings.
- Responsive filters:
  - Search by customer
  - Status select
  - Start and end date pickers with clear buttons
- Booking list with avatars using random colors for users.
- Booking details dialog.
- Status badges with mobile-friendly display.
- Form validation using **Zod**.
- Accessibility features:
  - Keyboard navigation for dialogs and list items
  - Screen reader-friendly labels and ARIA attributes
- Error handling:
  - Global error modal for unexpected errors
  - Field-level validation errors
- Loading states:
  - Skeletons for bookings list while data is fetching
- Smooth animations for dialog open/close and card hover

---

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS, ShadCN UI
- **Date Handling**: date-fns
- **Form Validation**: Zod
- **State Management**: React Context API
- **Icons**: Lucide React

---

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/bookings-app.git
cd bookings-app

2.Install dependencies:

npm install
# or
yarn install

3.Start the development server:

npm run dev
# or
yarn dev
```
