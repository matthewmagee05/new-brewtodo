import { Injectable, Inject } from '@nestjs/common';
import { constants } from '../../common/constants';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import {UserProfile} from '@brewtodo/api-interfaces';

@Injectable()
export class UserService {
    constructor(@Inject(constants.userRepository) private userRepository: Repository<User>){}

    async createUser(username: string): Promise<User> {
      const foundUser = await this.userRepository.findOne({ where: { username} });
      if(!foundUser){
        const user = new UserProfile(username);
        const savedUser = await this.userRepository.save(user);
        return savedUser;
      }

      return foundUser;
    }
}
