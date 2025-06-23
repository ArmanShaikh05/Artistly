"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Navigation } from "@/components/navigation";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Upload, Check } from "lucide-react";
import { toast } from "sonner";
import { formSchema } from "@/schema/onboard-form-schema";
import Image from "next/image";

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: 1, title: "Basic Information", description: "Tell us about yourself" },
  {
    id: 2,
    title: "Professional Details",
    description: "Your skills and experience",
  },
  {
    id: 3,
    title: "Pricing & Location",
    description: "Where you work and your rates",
  },
  { id: 4, title: "Review & Submit", description: "Confirm your information" },
];

const categories = [
  { id: "singers", label: "Singer" },
  { id: "dancers", label: "Dancer" },
  { id: "speakers", label: "Speaker" },
  { id: "djs", label: "DJ" },
];

const languages = [
  { id: "english", label: "English" },
  { id: "spanish", label: "Spanish" },
  { id: "french", label: "French" },
  { id: "german", label: "German" },
  { id: "italian", label: "Italian" },
  { id: "portuguese", label: "Portuguese" },
  { id: "mandarin", label: "Mandarin" },
  { id: "japanese", label: "Japanese" },
  { id: "korean", label: "Korean" },
];

const feeRanges = [
  { value: "0-300", label: "Under $300" },
  { value: "300-500", label: "$300 - $500" },
  { value: "500-1000", label: "$500 - $1000" },
  { value: "1000-2000", label: "$1000 - $2000" },
  { value: "2000+", label: "$2000+" },
];

export default function OnboardPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const imageRef = useRef<HTMLInputElement>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      categories: [],
      languages: [],
      feeRange: "",
      location: "",
      profileImage: "",
    },
  });

  const progress = (currentStep / steps.length) * 100;

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isValid = await form.trigger(fieldsToValidate);

    if (isValid && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getFieldsForStep = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 1:
        return ["name", "bio"];
      case 2:
        return ["categories", "languages"];
      case 3:
        return ["feeRange", "location"];
      default:
        return [];
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", data);
      toast.success("Application Submitted!", {
        description:
          "Your artist profile has been submitted for review. We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      form.reset();
      setCurrentStep(1);
    }, 2000);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your experience, style, and what makes you unique..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profileImage"
              render={({ field }) => (
                <div className="space-y-2">
                  <FormLabel>Profile Image (Optional)</FormLabel>
                  {field.value === "" ? (
                    <div
                      className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center"
                      onClick={() => imageRef.current?.click()}
                    >
                      <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PNG, JPG up to 5MB
                      </p>
                    </div>
                  ) : (
                    <div
                      className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center"
                      onClick={() => imageRef.current?.click()}
                    >
                      <Image
                        src={field.value || ""}
                        alt="Profle Image"
                        width={200}
                        height={200}
                        className="mx-auto"
                      />
                    </div>
                  )}
                  <input
                    type="file"
                    name="profileImage"
                    className="hidden"
                    ref={imageRef}
                    onChange={() => {
                      const file = imageRef.current?.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          field.onChange(reader.result);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </div>
              )}
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="categories"
              render={() => (
                <FormItem>
                  <FormLabel>Categories (Select all that apply)</FormLabel>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((category) => (
                      <FormField
                        key={category.id}
                        control={form.control}
                        name="categories"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(category.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...field.value,
                                        category.id,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== category.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {category.label}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="languages"
              render={() => (
                <FormItem>
                  <FormLabel>Languages Spoken</FormLabel>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {languages.map((language) => (
                      <FormField
                        key={language.id}
                        control={form.control}
                        name="languages"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(language.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...field.value,
                                        language.id,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== language.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {language.label}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="feeRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fee Range</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={"Select Fee Range"}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your fee range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {feeRanges.map((range) => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="City, State" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );

      case 4:
        const watchedValues = form.watch();
        return (
          <div className="space-y-6">
            <div className="rounded-lg border p-4 space-y-4">
              <h3 className="font-semibold">Review Your Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium">Name:</p>
                  <p className="text-muted-foreground">{watchedValues.name}</p>
                </div>
                <div>
                  <p className="font-medium">Location:</p>
                  <p className="text-muted-foreground">
                    {watchedValues.location}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Categories:</p>
                  <p className="text-muted-foreground">
                    {watchedValues.categories
                      ?.map(
                        (cat) => categories.find((c) => c.id === cat)?.label
                      )
                      .join(", ")}
                  </p>
                </div>
                <div>
                  <p className="font-medium">Fee Range:</p>
                  <p className="text-muted-foreground">
                    {
                      feeRanges.find((r) => r.value === watchedValues.feeRange)
                        ?.label
                    }
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-medium">Languages:</p>
                  <p className="text-muted-foreground">
                    {watchedValues.languages
                      ?.map(
                        (lang) => languages.find((l) => l.id === lang)?.label
                      )
                      .join(", ")}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-medium">Bio:</p>
                  <p className="text-muted-foreground">{watchedValues.bio}</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Join as an Artist
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Share your talent with the world
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <CardTitle>{steps[currentStep - 1].title}</CardTitle>
              <span className="text-sm text-muted-foreground">
                Step {currentStep} of {steps.length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
            <CardDescription>
              {steps[currentStep - 1].description}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {renderStepContent()}

                <div className="flex justify-between pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>

                  {currentStep === steps.length ? (
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Submit Application
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button type="button" onClick={nextStep}>
                      Next
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
