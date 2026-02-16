<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Models\Student;
use App\Models\Course;
use App\Models\Enrollment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $teachersCount = Teacher::count();
        $studentsCount = Student::count();
        $coursesCount = Course::count();
        $enrollmentsCount = Enrollment::count();
        
        $subjectsCount = Teacher::distinct('subject')->count('subject');

        return Inertia::render('dashboard', [
            'stats' => [
                'teachers' => $teachersCount,
                'students' => $studentsCount,
                'courses' => $coursesCount,
                'enrollments' => $enrollmentsCount,
                'subjects' => $subjectsCount,
            ],
        ]);
    }
}
