import { useState, useCallback } from 'react';
import { router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Trash2 } from 'lucide-react';

type EnrollmentDeleteProps = {
    enrollmentId: string;
};

export default function ModelDelete({ enrollmentId }: EnrollmentDeleteProps) {
    const [open, setOpen] = useState(false);

    const handleDelete = useCallback(() => {
        router.delete(`/enrollments/${enrollmentId}`);
        setOpen(false);
    }, [enrollmentId]);

    return (
        <>
            <Button
                variant="destructive"
                size="sm"
                onClick={() => setOpen(true)}
             >
                <Trash2 className="size-4" />
            </Button>

            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete Enrollment</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete this enrollment? This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="flex gap-2 justify-end">
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction  variant={"destructive"}
                            onClick={handleDelete}
                         >
                            Delete
                        </AlertDialogAction>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}
