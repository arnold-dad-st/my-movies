import { useLocalStorageState } from "../../hooks/use-local-storage-state";
import { Table } from "../../components/table/table";

export const Movies = () => {
  const [moviesState] = useLocalStorageState([], "movies");

  return (
    <div className="container mt-4">
      <h1>My Movies</h1>
      <Table data={moviesState} onRowClick={() => {}} />
    </div>
  );
};
