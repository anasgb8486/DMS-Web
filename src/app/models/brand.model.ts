import { ExperianceType, RequestType } from "./system.enums";

export class Brand {
    id: number;
    name: string;
    description: string;
    businessNature: number;
    investmentRequired: number;
    establishmentYear: number;
    spaceRequired: string;
    categories: number[];
    totalDistributors: number;
    annualSales: number;
    productsKeywords: string;
    distributorshipType: number;
    requestType: RequestType;
    products: number[];
    pan: string;
    gstNumber: string;
    experianceType: ExperianceType
}
