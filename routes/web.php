<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EnrollmentController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('dashboard', DashboardController::class)
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('teachers', TeacherController::class)->only(['index', 'store', 'update', 'destroy']);
    Route::resource('students', StudentController::class)->only(['index', 'store', 'update', 'destroy']);
    Route::resource('courses', CourseController::class)->only(['index', 'store', 'update', 'destroy']);
    Route::resource('enrollments', EnrollmentController::class)->only(['index', 'store', 'update', 'destroy']);
});

require __DIR__.'/settings.php';
