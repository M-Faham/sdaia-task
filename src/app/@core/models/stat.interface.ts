export interface Stat {
    entityName: string;
    imgUrl: string;
    fields: Field[];

}

interface Field {
    name: string;
    value: number;
    currency?: string;
}
