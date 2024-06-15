import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { Avatar } from "@nextui-org/avatar";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/checkbox";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { JSX, SVGProps } from "react";



export default function UserSettingPageView() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-100 dark:bg-gray-900">
            <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-10">
                <div className="max-w-6xl w-full mx-auto grid gap-2">
                    <h1 className="font-semibold text-3xl">Settings</h1>
                </div>
                <div className="grid md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr] items-start gap-6 max-w-6xl w-full mx-auto">
                    <nav className="text-sm text-gray-500 grid gap-4 dark:text-gray-400">
                        <Link href="#" className="font-semibold text-gray-900 dark:text-gray-50" >
                            Profile
                        </Link>
                        <Link href="#" >
                            Notifications
                        </Link>
                        <Link href="#" >
                            Appearance
                        </Link>
                        <Link href="#" >
                            Security
                        </Link>
                        <Link href="#" >
                            Integrations
                        </Link>
                        <Link href="#" >
                            Billing
                        </Link>
                    </nav>
                    <div className="grid gap-6">
                        <Card>
                            <CardHeader>
                                <h1>Profile</h1>
                                <p>Update your profile information.</p>
                            </CardHeader>
                            <CardBody className="space-y-4">
                                <div className="space-y-2">
                                    <div>Avatar</div>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-16 w-16" src="/placeholder-user.jpg">
                                        </Avatar>
                                        <Button variant="bordered">Change</Button>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Input id="name" placeholder="Enter your name" label="Name" />
                                </div>
                                <div className="space-y-2">
                                    <Input id="email" placeholder="Enter your email" type="email" label="Email" />
                                </div>
                                <div className="space-y-2">
                                    <Input id="password" placeholder="Enter your password" type="password" label="Password" />
                                </div>
                            </CardBody>
                            <CardFooter>
                                <Button className="ml-auto">Save</Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h1>Preferences</h1>
                                <p>Customize your settings and preferences.</p>
                            </CardHeader>
                            <CardBody className="space-y-4">
                                <div className="space-y-2">
                                    <Select label="Theme" placeholder="Select theme">
                                        <SelectItem value="light" key={0}>Light</SelectItem>
                                        <SelectItem value="dark" key={1}>Dark</SelectItem>
                                        <SelectItem value="system" key={2}>System</SelectItem>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="notifications">Notifications</label>
                                    <div className="grid gap-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="email-notifications" defaultChecked />
                                            <label
                                                htmlFor="email-notifications"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Email Notifications
                                            </label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="push-notifications" />
                                            <label
                                                htmlFor="push-notifications"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Push Notifications
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                            <CardFooter>
                                <Button className="ml-auto">Save</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}

function FrameIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="22" x2="2" y1="6" y2="6" />
            <line x1="22" x2="2" y1="18" y2="18" />
            <line x1="6" x2="6" y1="2" y2="22" />
            <line x1="18" x2="18" y1="2" y2="22" />
        </svg>
    )
}