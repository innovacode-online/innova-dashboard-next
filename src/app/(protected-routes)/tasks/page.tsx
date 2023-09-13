import { PrismaClient } from "@prisma/client";

import { NewTaskForm, TaskCard } from "@/tasks";

export default async function TasksPage() {

    const prisma = new PrismaClient();
    
    const pendingTasks = await prisma.task.findMany({ where: {
        complete: false
    }})

    const completeTasks = await prisma.task.findMany({ where: {
        complete: true
    }})

    return (
        <section>
            <h1 className="mb-6">Listado de tareas</h1>

            {/* FORMULARIO PARA NUEVAS TAREAS */}
            <NewTaskForm/>

            {/* LISTADO DE TAREAS INCOMPLETAS */}
            <h2 className="mb-4">Tareas incompletas</h2>
            <div className="tasks__list">
                {
                    pendingTasks.map( task => (
                        <TaskCard key={ task.id } task={ task }/>
                    ))
                }
            </div>

            {/* LISTADO DE TAREAS COMPLETAS */}
            <h2 className="mb-4 mt-8">Tareas completas</h2>
            <div className="tasks__list">
                {
                    completeTasks.map( task => (
                        <TaskCard key={ task.id } task={ task }/>
                    ))
                }
            </div>


        </section>
    );
}