import { useState } from "react";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import PersonalInfoPage from "../pages/PersonalInfoPage";

const Header = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col align-middle text-center gap-3 ">
        <h1 className="text-6xl font-semibold">
          Welcome to True <span className="bg-green-500">Resume</span>
        </h1>
        <h3 className="text-2xl font-regular">
          Craft your perfect resume effortlessly.
        </h3>
        <div className="mt-8">
          <AlertDialog>
            <AlertDialogTrigger>
              <Button>Create my Resume</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <PersonalInfoPage />
            </AlertDialogContent>
        </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default Header;
