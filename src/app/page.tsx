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

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <Table>
          <TableHeader>
            <TableRow className="sticky top-0 left-0 w-full  bg-white shadow-sm">
              <TableHead>Package Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Forks</TableHead>
              <TableHead className="whitespace-nowrap text-center">
                Total Download
              </TableHead>
              <TableHead>stars</TableHead>
              <TableHead className="whitespace-nowrap">Open Issues</TableHead>
              <TableHead className="whitespace-nowrap">Close Issues</TableHead>
              <TableHead className="whitespace-nowrap">Total Issues</TableHead>
              <TableHead className="whitespace-nowrap">
                Open Pull Requests
              </TableHead>
              <TableHead className="whitespace-nowrap">
                Close Pull Requests
              </TableHead>
              <TableHead className="whitespace-nowrap">
                Total Pull Requests
              </TableHead>
              <TableHead className="whitespace-nowrap">Contributors</TableHead>
              <TableHead className="whitespace-nowrap">License</TableHead>
              <TableHead className="whitespace-nowrap">Last Update</TableHead>
              <TableHead>Watcher</TableHead>
              <TableHead className="whitespace-nowrap">Used By</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Link href={item?.link ?? "/"} className="hover:underline">
                    {item?.packageName}
                  </Link>
                </TableCell>
                <TableCell className="max-w-sm">{item?.desc}</TableCell>
                <TableCell className="max-w-sm">{item?.forks}</TableCell>

                <TableCell className="text-center">
                  {item?.totalDownloads}
                </TableCell>
                <TableCell className="text-center">{item?.stars}</TableCell>
                <TableCell className="text-center">
                  {item?.totalOpenIssues}
                </TableCell>
                <TableCell className="text-center">
                  {item?.totalClosedIssues}
                </TableCell>
                <TableCell className="text-center">
                  {item?.totalIssues}
                </TableCell>
                <TableCell className="text-center">
                  {item?.totalOpenPullRequests}
                </TableCell>
                <TableCell className="text-center">
                  {item?.totalClosedPullRequests}
                </TableCell>
                <TableCell className="text-center">
                  {item?.totalPullRequests}
                </TableCell>
                <TableCell className="text-center">
                  {item?.totalContributors}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {item?.license?.replace("License", "")}
                </TableCell>
                <TableCell>
                  {new Date(item?.commits!).toLocaleDateString()}
                </TableCell>
                <TableCell>{item?.watchers}</TableCell>
                <TableCell>{item?.usedBy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
