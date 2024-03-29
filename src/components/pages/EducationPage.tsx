import { Input } from "@/components/ui/input";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
} from "../ui/alert-dialog";
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
import PersonalInfoPage from "./PersonalInfoPage";

const EducationPage= () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Add Education</CardTitle>
        <CardDescription>Your education information.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="uni-name">University/College/School Name</Label>
              <Input id="uni-name" placeholder="" />
              <Input id="year" placeholder="2020-2024" />
            </div>
            <div className="flex flex-col space-y-1.5">
            <Button variant={'outline'}>Add another education</Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <AlertDialog>
          <AlertDialogTrigger>
            <Button>Next</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <PersonalInfoPage/>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
};

export default EducationPage;
