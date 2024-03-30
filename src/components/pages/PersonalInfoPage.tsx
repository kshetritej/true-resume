import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const PersonalInfoPage = () => {
  return (
    <Card className="w-[450px] mx-auto">
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
        <CardDescription>Your basic information.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Fullname" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="johndoe@mail.com" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="+977 9---------" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link to={"/"}>
          <Button variant="outline">Cancel</Button>
        </Link>
        <Link to={"/education"}>
          <Button>Next</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PersonalInfoPage;
