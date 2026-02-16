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

type TeacherDeleteProps = {
    teacherId: string;
};

export default function ModelDelete({ teacherId }: TeacherDeleteProps) {
    const [open, setOpen] = useState(false);

    const handleDelete = useCallback(() => {
        router.delete(`/teachers/${teacherId}`);
        setOpen(false);
    }, [teacherId]);

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
                        <AlertDialogTitle>Delete Teacher</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete this teacher? This action cannot be undone.
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
