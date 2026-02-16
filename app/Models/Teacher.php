<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Teacher extends Model
{
    use HasUuids;

    protected $fillable = ['first_name', 'last_name', 'subject'];

    public function courses()
    {
        return $this->hasMany(Course::class);
    }
}
