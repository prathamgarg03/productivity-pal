import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { KeyboardKey } from "@/components/ui/keyboardKey";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const OnScreenKeyboard = ({ onKeyPress, onSpace, onBackspace }) => {
    // All characters in a single row - deliberately terrible!
    const keys = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "a", "s", "d", "f", "g", "h", "j", "k", "l", ";",
        "z", "x", "c", "v", "b", "n", "m", ",", ".", "/",
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
        "-", "_", "+", "=", "[", "]", "{", "}", "|", "\\",
        "'", '"', ":", "<", ">", "?", "~", "`"
    ];

    return (
        <div className="w-full max-w-3xl mx-auto p-4 border rounded-lg">
            <div className="mb-4">
                <ScrollArea className="w-full whitespace-nowrap border rounded-md p-4">
                    <div className="flex flex-row">
                        {keys.map((key, index) => (
                            <KeyboardKey
                                key={index}
                                character={key}
                                onKeyPress={() => onKeyPress(key)}
                            />
                        ))}
                        <KeyboardKey
                            character="Space"
                            onKeyPress={onSpace}
                            className="min-w-[100px]"
                        />
                        <KeyboardKey
                            character="Backspace"
                            onKeyPress={onBackspace}
                            className="min-w-[100px]"
                        />
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div>
        </div>
    );
};

export { OnScreenKeyboard };
