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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

//Define Zod schema
const formSchema = z.object({
  amount: z.number().min(1, { message: "Amount must be at least 1!" }),

  userId: z.string().min(1, { message: "User Id id required!" }),

  status: z.enum(["pending", "processing", "success", "failed"]),
});

const AddOrder = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="mb-4">Add Order</SheetTitle>

        <SheetDescription asChild>
          <Form {...form}>
            <form className="space-y-8">
              {/* Amount */}
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>

                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormDescription>
                      Enter user amount of the order.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Amount */}

              {/* User Id */}
              <FormField
                control={form.control}
                name="userId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>user ID</FormLabel>

                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormDescription>Enter the user ID.</FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Amount */}

              {/* Status */}
              <FormField
                control={form.control}
                name="status"
                render={() => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>

                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>

                          <SelectItem value="processing">Processing</SelectItem>

                          <SelectItem value="success">Success</SelectItem>

                          <SelectItem value="failed">Failed</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <FormDescription>
                      Enter the status of the order.
                    </FormDescription>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Status */}

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

export default AddOrder;
