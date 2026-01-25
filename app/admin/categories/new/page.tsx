import { CategoryForm } from "@/features/categories/components/CaregoryForm";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function NewCategoryPage() {
    return (
        <div className="py-4">
            <Suspense fallback={<div className="w-full h-96 bg-muted rounded" />}>
                <CategoryForm />
            </Suspense>
        </div>
    );
}
