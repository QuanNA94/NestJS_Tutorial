/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/user/users.service';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) { }

  async signUp(userSignUp) {
    try {

    } catch (error) {

    }
  }


  async signIn(userSignIn) {
    try {

    } catch (error) {

    }

  }
}

