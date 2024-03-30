import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";

const GetInformation = () => {
  const User = z.object({
    fullName: z.string(),
    Email: z.string(),
    phoneNum: z.number(),
  });
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(User),
  });
  const registerUser = (data: any) => {
    console.log("data", data);
  };
  return (
    <div className="w-[450px] mx-auto bg-gray-200 p-4 rounded-lg ">
      <form action="submit" onSubmit={handleSubmit(registerUser)}>
        <h1 className="text-2xl font-semibold">Personal Information </h1>
        <p className="secondary text-sm mb-4">
          Your very personal information.{" "}
        </p>
        <Label>Full Name</Label>
        <Input
          type="text"
          {...register("fullName")}
          placeholder="Enter your full name."
        />
        <Label>Email</Label>
        <Input
          type="email"
          {...register("Email")}
          placeholder="johndoe@mail.com"
        />
        <Label>Phone</Label>
        <Input
          type="number"
          {...register("phoneNum")}
          placeholder="98----------"
        />
        <div className="buttons flex justify-between py-4">
          <Link to={"/"}>
            <Button variant="outline">Cancel</Button>
          </Link>
          <Link to={"/education"}>
            <Button>Next</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default GetInformation;
