// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import TokenService from "../../../../utils/token.service";
// import Users from "../../../../../models/User";

// export async function POST(req, res) {
//   try {
//     const { email, password } = req.body;
//     console.log("req", req.body);
//     const exitingUser = await Users.findOne({ email });
//     if (exitingUser) {
//       return res.status(400).json({
//         error: {
//           message: "EMAIL_EXISTS",
//           code: 400,
//         },
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);
//     const newUser = await Users.create({
//       ...req.body,
//       password: hashedPassword,
//     });
//     const tokens = TokenService.generate({ _id: newUser._id });
//     await TokenService.save(newUser._id, tokens.refreshToken);
//     res.status(201).send({ ...tokens, userId: newUser._id });
//   } catch (e) {
//     res.status(500).json({
//       message: "на сервере произошла ошибкаю Попробуйте позже",
//     });
//   }
// }
