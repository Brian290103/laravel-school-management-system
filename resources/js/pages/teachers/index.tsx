import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import ModelForm from '@/pages/teachers/model-form';
import ModelDelete from '@/pages/teachers/model-delete';
import type { BreadcrumbItem, Teacher } from '@/types';
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
        title: 'Teachers',
        href: '/teachers',
    },
];

type Props = {
    teachers: Teacher[];
};

export default function Teachers({ teachers }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Teachers" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex justify-between items-center">
                    <Heading
                        variant="default"
                        title="Teachers"
                        description={`Manage your school teachers. Total teachers: ${teachers.length}`}
                    />
                    <ModelForm />
                </div>

                <Card>
                    <CardContent>
                        {teachers.length === 0 ? (
                            <Empty>
                                <EmptyHeader>
                                    <EmptyMedia variant="icon">
                                        <Users />
                                    </EmptyMedia>
                                    <EmptyTitle>No Teachers Yet</EmptyTitle>
                                    <EmptyDescription>
                                        You haven't added any teachers yet. Get started by creating your first teacher.
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
                                        <TableHead>Subject</TableHead>
                                        <TableHead>Created</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {teachers.map((teacher, index) => (
                                        <TableRow key={teacher.id}>
                                            <TableCell className="font-medium">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell className="font-medium">
                                                {teacher.first_name} {teacher.last_name}
                                            </TableCell>
                                            <TableCell>{teacher.subject}</TableCell>
                                            <TableCell className="text-muted-foreground">
                                                {new Date(teacher.created_at).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex gap-2 justify-end">
                                                    <ModelForm teacher={teacher} />
                                                    <ModelDelete teacherId={teacher.id} />
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
