export interface IUser {
    fullName:string,
    email:string,
    phone:number,
    address:{
        country:string,
        city:string,
        street:string,
        postalCode:number
    }
    password:string
}
