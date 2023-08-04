import { CanceledError } from '../services/api-client';
import { useState, useEffect } from "react";
import userService, { User } from "../services/user-service";
import apiClient from "../services/api-client";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      })
      .finally(() => console.log("finally worked"));

    return () => cancel();
  }, []);
  return {users, error, isLoading, setUsers, setError}
}

export default useUsers;