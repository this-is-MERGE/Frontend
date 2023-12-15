// import tableDataCheck from "./variables/tableDataCheck";
import ReserveTable from "./components/ReserveTable";

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
