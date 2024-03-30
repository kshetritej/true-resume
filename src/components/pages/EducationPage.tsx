import { Link } from "react-router-dom"
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
import { useState } from "react";

const EducationPage= () => {
    const [education, setEducation] = useState("")
    const handleChange = (e:any) => {
       setEducation(e.target.value) 
    }
  return (
    <Card className="w-[450px] mx-auto">
      <CardHeader>
        <CardTitle>Add Education</CardTitle>
        <CardDescription>Your education information.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="uni-name">University/College/School Name</Label>
              <Input id="uni-name" placeholder="" value={education} onChange={handleChange}/>
              <Input id="year" placeholder="2020-2024" />
            </div>
            <div className="flex flex-col space-y-1.5">
            <Button variant={'secondary'}>Add another education</Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link to={"/new"}>
        <Button variant="outline">Back</Button>
        </Link>
        <Link to={"/"}>
        <Button>Next</Button>
        </Link>
        
      </CardFooter>
    </Card>
  );
};

export default EducationPage;
