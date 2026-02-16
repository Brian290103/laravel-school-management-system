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
import type { Course, Teacher } from '@/types';

type CourseDialogProps = {
    course?: Course;
    teachers: Teacher[];
};

const ModelForm = ({ course, teachers }: CourseDialogProps) => {
    const [open, setOpen] = useState(false);
    const [selectedTeacherId, setSelectedTeacherId] = useState(
        course?.teacher_id || ''
    );
    const isEdit = !!course;
    const method = isEdit ? 'put' : 'post';
    const action = isEdit ? `/courses/${course.id}` : '/courses';
    const title = isEdit ? 'Edit Course' : 'Add New Course';
    const description = isEdit
        ? 'Update the course information below.'
        : 'Add a new course to your school. Fill in the details below.';
    const submitLabel = isEdit ? 'Update Course' : 'Add Course';

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
                        Add Course
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
                                <Label htmlFor="name">Course Name</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Mathematics"
                                    defaultValue={course?.name || ''}
                                />
                                <InputError message={errors.name} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="teacher_id">Teacher</Label>
                                <Select
                                    value={selectedTeacherId}
                                    onValueChange={setSelectedTeacherId}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a teacher" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {teachers.map((teacher) => (
                                            <SelectItem key={teacher.id} value={teacher.id}>
                                                {teacher.first_name} {teacher.last_name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <input
                                    type="hidden"
                                    name="teacher_id"
                                    value={selectedTeacherId}
                                />
                                <InputError message={errors.teacher_id} />
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
