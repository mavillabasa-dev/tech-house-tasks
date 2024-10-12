import { TaskList } from "@/components/taskList";
import { TaskService } from "@/services/tasks.service";

export default async function TaskListPage() {
  const tasks = await TaskService.getTasks();
  return <>{tasks && <TaskList tasks={tasks} />}</>;
}
