export interface Product{
   id?: number // interrogação é pra informar que  a id não vai ser sempre obrigatória
   name: string 
   price: number | null // | null foi uma solução pra permitir o productds-creat.components.ts receber o valor null no tipo price
}