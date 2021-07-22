import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const Validate = (prisma: PrismaClient) => {
  const router = Router();

  router.post(
    "/",
    async (req, res) => {
        try {
            const pair = await prisma.tokenPair.findUnique({
                where: { accessToken: req.query.accessToken?.toString() ?? '' },
            });
            if (!pair) throw new Error();
            res.json({ success: true });
        } catch (err) {
            res.json({ error: "Could not validate token pair." });
        }
    }
  );

  return router;
};

export default Validate;