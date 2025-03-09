"use client";
import { useState } from "react";

export default function ProfileSetup() {
    const [formData, setFormData] = useState({
        username: "",
        phoneNumber: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/update-profile", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();  // ✅ Log the actual response

            if (response.ok) {
                console.log("Profile updated successfully:", data);
                // Redirect the user to the dashboard or another page
            } else {
                console.error("Failed to update profile:", data);  // ❌ Debug error response
            }
        } catch (error) {
            console.error("Error while updating profile:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange} placeholder="Username" required />
            <input type="tel" name="phoneNumber" onChange={handleChange} placeholder="Phone Number" required />
            <button type="submit">Submit</button>
        </form>
    );
}
