import { useState } from 'react';
import { Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Plus, Pencil } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import type { Enrollment, Student, Course } from '@/types';

type EnrollmentDialogProps = {
    enrollment?: Enrollment;
    students: Student[];
    courses: Course[];
};

const ModelForm = ({ enrollment, students, courses }: EnrollmentDialogProps) => {
    const [open, setOpen] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = useState(
        enrollment?.student_id || ''
    );
    const [selectedCourseId, setSelectedCourseId] = useState(
        enrollment?.course_id || ''
    );
    const [enrollmentDate, setEnrollmentDate] = useState(
        enrollment ? new Date(enrollment.enrollment_date).toISOString().split('T')[0] : ''
    );
    const isEdit = !!enrollment;
    const method = isEdit ? 'put' : 'post';
    const action = isEdit ? `/enrollments/${enrollment.id}` : '/enrollments';
    const title = isEdit ? 'Edit Enrollment' : 'Add New Enrollment';
    const description = isEdit
        ? 'Update the enrollment information below.'
        : 'Add a new enrollment to your system. Fill in the details below.';
    const submitLabel = isEdit ? 'Update Enrollment' : 'Add Enrollment';

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {isEdit ? (
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <Pencil className="size-4" />
                    </Button>
                ) : (
                    <Button variant="default" className="gap-2">
                        <Plus className="size-4" />
                        Add Enrollment
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <Form
                    method={method}
                    action={action}
                    onSuccess={() => setOpen(false)}
                    className="grid gap-4 py-4"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-2">
                                <Label htmlFor="student_id">Student</Label>
                                <Select
                                    value={selectedStudentId}
                                    onValueChange={setSelectedStudentId}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a student" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {students.map((student) => (
                                            <SelectItem key={student.id} value={student.id}>
                                                {student.first_name} {student.last_name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <input
                                    type="hidden"
                                    name="student_id"
                                    value={selectedStudentId}
                                />
                                <InputError message={errors.student_id} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="course_id">Course</Label>
                                <Select
                                    value={selectedCourseId}
                                    onValueChange={setSelectedCourseId}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a course" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {courses.map((course) => (
                                            <SelectItem key={course.id} value={course.id}>
                                                {course.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <input
                                    type="hidden"
                                    name="course_id"
                                    value={selectedCourseId}
                                />
                                <InputError message={errors.course_id} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="enrollment_date">Enrollment Date</Label>
                                <Input
                                    id="enrollment_date"
                                    type="date"
                                    name="enrollment_date"
                                    required
                                    value={enrollmentDate}
                                    onChange={(e) => setEnrollmentDate(e.target.value)}
                                />
                                <InputError message={errors.enrollment_date} />
                            </div>

                            <div className="flex gap-2 justify-end pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setOpen(false)}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={processing}
                                    className="gap-2"
                                >
                                    {processing && <Spinner />}
                                    {submitLabel}
                                </Button>
                            </div>
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default ModelForm;
