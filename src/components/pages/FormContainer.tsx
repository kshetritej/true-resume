import { useState } from "react";
import CreateForm from "./CreateForm";
import EducationForm from "./EducationForm";
import { Button } from "../ui/button";
import SkillsForm from "./SkillsForm";
import HobbiesForm from "./HobbiesForm";
import HonorsForm from "./HonorsForm";
import ExperienceForm from "./ExperienceForm";
import ErrorForm from "./ErrorForm";

const FormContainer = () => {
  const [page, setPage] = useState(0);
  const PageTitles = [
    "Profile Information",
    "Education Information",
    "Work Experience",
    "Skills",
    "Honors and Awards",
    "Hobbies and Interest"
  ];
  const pagesDescriptions = [
    "Your basic information",
    "Your education information",
    "Your work experience",
    "Your skills",
    "Any honorable you've got.",
    "What are your interest or hobbies"
  ];
  const FormRenderer = (page: number) => {
    switch (page) {
      case 0:
        return <CreateForm />;
      case 1:
        return <EducationForm />;
      case 2:
        return <ExperienceForm/>;
      case 3:
        return <SkillsForm/>;
      case 4:
        return <HonorsForm/>;
      case 5:
        return <HobbiesForm/>;
      default:
        return <ErrorForm/>;
    }
  };
  return (
    <div>
      <h1 className="text-4xl font-bold">{PageTitles[page]}</h1>
      <p className="mb-4 text-muted">{pagesDescriptions[page]}</p>
      <div className="">{FormRenderer(page)}</div>
      <div className="buttons py-4 flex justify-between">
        {page === 0 ? (
          <Button
            variant={"outline"}
            disabled
            onClick={() => setPage(page - 1)}
          >
            Prev
          </Button>
        ) : (
          <Button variant={"outline"} onClick={() => setPage(page - 1)}>
            Prev
          </Button>
        )}
        {page === 5 ? (
          <Button disabled onClick={() => setPage(page + 1)}>
            Next
          </Button>
        ) : (
          <Button onClick={() => setPage(page + 1)}>Next</Button>
        )}
      </div>
    </div>
  );
};
export default FormContainer;
