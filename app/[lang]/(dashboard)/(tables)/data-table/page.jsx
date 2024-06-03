"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BasicDataTable from "./basic-table";
import AdvancedTable from "./advanced";
import DraggableTable from './draggable-table';

const DataTablePage = () => {

  const columns = ["Id","Name","Email","Age","Point"];
  const userData = [
    {id: 1, name: "Mike", email: "mike1@example.com", age: 41, point: 81},
    {id: 2, name: "John", email: "john2@example.com", age: 24, point: 37},
    {id: 3, name: "Peter", email: "peter3@example.com", age: 42, point: 25},
    {id: 4, name: "Peter", email: "peter4@example.com", age: 42, point: 77},
    {id: 5, name: "Paul", email: "paul5@example.com", age: 30, point: 72},
    {id: 6, name: "Mark", email: "mark6@example.com", age: 19, point: 9},
    {id: 7, name: "Peter", email: "peter7@example.com", age: 56, point: 20},
    {id: 8, name: "Mike", email: "mike8@example.com", age: 57, point: 80},
    {id: 9, name: "Mary", email: "mary9@example.com", age: 41, point: 69},
    {id: 10, name: "Alice", email: "alice10@example.com", age: 42, point: 79}
]

  return (
    <div className=" space-y-5">
      <Card>
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <BasicDataTable />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Advanced Table</CardTitle>
        </CardHeader>
        <CardContent >
          <AdvancedTable />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Draggable Table</CardTitle>
        </CardHeader>
        <CardContent >
          <DraggableTable columns={columns} initialData={userData} />
        </CardContent>
      </Card>

    </div>
  );
};

export default DataTablePage;
