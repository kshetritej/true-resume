import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const PersonalInfoPage = () => {
  return (
    <div className="w-[350px] bg-slate-700 p-4 rounded-lg">
      <Label htmlFor="full-name" className="text-white">Full Name</Label>
      <Input type="text" id="full-name" />
      <Label htmlFor="email" className="text-white">Email</Label>
      <Input type="email" id="email" />
      <Label htmlFor="phone" className="text-white">Phone</Label>
      <Input type="phone" id="phone" />

<div className="buttons mt-4 flex justify-between p-2">

    <Button variant={"secondary"}>Back</Button>
    <Button>Next</Button>
</div>
    </div>
  );
};

export default PersonalInfoPage;
