<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TeacherController extends Controller
{
    public function index()
    {
        $teachers = Teacher::all();

        return Inertia::render('teachers/index', [
            'teachers' => $teachers,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'subject' => 'required|string|max:255',
        ]);

        Teacher::create($validated);

        return Redirect::route('teachers.index');
    }

    public function update(Request $request, Teacher $teacher)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'subject' => 'required|string|max:255',
        ]);

        $teacher->update($validated);

        return Redirect::route('teachers.index');
    }

    public function destroy(Teacher $teacher)
    {
        $teacher->delete();

        return Redirect::route('teachers.index');
    }
}
