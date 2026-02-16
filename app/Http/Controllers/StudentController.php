<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();

        return Inertia::render('students/index', [
            'students' => $students,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'grade' => 'required|string|max:255',
        ]);

        Student::create($validated);

        return Redirect::route('students.index');
    }

    public function update(Request $request, Student $student)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'grade' => 'required|string|max:255',
        ]);

        $student->update($validated);

        return Redirect::route('students.index');
    }

    public function destroy(Student $student)
    {
        $student->delete();

        return Redirect::route('students.index');
    }
}
