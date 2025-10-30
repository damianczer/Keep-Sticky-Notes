import { v4 as uuidv4 } from 'uuid';
import { NOTE_COLORS } from './index';

export const EXAMPLE_NOTES = [
    {
        id: uuidv4(),
        title: 'Welcome to Notes! 📜',
        task: 'This is your first note. You can create, edit, and delete notes easily. Click the + button to add new notes!',
        completed: false,
        color: NOTE_COLORS[0]
    },
    {
        id: uuidv4(),
        title: 'Shopping List',
        task: '• Milk\n• Bread\n• Eggs\n• Apples\n• Cheese\n• Pasta\n• Tomatoes\n• Chicken\n• Rice\n• Yogurt',
        completed: false,
        color: NOTE_COLORS[1]
    },
    {
        id: uuidv4(),
        title: 'Meeting Notes',
        task: 'Team standup at 10 AM. Discuss project roadmap and sprint planning. Review last week\'s achievements and identify blockers.',
        completed: false,
        color: NOTE_COLORS[2]
    },
    {
        id: uuidv4(),
        title: 'Book Ideas',
        task: ' 📖 Books to read:\n1. The Psychology of Design\n2. Clean Code\n3. Atomic Habits\n4. The Pragmatic Programmer\n5. Don\'t Make Me Think\n6. The Design of Everyday Things\n\nRemember to check library availability!',
        completed: false,
        color: NOTE_COLORS[3]
    },
    {
        id: uuidv4(),
        title: 'Quick Reminder',
        task: 'Call dentist tomorrow at 2 PM',
        completed: false,
        color: NOTE_COLORS[4]
    },
    {
        id: uuidv4(),
        title: 'Weekend Plans',
        task: 'Saturday:\n- Morning jog in the park\n- Grocery shopping\n- Lunch with family\n- Movie night\n\nSunday:\n- Clean the house\n- Meal prep for next week\n- Read a book\n- Video call with friends\n- Plan next week\'s tasks',
        completed: false,
        color: NOTE_COLORS[5]
    },
    {
        id: uuidv4(),
        title: 'Creative Ideas',
        task: '💡 App features to consider:\n- Voice notes\n- Image attachments\n- Collaborative notes\n- Tag system\n- Search functionality\n- Export options\n- Reminder notifications\n- Color themes\n- Markdown support\n\nPriority: Start with voice notes and search!',
        completed: false,
        color: NOTE_COLORS[6]
    }
];
