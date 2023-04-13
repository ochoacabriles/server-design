import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/user');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchData();
  }, []);

  return { users, isLoading, error };
};

export default useUsers;
