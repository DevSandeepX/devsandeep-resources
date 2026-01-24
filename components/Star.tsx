type StarProps = {
    filled: boolean;
    className?: string;
};

export function Star({ filled, className }: StarProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            className={className}
            fill={filled ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.5a.56.56 0 011.04 0l2.36 4.78a.56.56 0 00.42.3l5.28.77a.56.56 0 01.31.96l-3.82 3.72a.56.56 0 00-.16.5l.9 5.26a.56.56 0 01-.81.59l-4.72-2.48a.56.56 0 00-.52 0l-4.72 2.48a.56.56 0 01-.81-.59l.9-5.26a.56.56 0 00-.16-.5L3.11 10.3a.56.56 0 01.31-.96l5.28-.77a.56.56 0 00.42-.3l2.36-4.78z"
            />
        </svg>
    );
}
