import { IsString, IsInt, IsBoolean} from 'class-validator';

export class CreateBreweryDto {
  @IsString() readonly name: string;

  @IsString() readonly description: string;

  @IsString() readonly imageURL: string;

  @IsString() readonly address: string;

  @IsString() readonly zipCode: string;

  @IsInt() readonly state: number;

  @IsString() readonly phoneNumber: string;

  @IsString() readonly businessHours: string;

  @IsBoolean() readonly hasTShirt: boolean;

  @IsBoolean() readonly hasFood: boolean;

  @IsBoolean() readonly hasMug: boolean;

  @IsBoolean() readonly hasGrowler: boolean;


}