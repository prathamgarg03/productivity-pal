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
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
            <h3 className="text-2xl font-bold text-center">Suggestion Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFieldFocus("name")}
                    required
                />
                <Textarea
                    name="suggestion"
                    placeholder="Your Suggestion"
                    value={formData.suggestion}
                    onChange={handleChange}
                    onFocus={() => handleFieldFocus("suggestion")}
                    required
                />
                <Button type="submit" className="w-full">
                    Submit
                </Button>
            </form>
            <OnScreenKeyboard
                onKeyPress={handleKeyPress}
                onSpace={handleSpace}
                onBackspace={handleBackspace}
            />
        </div>
    );
}
