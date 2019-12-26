import { Injectable, Inject } from '@nestjs/common';
import { constants } from '../../common/constants';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import {UserProfile} from '@brewtodo/api-interfaces';
import { UserBeers } from '../user-beer/user-beer.entity';
import { Beer } from '../beer/beer.entity';
import { Breweries } from '../breweries/breweries.entity';

@Injectable()
export class UserService {
    constructor(@Inject(constants.userRepository) private userRepository: Repository<User>){}

    async createUser(username: string): Promise<User> {
    const foundUser = await this.userRepository.createQueryBuilder('user')
    .leftJoinAndMapMany('user.userBeer', UserBeers, 'userBeer', 'user.id = userBeer.userId')
    .leftJoinAndMapMany('userBeer.beer', Beer, 'beer', 'beer.id = userBeer.beerId')
    .leftJoinAndMapOne('beer.brewery', Breweries, 'brewery', 'brewery.id = beer.breweryId')
    .where(`user.username = :username`, { username: username })
    .getOne();
    
      if(!foundUser){
        const user = new UserProfile(username);
        const savedUser = await this.userRepository.save(user);
        return savedUser;
      }

      return foundUser;
    }
}
