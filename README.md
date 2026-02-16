# 🎓 MT-SMS: School Management System

[![GitHub](https://img.shields.io/badge/GitHub-Brian290103%2Flaravel--school--management--system-blue?logo=github)](https://github.com/Brian290103/laravel-school-management-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Laravel](https://img.shields.io/badge/Laravel-12-red?logo=laravel)](https://laravel.com)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)

> A modern Laravel 12 school management system built to rediscover Laravel after years away exploring other frameworks.

**Repository:** [github.com/Brian290103/laravel-school-management-system](https://github.com/Brian290103/laravel-school-management-system)

## 📖 My Journey

After years of exploring Next.js, React, and other modern frameworks, I've decided to return to my roots and dive deep into what's new in the Laravel ecosystem. This project represents my rapid exploration and mastery of **Laravel 12** while building a practical, real-world application in just a few hours.

This school management system serves as both a functional tool and a learning playground to understand:
- Laravel 12's latest features
- Modern Laravel architecture patterns
- Real-time data management
- Elegant API design

## 📸 Screenshots

### Dashboard
<img width="1788" height="884" alt="image" src="https://github.com/user-attachments/assets/a3be827c-a0ca-4ff1-b5fa-0615c467ff14" />
<img width="1799" height="900" alt="image" src="https://github.com/user-attachments/assets/b7daa15d-8dca-48a0-80ce-d40ae178fddd" />

*System statistics and analytics at a glance*

### Teachers Management
<img width="1779" height="600" alt="image" src="https://github.com/user-attachments/assets/b9820b08-5003-4ac0-9470-7989d2f864b6" />

*Manage teachers with easy CRUD operations*

### Students Management
<img width="1784" height="588" alt="image" src="https://github.com/user-attachments/assets/751d3b84-d97f-4f32-9d1c-58debe4f54e9" />
*Complete student information management*

### Courses Management
<img width="1789" height="586" alt="image" src="https://github.com/user-attachments/assets/915f6582-bba7-42ee-b7fa-8a09209d3f8f" />

*Create and assign courses to teachers*

### Enrollments Management
<img width="1462" height="629" alt="image" src="https://github.com/user-attachments/assets/6f732f1e-0762-4d1c-a781-6c55b7031e4d" />

*Manage student course enrollments*

### Add/Edit Forms
<img width="760" height="615" alt="image" src="https://github.com/user-attachments/assets/c0c688c8-5de5-4c7b-b12a-d3693ad446b1" />

*Beautiful dialog forms with validation*

---

## ✨ Features

### 👨‍🏫 Teacher Management
- Create, read, update, and delete teachers
- Manage teacher subjects and specializations
- Track all teacher information in one place

### 👨‍🎓 Student Management
- Complete student profiles with email and grade tracking
- Easy-to-use CRUD operations
- Beautiful UI for managing large student rosters

### 📚 Course Management
- Create and manage courses
- Assign teachers to courses seamlessly
- Track all available courses in the system

### 📋 Enrollment System
- Enroll students in courses
- Track enrollment dates
- Manage student-course relationships effortlessly

### 📊 Dashboard & Analytics
- Real-time statistics and insights:
  - Total teachers, students, courses, and enrollments
  - Unique subject count
  - Average students per course
  - System load metrics
- Visual progress bars for enrollment rates
- Teacher-to-student ratio tracking

### 🎨 Beautiful UI
- Built with **shadcn/ui** components
- Responsive design using **Tailwind CSS**
- Dark mode support
- Intuitive dialogs and forms
- Professional data tables

## 🛠 Tech Stack

### Backend
- **Laravel 12** - The PHP web framework for artisans
- **PHP 8.5** - Latest PHP version
- **SQLite** - Database (easily configurable to MySQL/PostgreSQL)
- **Inertia.js** - Modern monolithic JavaScript apps

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - High-quality, accessible components
- **Lucide React** - Beautiful icons
- **Vite** - Next generation frontend tooling

### Development
- **Laravel Fortify** - Authentication scaffolding
- **Pint** - PHP code formatter
- **ESLint** - JavaScript linting
- **PHPUnit** - Testing framework

## 📦 Installation

### Prerequisites
- PHP 8.1+ (PHP 8.5 recommended)
- Composer
- Node.js 18+
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/Brian290103/laravel-school-management-system.git
cd laravel-school-management-system
```

2. **Install PHP dependencies**
```bash
composer install
```

3. **Install Node dependencies**
```bash
npm install
```

4. **Create environment file**
```bash
cp .env.example .env
```

5. **Generate application key**
```bash
php artisan key:generate
```

6. **Run migrations**
```bash
php artisan migrate:fresh
```

7. **Build frontend assets**
```bash
npm run build
```

8. **Start development server**
```bash
php artisan serve
```

9. **Start Vite development server** (in another terminal)
```bash
npm run dev
```

Visit `http://localhost:8000` in your browser.

## 🚀 Quick Start

### Create Test Data
Register a new account or use existing credentials to access the dashboard.

### Navigate the System
- **Dashboard** - View all statistics and system overview
- **Teachers** - Manage teaching staff
- **Students** - Manage student information
- **Courses** - Create and manage courses
- **Enrollments** - Manage student enrollments

## 📁 Project Structure

```
mt-sms/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── DashboardController.php
│   │   │   ├── TeacherController.php
│   │   │   ├── StudentController.php
│   │   │   ├── CourseController.php
│   │   │   └── EnrollmentController.php
│   │   └── Middleware/
│   └── Models/
│       ├── Teacher.php
│       ├── Student.php
│       ├── Course.php
│       └── Enrollment.php
├── database/
│   ├── migrations/
│   └── seeders/
├── resources/
│   ├── js/
│   │   ├── pages/
│   │   │   ├── dashboard.tsx
│   │   │   ├── teachers/
│   │   │   ├── students/
│   │   │   ├── courses/
│   │   │   └── enrollments/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── types/
│   │   └── routes/
│   └── css/
├── routes/
│   └── web.php
└── config/
```

## 🗄️ Database Schema

### Teachers
- `id` (UUID)
- `first_name` (string)
- `last_name` (string)
- `subject` (string)
- `timestamps`

### Students
- `id` (UUID)
- `first_name` (string)
- `last_name` (string)
- `email` (string)
- `grade` (string)
- `timestamps`

### Courses
- `id` (UUID)
- `teacher_id` (UUID, foreign key)
- `name` (string)
- `timestamps`

### Enrollments
- `id` (UUID)
- `student_id` (UUID, foreign key)
- `course_id` (UUID, foreign key)
- `enrollment_date` (dateTime)
- `timestamps`

## 🔐 Authentication

The system uses **Laravel Fortify** for authentication with:
- Email/password registration
- Email verification
- Password reset functionality
- Two-factor authentication support

All protected routes require authentication and email verification.

## 🎯 API Routes

All routes are protected by `auth` and `verified` middleware.

```
GET    /dashboard              - Dashboard with statistics
GET    /teachers               - List all teachers
POST   /teachers               - Create new teacher
PUT    /teachers/{id}          - Update teacher
DELETE /teachers/{id}          - Delete teacher

GET    /students               - List all students
POST   /students               - Create new student
PUT    /students/{id}          - Update student
DELETE /students/{id}          - Delete student

GET    /courses                - List all courses
POST   /courses                - Create new course
PUT    /courses/{id}           - Update course
DELETE /courses/{id}           - Delete course

GET    /enrollments            - List all enrollments
POST   /enrollments            - Create new enrollment
PUT    /enrollments/{id}       - Update enrollment
DELETE /enrollments/{id}       - Delete enrollment
```

## 🧪 Testing

Run the test suite:
```bash
php artisan test
```

## 📝 Available Scripts

### Development
```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run lint     # Run ESLint
php artisan pint # Format PHP code
```

### Production
```bash
npm run build
php artisan migrate
php artisan config:cache
```

## 🌟 Key Learning Points

This project helped me refresh my Laravel knowledge by implementing:

1. **Modern Controller Patterns** - Clean, RESTful API design
2. **Eloquent ORM** - Elegant database interaction
3. **Inertia.js** - Seamless React integration
4. **Type Safety** - Full TypeScript support
5. **Component Architecture** - Reusable React components
6. **Form Handling** - Inertia forms with validation
7. **Data Management** - Efficient data fetching and transformation
8. **UI Design** - Professional component-based UI

## 🤝 Contributing

Found a bug or have a feature idea? Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Repository:** [github.com/Brian290103/laravel-school-management-system](https://github.com/Brian290103/laravel-school-management-system)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Laravel team for the amazing framework
- React and Inertia.js communities
- shadcn/ui for beautiful components
- All open-source contributors

---

**Built with ❤️ by a Laravel developer returning home** 🏠

Feel free to reach out with questions or suggestions!
