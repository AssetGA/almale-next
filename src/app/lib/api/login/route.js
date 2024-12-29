// import { NextResponse } from "next/server";
// import bcrypt from "bcrypt";
// import Users from "../../mongodb";
// import TokenService from "../../../../utils/token.service";

// export async function POST(req, res) {
//   try {
//     const { email, password } = await req.json();
//     const existingUser = await Users.findOne({ email });

//     if (!existingUser) {
//       return res.status(400).send({
//         error: {
//           message: "EMAIL_EXIST",
//           code: 400,
//         },
//       });
//     }
//     const isPasswordEqual = await bcrypt.compare(
//       password,
//       existingUser.password
//     );
//     if (!isPasswordEqual) {
//       return res.status(400).send({
//         error: {
//           message: "INVALID_PASSWORD",
//           code: 400,
//         },
//       });
//     }

//     const tokens = TokenService.generate({ _id: existingUser._id });
//     await TokenService.save(existingUser._id, tokens.refreshToken);
//     // Пример проверки пользователя
//     res.status(201).send({ ...tokens, userId: newUser._id });
//   } catch (e) {
//     res.status(500).json({
//       message: "на сервере произошла ошибкаю Попробуйте позже",
//     });
//   }
// }
