import { useState, useCallback } from 'react';
import Task from './Task';
import { TopBar } from './TopBar';
import FloatingActionButton from './FloatingActionButton';
import NoteModal from './NoteModal';
import { MODAL_MODE } from '../constants';
import { useNotes } from '../hooks/useNotes';

export const TaskWrapper = () => {
    const { tasks, addTask, toggleComplete, deleteTask, updateTask, updateTaskColor } = useNotes();
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingNote, setEditingNote] = useState(null);

    const handleEditTask = useCallback((id) => {
        const noteToEdit = tasks.find(task => task.id === id);
        if (noteToEdit) {
            setEditingNote(noteToEdit);
            setIsEditModalOpen(true);
        }
    }, [tasks]);

    const handleSaveEdit = useCallback((editedNote) => {
        updateTask(editedNote);
        setIsEditModalOpen(false);
        setEditingNote(null);
    }, [updateTask]);

    const handleCloseEditModal = useCallback(() => {
        setIsEditModalOpen(false);
        setEditingNote(null);
    }, []);

    const handleOpenAddModal = useCallback(() => {
        setIsAddModalOpen(true);
    }, []);

    const handleCloseAddModal = useCallback(() => {
        setIsAddModalOpen(false);
    }, []);

    return (
        <>
            <TopBar />
            <main id="main" role="main" tabIndex="-1" aria-label="Notes">
                <div className="notes-container">
                    <div className="notes-masonry" role="list" aria-label="Your notes">
                        {tasks.map((task) => (
                            <Task
                                task={task}
                                key={task.id}
                                toggleComplete={toggleComplete}
                                deleteTask={deleteTask}
                                editTask={handleEditTask}
                                updateTaskColor={updateTaskColor}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <FloatingActionButton onClick={handleOpenAddModal} aria-label="Add new note" />

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