import { Activity, columns } from "./columns"
import { DataTable } from "./data-table"

const data: Activity[] = [
    {
        id: "1",
        nome: "Vinicius Ribeiro",
        serie: "5º Serie",
        escola: "EE Francisco",
        periodo: "Manhã",
        valor: 100.00,
        date: new Date("01-25-2025")

    },

    {
        id: "2",
        nome: "Bruno Ribeiro",
        serie: "8º Serie",
        escola: "EE Carandiru",
        periodo: "Manhã",
        valor: 100.00,
        date: new Date("03-26-2025")

    },

    {
        id: "3",
        nome: "Mussum Ribeiro",
        serie: "9º Serie",
        escola: "EE Dom Pedro",
        periodo: "Tarde",
        valor: 100.00,
        date: new Date("04-12-2025")

    },

]

function getData(): Activity[] {
  // Fetch data from your API here.
  return data;
}

export function ActivityTable() {
  const data = getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}


