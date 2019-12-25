import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import {IUser} from '@brewtodo/api-interfaces';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    async upsertUser(@Body() user: IUser): Promise<User> {
        return this.userService.createUser(user.username);
    }
}
