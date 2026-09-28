import express from 'express'
import cors from 'cors'
import pool from './db.js'
import devLogsRouter from './devlog.js'

const app = express()

// Allow the local Vue/Vite frontend to talk to Express
app.use(cors({
  origin: 'http://localhost:5173'
}))

// Parse JSON request bodies
app.use(express.json())

// Dev Log API
app.use('/api/devlogs', devLogsRouter)

// Database connection test
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()')

    res.json({
      connected: true,
      time: result.rows[0].now
    })
  } catch (error) {
    console.error('Database connection error:', error)

    res.status(500).json({
      connected: false,
      error: error.message
    })
  }
})

// Start server
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`CO server awake on port ${PORT} ☁️`)
})