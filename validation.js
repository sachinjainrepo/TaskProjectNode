function validateTask(req, res, next) {
    const { title, description, completed } = req.body;
  
    if (typeof title !== 'string' || typeof description !== 'string' || typeof completed !== 'boolean') {
      return res.status(400).json({ message: 'Invalid request body' });
    }
  
    next(); // 🔁 Pass control to the next middleware or route
  }

module.exports = validateTask;