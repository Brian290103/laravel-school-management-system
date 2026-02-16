import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import { Users, GraduationCap, BookMarked, FileText, BookOpen } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

type StatCard = {
    title: string;
    value: number;
    icon: React.ReactNode;
    description: string;
    color: string;
};

type Props = {
    stats: {
        teachers: number;
        students: number;
        courses: number;
        enrollments: number;
        subjects: number;
    };
};

export default function Dashboard({ stats }: Props) {
    const statCards: StatCard[] = [
        {
            title: 'Teachers',
            value: stats.teachers,
            icon: <Users className="h-6 w-6" />,
            description: 'Total teachers in system',
            color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
        },
        {
            title: 'Students',
            value: stats.students,
            icon: <GraduationCap className="h-6 w-6" />,
            description: 'Total students enrolled',
            color: 'bg-green-500/10 text-green-600 dark:text-green-400',
        },
        {
            title: 'Courses',
            value: stats.courses,
            icon: <BookMarked className="h-6 w-6" />,
            description: 'Total courses available',
            color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
        },
        {
            title: 'Enrollments',
            value: stats.enrollments,
            icon: <FileText className="h-6 w-6" />,
            description: 'Total active enrollments',
            color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
        },
        {
            title: 'Subjects',
            value: stats.subjects,
            icon: <BookOpen className="h-6 w-6" />,
            description: 'Total unique subjects',
            color: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground mt-2">
                        Welcome back! Here's an overview of your school management system.
                    </p>
                </div>

                <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-5">
                    {statCards.map((stat, index) => (
                        <Card key={index} className="overflow-hidden">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {stat.title}
                                </CardTitle>
                                <div className={`p-2 rounded-lg ${stat.color}`}>
                                    {stat.icon}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {stat.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Stats</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Average Students per Course
                                    </p>
                                </div>
                                <p className="text-2xl font-bold">
                                    {stats.courses > 0
                                        ? (stats.enrollments / stats.courses).toFixed(1)
                                        : 0}
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Total System Load
                                    </p>
                                </div>
                                <p className="text-2xl font-bold">
                                    {stats.teachers +
                                        stats.students +
                                        stats.courses}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>System Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="text-sm">
                                <p className="text-muted-foreground mb-1">
                                    Teaching Staff
                                </p>
                                <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                                    <div
                                        className="bg-blue-600 h-2 rounded-full"
                                        style={{
                                            width: `${Math.min(
                                                (stats.teachers / Math.max(stats.students, 1)) *
                                                    100,
                                                100
                                            )}%`,
                                        }}
                                    ></div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {stats.teachers} teachers managing{' '}
                                    {stats.students} students
                                </p>
                            </div>
                            <div className="text-sm">
                                <p className="text-muted-foreground mb-1">
                                    Enrollment Rate
                                </p>
                                <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                                    <div
                                        className="bg-green-600 h-2 rounded-full"
                                        style={{
                                            width: `${Math.min(
                                                (stats.enrollments /
                                                    Math.max(
                                                        stats.students *
                                                            stats.courses,
                                                        1
                                                    )) *
                                                    100,
                                                100
                                            )}%`,
                                        }}
                                    ></div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {stats.enrollments} enrollments
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
