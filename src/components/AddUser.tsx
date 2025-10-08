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
import { ScrollArea } from "./ui/scroll-area";

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

        <ScrollArea className="h-[90vh] pb-2 pl-2">
          <SheetDescription asChild>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 pr-6"
              >
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
        </ScrollArea>
      </SheetHeader>
    </SheetContent>
  );
};

export default AddUser;

/* In web design, 1vh stands for one-hundredth (1%) of the viewport's height.
    = The viewport is the visible area of the browser window where your website content is displayed.
    = Therefore, 1vh is a relative unit of measurement, with 100vh representing the full height of the browser window.

Viewport Height (vh):
    = A vh unit is 1% of the viewport's height.
    = For example, if your browser window is 800 pixels tall, then 1vh would be 8 pixels.
    = A value of 70vh would be 70% of the viewport's height, or 560 pixels in this example.

Purpose:
    = vh units are useful for creating responsive layouts, ensuring that elements adjust their height relative to the screen size.
    = This allows for consistent design across different devices, from mobile phones to large desktop monitors.
*/
