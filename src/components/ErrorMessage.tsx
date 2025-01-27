import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useAppSelector } from "../redux/hooks";
import { selectLoadMoreButton } from "../redux/slices/loadMoreSlice";
import { Link } from "react-router-dom";

interface IErrorMessage {
  error: FetchBaseQueryError | SerializedError | undefined;
  reload?: () => void;
}

const ErrorMessage = ({ error, reload }: IErrorMessage) => {
  const { isDisabled: isLoadBittonDisabled } =
    useAppSelector(selectLoadMoreButton);

  if (isLoadBittonDisabled) {
    return null;
  }
  const reloadLink = reload ? (
    <Link to="#" onClick={reload}>
      Обновить страницу
    </Link>
  ) : null;

  return (
    <>
      <div>
        Ошибка:
        {error && "status" in error ? " " + error.status : null}
        {error && "error" in error ? " " + error.error : null}
      </div>
      {reloadLink}
    </>
  );
};

export default ErrorMessage;
