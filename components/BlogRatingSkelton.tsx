export function BlogRatingSkeleton() {
    return (
        <div className="mt-3 flex items-center gap-3 animate-pulse">
            {/* Stars */}
            <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-4 w-4 rounded bg-muted"
                    />
                ))}
            </div>

            {/* Rating number */}
            <div className="h-4 w-10 rounded bg-muted" />

            {/* Reviews count */}
            <div className="h-4 w-14 rounded bg-muted" />
        </div>
    );
}
