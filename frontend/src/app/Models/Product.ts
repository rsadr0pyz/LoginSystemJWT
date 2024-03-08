import { ProductDto } from "../Dtos/ProductDto";

export class Product implements ProductDto {
        id: number = 0;
        name: string = "";
        description: string = "";
        price: number = 0;
        amount: number = 0;

        constructor(id: number = 0, name: string = "", description: string = "",
                    price: number = 0, amount: number = 0) { 

                this.id = id;
                this.name = name;
                this.description = description;
                this.price = price;
                this.amount = amount;
        }

        public static fromDto(id: number, productDto: ProductDto): Product{

                let prod: Product = {
                        id,
                        name: productDto.name,
                        description: productDto.description,
                        price: productDto.price,
                        amount: productDto.amount,
                }

                return prod;
        }
}