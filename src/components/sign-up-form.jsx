import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function SignUpForm({ className, ...props }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        age: "200",
        zodiac: "",
    });

    const router = useRouter();

    const ages = Array.from({ length: 201 }, (_, i) => 200 - i);

    const zodiacSigns = [
        { value: "aries", label: "♈ Aries" },
        { value: "taurus", label: "♉ Taurus" },
        { value: "gemini", label: "♊ Gemini" },
        { value: "cancer", label: "♋ Cancer" },
        { value: "leo", label: "♌ Leo" },
        { value: "virgo", label: "♍ Virgo" },
        { value: "libra", label: "♎ Libra" },
        { value: "scorpio", label: "♏ Scorpio" },
        { value: "sagittarius", label: "♐ Sagittarius" },
        { value: "capricorn", label: "♑ Capricorn" },
        { value: "aquarius", label: "♒ Aquarius" },
        { value: "pisces", label: "♓ Pisces" },
    ];

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, age, zodiac } = formData;

        if (!name || !email || !password || !age || !zodiac) {
            alert("Please fill in all fields.");
            return;
        }

        router.push("/dashboard");
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden">
                <CardContent className="p-6 md:p-8 grid md:grid-cols-2 gap-6">
                    {/* Form Section */}
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        <div className="flex flex-col items-center text-center">
                            <h1 className="text-2xl font-bold">Sign Up</h1>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                value={formData.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                value={formData.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={formData.password}
                                onChange={(e) => handleChange("password", e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="age">Age</Label>
                            <Select value={formData.age} onValueChange={(value) => handleChange("age", value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Age" />
                                </SelectTrigger>
                                <SelectContent>
                                    {ages.map((ageOption) => (
                                        <SelectItem key={ageOption} value={String(ageOption)}>
                                            {ageOption}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="zodiac">Zodiac Sign</Label>
                            <Select value={formData.zodiac} onValueChange={(value) => handleChange("zodiac", value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Zodiac Sign" />
                                </SelectTrigger>
                                <SelectContent>
                                    {zodiacSigns.map((sign) => (
                                        <SelectItem key={sign.value} value={sign.value}>
                                            {sign.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <Button type="submit" className="w-full">
                            Sign Up
                        </Button>
                    </form>

                    {/* Image Section */}
                    <div className="relative hidden md:block">
                        <Image
                            src="/logo.png"
                            alt="Sign Up Image"
                            layout="fill"
                            objectFit="cover"
                            className="dark:brightness-[0.2] dark:grayscale rounded-2xl"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Terms and Privacy */}
            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
                By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
            </div>
        </div>
    );
}
