import UserListTable from "./components/UserListTable";

const DB_Management = () => {
  return (
    <div>
      <div className="mt-5 grid h-full min-h-[77vh] grid-cols-10 grid-rows-1 gap-2">
        <UserListTable />
      </div>
    </div>
  );
};

export default DB_Management;
