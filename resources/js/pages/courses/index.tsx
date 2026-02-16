import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import ModelForm from '@/pages/courses/model-form';
import ModelDelete from '@/pages/courses/model-delete';
import type { BreadcrumbItem, Course, Teacher } from '@/types';
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
import { BookMarked } from 'lucide-react';
import Heading from '@/components/heading';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Courses',
        href: '/courses',
    },
];

type Props = {
    courses: Course[];
    teachers: Teacher[];
};

export default function Courses({ courses, teachers }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Courses" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex justify-between items-center">
                    <Heading
                        variant="default"
                        title="Courses"
                        description={`Manage your school courses. Total courses: ${courses.length}`}
                    />
                    <ModelForm teachers={teachers} />
                </div>

                <Card>
                    <CardContent>
                        {courses.length === 0 ? (
                            <Empty>
                                <EmptyHeader>
                                    <EmptyMedia variant="icon">
                                        <BookMarked />
                                    </EmptyMedia>
                                    <EmptyTitle>No Courses Yet</EmptyTitle>
                                    <EmptyDescription>
                                        You haven't added any courses yet. Get started by creating your first course.
                                    </EmptyDescription>
                                </EmptyHeader>
                                <EmptyContent className="flex-row justify-center gap-2">
                                    <ModelForm teachers={teachers} />
                                </EmptyContent>
                            </Empty>
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>#</TableHead>
                                        <TableHead>Course Name</TableHead>
                                        <TableHead>Teacher</TableHead>
                                        <TableHead>Created</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {courses.map((course, index) => (
                                        <TableRow key={course.id}>
                                            <TableCell className="font-medium">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell className="font-medium">
                                                {course.name}
                                            </TableCell>
                                            <TableCell>
                                                {course.teacher
                                                    ? `${course.teacher.first_name} ${course.teacher.last_name}`
                                                    : 'Unassigned'}
                                            </TableCell>
                                            <TableCell className="text-muted-foreground">
                                                {new Date(course.created_at).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex gap-2 justify-end">
                                                    <ModelForm course={course} teachers={teachers} />
                                                    <ModelDelete courseId={course.id} />
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
