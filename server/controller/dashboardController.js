const db = require('../models/evModel');

const dashboardController = {
  getJobCards(req, res, next) {
    const userId = req.params.userId;
    const params = [userId]
    const getCardsQuery = 'SELECT * FROM JobCard WHERE user_id = $1';
    
    db.query(getCardsQuery, params)
      .then(data => {
        console.log('getCards data: ', data.rows);
        res.locals.cards = data.rows;
        
        return next();
      })
      .catch(err => next(err));
  },
  
  createJobCard(req, res, next) {
    const userId = req.params.userId;
    const { name, title, link, notes } = req.body;
    const params = [ userId, name, title, link, notes ];
    const addCardQuery = 'INSERT INTO JobCard (user_id, company, job_title, link, notes) VALUES ($1, $2, $3, $4, $5)';

    db.query(addCardQuery, params)
      .then(data => next())
      .catch(err => next(err));
  },

  deleteJobCard(req, res, next) {
    const cardId = req.params.cardId;
    const params = [ cardId ];
    const deleteCardQuery = 'DELETE FROM JobCard WHERE _id = $1';

    db.query(deleteCardQuery, params)
      .then(data => next())
      .catch(err => next(err));
  }
};

module.exports = dashboardController;
