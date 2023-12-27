/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Post, Request, UseGuards } from '@nestjs/common';
// import { AppService } from './app.service';
// import { AuthGuard } from '@nestjs/passport';
// import { userTypeDto } from './user/entities/user.entities';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { loginDto } from './loginDto/loginDto';
import { normalizeUser } from './NormalizeData/users.normalize';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) { }

  // @UseGuards(AuthGuard('local'))
  @UseGuards(LocalAuthGuard)

  @Post('auth/login')
  async login(@Body() body: loginDto) {
    // console.log('req :>> ', req);
    // return req.username
    // try {
    //   throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // } catch (error) {

    // }
    // throw new HttpException('That bai roi', HttpStatus.NOT_FOUND);
    // throw new NotFoundException('That bai roi');

    return this.authService.signIn(body)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {

    return normalizeUser(req.user);
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
