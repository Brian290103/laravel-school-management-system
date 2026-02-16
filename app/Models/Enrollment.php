<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Enrollment extends Model
{
    use HasUuids;

    protected $fillable = ['student_id', 'course_id', 'enrollment_date'];

    protected $casts = [
        'enrollment_date' => 'datetime',
    ];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
