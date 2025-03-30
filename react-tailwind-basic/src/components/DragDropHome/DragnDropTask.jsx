import React from "react";
import DnDcompoents from '../DragDropHome/DnDcompoents';

const initialData = {
    Todo: [
      "Rough idea of Backend",
      "Deplouing Frontend on vercel",
      "Deplying Backend on Render",
      "Testing API routing",
    ],
    Progress: [
      "HomePage UI",
      "Item Posting Page UI",
      "Auth Page UI"
    ],
    Completed: [
      "Design Website on paper",
      "Draw Flow Chart",
      "Rough idea of Project",
      "Rough idea of Frontend",
      "API routing",
      "Create user model",
      "Create Product Model",
      "Create BiddingProduct model",
      "Creating GIT repo"
    ]
  };
  

export default function TaskDragnDropTask(){
    return <DnDcompoents initialData={initialData} />
}