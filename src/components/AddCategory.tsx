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
  name: z.string().min(1, { message: "Name is Required!" }),
});

const AddCategory = () => {
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
        <SheetTitle className="mb-4">Add Category</SheetTitle>

        <SheetDescription asChild>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>

                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormDescription>Enter Category Name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Name */}

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

export default AddCategory;
