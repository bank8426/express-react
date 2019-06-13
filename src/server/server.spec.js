import { addNewTask, updateTask } from "./server";

(async function myFunc() {
  await addNewTask({
    name: "my task",
    id: "12346"
  });
  await updateTask({
    name: "my task - update",
    id: "12346"
  });
})();
