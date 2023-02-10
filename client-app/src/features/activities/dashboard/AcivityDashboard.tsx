import { Grid, } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActiviryForm";
import ActivityList from "./ActivityList";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
  deleteAcivity: (id: string) => void
}

const ActivityDashboard = ({activities, selectedActivity,selectActivity, cancelSelectActivity, 
    editMode, openForm,closeForm, createOrEdit, deleteAcivity}: Props) => {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList 
          activities={activities} 
          selectActivity = {selectActivity}
          deleteAcivity = {deleteAcivity}
          />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode &&
        <ActivityDetails 
          activity={selectedActivity} 
          cancelSelectActivity = {cancelSelectActivity} 
          openForm = {openForm}
          /> }
          {editMode && 
        <ActivityForm 
          closeForm = {closeForm} 
          activity = {selectedActivity}
          createOrEdit = {createOrEdit}
          />}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
