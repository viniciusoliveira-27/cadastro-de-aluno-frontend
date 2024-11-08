import { ActivityBalance } from "@/components/ui/dashboard/activity-balance";
import { ActivityTable } from "@/components/ui/dashboard/activity-table";
import { InsertActivityForm } from "@/components/ui/dashboard/insert-activity-form";

export default function Dashboard() {
    return (
        <>
            <InsertActivityForm/>
            <ActivityTable/>
            <ActivityBalance />
        
        </>

    ); 
}