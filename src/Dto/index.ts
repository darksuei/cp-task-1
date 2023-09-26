export interface extraQuestionsDto {
  type: string;
  question: string;
  choices?: {
    maxChoice: number;
    disqualify: boolean;
    other: boolean;
  };
}

export interface infoDto {
  type: string;
  name: string;
  value: string;
  hasOptions: boolean;
  details?: string;
  options?: {
    internal: boolean;
    show: boolean;
  };
}
