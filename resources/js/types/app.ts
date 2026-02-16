export interface Teacher {
    id: string;
    first_name: string;
    last_name: string;
    subject: string;
    created_at: string;
    updated_at: string;
}

export interface Student {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    grade: string;
    created_at: string;
    updated_at: string;
}

export interface Course {
    id: string;
    teacher_id: string;
    name: string;
    teacher?: Teacher;
    created_at: string;
    updated_at: string;
}

export interface Enrollment {
    id: string;
    student_id: string;
    course_id: string;
    enrollment_date: string;
    student?: Student;
    course?: Course;
    created_at: string;
    updated_at: string;
}