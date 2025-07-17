const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
   
   
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(404).json({msg:"Please Provide a token"})
    }
    try {
        const token = authorization.split(' ')[1]
        const docoded = jwt.verify(token, process.env.JWT_SECRET)
        
        req.userId = docoded.userId
        next();



    } catch (err) {
      return  res.status(404).json({msg:"Error in authMiddleware"})
    }
}

module.exports = authMiddleware;