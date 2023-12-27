/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/users.service';
import * as bcrypt from "bcrypt";
import { createUserDto, userTypeDto } from 'src/user/users.dto/users.dto';
import { PostgresService } from 'src/module/postgres.module';
import { loginDto } from 'src/loginDto/loginDto';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private postgresService: PostgresService,
  ) { }

  async validateUser(username: string, password: string): Promise<any | undefined> {

    const user = await this.usersService.findOne(username);
    if (user && (bcrypt.compareSync(password, user.password))) {

      // if (user && user.password === password) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  async signIn(user: loginDto) {

    console.log('user :>> 1111 ', user);
    const { email, password } = user

    // Tìm kiếm người dùng trong cơ sở dữ liệu
    let checkUser = await this.postgresService.user.findOne({
      where: {
        email,
      }
    })

    if (checkUser) {
      // Login thành công
      // Kiểm tra mật khẩu
      if (bcrypt.compareSync(password, checkUser.password)) {
        // Xoá trường password trước khi tạo token
        const { password, ...userWithoutPassword } = checkUser;

        // Tạo token
        const token = await this.jwtService.signAsync(
          { data: userWithoutPassword },
          {
            // Thêm secret và expiresIn nếu cần
          }
        );

        return token;
      } else {
        // Sai mật khẩu
        // Xử lý lỗi ở đây
      }
    } else {
      // Người dùng không tồn tại
      throw new NotFoundException('That bai roi');
    }
  }

  async signUp(userSignUp: createUserDto) {

    try {

      // user input
      userSignUp.password = bcrypt.hashSync(userSignUp.password, 10)

      const newUser = this.postgresService.user.create(userSignUp)

      await this.postgresService.user.save(newUser)


    } catch (error) {

    }
  }



}

