import {UserDataInterface} from './UserDataInterface';

export class User {

    id: string = '';
    name: string = '';
    username: string = '';
    email: string = '';
    street: string = '';
    suite: string = '';
    city: string = '';
    zipcode: string = '';
    lat: string = '';
    lng: string = '';
    phone: string = '';
    website: string = '';
    companyName: string = '';
    companyCatchPhrase: string = '';
    companyBs: string = '';

    constructor(args: Partial<User>) {
        if (args == null) {
            return;
        }

        this.id = args.id || '';
        this.name = args.name || '';
        this.username = args.username || '';
        this.email = args.email || '';
        this.street = args.street || '';
        this.suite = args.suite || '';
        this.city = args.city || '';
        this.zipcode = args.zipcode || '';
        this.lat = args.lat || '';
        this.lng = args.lng || '';
        this.phone = args.phone || '';
        this.website = args.website || '';
        this.companyName = args.companyName || '';
        this.companyCatchPhrase = args.companyCatchPhrase || '';
        this.companyBs = args.companyBs || '';
    }

    static deserialize(userData: UserDataInterface): User {
        return new User({
            id: userData.id,
            name: userData.name,
            username: userData.username,
            email: userData.email,
            street: userData.address.street,
            suite: userData.address.suite,
            city: userData.address.city,
            zipcode: userData.address.zipcode,
            lat: userData.address.geo.lat,
            lng: userData.address.geo.lng,
            phone: userData.phone,
            website: userData.website,
            companyName: userData.company.name,
            companyCatchPhrase: userData.company.catchPhrase,
            companyBs: userData.company.bs,
        });
    }

    fullAddress(): string {
        return `${this.street} ${this.suite} ${this.zipcode} ${this.city}`;
    }

}