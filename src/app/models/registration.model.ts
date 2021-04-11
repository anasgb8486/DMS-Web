import { Brand } from "./brand.model";

export class RegistrationDto {
    mobileNumber: number;
    email: string;
    password: string;
    confirmPassword: string;
    companyName: string;
    website: string;
    address: string;
    postalCode: string;
    brand: Brand;
}