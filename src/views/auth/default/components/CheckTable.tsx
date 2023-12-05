import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { useEffect, useState } from "react";
import Card from "components/card";
import { FiSearch } from "react-icons/fi";
import { PatientType } from "types/patient";
import { getPatientAPI } from "apis/patient";
import ManagePatient from "./ManagePatient";

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
  let [data, setData] = useState<PatientType[]>([]);

  const getPatients = async (): Promise<void> => {
    data = await getPatientAPI();
    setData(data);
  };

  const reloadPatients = async (): Promise<void> => {
    await getPatients();
  };

  useEffect(() => {
    void getPatients();
  }, []);

  const selectOnlyOne = (id: string) => {
    for (let i = 0; i < data.length; i++) {
      (
        document.getElementById(
          "check_" + data[i].PATIENT_ID
        ) as HTMLInputElement
      ).checked = false;
    }
    (document.getElementById(id) as HTMLInputElement).checked = true;
  };

  const columns = [
    columnHelper.accessor("PATIENT_ID", {
      id: "PATIENT_ID",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          환자 번호
        </p>
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
    columnHelper.accessor("NAME", {
      id: "NAME",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">이름</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("RESIDENT_REGISTRATION_NUMBER", {
      id: "RESIDENT_REGISTRATION_NUMBER",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          주민등록번호
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("GENDER", {
      id: "GENDER",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">성별</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("ADDRESS", {
      id: "ADDRESS",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">주소</p>
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
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          담당의
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("LAST_TREATMENT_DATE", {
      id: "LAST_TREATMENT_DATE",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          마지막 진료일
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("RESERVATION_DATE", {
      id: "RESERVATION_DATE",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          예약일시
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("SPECIAL_NOTE", {
      id: "SPECIAL_NOTE",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          특이사항
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
              전체 환자 목록
            </div>
            <p className="text-sm font-bold text-gray-600 dark:text-white">
              page 1
            </p>
          </div>
          {/* search bar */}
          <div className="tool-container flex items-center gap-6">
            <div className="flex h-[42px] items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
              <p className="pl-3 pr-2 text-xl">
                <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
              </p>
              <input
                type="text"
                placeholder="Search..."
                className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
              />
            </div>
            <div className="buttom-container flex justify-end gap-2">
              <button className="flex flex-row items-center rounded-xl bg-brand-500 px-3 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                <MdChevronLeft className="text-lg" />
              </button>
              <button className="flex flex-row items-center rounded-xl bg-brand-500 px-3 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                <MdChevronRight className="text-lg" />
              </button>
            </div>
          </div>
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
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, 10) // n개 만큼 자름
                .map((row) => {
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
      <ManagePatient reloadPatients={reloadPatients} />
    </>
  );
}

export default CheckTable;
const columnHelper = createColumnHelper<PatientType>();
