import express from 'express'
import pool from './db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const page = Math.max(parseInt(req.query.page) || 1, 1)
    const limit = Math.max(parseInt(req.query.limit) || 10, 1)
    const offset = (page - 1) * limit

    // Get the dev logs for this page
    const logsResult = await pool.query(
      `
      SELECT *
      FROM dev_log
      WHERE published = TRUE
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
      `,
      [limit, offset]
    )

    // Get total number of published logs
    const countResult = await pool.query(
      `
      SELECT COUNT(*)
      FROM dev_log
      WHERE published = TRUE
      `
    )

    const totalItems = parseInt(countResult.rows[0].count)
    const totalPages = Math.ceil(totalItems / limit)

    res.json({
      items: logsResult.rows,
      page,
      totalPages,
      totalItems
    })

  } catch (error) {
    console.error('Error fetching dev logs:', error)

    res.status(500).json({
      error: 'Failed to fetch dev logs'
    })
  }
})

export default router