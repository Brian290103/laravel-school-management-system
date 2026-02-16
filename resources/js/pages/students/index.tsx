import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import ModelForm from '@/pages/students/model-form';
import ModelDelete from '@/pages/students/model-delete';
import type { BreadcrumbItem, Student } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from '@/components/ui/empty';
import { Users } from 'lucide-react';
import Heading from '@/components/heading';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Students',
        href: '/students',
    },
];

type Props = {
    students: Student[];
};

export default function Students({ students }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Students" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex justify-between items-center">
                    <Heading
                        variant="default"
                        title="Students"
                        description={`Manage your school students. Total students: ${students.length}`}
                    />
                    <ModelForm />
                </div>

                <Card>
                    <CardContent>
                        {students.length === 0 ? (
                            <Empty>
                                <EmptyHeader>
                                    <EmptyMedia variant="icon">
                                        <Users />
                                    </EmptyMedia>
                                    <EmptyTitle>No Students Yet</EmptyTitle>
                                    <EmptyDescription>
                                        You haven't added any students yet. Get started by creating your first student.
                                    </EmptyDescription>
                                </EmptyHeader>
                                <EmptyContent className="flex-row justify-center gap-2">
                                    <ModelForm />
                                </EmptyContent>
                            </Empty>
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>#</TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Grade</TableHead>
                                        <TableHead>Created</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {students.map((student, index) => (
                                        <TableRow key={student.id}>
                                            <TableCell className="font-medium">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell className="font-medium">
                                                {student.first_name} {student.last_name}
                                            </TableCell>
                                            <TableCell>{student.email}</TableCell>
                                            <TableCell>{student.grade}</TableCell>
                                            <TableCell className="text-muted-foreground">
                                                {new Date(student.created_at).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex gap-2 justify-end">
                                                    <ModelForm student={student} />
                                                    <ModelDelete studentId={student.id} />
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
