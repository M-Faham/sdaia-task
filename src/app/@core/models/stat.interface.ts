export interface Stat {
    entityName: string;
    imgUrl: string;
    Fields: Field[];

}

interface Field {
    name: string;
    value: number;
    currency?: string;
}
