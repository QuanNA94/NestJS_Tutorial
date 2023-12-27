/* eslint-disable prettier/prettier */
import { Controller, Post, Body, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { createUserDto, userTypeDto } from 'src/user/users.dto/users.dto';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
// import { userTypeDto } from 'src/auth/entities/user.entities';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }


  @Post("/sign-up")
  signUp(@Body() body: createUserDto) {
    return this.authService.signUp(body)
  }

  @Post("/sign-in")
  signIn(@Body() body: userTypeDto) {
    return this.authService.signIn(body)

  }
}

// yarn add @nestjs/passport passport passport-local @nestjs/jwt passport-jwt @types/passport-jwt