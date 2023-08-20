export default function asyncMiddleware(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Something went wrong" });
    }
  };
}
