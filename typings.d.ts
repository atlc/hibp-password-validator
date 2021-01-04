export type BreachDetails = {
    isPwned: boolean;
    breaches: number;
}

export function validate(password: string): Promise<BreachDetails | Error>;