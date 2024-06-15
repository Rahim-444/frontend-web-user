

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/react";
import { JSX, SVGProps } from "react";






export const UserConnectPageView = () => {

    return (
        <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-8">
                <div>
                    <h1 className="text-3xl font-bold">Account Settings</h1>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">Manage your account settings and preferences.</p>
                </div>
                <div className="grid gap-6">
                    <Card>
                        <CardHeader>
                            <h1>Connected Accounts</h1>
                            <p>Manage the third-party accounts connected to your profile.</p>
                        </CardHeader>
                        <CardBody>
                            <div className="grid gap-4">
                                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                                            <ChromeIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                                        </div>
                                        <div>
                                            <div className="font-medium">Google</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">john@example.com</div>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm">
                                        <XIcon className="h-5 w-5" />
                                        <span className="sr-only">Disconnect</span>
                                    </Button>
                                </div>
                                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                                            <GitlabIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                                        </div>
                                        <div>
                                            <div className="font-medium">GitHub</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">@shadcn</div>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm">
                                        <XIcon className="h-5 w-5" />
                                        <span className="sr-only">Disconnect</span>
                                    </Button>
                                </div>
                                <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-full bg-gray-100 p-2 dark:bg-gray-800">
                                            <TwitterIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                                        </div>
                                        <div>
                                            <div className="font-medium">Twitter</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">@shadcn</div>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="sm">
                                        <XIcon className="h-5 w-5" />
                                        <span className="sr-only">Disconnect</span>
                                    </Button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            <h1>Connect New Account</h1>
                            <p>Add a new third-party account to your profile.</p>
                        </CardHeader>
                        <CardBody>
                            <div className="grid gap-4">
                                <Button variant="bordered">
                                    <ChromeIcon className="mr-2 h-5 w-5" />
                                    Connect Google Account
                                </Button>
                                <Button variant="bordered">
                                    <GitlabIcon className="mr-2 h-5 w-5" />
                                    Connect GitHub Account
                                </Button>
                                <Button variant="bordered">
                                    <TwitterIcon className="mr-2 h-5 w-5" />
                                    Connect Twitter Account
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>

    )
}


function ChromeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" x2="12" y1="8" y2="8" />
            <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
            <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
        </svg>
    )
}


function GitlabIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
        </svg>
    )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}