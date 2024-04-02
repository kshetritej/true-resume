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

const formSchema = z.object({
  uniName: z.string(),
  uniAddress: z.string(),
  course: z.string(),
  gpa: z.number(),
  startingYear: z.string(),
  endYear: z.string(),
});

const EducationForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="uniName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Education Provider (University, College, School )</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                Name of the place where you attended your education.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="uniAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Place Attended</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                Address where you attended your education.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="course"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                Name of the course you studied.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField control={form.control}
            name="gpa"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GPA </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                GPA if applicable
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />



          <FormField control={form.control}
            name="startingYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Staring Year</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                Date startingYear of your education.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="endYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Year</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                when your education ended.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default EducationForm;
