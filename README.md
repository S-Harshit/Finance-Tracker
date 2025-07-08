# 📘 Personal Finance Tracker (React Project)

A web app to help users track income, expenses, budgets, and view analytics securely with a responsive UI.

---

## ✅ Project Requirements

### 🔐 Authentication
- [ ] Sign up with email/password
- [ ] Login / Logout
- [ ] Password Reset
- [ ] Auth state persistence
- [ ] Private Routes (authenticated access only)

### 💰 Transactions
- [ ] Add new transaction (income/expense)
- [ ] Edit/Delete transactions
- [ ] Filter transactions (type, date, category)
- [ ] Sort by date or amount

### 📊 Dashboard
- [ ] Total income, expenses, and balance
- [ ] Recent transactions
- [ ] Pie chart: expenses by category
- [ ] Line chart: monthly trends

### 🎯 Budget Goals *(Optional)*
- [ ] Set monthly spending limits
- [ ] Visual progress tracking
- [ ] Alert when limit is near

### 🎨 UI/UX
- [ ] Mobile-first responsive design
- [ ] Dark Mode toggle
- [ ] Error/loading states
- [ ] Accessible design

### ⚙️ Technical Stack
- [ ] React.js (with Hooks)
- [ ] Context API or Redux
- [ ] React Router v6+
- [ ] Tailwind CSS / Material UI
- [ ] Firebase (Auth + Firestore) or Node.js backend
- [ ] Chart.js / Recharts for visualization
- [ ] React Hook Form / Formik + Yup for forms
- [ ] Testing: Jest + React Testing Library

---

## 🗺️ Feature Roadmap

| Milestone | Features | Status |
|----------|----------|--------|
| Phase 1  | Auth, Routing, Layout | ✅ |
| Phase 2  | Add/Edit/Delete Transactions | 🔄 |
| Phase 3  | Charts & Analytics | ⏳ |
| Phase 4  | Budget Goals & Alerts (Optional) | ❌ |
| Phase 5  | Responsive UI, Polish & Testing | ❌ |

---

## 🧱 UI Components

| Component | Description |
|----------|-------------|
| `<Navbar />` | Navigation bar with links & logout |
| `<Sidebar />` | (optional) for desktop |
| `<TransactionForm />` | Add/edit a transaction |
| `<TransactionList />` | Display and filter transactions |
| `<SummaryCard />` | Display total income/expenses |
| `<Chart />` | Pie or line charts |
| `<AuthForm />` | Login / Signup UI |

---

## 📝 Data Schema (Firestore or MongoDB)

### Transaction Document

```json
{
  "id": "uuid",
  "type": "income" | "expense",
  "category": "Food",
  "amount": 250,
  "date": "2025-07-08",
  "notes": "Lunch",
  "userId": "user_abc123"
}
