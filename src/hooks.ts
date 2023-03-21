import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  itemResultState,
  itemQueryState,
  queryState,
  resultsState,
} from "./atoms";

export function useSearchResults() {
  const params = useParams();
  const setQueryState = useSetRecoilState(queryState);
  console.log(params);
  useEffect(() => {
    // guardar el valor de la query en el átomo: queryState
    if (params.query) setQueryState(params.query);
  }, [params]);

  // finalmente me engancho a los cambios de resultState
  const results = useRecoilValue(resultsState);
  console.log(results);

  return results;
}
export function useItemResult() {
  const params = useParams();
  const setItemQuery = useSetRecoilState(itemQueryState);
  useEffect(() => {
    if (params.id) setItemQuery(params.id);
  }, [params]);
  const result = useRecoilValue(itemResultState);

  return result;
}
