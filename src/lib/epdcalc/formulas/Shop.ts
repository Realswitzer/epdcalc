export function SalePrice(initialPrice: number, sale: number): number {
	let price: number = initialPrice * (1 - sale);
	price = price % 5 >= 2.5 ? Math.round(price / 5) * 5 : Math.round(price / 5) * 5 + 5;
	return price;
}
