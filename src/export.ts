export interface ExportUser
{
    firstName: string;
    lastName: string;
    age: number;
    isValid: boolean;
}

export function exportFunctionGetName(user: ExportUser) : string
{
    return `${user.firstName} ${user.lastName}`
}