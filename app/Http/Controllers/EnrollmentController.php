<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use App\Models\Student;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class EnrollmentController extends Controller
{
    public function index()
    {
        $enrollments = Enrollment::with(['student', 'course'])->get();
        $students = Student::all();
        $courses = Course::all();

        return Inertia::render('enrollments/index', [
            'enrollments' => $enrollments,
            'students' => $students,
            'courses' => $courses,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'student_id' => 'required|uuid|exists:students,id',
            'course_id' => 'required|uuid|exists:courses,id',
            'enrollment_date' => 'required|date',
        ]);

        Enrollment::create($validated);

        return Redirect::route('enrollments.index');
    }

    public function update(Request $request, Enrollment $enrollment)
    {
        $validated = $request->validate([
            'student_id' => 'required|uuid|exists:students,id',
            'course_id' => 'required|uuid|exists:courses,id',
            'enrollment_date' => 'required|date',
        ]);

        $enrollment->update($validated);

        return Redirect::route('enrollments.index');
    }

    public function destroy(Enrollment $enrollment)
    {
        $enrollment->delete();

        return Redirect::route('enrollments.index');
    }
}
