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

