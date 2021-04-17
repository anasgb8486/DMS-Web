import { ExperianceType, RequestType } from "./system.enums";

export class Brand {
    id: number;
    name: string;
    description: string;
    businessNatures: number[];
    investmentRequired: number;
    establishmentYear: number;
    spaceRequired: string;
    categories: number[];
    totalDistributors: number;
    annualSales: number;
    productsKeywords: string;
    distributorshipTypes: number[];
    requestType: RequestType;
    products: number[];
    pan: string;
    gstNumber: string;
    experianceType: ExperianceType;
    brandLogo: string;
    countrywiseLocations: number[];
    regionwiseLocations: number[];
    statewiseLocations: number[];
    citywiseLocations: number[];
    brandImages: string[];
}
