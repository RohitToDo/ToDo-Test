const cron = require('node-cron');
const Todo = require('../models/Todo');

cron.schedule('0 0 * * *', async () => {
  const now = new Date();
  await Todo.updateMany({ dueDate: { $lt: now }, completed: false }, { completed: true });
  console.log('CRON Job: Marked expired todos as completed');
});
