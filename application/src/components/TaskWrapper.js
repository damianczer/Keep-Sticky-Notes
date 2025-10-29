import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Task } from './Task';
import { TopBar } from './TopBar';
import FloatingActionButton from './FloatingActionButton';
import NoteModal from './NoteModal';

export const TaskWrapper = () => {
    const [tasks, setTasks] = useState([])
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingNote, setEditingNote] = useState(null);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const savedTasks = sessionStorage.getItem('tasks');
        if (savedTasks) {
            try {
                const parsedTasks = JSON.parse(savedTasks);
                if (Array.isArray(parsedTasks) && parsedTasks.length > 0) {
                    setTasks(parsedTasks);
                    setIsInitialized(true);
                    return;
                }
            } catch (error) {
                console.error('Error parsing saved tasks:', error);
            }
        }
        
        const exampleNotes = [
            {
                id: uuidv4(),
                title: "Welcome to Notes! 📜",
                task: "This is your first note. You can create, edit, and delete notes easily. Click the + button to add new notes!",
                completed: false,
                color: 'note-color-1'
            },
            {
                id: uuidv4(),
                title: "Shopping List",
                task: "• Milk\n• Bread\n• Eggs\n• Apples\n• Cheese\n• Pasta\n• Tomatoes\n• Chicken\n• Rice\n• Yogurt",
                completed: false,
                color: 'note-color-2'
            },
            {
                id: uuidv4(),
                title: "Meeting Notes",
                task: "Team standup at 10 AM. Discuss project roadmap and sprint planning. Review last week's achievements and identify blockers.",
                completed: false,
                color: 'note-color-3'
            },
            {
                id: uuidv4(),
                title: "Book Ideas",
                task: " 📖 Books to read:\n1. The Psychology of Design\n2. Clean Code\n3. Atomic Habits\n4. The Pragmatic Programmer\n5. Don't Make Me Think\n6. The Design of Everyday Things\n\nRemember to check library availability!",
                completed: false,
                color: 'note-color-4'
            },
            {
                id: uuidv4(),
                title: "Quick Reminder",
                task: "Call dentist tomorrow at 2 PM",
                completed: false,
                color: 'note-color-5'
            },
            {
                id: uuidv4(),
                title: "Weekend Plans",
                task: "Saturday:\n- Morning jog in the park\n- Grocery shopping\n- Lunch with family\n- Movie night\n\nSunday:\n- Clean the house\n- Meal prep for next week\n- Read a book\n- Video call with friends\n- Plan next week's tasks",
                completed: false,
                color: 'note-color-6'
            },
            {
                id: uuidv4(),
                title: "Creative Ideas",
                task: "💡 App features to consider:\n- Voice notes\n- Image attachments\n- Collaborative notes\n- Tag system\n- Search functionality\n- Export options\n- Reminder notifications\n- Color themes\n- Markdown support\n\nPriority: Start with voice notes and search!",
                completed: false,
                color: 'note-color-7'
            }
        ];
        
        setTasks(exampleNotes);
        setIsInitialized(true);
    }, []);

    const saveToStorage = (newTasks) => {
        sessionStorage.setItem('tasks', JSON.stringify(newTasks));
    };

    const addTask = (title, text, color) => {
        const finalColor = color || 'note-color-1';
        const newTasks = [...tasks, { 
            id: uuidv4(), 
            title: title || 'Untitled',
            task: text || '', 
            completed: false, 
            color: finalColor,
            height: Math.max(120, Math.min(300, (title + text).length * 2 + 120))
        }];
        setTasks(newTasks);
        saveToStorage(newTasks);
    }

    const handleOpenModal = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseAddModal = () => {
        setIsAddModalOpen(false);
    };

    const toggleComplete = id => {
        const newTasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
        setTasks(newTasks);
        saveToStorage(newTasks);
    }

    const deleteTask = id => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
        saveToStorage(newTasks);
    }

    const editTodo = id => {
        const noteToEdit = tasks.find(task => task.id === id);
        setEditingNote(noteToEdit);
        setIsEditModalOpen(true);
    }

    const handleSaveEdit = (editedNote) => {
        const newTasks = tasks.map(task => 
            task.id === editedNote.id ? editedNote : task
        );
        setTasks(newTasks);
        saveToStorage(newTasks);
        setIsEditModalOpen(false);
        setEditingNote(null);
    }

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
        setEditingNote(null);
    }

    const updateTaskColor = (id, color) => {
        const newTasks = tasks.map(task => task.id === id ? { ...task, color: color } : task);
        setTasks(newTasks);
        saveToStorage(newTasks);
    }

    return (
        <>
            <TopBar />
            <div className='notes-container'>
                <div className="notes-masonry">
                    {tasks.map((task) => (
                        <Task 
                            task={task} 
                            key={task.id} 
                            toggleComplete={toggleComplete} 
                            deleteTask={deleteTask} 
                            editTask={editTodo}
                            updateTaskColor={updateTaskColor}
                        />
                    ))}
                </div>
            </div>
            <FloatingActionButton onClick={handleOpenModal} />
            
            <NoteModal 
                isOpen={isAddModalOpen} 
                onClose={handleCloseAddModal} 
                onSave={addTask}
                mode="add"
            />
            
            <NoteModal 
                isOpen={isEditModalOpen} 
                onClose={handleCloseEditModal} 
                onSave={handleSaveEdit}
                note={editingNote}
                mode="edit"
            />
        </>
    )
}