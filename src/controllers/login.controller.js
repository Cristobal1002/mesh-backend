

export const login = async (req, res,next) => {
    try {
        res.send({msg:'Login post is fine'})
    } catch (e) {
        console.log(e)
        next(e)
    }
}