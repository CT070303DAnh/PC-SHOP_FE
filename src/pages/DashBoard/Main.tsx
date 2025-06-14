import { Hand } from "lucide-react";
import Table from "./Table";

import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../api/categories";
import Pagination from "../../components/Pagination/Pagination";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Main = () => {
  const [pageNumber, setPageNumber] = useState();

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPageNumber = parseInt(searchParams.get("page") || "1", 10);

  const { isLoading, error, data } = useQuery({
    queryKey: ["categories", initialPageNumber],
    queryFn: async ({ pageNumber }: any) => {
      const data = await getCategories(initialPageNumber);
      return data;
    },
  });

  let results: any = {};
  if (!isLoading) results = data.body;
  console.log(results);
  return (
    <div className="w-9/12 pt-4 pr-10">
      <div className="flex gap-2">
        <div className="flex">
          <h3>Hello Admin </h3>
        </div>
        <span>
          <Hand className="animate-wiggle-more animate-infinite" />
        </span>
      </div>
      <Table data={data} isLoading={isLoading} error={error} />
      <div className="flex justify-end mt-4">
        {isLoading ? (
          <p>Đang tải ...</p>
        ) : (
          <Pagination
            pageNumber={results.pageNumber}
            totalItems={results.totalElements}
            totalPages={results.totalPages}
            pageSize={results.pageSize}
            firstPage={results.firstPage}
            lastPage={results.lastPage}
            pathName={location.pathname}
            countProduct={results.context.length}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
