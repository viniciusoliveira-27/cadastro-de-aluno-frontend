"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export type Activity = {
  id: string,
  nome: string,
  serie: "1º Serie" | "2º Serie" | "3º Serie" | "4º Serie" | "5º Serie" | "6º Serie" | "7º Serie" | "8º Serie" | "9º Serie" | "1º Ano medio" | "2º Ano medio" | "3º Ano medio",
  escola: string,
  periodo: "Manhã" | "Tarde" ,
  valor: number
  date: Date
}

export const columns: ColumnDef<Activity>[] = [
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "serie",
    header: "Serie",
  },
  {
    accessorKey: "escola",
    header: "Escola",
  },
  {
    accessorKey: "periodo",
    header: "Periodo",
  },
  {
    accessorKey: "valor",
    header: "Valor",
    cell: ({row})=> {
      const aValor = row.getValue("valor") as number;

      const formatedValue = aValor.toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2});

      return <p >R$ {formatedValue}</p>
    }
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({row})=> {
      const aDate = row.getValue("date") as Date;
      const formatedDate = aDate.getDate() + "/" + (aDate.getMonth() + 1) + "/" + aDate.getFullYear(); 
      return <p>{formatedDate}</p>
    }
  },
]
