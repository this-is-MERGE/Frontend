import tableDataDevelopment from "./variables/tableDataDevelopment";
// import tableDataCheck from "./variables/tableDataCheck";
import ReserveTable from "./components/ReserveTable";
import tableDataColumns from "./variables/tableDataColumns";
import tableDataComplex from "./variables/tableDataComplex";
import DevelopmentTable from "./components/DevelopmentTable";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";

const Tables = () => {
  return (
    <div>
      <div className="mt-5 grid h-full min-h-[60vh] grid-cols-1 grid-rows-1">
        <ReserveTable />
      </div>
    </div>
  );
};

export default Tables;
