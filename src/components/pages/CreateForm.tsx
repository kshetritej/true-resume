import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  phone: z.string().min(10).max(10),
  email: z.string().email(),
  linkedinLink: z.string(),
});

const CreateForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    return <Navigate to="/education" />;
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      <h1 className="text-4xl font-bold">Profile Information</h1>
      <p className="mb-4 text-muted">Your basic information</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
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
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  This is your public phone number that you use daily.
                </FormDescription>
                <FormMessage />
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
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Your email, prefer business mail over personal.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="linkedinLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LinkedIn Profile Link</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Your LinkedIn profile link, if you have one.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="buttons flex justify-between">
            <Button type="button" variant={'outline'}>Back</Button>
            <Button type="submit"><Link to={'/education'}>Next</Link></Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateForm;
