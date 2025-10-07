"use client";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

//Define Zod schema
const formSchema = z.object({
  fullname: z
    .string()
    .min(2, { message: "Full Name must be at least 2 characters long." })
    .max(50, { message: "Full Name must not exceed 50 characters." }),

  email: z.string().email({ message: "Please enter a valid email address." }),

  phone: z
    .string()
    .regex(/^\+?\d{1,2}[\d\s-]+$/, {
      message:
        "Phone number can contain digits, spaces, dashes, and optionally start with +",
    })
    .min(10, { message: "Phone number must be at least 10 characters." })
    .max(20, { message: "Phone number must not exceed 20 characters." }),

  address: z
    .string()
    .min(2, { message: "Address must be at least 2 characters long." }),

  city: z
    .string()
    .min(2, { message: "City must be at least 2 characters long." }),
});

const AddUser = () => {
  // 1. Define form. Initialize React Hook Form with Zod. useForm with validation ONLY on submit
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("Submitted values: ", values);
  }

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="mb-4">Add User</SheetTitle>

        <SheetDescription asChild>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>Enter user full name.</FormDescription>
                    <FormMessage /> {/* Shows only after submit */}
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>

                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormDescription>
                      Only admin can see your email.
                    </FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>

                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormDescription>
                      Only admin can see your phone number (optional).
                    </FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Address */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>

                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormDescription>
                      Enter user address (optional).
                    </FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* City */}
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>

                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormDescription>
                      Enter user city (optional).
                    </FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="hover:translate-x-1 duration-200"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </Form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default AddUser;
