export interface IParameter {
  name: string;
  value: {
    dev: any;
    prod: any;
    staging: any;
  };
}

export interface ISecret {
  name: string;
}

export interface IConfig {
  parameters: IParameter[];
  secrets: ISecret[];
}
