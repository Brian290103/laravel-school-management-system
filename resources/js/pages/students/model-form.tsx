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
import type { Student } from '@/types';

type StudentDialogProps = {
    student?: Student;
};

const ModelForm = ({ student }: StudentDialogProps) => {
    const [open, setOpen] = useState(false);
    const isEdit = !!student;
    const method = isEdit ? 'put' : 'post';
    const action = isEdit ? `/students/${student.id}` : '/students';
    const title = isEdit ? 'Edit Student' : 'Add New Student';
    const description = isEdit
        ? 'Update the student information below.'
        : 'Add a new student to your school. Fill in the details below.';
    const submitLabel = isEdit ? 'Update Student' : 'Add Student';

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
                        Add Student
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
                                <Label htmlFor="first_name">First Name</Label>
                                <Input
                                    id="first_name"
                                    type="text"
                                    name="first_name"
                                    required
                                    placeholder="John"
                                    autoComplete="given-name"
                                    defaultValue={student?.first_name || ''}
                                />
                                <InputError message={errors.first_name} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="last_name">Last Name</Label>
                                <Input
                                    id="last_name"
                                    type="text"
                                    name="last_name"
                                    required
                                    placeholder="Doe"
                                    autoComplete="family-name"
                                    defaultValue={student?.last_name || ''}
                                />
                                <InputError message={errors.last_name} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="student@example.com"
                                    autoComplete="email"
                                    defaultValue={student?.email || ''}
                                />
                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="grade">Grade</Label>
                                <Input
                                    id="grade"
                                    type="text"
                                    name="grade"
                                    required
                                    placeholder="10A"
                                    defaultValue={student?.grade || ''}
                                />
                                <InputError message={errors.grade} />
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
