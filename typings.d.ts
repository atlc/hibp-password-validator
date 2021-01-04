export function validate(password: string): Promise<IBreachDetails | Error>;

export interface IBreachDetails {
    isPwned: boolean;
    breaches: number;
}