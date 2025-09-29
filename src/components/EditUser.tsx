"use client"

import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "./ui/select";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

//Define Zod schema
const formSchema = z.object({
    username: z
        .string()
        .min(2, { message: "Username must be at least 2 characters long." })
        .max(50, { message: "Username must not exceed 50 characters." }),

    email: z
        .string()
        .email({ message: "Please enter a valid email address." }),

    phone: z
        .string()
        .regex(
            /^\+?\d{1,2}[\d\s-]+$/,
            { message: "Phone number can contain digits, spaces, dashes, and optionally start with +" }
        )
        .min(10, { message: "Phone number must be at least 10 characters." })
        .max(20, { message: "Phone number must not exceed 20 characters." }),


    location: z
        .string()
        .min(2, { message: "Location must be at least 2 characters long." }),

    role: z.enum(["admin", "user"], {
        message: "Role must be either 'admin' or 'user'.",
    }),
})


const EditUser = () => {

    // 1. Define form. Initialize React Hook Form with Zod. useForm with validation ONLY on submit
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "Dip Akand",
            email: "dip.akand9899@gmail.com",
            phone: "+880 1689 190142",
            location: "Dhaka, BD",
            role: "admin",
        },
        //mode: "onSubmit", // validate only when submitted
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log("Submitted values: ", values)
    }

    return (
        <SheetContent>
            <SheetHeader>

                <SheetTitle className="mb-4">
                    Edit User
                </SheetTitle>

                <SheetDescription asChild>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>

                                        <FormLabel>Username</FormLabel>

                                        <FormControl>
                                            <Input placeholder="Enter Your UserName" {...field} />
                                        </FormControl>

                                        <FormDescription>
                                            This is your public username.
                                        </FormDescription>

                                        <FormMessage /> {/* Shows only after submit */}
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>

                                        <FormLabel>Email</FormLabel>

                                        <FormControl>
                                            <Input placeholder="Enter Your Email" {...field} />
                                        </FormControl>

                                        <FormDescription>
                                            Only admin can see your email.
                                        </FormDescription>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>

                                        <FormLabel>Phone</FormLabel>

                                        <FormControl>
                                            <Input placeholder="Enter Your Phone" {...field} />
                                        </FormControl>

                                        <FormDescription>
                                            Only admin can see your phone number.
                                        </FormDescription>

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
                                            <Input placeholder="Enter Your Location" {...field} />
                                        </FormControl>

                                        <FormDescription>
                                            This is your public location.
                                        </FormDescription>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>

                                        <FormLabel>Role</FormLabel>

                                        <FormControl>
                                            <Select
                                                value={field.value || ""} // Current Value from RHF
                                                onValueChange={field.onChange} // Update RHF state
                                            >

                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Role" />
                                                </SelectTrigger>

                                                <SelectContent>
                                                    <SelectItem value="admin">
                                                        Admin
                                                    </SelectItem>

                                                    <SelectItem value="user">
                                                        User
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>

                                        <FormDescription>
                                            Only verified users can be admin.
                                        </FormDescription>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="hover:translate-x-1 duration-200" type="submit">Submit</Button>
                        </form>
                    </Form>
                </SheetDescription>

            </SheetHeader>
        </SheetContent>
    )
}

export default EditUser;

/* The full form of enum is enumeration or enumerated type. 
       => An enum is a user-defined data type that consists of a fixed set of named constants, or "enumerators," representing related values. 
       
       => This makes code more readable by replacing numerical codes with meaningful names and helps prevent errors by restricting a variable to only those specific values.  
*/

/*  /^\+?\d[\d\s-]{9,19}$/

        Breaking it down:

        ^ → start of string

        \+? → optional + at the start

        \d → first digit (mandatory)

        [\d\s-]{9,19} → the next 9–19 characters, each can be:

        \d → a digit

        \s → a space

        - → a dash

        $ → end of string

    So the total length of the phone number (after the optional +) will be 10–20 characters, because:

    \d → 1 character

    [\d\s-]{9,19} → 9 to 19 characters

    1 + 9 = 10 (minimum), 1 + 19 = 20 (maximum) 
*/

/* by default React Hook Form validates fields on different “modes”:

    "onSubmit" → validation happens only when you press submit

    "onBlur" → validation happens when you leave a field

    "onChange" → validation happens while typing

    "all" → validates on change and blur

    "onTouched" → after the first blur 
*/

/* You’re looking at a form field component built with:
      
    => React Hook Form (RHF) → handles form state & validation.
    
    => Zod → schema validation library (often integrated with RHF via zodResolver).
    
    => shadcn/ui form components (FormField, FormItem, FormLabel, etc.) → just UI wrappers that connect nicely with RHF.

        Let’s break down your snippet:

        1. FormField
        <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
            ...
        )}
        />
        
    => control={form.control} → comes from useForm() in RHF. It’s the object that manages the form state.
    
    => name="email" → tells RHF which field in the form this component is bound to.
    
    => render={({ field }) => (...)} → RHF passes field props (like onChange, onBlur, value, ref) that you spread into your input. This connects the <Input> to RHF.

        2. Inside the render → shadcn/ui structure
        <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
            <Input placeholder="Enter Your Email" {...field} />
        </FormControl>
        <FormDescription>
            Only admin can see your email.
        </FormDescription>
        <FormMessage />
        </FormItem>
        
    => <FormItem> → wrapper for one field.
    
    => <FormLabel> → field label (Email).
    
    => <FormControl> → wraps the actual input, ensures consistent styling.
    
    => <Input {...field} /> → the real input box. Spreading ...field wires it into RHF (so typing updates RHF state).
    
    => <FormDescription> → helper text shown under the input.

    => <FormMessage> → displays validation errors (comes from Zod via RHF).

            3. How Zod fits in

            When you create your form with useForm, you usually hook in Zod like this:

            import { z } from "zod"
            import { zodResolver } from "@hookform/resolvers/zod"
            import { useForm } from "react-hook-form"

            const formSchema = z.object({
            email: z.string().email("Invalid email address"),
            })

            const form = useForm({
            resolver: zodResolver(formSchema),
            defaultValues: { email: "" },
            })
            
    => resolver: zodResolver(formSchema) → connects Zod to RHF.

    => If validation fails (e.g. invalid email), RHF passes the error to <FormMessage />.
            
    ✅ Putting it all together:
    
    => RHF manages state & validation.
    => Zod provides the validation schema.    
    => FormField links RHF with the UI.
    => FormMessage shows Zod validation errors.
    => The rest is just styled components for structure and consistency. 
*/
