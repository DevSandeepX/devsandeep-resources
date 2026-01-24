import { toast } from "sonner"

type ActionToastProps = {
    success: boolean
    message?: string
}

export function actionToast({ success, message }: ActionToastProps) {
    if (success) {
        toast.success(message ?? "Action completed successfully")
    } else {
        toast.error(message ?? "Something went wrong")
    }
}
