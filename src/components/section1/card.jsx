import { cn } from "@/lib/utils";

const Card = ({ className, children }) => {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-end overflow-hidden min-h-[480px] rounded-[48px] py-14 px-6 relative [background:linear-gradient(rgba(255,255,255,0)_0%,rgba(255,255,255,0.05)_100%)] border border-white/10",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Card;
