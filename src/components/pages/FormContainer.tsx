import { useState } from "react";
import CreateForm from "./CreateForm";
import EducationForm from "./EducationForm";
import { Button } from "../ui/button";
const FormContainer = () => {
  const [page, setPage] = useState(0);
  const PageTitles = ['Profile Information', 'Education Information', 'Work Experience', 'Skills']
  const pagesDescriptions = ['Your basic information', 'Your education information', 'Your work experience', 'Your skills']
  return (
    <div>
      <h1 className="text-4xl font-bold">{PageTitles[page]}</h1>
      <p className="mb-4 text-muted">{pagesDescriptions[page]}</p>
      {
        page === 0 && <CreateForm/>
      }
      {
        page === 1 && <EducationForm/>
      }
    <div className="buttons py-4 flex justify-between">
      <Button variant={'outline'} onClick={()=>setPage(page -1)} >Prev</Button>
      <Button onClick={()=>setPage(page+1)}>Next</Button>
    </div>
    </div>
  );
};
export default FormContainer;
