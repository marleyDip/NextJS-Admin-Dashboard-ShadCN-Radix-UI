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
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";

const categories = [
  "T-shirts",
  "Shoes",
  "Accessories",
  "Bags",
  "Dresses",
  "Jackets",
  "Gloves",
] as const;

const colors = [
  "blue",
  "green",
  "red",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
  "black",
  "white",
] as const;

const sizes = [
  "xs",
  "s",
  "m",
  "1",
  "xl",
  "xxl",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
] as const;

//Define Zod schema
// const formSchema = z.object({
//   name: z.string().min(1, { message: "Product name is required!" }),

//   shortDescription: z
//     .string()
//     .min(1, { message: "Short description is required!" }),

//   description: z.string().min(1, { message: "Description is required!" }),

//   price: z.number().min(1, { message: "Price is required!" }),

//   category: z.enum(categories),

//   sizes: z.array(z.enum(sizes)),

//   colors: z.array(z.enum(colors)),

//   images: z.record(z.enum(colors), z.string()),
// });

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Product name is required!" })
    .max(100, { message: "Product name must be under 100 characters." }),

  shortDescription: z
    .string()
    .min(1, { message: "Short description is required!" })
    .max(200, { message: "Short description must be under 200 characters." }),

  description: z
    .string()
    .min(1, { message: "Description is required!" })
    .max(1000, { message: "Description must be under 1000 characters." }),

  // Coerce input to number safely
  price: z
    .number()
    .min(1, { message: "Price must be at least 1." })
    .max(1000000, { message: "Price too high — please check again." }),

  category: z.enum(categories),

  // Enforce valid category from list
  // category: z.enum(categories, {
  //   required_error: "Please select a category.",
  // }),

  // Require at least one size
  sizes: z
    .array(z.enum(sizes))
    .min(1, { message: "Select at least one available size." }),

  // Require at least one color
  colors: z
    .array(z.enum(colors))
    .min(1, { message: "Select at least one color." }),

  // Each color key maps to a valid image URL (optional but validated)
  images: z
    .record(z.enum(colors), z.string().url("Invalid image URL."))
    .optional(),
});

const AddProduct = () => {
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
        <SheetTitle className="mb-4">Add Product</SheetTitle>

        <SheetDescription asChild>
          <ScrollArea className="h-[90vh] pr-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 pl-2 pb-2"
              >
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

                      <FormDescription>
                        Enter the name of the product.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Name */}

                {/* Short Description */}
                <FormField
                  control={form.control}
                  name="shortDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Short Description</FormLabel>

                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormDescription>
                        Enter the short description of the product.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Short Description */}

                {/* Description */}
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>

                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>

                      <FormDescription>
                        Enter the description of the product.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Description */}

                {/* Price */}
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>

                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>

                      <FormDescription>
                        Enter the price of the product.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Price */}

                {/* Category */}
                <FormField
                  control={form.control}
                  name="category"
                  render={() => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>

                      <FormControl>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>

                          <SelectContent>
                            {categories.map((cat) => (
                              <SelectItem key={cat} value={cat}>
                                {cat}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>

                      <FormDescription>
                        Enter the category of the product.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Category */}

                {/* Sizes */}
                <FormField
                  control={form.control}
                  name="sizes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sizes</FormLabel>

                      <FormControl>
                        <div className="grid grid-cols-3 gap-4 my-2">
                          {sizes.map((size) => (
                            <div className="flex items-center gap-2" key={size}>
                              <Checkbox
                                id="size"
                                checked={field.value?.includes(size)}
                                onCheckedChange={(checked) => {
                                  const currentValues = field.value || [];

                                  const updated = checked
                                    ? [...currentValues, size]
                                    : currentValues.filter((v) => v !== size);

                                  //console.log("Before change:", currentValues);
                                  // console.log(
                                  //   "Checked:",
                                  //   checked,
                                  //   "New Value:",
                                  //   updated
                                  // );

                                  field.onChange(updated);
                                }}
                              />

                              <label htmlFor="size" className="text-xs">
                                {size.toUpperCase()}
                              </label>
                            </div>
                          ))}
                        </div>
                      </FormControl>

                      <FormDescription>
                        Enter the available sizes of the product.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Sizes */}

                {/* Colors */}
                <FormField
                  control={form.control}
                  name="colors"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Colors</FormLabel>

                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormDescription>
                        Enter the colors of the product.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Colors */}

                {/* Images */}
                {/* <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>images</FormLabel>

                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormDescription>
                      Enter the images of the product.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
                {/* Images */}

                <Button
                  className="hover:translate-x-1 duration-200"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </ScrollArea>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default AddProduct;

//falsy (false = boolean; 0 = 0, -0; '' = empty string('',"",``); null; undefined; NaN)

// The OR operator || uses the right value if left is falsy, while the nullish coalescing operator ?? uses the right value if left is null or undefined.

// arr.includes(valueToFind, fromIndex)
//valueToFind (Required) => The value to search for within the array.
// fromIndex (Optional) => default 0, The index at which to start the search.

/* <Checkbox
      id="size"
      checked={field.value?.includes(size)}

      onCheckedChange={(checked) => {
        const currentValues = field.value || [];

        if (checked) {
          field.onChange([...currentValues, size]);
        } else {
          field.onChange(
            currentValues.filter((v) => v !== size)
          );
        }
      }}
    />

      => field.value: comes from react-hook-form — it’s an array of selected items.

      => checked={field.value?.includes(size)}: determines whether this checkbox should be checked (true if the current size is already selected).

      => onCheckedChange:
          => If checked === true, it adds the current size to the array.
          => If unchecked, it removes it using .filter().

      => field.onChange(...): updates the form state with the new array.
*/

/* In web design, 1vh stands for one-hundredth (1%) of the viewport's height.
    = The viewport is the visible area of the browser window where your website content is displayed.
    = Therefore, 1vh is a relative unit of measurement, with 100vh representing the full height of the browser window.
*/
