<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::with('teacher')->get();
        $teachers = Teacher::all();

        return Inertia::render('courses/index', [
            'courses' => $courses,
            'teachers' => $teachers,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'teacher_id' => 'required|uuid|exists:teachers,id',
        ]);

        Course::create($validated);

        return Redirect::route('courses.index');
    }

    public function update(Request $request, Course $course)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'teacher_id' => 'required|uuid|exists:teachers,id',
        ]);

        $course->update($validated);

        return Redirect::route('courses.index');
    }

    public function destroy(Course $course)
    {
        $course->delete();

        return Redirect::route('courses.index');
    }
}
