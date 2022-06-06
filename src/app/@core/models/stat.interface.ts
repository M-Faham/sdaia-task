export interface State {
    name: string;
    imgUrl: string;
    Fields: Field[];

}

interface Field {
    name: string;
    value: string;
}