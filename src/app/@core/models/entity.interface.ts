export interface Entity {
    name: string;
    registrationStatus: string;
    registrationWarning?: 'disabled' | 'warning';
    registrationType: string;
    type: string;
    expirationDate: string;
    enitityNumber: string;
    recordNumber: string;
    starred: boolean;
    id: string;

}