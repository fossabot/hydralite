import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { TokenPairUtil } from "../util/TokenPair";

const Regenerate = (prisma: PrismaClient) => {
    const tokens = new TokenPairUtil(prisma);
    const router = Router();

    router.post(
        "/",
        async (req, res) => {
            const result = await tokens.regenerateTokenPair(req.query.refreshToken?.toString() ?? '');
            if (!result) return res.json({ error: "Could not generate new token pair." });
            return res.json(result);
        }
    );

    return router;
};

export default Regenerate;