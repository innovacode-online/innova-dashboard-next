export interface IProduct {
    id:          string;
    name:        string;
    slug:        string;
    stock:       number;
    price:       number;
    description: string;
    category:    ICategory;
    images:      Image[];
}

export interface ICategory {
    id:          string;
    name:        string;
    slug:        string;
    image:       string;
    description: string;
}

export interface Image {
    id:  number;
    url: string;
}
