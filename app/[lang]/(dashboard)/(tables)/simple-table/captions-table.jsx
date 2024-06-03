"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { users, columns } from "./data";
const CaptionsTable = () => {
  return (
    <Table>
      <TableCaption>List of Desserts</TableCaption>
      <TableHeader>
        <TableRow>
          {
            columns.map(column => (
              <TableHead key={column.key} >
                {column.label}
              </TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.slice(0, 5).map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.age}</TableCell>
            <TableCell>{item.point}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CaptionsTable;
