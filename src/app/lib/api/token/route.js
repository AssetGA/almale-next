// import tokenService from "../../../../utils/token.service";

// function isTokenInvalid(data, dbToken) {
//   return !data || !dbToken || data._id !== dbToken?.user?.toString();
// }

// export async function POST(req, res) {
//   try {
//     const { refresh_token: refreshToken } = req.body;
//     const data = tokenService.validateRefresh(refreshToken);
//     const dbToken = await TokenService.findToken(refreshToken);

//     if (isTokenInvalid(data, dbToken)) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }

//     const tokens = await TokenService.generate({
//       _id: data._id,
//     });

//     await TokenService.save(data._id, tokens.refreshToken);

//     res.status(200).send({ ...tokens, userId: data._id });
//   } catch (e) {
//     res.status(500).json({
//       message: "на сервере произошла ошибкаю Попробуйте позже",
//     });
//   }
// }
