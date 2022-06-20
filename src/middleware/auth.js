

const auth = (req, res, next) => {

    req.among = 'sus'

    next()

}

module.exports = auth