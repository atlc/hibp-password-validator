export = Validator;

declare namespace Validator {
    export type BreachDetails = {
        isPwned: boolean;
        breaches: number;
    }

    /**
    * Returns an object with an `isPwned` boolean, and the number of breaches the password has been encountered in.
    *
    * Example:
    * ```
    * const test = await validate('hunter2');
    * console.log(test);   // { isPwned: true, breaches: 17491 }
    * ```
    */
    export function validate(password: string): Promise<BreachDetails | never>;
    // Promise.reject errors are by default 'any'
    // https://github.com/microsoft/TypeScript/issues/6283#issuecomment-240804072
}