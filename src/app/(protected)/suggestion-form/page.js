"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { OnScreenKeyboard } from "@/components/ui/onScreenKeyboard";

export default function SuggestionForm() {
    const [formData, setFormData] = useState({
        name: "",
        suggestion: "",
        focusedField: "name",
    });

    // Disable physical keyboard
    useEffect(() => {
        const handleKeyDown = (e) => {
            e.preventDefault();
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({
            name: "",
            suggestion: "",
            focusedField: "name",
        });
        alert("Thank you for your Suggestion! We will not be taking it in serious consideration.");
    };

    const handleKeyPress = (char) => {
        setFormData((prev) => ({
            ...prev,
            [prev.focusedField]: prev[prev.focusedField] + char,
        }));
    };

    const handleSpace = () => {
        setFormData((prev) => ({
            ...prev,
            [prev.focusedField]: prev[prev.focusedField] + " ",
        }));
    };

    const handleBackspace = () => {
        setFormData((prev) => ({
            ...prev,
            [prev.focusedField]: prev[prev.focusedField].slice(0, -1),
        }));
    };

    const handleFieldFocus = (field) => {
        setFormData((prev) => ({ ...prev, focusedField: field }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden transition-all duration-200 hover:shadow-xl">
                <div className="mt-4">
                    <h3 className="text-2xl font-bold text-center text-primary">Suggestion Form</h3>
                </div>

                <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-slate-700">Your Name</label>
                            <Input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={() => handleFieldFocus("name")}
                                required
                                className={`transition-all duration-200 ${formData.focusedField === "name" ? "border-primary ring-1 ring-primary/20" : ""}`}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="suggestion" className="text-sm font-medium text-slate-700">Your Suggestion</label>
                            <Textarea
                                id="suggestion"
                                name="suggestion"
                                placeholder="What would you like to suggest?"
                                value={formData.suggestion}
                                onChange={handleChange}
                                onFocus={() => handleFieldFocus("suggestion")}
                                required
                                className={`min-h-[120px] transition-all duration-200 ${formData.focusedField === "suggestion" ? "border-primary ring-1 ring-primary/20" : ""}`}
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full font-medium py-5 transition-all duration-200 hover:translate-y-[-2px]"
                        >
                            Submit Suggestion
                        </Button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-slate-100">
                        <OnScreenKeyboard
                            onKeyPress={handleKeyPress}
                            onSpace={handleSpace}
                            onBackspace={handleBackspace}
                            className="rounded-lg shadow-sm bg-slate-50 p-2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}