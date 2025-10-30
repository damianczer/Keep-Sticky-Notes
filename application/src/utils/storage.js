import { STORAGE_KEYS } from '../constants';

export const saveTasks = (tasks) => {
    try {
        sessionStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
    } catch (error) {
        console.error('Error saving tasks to storage:', error);
    }
};

export const loadTasks = () => {
    try {
        const savedTasks = sessionStorage.getItem(STORAGE_KEYS.TASKS);
        if (savedTasks) {
            const parsedTasks = JSON.parse(savedTasks);
            if (Array.isArray(parsedTasks) && parsedTasks.length > 0) {
                return parsedTasks;
            }
        }
        return null;
    } catch (error) {
        console.error('Error loading tasks from storage:', error);
        return null;
    }
};

export const clearTasks = () => {
    try {
        sessionStorage.removeItem(STORAGE_KEYS.TASKS);
    } catch (error) {
        console.error('Error clearing tasks from storage:', error);
    }
};
