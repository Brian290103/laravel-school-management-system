<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Student extends Model
{
    use HasUuids;

    protected $fillable = ['first_name', 'last_name', 'email', 'grade'];

    public function enrollments()
    {
        return $this->hasMany(Enrollment::class);
    }
}
