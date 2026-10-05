import "dotenv/config";
import type { Request, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET;

export interface CustomRequest extends Request {
  userId?: string;
}

const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeaders = req.headers.authorization;

    if(!authHeaders || !authHeaders.startsWith("Bearer"))
        return res.status(403).json({ msge: "Invalid token recieved | not authorized" })

    const jwtToken = authHeaders.split(" ")[1];

    // verify token;
    try {
        if (!JWT_SECRET) throw new Error("Invalid JWT_SECRET");
        if (!jwtToken) throw new Error("Missing Token");

        const verified = jwt.verify(jwtToken, JWT_SECRET) as unknown as { id: string };
        console.log("authenticated! ", verified);
        req.userId = verified.id;
        next();
    }
    catch (err) {
       console.error(err)
   }
}

export default authMiddleware;

// app.get('/test', authMiddleware, (req: Request, res: Response) => {
//     res.json({ msge: "You got through the middleware!" });
// });

// login; copy token
// { "email" : "alice@gmail.com",
//   "password" : "123456" }

// Authorization        Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgwOWQ5ZmIzLTM5NzMtNDRiNC1hYzMwLTBhYzU5NDE0MmRkYiIsImlhdCI6MTc5MDUxNTUxM30.9hPjlDm2DJFkSRDpZQMMDouwA-6qZPhN7sYi_eGuLXk 

// authenticated
// { id: '809d9fb3-3973-44b4-ac30-0ac594142ddb', iat: 1790515513 }
