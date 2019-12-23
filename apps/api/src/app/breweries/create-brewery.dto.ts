import { IsString} from 'class-validator';

export class CreateBreweryDto {
  @IsString() readonly name: string;

  @IsString() readonly description: string;
}