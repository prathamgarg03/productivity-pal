"use client"
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Zap,
    Brain,
    Clock,
    Plus,
    BarChart2,
    Settings,
    Bell,
    User,
    Search,
    CheckCircle,
    XCircle,
    ChevronUp,
    MoreHorizontal,
    ArrowUpRight,
    Trash,
    RotateCcw,
    ChevronDown
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Sidebar from "@/components/sidebar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function Dashboard() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Review quarterly synergy metrics", completed: false, priority: "Critical", complexity: "High", domain: "Strategic" },
        { id: 2, text: "Schedule cognitive alignment session", completed: true, priority: "High", complexity: "Medium", domain: "Operational" },
        { id: 3, text: "Update neural workflow patterns", completed: false, priority: "Medium", complexity: "Low", domain: "Administrative" },
    ]);

    const [newTask, setNewTask] = useState("");
    const [productivityScore, setProductivityScore] = useState(67);
    const [synergisticPotential, setSynergisticPotential] = useState(42);
    const [loadingDashboard, setLoadingDashboard] = useState(true);
    const [activeView, setActiveView] = useState("tasks");
    const [selectedPriority, setSelectedPriority] = useState("Medium");
    const [selectedComplexity, setSelectedComplexity] = useState("Standard");
    const [selectedDomain, setSelectedDomain] = useState("Operational");

    const priorities = ["Critical", "High", "Medium", "Low", "Exponential"];
    const complexities = ["Quantum", "Neural", "Temporal", "Cognitive", "Standard"];
    const domains = ["Strategic", "Operational", "Administrative", "Transformative", "Disruptive"];

    useEffect(() => {
        // Simulate dashboard loading
        const timer = setTimeout(() => {
            setLoadingDashboard(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const addTask = () => {
        if (newTask.trim() === "") return;

        const newTaskObj = {
            id: tasks.length + 1,
            text: newTask,
            completed: false,
            priority: selectedPriority,
            complexity: selectedComplexity,
            domain: selectedDomain
        };

        setTasks([...tasks, newTaskObj]);
        setNewTask("");

        // Update fake metrics
        setProductivityScore(Math.min(100, productivityScore + Math.floor(Math.random() * 5)));
        setSynergisticPotential(Math.min(100, synergisticPotential + Math.floor(Math.random() * 7)));
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));

        // Update fake metrics when completing tasks
        setProductivityScore(Math.min(100, productivityScore + Math.floor(Math.random() * 3)));
        setSynergisticPotential(Math.max(0, synergisticPotential - Math.floor(Math.random() * 4)));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));

        // Update fake metrics when deleting tasks
        setProductivityScore(Math.max(0, productivityScore - Math.floor(Math.random() * 8)));
        setSynergisticPotential(Math.max(0, synergisticPotential - Math.floor(Math.random() * 5)));
    };

    const optimizeAll = () => {
        // Fake optimization that just shows a loading state
        setLoadingDashboard(true);
        setTimeout(() => {
            setProductivityScore(Math.min(100, productivityScore + 15));
            setSynergisticPotential(Math.min(100, synergisticPotential + 23));
            setLoadingDashboard(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
            <div className="flex flex-col h-screen">
                {/* Top Navigation */}
                <header className="bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            ProductivityPal
                        </h1>
                        <Badge className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-100">BETA</Badge>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input className="pl-8 w-64" placeholder="Search cognitive action items..." />
                        </div>
                        <Button variant="ghost" size="icon">
                            <Bell className="h-5 w-5 text-gray-600" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Settings className="h-5 w-5 text-gray-600" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5 text-gray-600" />
                        </Button>
                    </div>
                </header>

                <div className="flex flex-1 overflow-hidden">
                    {/* Main Content */}
                    <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
                        {loadingDashboard ? (
                            <div className="h-full flex flex-col items-center justify-center">
                                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                                <p className="mt-4 text-lg text-gray-600">Optimizing Quantum Matrices...</p>
                                <p className="text-sm text-gray-500">Realigning cognitive workflows for maximum synergy</p>
                            </div>
                        ) : (
                            <>
                                {/*<div className="flex justify-between items-center mb-6">*/}
                                {/*    <h2 className="text-2xl font-bold text-gray-800">Cognitive Task Harmonization Hub</h2>*/}
                                {/*    <Button onClick={optimizeAll} className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">*/}
                                {/*        <RotateCcw className="h-4 w-4 mr-2" /> Neural Optimization*/}
                                {/*    </Button>*/}
                                {/*</div>*/}

                                {/*/!* Stats Cards *!/*/}
                                {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">*/}
                                {/*    <Card>*/}
                                {/*        <CardHeader className="pb-2">*/}
                                {/*            <CardTitle className="text-lg">Productivity Coefficient</CardTitle>*/}
                                {/*            <CardDescription>AI-analyzed work pattern efficiency</CardDescription>*/}
                                {/*        </CardHeader>*/}
                                {/*        <CardContent>*/}
                                {/*            <div className="flex justify-between items-end mb-2">*/}
                                {/*                <span className="text-3xl font-bold">{productivityScore}%</span>*/}
                                {/*                <Badge className="bg-green-100 text-green-800">+5.3% <ArrowUpRight className="h-3 w-3 inline" /></Badge>*/}
                                {/*            </div>*/}
                                {/*            <Progress value={productivityScore} className="h-2" />*/}
                                {/*        </CardContent>*/}
                                {/*    </Card>*/}

                                {/*    <Card>*/}
                                {/*        <CardHeader className="pb-2">*/}
                                {/*            <CardTitle className="text-lg">Synergistic Potential</CardTitle>*/}
                                {/*            <CardDescription>Quantum neural network alignment</CardDescription>*/}
                                {/*        </CardHeader>*/}
                                {/*        <CardContent>*/}
                                {/*            <div className="flex justify-between items-end mb-2">*/}
                                {/*                <span className="text-3xl font-bold">{synergisticPotential}%</span>*/}
                                {/*                <Badge className="bg-amber-100 text-amber-800">Needs Attention</Badge>*/}
                                {/*            </div>*/}
                                {/*            <Progress value={synergisticPotential} className="h-2" />*/}
                                {/*        </CardContent>*/}
                                {/*    </Card>*/}

                                {/*    <Card>*/}
                                {/*        <CardHeader className="pb-2">*/}
                                {/*            <CardTitle className="text-lg">Task Completion Velocity</CardTitle>*/}
                                {/*            <CardDescription>Temporal momentum coefficient</CardDescription>*/}
                                {/*        </CardHeader>*/}
                                {/*        <CardContent>*/}
                                {/*            <div className="flex justify-between items-end mb-2">*/}
                                {/*                <span className="text-3xl font-bold">7.3x</span>*/}
                                {/*                <Badge className="bg-green-100 text-green-800">Industry Leading</Badge>*/}
                                {/*            </div>*/}
                                {/*            <Progress value={73} className="h-2" />*/}
                                {/*        </CardContent>*/}
                                {/*    </Card>*/}
                                {/*</div>*/}

                                {/* Main content tabs */}
                                <Tabs defaultValue={activeView} onValueChange={setActiveView} className="mb-6">
                                    <TabsList className="grid grid-cols-3 w-full max-w-md">
                                        <TabsTrigger value="tasks">Task Paradigms</TabsTrigger>
                                        <TabsTrigger value="analytics">Cognitive Analytics</TabsTrigger>
                                        <TabsTrigger value="insights">AI Insights</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="tasks" className="mt-6">
                                        <Card className="border-0 shadow-sm">
                                            <CardHeader className="pb-2">
                                                <div className="flex justify-between items-center">
                                                    <CardTitle>Synergistic Task Matrix</CardTitle>
                                                    <Badge className="bg-blue-100 text-blue-800">{tasks.filter(t => !t.completed).length} Pending Items</Badge>
                                                </div>
                                                <CardDescription>Neurally aligned action items requiring cognitive processing</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="space-y-4">
                                                    {/* Add new task with all selections */}
                                                    <div className="space-y-3">
                                                        <Input
                                                            value={newTask}
                                                            onChange={(e) => setNewTask(e.target.value)}
                                                            placeholder="Add new quantum-aligned action item..."
                                                            onKeyDown={(e) => e.key === 'Enter' && addTask()}
                                                            className="w-full"
                                                        />
                                                        <div className="flex flex-wrap gap-2">
                                                            <Select value={selectedPriority} onValueChange={setSelectedPriority}>
                                                                <SelectTrigger className="w-50">
                                                                    <SelectValue placeholder="Select priority" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {priorities.map((priority) => (
                                                                        <SelectItem key={priority} value={priority}>
                                                                            {priority} Priority
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>

                                                            <Select value={selectedComplexity} onValueChange={setSelectedComplexity}>
                                                                <SelectTrigger className="w-50">
                                                                    <SelectValue placeholder="Select complexity" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {complexities.map((complexity) => (
                                                                        <SelectItem key={complexity} value={complexity}>
                                                                            {complexity} Complexity
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>

                                                            <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                                                                <SelectTrigger className="w-50">
                                                                    <SelectValue placeholder="Select domain" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {domains.map((domain) => (
                                                                        <SelectItem key={domain} value={domain}>
                                                                            {domain} Domain
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>

                                                            <Button onClick={addTask} className="bg-blue-600 hover:bg-blue-700 ml-auto">
                                                                <Plus className="h-4 w-4 mr-2" /> Add Paradigm
                                                            </Button>
                                                        </div>
                                                    </div>

                                                    {/* Task list */}
                                                    <div className="space-y-3">
                                                        {tasks.map((task) => (
                                                            <div
                                                                key={task.id}
                                                                className={`bg-white rounded-lg border p-4 flex items-center justify-between transition-all ${
                                                                    task.completed ? 'opacity-60' : ''
                                                                }`}
                                                            >
                                                                <div className="flex items-start gap-3">
                                                                    <Checkbox
                                                                        checked={task.completed}
                                                                        onCheckedChange={() => toggleTask(task.id)}
                                                                        className="mt-1"
                                                                    />
                                                                    <div>
                                                                        <p className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                                                                            {task.text}
                                                                        </p>
                                                                        <div className="flex gap-2 mt-1">
                                                                            <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                                                                                {task.priority} Priority
                                                                            </Badge>
                                                                            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
                                                                                {task.complexity} Complexity
                                                                            </Badge>
                                                                            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                                                                                {task.domain} Domain
                                                                            </Badge>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <Button
                                                                        variant="ghost"
                                                                        size="sm"
                                                                        onClick={() => deleteTask(task.id)}
                                                                        className="text-gray-500 hover:text-red-600"
                                                                    >
                                                                        <Trash className="h-4 w-4" />
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        ))}

                                                        {tasks.length === 0 && (
                                                            <div className="text-center py-8">
                                                                <p className="text-gray-500">No synergistic tasks found. Add a new paradigm to begin.</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>

                                    <TabsContent value="analytics" className="mt-6">
                                        <Card className="border-0 shadow-sm">
                                            <CardContent className="p-8">
                                                <div className="text-center py-8">
                                                    <Brain className="w-16 h-16 mx-auto text-blue-500 mb-4" />
                                                    <h3 className="text-xl font-bold mb-2">Advanced Cognitive Analytics</h3>
                                                    <p className="text-gray-500 mb-6 max-w-md mx-auto">
                                                        Our neural processing engine is analyzing your workflow patterns to generate quantum-level insights.
                                                    </p>
                                                    <Badge className="bg-amber-100 text-amber-800">Requires Enterprise Subscription</Badge>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>

                                    <TabsContent value="insights" className="mt-6">
                                        <Card className="border-0 shadow-sm">
                                            <CardContent className="p-8">
                                                <div className="text-center py-8">
                                                    <Zap className="w-16 h-16 mx-auto text-indigo-500 mb-4" />
                                                    <h3 className="text-xl font-bold mb-2">AI-Powered Workflow Insights</h3>
                                                    <p className="text-gray-500 mb-6 max-w-md mx-auto">
                                                        Our temporal alignment algorithms have detected significant inefficiencies in your task paradigms.
                                                    </p>
                                                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                                                        Unlock Neural Insights
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                </Tabs>

                                {/* Recent Activity */}
                                <Card className="border-0 shadow-sm">
                                    <CardHeader>
                                        <div className="flex justify-between items-center">
                                            <CardTitle>Temporal Activity Stream</CardTitle>
                                            <Button variant="ghost" size="sm">
                                                View Cognitive Timeline
                                            </Button>
                                        </div>
                                        <CardDescription>Recent neural-aligned interactions and synaptic events</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {[
                                                { icon: <CheckCircle />, text: "Cognitive resonance achieved for 'Update neural workflow patterns'", time: "2 minutes ago" },
                                                { icon: <XCircle />, text: "Quantum decoherence detected in prioritization matrix", time: "1 hour ago" },
                                                { icon: <ChevronUp />, text: "Synergistic potential increased by 15.7% after neural optimization", time: "3 hours ago" },
                                                { icon: <MoreHorizontal />, text: "Temporal workflow realignment scheduled for optimal productivity", time: "5 hours ago" }
                                            ].map((activity, index) => (
                                                <div key={index} className="flex items-start gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                        {activity.icon}
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-800">{activity.text}</p>
                                                        <p className="text-sm text-gray-500">{activity.time}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}