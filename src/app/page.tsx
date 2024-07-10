import data from "@/app/data.json";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Package Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="whitespace-nowrap text-center">
                Total Download
              </TableHead>
              <TableHead>stars</TableHead>
              <TableHead>issues</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.packageName}>
                <TableCell>
                  <Link href={item.link} className="hover:underline">
                    {item.packageName}
                  </Link>
                </TableCell>
                <TableCell className="max-w-sm">{item.desc}</TableCell>
                <TableCell className="text-center">
                  {item.totalDownloads}
                </TableCell>
                <TableCell>{item.stars}</TableCell>
                <TableCell>{item.issues}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
