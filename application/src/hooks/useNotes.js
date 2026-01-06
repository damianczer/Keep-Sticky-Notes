import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EXAMPLE_NOTES } from '../constants/exampleNotes';
import { DEFAULT_NOTE_COLOR } from '../constants';
import { saveTasks, loadTasks } from '../utils/storage';

export const useNotes = () => {
    const [tasks, setTasks] = useState([]);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const savedTasks = loadTasks();
        setTasks(savedTasks || EXAMPLE_NOTES);
        setIsInitialized(true);
    }, []);

    const addTask = useCallback((title, text, color) => {
        const finalColor = color || DEFAULT_NOTE_COLOR;
        const newTask = {
            id: uuidv4(),
            title: title || 'Untitled',
            task: text || '',
            completed: false,
            color: finalColor
        };

        setTasks(prevTasks => {
            const newTasks = [...prevTasks, newTask];
            saveTasks(newTasks);
            return newTasks;
        });
    }, []);

    const toggleComplete = useCallback((id) => {
        setTasks(prevTasks => {
            const newTasks = prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            );
            saveTasks(newTasks);
            return newTasks;
        });
    }, []);

    const deleteTask = useCallback((id) => {
        setTasks(prevTasks => {
            const newTasks = prevTasks.filter(task => task.id !== id);
            saveTasks(newTasks);
            return newTasks;
        });
    }, []);

    const updateTask = useCallback((editedNote) => {
        setTasks(prevTasks => {
            const newTasks = prevTasks.map(task =>
                task.id === editedNote.id ? editedNote : task
            );
            saveTasks(newTasks);
            return newTasks;
        });
    }, []);

    const updateTaskColor = useCallback((id, color) => {
        setTasks(prevTasks => {
            const newTasks = prevTasks.map(task =>
                task.id === id ? { ...task, color } : task
            );
            saveTasks(newTasks);
            return newTasks;
        });
    }, []);

    return {
        tasks,
        isInitialized,
        addTask,
        toggleComplete,
        deleteTask,
        updateTask,
        updateTaskColor
    };
};
