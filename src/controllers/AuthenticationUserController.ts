import { Response, Request } from "express";
import { AuthenticateUserService } from "../services/AuthenticationUserService";

class AuthenticationUserController {
  async handle(request: Request, response: Response) {
    const service = new AuthenticateUserService();
    try {
      const { code } = request.body;

      const result = await service.execute(code);

      return response.json(result);
    } catch (err) {
      return response.json(err.message);
    }
  }
}

export { AuthenticationUserController };
