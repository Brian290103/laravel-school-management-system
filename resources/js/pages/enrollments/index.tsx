import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import ModelForm from '@/pages/enrollments/model-form';
import ModelDelete from '@/pages/enrollments/model-delete';
import type { BreadcrumbItem, Enrollment, Student, Course } from '@/types';
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
import { FileText } from 'lucide-react';
import Heading from '@/components/heading';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Enrollments',
        href: '/enrollments',
    },
];

type Props = {
    enrollments: Enrollment[];
    students: Student[];
    courses: Course[];
};

export default function Enrollments({ enrollments, students, courses }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Enrollments" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex justify-between items-center">
                    <Heading
                        variant="default"
                        title="Enrollments"
                        description={`Manage student enrollments. Total enrollments: ${enrollments.length}`}
                    />
                    <ModelForm students={students} courses={courses} />
                </div>

                <Card>
                    <CardContent>
                        {enrollments.length === 0 ? (
                            <Empty>
                                <EmptyHeader>
                                    <EmptyMedia variant="icon">
                                        <FileText />
                                    </EmptyMedia>
                                    <EmptyTitle>No Enrollments Yet</EmptyTitle>
                                    <EmptyDescription>
                                        You haven't added any enrollments yet. Get started by creating your first enrollment.
                                    </EmptyDescription>
                                </EmptyHeader>
                                <EmptyContent className="flex-row justify-center gap-2">
                                    <ModelForm students={students} courses={courses} />
                                </EmptyContent>
                            </Empty>
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>#</TableHead>
                                        <TableHead>Student</TableHead>
                                        <TableHead>Course</TableHead>
                                        <TableHead>Enrollment Date</TableHead>
                                        <TableHead>Created</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {enrollments.map((enrollment, index) => (
                                        <TableRow key={enrollment.id}>
                                            <TableCell className="font-medium">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell className="font-medium">
                                                {enrollment.student
                                                    ? `${enrollment.student.first_name} ${enrollment.student.last_name}`
                                                    : 'Unknown'}
                                            </TableCell>
                                            <TableCell>
                                                {enrollment.course?.name || 'Unknown'}
                                            </TableCell>
                                            <TableCell>
                                                {new Date(enrollment.enrollment_date).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell className="text-muted-foreground">
                                                {new Date(enrollment.created_at).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex gap-2 justify-end">
                                                    <ModelForm 
                                                        enrollment={enrollment} 
                                                        students={students}
                                                        courses={courses}
                                                    />
                                                    <ModelDelete enrollmentId={enrollment.id} />
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
