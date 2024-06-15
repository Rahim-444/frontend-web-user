
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { Link } from "@nextui-org/link";




export const ForgetPasswordPageView = () => {
    return (
        <div className="mx-auto max-w-md space-y-6 py-12 px-4 sm:px-6 lg:px-8">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Forgot Password</h1>
                <p className="text-gray-500 dark:text-gray-400">
                    Enter your email address below and we&apos;ll send you a link to reset your password.
                </p>
            </div>
            <form className="space-y-4">
                <div>
                    <Input id="email" type="email" placeholder="name@example.com" required label={"Email address"} />
                </div>
                <Button type="submit" className="w-full">
                    Reset Password
                </Button>
            </form>
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                <Link href="#" className="font-medium underline underline-offset-2">
                    Return to login
                </Link>
            </div>
        </div>
    )
}