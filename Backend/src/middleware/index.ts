import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export const authentified = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // On va chercher le token dans la requête
    const token: string = req.params?.token ?? req.cookies?.token ?? "";
    console.log("token", req.params.token);
    console.log("cookies", req.cookies.token);
    console.log("tokenString", token)

    if (!token) {
      console.log("si le token n'existe pas, on renvoie acces interdit")
      // aucun token = accès interdit
      return res.status(401).json({ message: "Accès interdit" });
    } else {
      // avec jwt on vérifie si le token est valide en fonction de la clé secrète
      console.log("si le token est valide")
      verify(token, "secret", (err: any, decoded: any) => {
        if (err) {
          console.log("si le token n'est pas valide, on le reset")
          res.clearCookie("token"); // token invalide = on le supprime
          return res.status(401).json({ message: "Accès interdit" });
        }
        res.locals.id = decoded._id.toString();
        next(); // token valide = on passe à la suite
      });
    }
  } catch (err) {
    console.error(err);

    return res.status(500).json({ error: "Internal server error" });
  }
};
