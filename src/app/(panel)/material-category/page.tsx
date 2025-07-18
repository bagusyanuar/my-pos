import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import TableMaterial from './section/Table'


export default function MaterialCategoryPage() {
    return (<div>
        <div className="w-full flex items-center justify-between mb-5">
            <div>
                <h3 className="text-lg text-neutral-900 mb-0">Kategori Bahan Baku</h3>
                <h5 className="text-sm text-neutral-500 leading-none">Halaman manajemen kategori bahan baku</h5>
            </div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/dashboard">Dashboard</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Kategori Bahan Baku</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
        <TableMaterial />
    </div>);
}