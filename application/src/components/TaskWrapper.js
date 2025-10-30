import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Task from './Task';
import { TopBar } from './TopBar';
import FloatingActionButton from './FloatingActionButton';
import NoteModal from './NoteModal';
import { EXAMPLE_NOTES } from '../constants/exampleNotes';
import { DEFAULT_NOTE_COLOR, MODAL_MODE } from '../constants';
import { saveTasks, loadTasks } from '../utils/storage';

export const TaskWrapper = () => {
    const [tasks, setTasks] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingNote, setEditingNote] = useState(null);
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

        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
        saveTasks(newTasks);
    }, [tasks]);

    const toggleComplete = useCallback((id) => {
        const newTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
        saveTasks(newTasks);
    }, [tasks]);

    const deleteTask = useCallback((id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
        saveTasks(newTasks);
    }, [tasks]);

    const editTask = useCallback((id) => {
        const noteToEdit = tasks.find(task => task.id === id);
        if (noteToEdit) {
            setEditingNote(noteToEdit);
            setIsEditModalOpen(true);
        }
    }, [tasks]);

    const handleSaveEdit = useCallback((editedNote) => {
        const newTasks = tasks.map(task =>
            task.id === editedNote.id ? editedNote : task
        );
        setTasks(newTasks);
        saveTasks(newTasks);
        setIsEditModalOpen(false);
        setEditingNote(null);
    }, [tasks]);

    const updateTaskColor = useCallback((id, color) => {
        const newTasks = tasks.map(task =>
            task.id === id ? { ...task, color } : task
        );
        setTasks(newTasks);
        saveTasks(newTasks);
    }, [tasks]);

    const handleOpenModal = useCallback(() => {
        setIsAddModalOpen(true);
    }, []);

    const handleCloseAddModal = useCallback(() => {
        setIsAddModalOpen(false);
    }, []);

    const handleCloseEditModal = useCallback(() => {
        setIsEditModalOpen(false);
        setEditingNote(null);
    }, []);

    return (
        <>
            <TopBar />
            <main id="main" role="main" tabIndex="-1">
                <div className="notes-container">
                    <div className="notes-masonry">
                    {tasks.map((task) => (
                        <Task
                            task={task}
                            key={task.id}
                            toggleComplete={toggleComplete}
                            deleteTask={deleteTask}
                            editTask={editTask}
                            updateTaskColor={updateTaskColor}
                        />
                    ))}
                    </div>
                </div>
            </main>
            <FloatingActionButton onClick={handleOpenModal} />

            <NoteModal
                isOpen={isAddModalOpen}
                onClose={handleCloseAddModal}
                onSave={addTask}
                mode={MODAL_MODE.ADD}
            />

            <NoteModal
                isOpen={isEditModalOpen}
                onClose={handleCloseEditModal}
                onSave={handleSaveEdit}
                note={editingNote}
                mode={MODAL_MODE.EDIT}
            />
        </>
    );
};