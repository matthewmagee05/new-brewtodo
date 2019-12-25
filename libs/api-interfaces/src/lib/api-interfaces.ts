export interface Message {
  message: string;
}

export interface Brewery {
  readonly name: string;
  readonly description: string;
  readonly imageURL: string;
  readonly address: string;
  readonly zipCode: string;
  readonly state: number;
  readonly phoneNumber: string;
  readonly businessHours: string;
  readonly hasTShirt: boolean;
  readonly hasMug: boolean;
  readonly hasGrowler: boolean;
  readonly hasFood: boolean
}

export interface State {
  readonly id: number;
  readonly code: string;
  readonly name: string;
}

export interface IUser {
  readonly username : string;
  readonly first_name: string;
  readonly last_name: string;
  readonly profile_image_url: string;
}


export class UserProfile implements IUser {
  username: string;  
  first_name: string;
  last_name: string;
  profile_image_url: string;

  constructor(
    username: string, 
    first_name?: string, 
    last_name?: string, 
    profile_image_url?){
      this.username = username;
      this.first_name = first_name;
      this.last_name = last_name;
      this.profile_image_url = profile_image_url;
    }

  
}

