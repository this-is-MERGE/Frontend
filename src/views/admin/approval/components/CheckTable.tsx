import { useEffect, useState } from "react";
import Card from "components/card";
import { UserType } from "types/user";
import { getApproveUserAPI } from "apis/user";
import ManageUser from "./ManageUser";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

function CheckTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  let [data, setData] = useState<UserType[]>([]);

  const getUsers = async (): Promise<void> => {
    data = await getApproveUserAPI();
    setData(data);
  };

  const reloadUsers = async (): Promise<void> => {
    console.log("reloaded!", data);
    await getUsers();
  };

  useEffect(() => {
    void getUsers();
  }, []);

  const selectOnlyOne = (id: string) => {
    for (let i = 0; i < data.length; i++) {
      (
        document.getElementById("check_" + data[i].USER_ID) as HTMLInputElement
      ).checked = false;
    }
    (document.getElementById(id) as HTMLInputElement).checked = true;
  };

  const columns = [
    columnHelper.accessor("USER_ID", {
      id: "USER_ID",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">항목</p>
      ),
      cell: (info: any) => (
        <div className="flex items-center">
          <input
            type="checkbox"
            className="ischecked accent-brand-500 dark:accent-brand-400 "
            id={"check_" + info.getValue()}
            onChange={(e) => selectOnlyOne(e.target.id)}
          />
          <p className="ml-3 text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor("CATEGORY", {
      id: "CATEGORY",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          관계자 유형
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("USER_NAME", {
      id: "USER_NAME",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">성명</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("DEPARTMENT", {
      id: "DEPARTMENT",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          소속 부서
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("LOGIN_ID", {
      id: "LOGIN_ID",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          아이디
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("SIGN_UP_TIME", {
      id: "SIGN_UP_TIME",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          가입 일시
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("APPROVAL", {
      id: "APPROVAL",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          승인 여부
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("EMAIL", {
      id: "EMAIL",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          이메일
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
  ]; // eslint-disable-next-line

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <>
      <Card extra={"w-full h-full sm:overflow-auto px-6 pb-6"}>
        <header className="relative flex h-[53px] items-center justify-between pt-[1.9rem]">
          <div className="title-container">
            <div className="text-xl font-bold text-navy-700 dark:text-white">
              병원 내부 관계자 목록
            </div>
            <p className="text-sm font-bold text-gray-600 dark:text-white">
              page 1
            </p>
          </div>
          {/* search bar */}
          <ManageUser reloadUsers={reloadUsers} />
        </header>

        <div className="mb-4 mt-8 overflow-x-scroll">
          <table className="w-full overflow-x-auto">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="!border-px !border-gray-400"
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        onClick={header.column.getToggleSortingHandler()}
                        className="cursor-pointer border-b-[1px] border-gray-200 pb-2 pr-4 pt-4 text-start"
                      >
                        <div className="items-center justify-between text-xs text-gray-200">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: "",
                            desc: "",
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody className="">
              {table.getRowModel().rows.map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="min-w-[58px] border-white/0 py-3  pr-4"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}

export default CheckTable;
const columnHelper = createColumnHelper<UserType>();
