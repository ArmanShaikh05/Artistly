"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Music, Eye, EyeOff, ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { loginSchema } from "@/schema/login-form-schema";



type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      if (data.username === "manager123" && data.password === "manager123") {
        // Store authentication state (in a real app, use proper auth)
        localStorage.setItem("isManagerAuthenticated", "true");

        toast("Login Successful", {
          description: "Welcome back, Manager!",
        });

        router.push("/dashboard");
      } else {
        toast("Login Failed", {
          description: "Invalid username or password. Please try again.",
        });

        form.setError("username", { message: "Invalid credentials" });
        form.setError("password", { message: "Invalid credentials" });
      }

      setIsLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="w-full max-w-md relative">
        {/* Back to Home Link */}
        <div className="mb-6">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <Card className="shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-2">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-30"></div>
                <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-full">
                  <Music className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Artistly
              </span>
            </div>

            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
              Manager Login
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300">
              Access your management dashboard
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-200 font-medium">
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your username"
                          className="h-12 bg-white/50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary/20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-200 font-medium">
                        Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="h-12 bg-white/50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-primary/20 pr-12"
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-12 px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Signing in...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </Form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600">
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-2 font-medium">
                Demo Credentials
              </p>
              <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                <p>
                  <span className="font-medium">Username:</span> manager123
                </p>
                <p>
                  <span className="font-medium">Password:</span> manager123
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Need help? Contact{" "}
            <Link
              href="mailto:support@artistly.com"
              className="text-primary hover:underline"
            >
              support@artistly.com
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
