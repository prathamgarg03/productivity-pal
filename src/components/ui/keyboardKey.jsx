import React from "react";
import { cn } from "@/lib/utils";

const KeyboardKey = ({
                         character,
                         onKeyPress,
                         className
                     }) => {
    return (
        <button
            className={cn(
                "min-w-[40px] h-14 flex items-center justify-center border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md mx-1 flex-shrink-0",
                className
            )}
            onClick={() => onKeyPress(character)}
        >
            {character}
        </button>
    );
};

export { KeyboardKey };