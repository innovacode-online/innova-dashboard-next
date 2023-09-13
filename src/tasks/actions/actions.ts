'use server'

import { PrismaClient, Task } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()

export const create = async ( title: string, description: string ): Promise<Task> => {
    const task = await prisma.task.create({
        data: { title, description }
    })

    revalidatePath('/tasks')

    return task;
} 


export const remove = async ( id: string ): Promise<void> => {
    await prisma.task.delete({ 
        where: { 
            id 
        } 
    });

    revalidatePath('/tasks')
}

export const update = async ( id: string, status: boolean ): Promise<Task> => {
    
    const task = await prisma.task.findFirst({ where: { id } });

    if( !task ) {
        throw new Error('Task not found');
    }

    const updatedTask = await prisma.task.update({
        where: { id },
        data: {  
            complete: status
        }
    })

    revalidatePath('/tasks')

    return updatedTask;

} 